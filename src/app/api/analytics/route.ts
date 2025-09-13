import { NextRequest, NextResponse } from 'next/server';
import { analyticsStore } from '@/lib/analytics-store';

export async function GET() {
    try {
        const analyticsData = await analyticsStore.getAnalyticsData();
        
        return NextResponse.json({
            success: true,
            data: analyticsData
        });
    } catch (error) {
        console.error('Error fetching analytics data:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch analytics data' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { page, referrer } = body;

        // Get visitor information
        const userAgent = request.headers.get('user-agent') || '';
        const forwarded = request.headers.get('x-forwarded-for');
        const ipAddress = forwarded ? forwarded.split(',')[0] : 'unknown';

        // Track the page view
        await analyticsStore.trackPageView(page, {
            userAgent,
            ipAddress,
            device: 'desktop', // Will be parsed from user agent
            browser: 'Unknown', // Will be parsed from user agent
            os: 'Unknown', // Will be parsed from user agent
            referrer
        });

        return NextResponse.json({
            success: true,
            message: 'Page view tracked successfully'
        });
    } catch (error) {
        console.error('Error tracking page view:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to track page view' },
            { status: 500 }
        );
    }
}
