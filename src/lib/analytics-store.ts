import {PageView, VisitorSession} from "@/models/Analytics";
import connectToDatabase from "@/lib/mongodb";

export interface AnalyticsData {
    totalVisitors: number;
    todayVisitors: number;
    totalPageViews: number;
    todayPageViews: number;
    averageSessionDuration: number;
    bounceRate: number;
    topPages: Array<{page: string; views: number}>;
    deviceBreakdown: Array<{device: string; count: number; percentage: number}>;
    browserBreakdown: Array<{
        browser: string;
        count: number;
        percentage: number;
    }>;
    countryBreakdown: Array<{
        country: string;
        count: number;
        percentage: number;
    }>;
    hourlyData: Array<{hour: number; views: number}>;
    dailyData: Array<{date: string; views: number; visitors: number}>;
}

export interface VisitorInfo {
    userAgent: string;
    ipAddress: string;
    device: "desktop" | "mobile" | "tablet";
    browser: string;
    os: string;
    country?: string;
    city?: string;
    referrer?: string;
}

class AnalyticsStore {
    // Parse user agent to extract device, browser, and OS info
    private parseUserAgent(userAgent: string): {
        device: "desktop" | "mobile" | "tablet";
        browser: string;
        os: string;
    } {
        const ua = userAgent.toLowerCase();

        // Device detection
        let device: "desktop" | "mobile" | "tablet" = "desktop";
        if (
            /mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(
                ua
            )
        ) {
            device = "mobile";
        } else if (/tablet|ipad/i.test(ua)) {
            device = "tablet";
        }

        // Browser detection
        let browser = "Unknown";
        if (ua.includes("chrome")) browser = "Chrome";
        else if (ua.includes("firefox")) browser = "Firefox";
        else if (ua.includes("safari")) browser = "Safari";
        else if (ua.includes("edge")) browser = "Edge";
        else if (ua.includes("opera")) browser = "Opera";

        // OS detection
        let os = "Unknown";
        if (ua.includes("windows")) os = "Windows";
        else if (ua.includes("mac")) os = "macOS";
        else if (ua.includes("linux")) os = "Linux";
        else if (ua.includes("android")) os = "Android";
        else if (
            ua.includes("ios") ||
            ua.includes("iphone") ||
            ua.includes("ipad")
        )
            os = "iOS";

        return {device, browser, os};
    }

    // Generate session ID
    private generateSessionId(): string {
        return `session_${Date.now()}_${Math.random()
            .toString(36)
            .substr(2, 9)}`;
    }

    // Track page view
    async trackPageView(
        page: string,
        visitorInfo: VisitorInfo,
        sessionId?: string
    ): Promise<void> {
        try {
            await connectToDatabase();

            const {device, browser, os} = this.parseUserAgent(
                visitorInfo.userAgent
            );
            const currentSessionId = sessionId || this.generateSessionId();

            // Create page view record
            await PageView.create({
                page,
                userAgent: visitorInfo.userAgent,
                ipAddress: visitorInfo.ipAddress,
                referrer: visitorInfo.referrer,
                country: visitorInfo.country || "Unknown",
                city: visitorInfo.city || "Unknown",
                device,
                browser,
                os,
                sessionId: currentSessionId,
                timestamp: new Date(),
            });

            // Update or create session
            const existingSession = await VisitorSession.findOne({
                sessionId: currentSessionId,
            });

            if (existingSession) {
                // Update existing session
                await VisitorSession.findByIdAndUpdate(existingSession._id, {
                    $inc: {pageViews: 1},
                    endTime: new Date(),
                });
            } else {
                // Check if this is a returning visitor
                const previousSession = await VisitorSession.findOne({
                    ipAddress: visitorInfo.ipAddress,
                }).sort({startTime: -1});

                // Create new session
                await VisitorSession.create({
                    sessionId: currentSessionId,
                    ipAddress: visitorInfo.ipAddress,
                    userAgent: visitorInfo.userAgent,
                    country: visitorInfo.country || "Unknown",
                    city: visitorInfo.city || "Unknown",
                    device,
                    browser,
                    os,
                    startTime: new Date(),
                    pageViews: 1,
                    referrer: visitorInfo.referrer,
                    isReturning: !!previousSession,
                });
            }
        } catch (error) {
            console.error("Error tracking page view:", error);
        }
    }

