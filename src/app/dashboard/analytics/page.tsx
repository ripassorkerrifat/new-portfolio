/* eslint-disable react/no-unescaped-entities */
"use client";

import React, {useState, useEffect} from "react";
import {
    FaEye,
    FaUsers,
    FaClock,
    FaChartLine,
    FaDesktop,
    FaMobile,
    FaTablet,
    FaGlobe,
    FaArrowUp,
    FaArrowDown,
} from "react-icons/fa";

interface AnalyticsData {
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

const AnalyticsPage = () => {
    const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
        null
    );
    const [loading, setLoading] = useState(true);
    const [timeRange, setTimeRange] = useState<"today" | "week" | "month">(
        "today"
    );

    useEffect(() => {
        fetchAnalyticsData();
    }, []);

    const fetchAnalyticsData = async () => {
        try {
            setLoading(true);
            const response = await fetch("/api/analytics");
            const result = await response.json();
            if (result.success) {
                setAnalyticsData(result.data);
            }
        } catch (error) {
            console.error("Error fetching analytics:", error);
        } finally {
            setLoading(false);
        }
    };

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}m ${remainingSeconds}s`;
    };

    const getDeviceIcon = (device: string) => {
        switch (device.toLowerCase()) {
            case "mobile":
                return <FaMobile className="text-blue-500" />;
            case "tablet":
                return <FaTablet className="text-green-500" />;
            default:
                return <FaDesktop className="text-purple-500" />;
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-color)]"></div>
            </div>
        );
    }

    if (!analyticsData) {
        return (
            <div className="text-center py-12">
                <p className="text-[var(--text-secondary)]">
                    No analytics data available
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Time Range Selector */}
            <div className="flex justify-end">
                <div className="flex gap-2">
                    {(["today", "week", "month"] as const).map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                timeRange === range
                                    ? "bg-[var(--primary-color)] text-white"
                                    : "bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]/30"
                            }`}>
                            {range.charAt(0).toUpperCase() + range.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <FaUsers className="text-white" size={20} />
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                            <FaArrowUp className="text-green-500" />
                            <span className="text-green-500">+12%</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                        {analyticsData.todayVisitors}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                        Today's Visitors
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                        {analyticsData.totalVisitors} total
                    </p>
                </div>

                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                            <FaEye className="text-white" size={20} />
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                            <FaArrowUp className="text-green-500" />
                            <span className="text-green-500">+8%</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                        {analyticsData.todayPageViews}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                        Page Views Today
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                        {analyticsData.totalPageViews} total
                    </p>
                </div>

                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <FaClock className="text-white" size={20} />
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                            <FaArrowDown className="text-red-500" />
                            <span className="text-red-500">-5%</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                        {formatDuration(analyticsData.averageSessionDuration)}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                        Avg. Session Duration
                    </p>
                </div>

                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                            <FaChartLine className="text-white" size={20} />
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                            <FaArrowDown className="text-green-500" />
                            <span className="text-green-500">-2%</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                        {analyticsData.bounceRate.toFixed(1)}%
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm">
                        Bounce Rate
                    </p>
                </div>
            </div>

            {/* Charts and Detailed Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Pages */}
                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                        Top Pages
                    </h3>
                    <div className="space-y-3">
                        {analyticsData.topPages
                            .slice(0, 5)
                            .map((page, index) => (
                                <div
                                    key={page.page}
                                    className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-lg flex items-center justify-center text-white text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="text-[var(--text-primary)] font-medium">
                                            {page.page === "/"
                                                ? "Home"
                                                : page.page}
                                        </span>
                                    </div>
                                    <span className="text-[var(--text-secondary)] font-semibold">
                                        {page.views} views
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Device Breakdown */}
                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                        Device Breakdown
                    </h3>
                    <div className="space-y-4">
                        {analyticsData.deviceBreakdown.map((device) => (
                            <div
                                key={device.device}
                                className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    {getDeviceIcon(device.device)}
                                    <span className="text-[var(--text-primary)] font-medium capitalize">
                                        {device.device}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-24 bg-[var(--primary-bg)] rounded-full h-2">
                                        <div
                                            className="h-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full"
                                            style={{
                                                width: `${device.percentage}%`,
                                            }}
                                        />
                                    </div>
                                    <span className="text-[var(--text-secondary)] text-sm font-semibold w-12">
                                        {device.percentage.toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Browser Breakdown */}
                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                        Browser Usage
                    </h3>
                    <div className="space-y-3">
                        {analyticsData.browserBreakdown.map((browser) => (
                            <div
                                key={browser.browser}
                                className="flex items-center justify-between">
                                <span className="text-[var(--text-primary)] font-medium">
                                    {browser.browser}
                                </span>
                                <div className="flex items-center space-x-3">
                                    <div className="w-20 bg-[var(--primary-bg)] rounded-full h-2">
                                        <div
                                            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                            style={{
                                                width: `${browser.percentage}%`,
                                            }}
                                        />
                                    </div>
                                    <span className="text-[var(--text-secondary)] text-sm font-semibold w-12">
                                        {browser.percentage.toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Country Breakdown */}
                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                        <FaGlobe className="inline mr-2" />
                        Top Countries
                    </h3>
                    <div className="space-y-3">
                        {analyticsData.countryBreakdown
                            .slice(0, 5)
                            .map((country, index) => (
                                <div
                                    key={country.country}
                                    className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="text-[var(--text-primary)] font-medium">
                                            {country.country}
                                        </span>
                                    </div>
                                    <span className="text-[var(--text-secondary)] font-semibold">
                                        {country.count} (
                                        {country.percentage.toFixed(1)}%)
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Hourly Traffic Chart */}
            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                    Today's Hourly Traffic
                </h3>
                <div className="flex items-end space-x-2 h-40">
                    {analyticsData.hourlyData.map((hour) => {
                        const maxViews = Math.max(
                            ...analyticsData.hourlyData.map((h) => h.views)
                        );
                        const height =
                            maxViews > 0 ? (hour.views / maxViews) * 100 : 0;

                        return (
                            <div
                                key={hour.hour}
                                className="flex-1 flex flex-col items-center">
                                <div
                                    className="w-full bg-gradient-to-t from-[var(--primary-color)] to-[var(--secondary-color)] rounded-t-lg transition-all duration-500 hover:opacity-80"
                                    style={{height: `${height}%`}}
                                    title={`${hour.hour}:00 - ${hour.views} views`}
                                />
                                <span className="text-xs text-[var(--text-secondary)] mt-2">
                                    {hour.hour}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
