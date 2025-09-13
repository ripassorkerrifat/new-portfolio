'use client';

import React from 'react';
import Link from 'next/link';
import { 
    FaPlus, 
    FaUsers, 
    FaFileAlt, 
    FaCog,
    FaChartBar,
    FaCalendarAlt,
    FaEnvelope,
    FaEye
} from 'react-icons/fa';

interface QuickAction {
    title: string;
    description: string;
    href: string;
    icon: React.ComponentType<any>;
    color: string;
}

const QuickActions: React.FC = () => {
    const actions: QuickAction[] = [
        {
            title: 'New Project',
            description: 'Create a new project with team setup',
            href: '/dashboard/projects/add',
            icon: FaPlus,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Check Emails',
            description: 'View and manage contact messages',
            href: '/dashboard/emails',
            icon: FaEnvelope,
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'View Analytics',
            description: 'Check site visitors and engagement',
            href: '/dashboard/analytics',
            icon: FaEye,
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Manage Projects',
            description: 'View and organize all projects',
            href: '/dashboard/projects',
            icon: FaChartBar,
            color: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">Quick Actions</h2>
                
                <div className="space-y-3">
                    {actions.map((action, index) => (
                        <Link
                            key={index}
                            href={action.href}
                            className="block group"
                        >
                            <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <action.icon className="text-white" size={16} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[var(--text-primary)] text-sm group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                            {action.title}
                                        </h3>
                                        <p className="text-xs text-[var(--text-secondary)]">
                                            {action.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Project Status Overview */}
            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">Project Status</h2>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--text-secondary)]">Active Projects</span>
                        <span className="text-lg font-bold text-[var(--primary-color)]">12</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--text-secondary)]">Completed This Month</span>
                        <span className="text-lg font-bold text-green-500">8</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--text-secondary)]">Overdue Tasks</span>
                        <span className="text-lg font-bold text-red-500">3</span>
                    </div>
                    
                    <div className="pt-4 border-t border-[var(--border-color)]/30">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-[var(--text-secondary)]">Overall Progress</span>
                            <span className="text-sm font-medium text-[var(--text-primary)]">68%</span>
                        </div>
                        <div className="w-full bg-[var(--primary-bg)]/50 rounded-full h-2">
                            <div className="h-2 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300" style={{ width: '68%' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Settings Quick Access */}
            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">Settings</h2>
                
                <div className="space-y-3">
                    <Link href="/dashboard/settings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--primary-bg)]/30 transition-colors duration-300 group">
                        <FaCog className="text-[var(--text-secondary)] group-hover:text-[var(--primary-color)] transition-colors duration-300" />
                        <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                            General Settings
                        </span>
                    </Link>
                    
                    <Link href="/dashboard/profile" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--primary-bg)]/30 transition-colors duration-300 group">
                        <FaUsers className="text-[var(--text-secondary)] group-hover:text-[var(--primary-color)] transition-colors duration-300" />
                        <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                            Profile Settings
                        </span>
                    </Link>
                    
                    <Link href="/dashboard/notifications" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[var(--primary-bg)]/30 transition-colors duration-300 group">
                        <FaFileAlt className="text-[var(--text-secondary)] group-hover:text-[var(--primary-color)] transition-colors duration-300" />
                        <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                            Notifications
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuickActions;
