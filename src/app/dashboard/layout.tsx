'use client';

import React, { useState } from 'react';
import DashboardHeader from '../../components/dashboard/layout/DashboardHeader';
import Sidebar from '../../components/dashboard/layout/Sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--primary-bg)]">
            {/* Dashboard Header */}
            <DashboardHeader 
                onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                sidebarOpen={sidebarOpen}
            />
            
            <div className="flex">
                {/* Sidebar */}
                <Sidebar 
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />
                
                {/* Main Content */}
                <main className={`flex-1 transition-all duration-300 lg:ml-64 pt-16`}>
                    <div className="p-6">
                        {children}
                    </div>
                </main>
            </div>
            
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default DashboardLayout;