    // Get analytics data
    async getAnalyticsData(): Promise<AnalyticsData> {
        try {
            await connectToDatabase();

            const now = new Date();
            const todayStart = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate()
            );
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

            // Total visitors and page views
            const totalVisitors = await VisitorSession.countDocuments();
            const todayVisitors = await VisitorSession.countDocuments({
                startTime: {$gte: todayStart},
            });
            const totalPageViews = await PageView.countDocuments();
            const todayPageViews = await PageView.countDocuments({
                timestamp: {$gte: todayStart},
            });

            // Average session duration
            const sessionsWithDuration = await VisitorSession.aggregate([
                {$match: {endTime: {$exists: true}}},
                {
                    $addFields: {
                        duration: {
                            $divide: [
                                {$subtract: ["$endTime", "$startTime"]},
                                1000,
                            ],
                        },
                    },
                },
                {$group: {_id: null, avgDuration: {$avg: "$duration"}}},
            ]);
            const averageSessionDuration =
                sessionsWithDuration[0]?.avgDuration || 0;

            // Bounce rate (sessions with only 1 page view)
            const totalSessions = await VisitorSession.countDocuments();
            const bounceSessions = await VisitorSession.countDocuments({
                pageViews: 1,
            });
            const bounceRate =
                totalSessions > 0 ? (bounceSessions / totalSessions) * 100 : 0;

            // Top pages
            const topPages = await PageView.aggregate([
                {$group: {_id: "$page", views: {$sum: 1}}},
                {$sort: {views: -1}},
                {$limit: 10},
                {$project: {page: "$_id", views: 1, _id: 0}},
            ]);

            // Device breakdown
            const deviceStats = await VisitorSession.aggregate([
                {$group: {_id: "$device", count: {$sum: 1}}},
                {$sort: {count: -1}},
            ]);
            const deviceBreakdown = deviceStats.map((stat) => ({
                device: stat._id,
                count: stat.count,
                percentage:
                    totalVisitors > 0 ? (stat.count / totalVisitors) * 100 : 0,
            }));

            // Browser breakdown
            const browserStats = await VisitorSession.aggregate([
                {$group: {_id: "$browser", count: {$sum: 1}}},
                {$sort: {count: -1}},
                {$limit: 5},
            ]);
            const browserBreakdown = browserStats.map((stat) => ({
                browser: stat._id,
                count: stat.count,
                percentage:
                    totalVisitors > 0 ? (stat.count / totalVisitors) * 100 : 0,
            }));

            // Country breakdown
            const countryStats = await VisitorSession.aggregate([
                {$group: {_id: "$country", count: {$sum: 1}}},
                {$sort: {count: -1}},
                {$limit: 10},
            ]);
            const countryBreakdown = countryStats.map((stat) => ({
                country: stat._id,
                count: stat.count,
                percentage:
                    totalVisitors > 0 ? (stat.count / totalVisitors) * 100 : 0,
            }));

            // Hourly data for today
            const hourlyData = await PageView.aggregate([
                {
                    $match: {
                        timestamp: {$gte: todayStart},
                    },
                },
                {
                    $group: {
                        _id: {$hour: "$timestamp"},
                        views: {$sum: 1},
                    },
                },
                {$sort: {_id: 1}},
            ]);

            const hourlyDataFormatted = Array.from({length: 24}, (_, i) => ({
                hour: i,
                views: hourlyData.find((h) => h._id === i)?.views || 0,
            }));

            // Daily data for last 7 days
            const dailyData = await PageView.aggregate([
                {
                    $match: {
                        timestamp: {$gte: weekAgo},
                    },
                },
                {
                    $group: {
                        _id: {
                            $dateToString: {
                                format: "%Y-%m-%d",
                                date: "$timestamp",
                            },
                        },
                        views: {$sum: 1},
                    },
                },
                {$sort: {_id: 1}},
            ]);

            const dailyVisitorData = await VisitorSession.aggregate([
                {
                    $match: {
                        startTime: {$gte: weekAgo},
                    },
                },
                {
                    $group: {
                        _id: {
                            $dateToString: {
                                format: "%Y-%m-%d",
                                date: "$startTime",
                            },
                        },
                        visitors: {$sum: 1},
                    },
                },
                {$sort: {_id: 1}},
            ]);

            const dailyDataFormatted = [];
            for (let i = 6; i >= 0; i--) {
                const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
                const dateStr = date.toISOString().split("T")[0];
                const dayData = dailyData.find((d) => d._id === dateStr);
                const dayVisitors = dailyVisitorData.find(
                    (d) => d._id === dateStr
                );

                dailyDataFormatted.push({
                    date: dateStr,
                    views: dayData?.views || 0,
                    visitors: dayVisitors?.visitors || 0,
                });
            }

            return {
                totalVisitors,
                todayVisitors,
                totalPageViews,
                todayPageViews,
                averageSessionDuration,
                bounceRate,
                topPages,
                deviceBreakdown,
                browserBreakdown,
                countryBreakdown,
                hourlyData: hourlyDataFormatted,
                dailyData: dailyDataFormatted,
            };
        } catch (error) {
            console.error("Error fetching analytics data:", error);
            return {
                totalVisitors: 0,
                todayVisitors: 0,
                totalPageViews: 0,
                todayPageViews: 0,
                averageSessionDuration: 0,
                bounceRate: 0,
                topPages: [],
                deviceBreakdown: [],
                browserBreakdown: [],
                countryBreakdown: [],
                hourlyData: [],
                dailyData: [],
            };
        }
    }
}

export const analyticsStore = new AnalyticsStore();
