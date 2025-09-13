'use client';

import React from 'react';
import StatsGrid from '@/components/dashboard/stats/StatsGrid';
import RecentProjects from '@/components/dashboard/stats/RecentProjects';
import ActivityFeed from '@/components/dashboard/stats/ActivityFeed';
import QuickActions from '@/components/dashboard/stats/QuickActions';

const DashboardPage: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Enhanced Page Header with better spacing and visual hierarchy */}
            <div className="relative mb-12">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5 rounded-3xl -z-10"></div>
                
                <div className="relative px-2 py-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-8 bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full"></div>
                                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[var(--text-primary)] via-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                                    Welcome back, Ripas! 👋
                                </h1>
                            </div>
                            <p className="text-lg text-[var(--text-secondary)] ml-5 font-medium">
                                Here's what's happening with your projects today.
                            </p>
                        </div>
                        
                        {/* Time and date info */}
                        <div className="flex flex-col items-end space-y-1 text-right">
                            <div className="text-sm text-[var(--text-secondary)] font-medium">
                                {new Date().toLocaleDateString('en-US', { 
                                    weekday: 'long', 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </div>
                            <div className="text-xs text-[var(--text-secondary)]/70">
                                {new Date().toLocaleTimeString('en-US', { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid with improved spacing */}
            <div className="mb-10">
                <StatsGrid />
            </div>

            {/* Main Content Grid with enhanced responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
                {/* Left Column - Takes 8/12 on lg+ screens, full width on smaller */}
                <div className="lg:col-span-8 space-y-4 sm:space-y-6 lg:space-y-8">
                    <div className="space-y-4 sm:space-y-6">
                        <RecentProjects />
                    </div>
                    <div className="space-y-4 sm:space-y-6">
                        <ActivityFeed />
                    </div>
                </div>

                {/* Right Column - Takes 4/12 on lg+ screens */}
                <div className="lg:col-span-4 space-y-4 sm:space-y-6 lg:space-y-8">
                    <div className="lg:sticky lg:top-32">
                        <QuickActions />
                    </div>
                </div>
            </div>

            {/* Bottom spacing for better scroll experience */}
            <div className="h-16"></div>
        </div>
    );
};

export default DashboardPage;
