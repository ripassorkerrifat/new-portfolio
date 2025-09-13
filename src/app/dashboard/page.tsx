'use client';

import React from 'react';
import StatsGrid from '@/components/dashboard/stats/StatsGrid';
import RecentProjects from '@/components/dashboard/stats/RecentProjects';
import ActivityFeed from '@/components/dashboard/stats/ActivityFeed';
import QuickActions from '@/components/dashboard/stats/QuickActions';

const DashboardPage: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    Welcome back, Ripas! 👋
                </h1>
                <p className="text-[var(--text-secondary)]">
                    Here's what's happening with your projects today.
                </p>
            </div>

            {/* Stats Grid */}
            <StatsGrid />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Takes 2/3 on large screens */}
                <div className="lg:col-span-2 space-y-6">
                    <RecentProjects />
                    <ActivityFeed />
                </div>

                {/* Right Column - Takes 1/3 on large screens */}
                <div className="space-y-6">
                    <QuickActions />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
