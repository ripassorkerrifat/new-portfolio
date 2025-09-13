'use client';

import React, { useState, useEffect } from 'react';
import { 
    FaCheckCircle, 
    FaArrowUp,
    FaArrowDown,
    FaEnvelope,
    FaEye
} from 'react-icons/fa';
import { emailAPI } from '@/api/email-api';
import { useNotifications } from '@/contexts/NotificationContext';

interface StatCardProps {
    title: string;
    value: string | number;
    change: string;
    changeType: 'increase' | 'decrease' | 'neutral';
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
    title, 
    value, 
    change, 
    changeType, 
    icon: IconComponent, 
    color 
}) => {
    const getTrendIcon = () => {
        if (changeType === 'increase') return <FaArrowUp className="text-green-500" />;
        if (changeType === 'decrease') return <FaArrowDown className="text-red-500" />;
        return null;
    };

    const getChangeColor = () => {
        if (changeType === 'increase') return 'text-green-500';
        if (changeType === 'decrease') return 'text-red-500';
        return 'text-[var(--text-secondary)]';
    };

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={20} />
                </div>
                <div className="flex items-center space-x-1 text-sm">
                    {getTrendIcon()}
                    <span className={getChangeColor()}>{change}</span>
                </div>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                    {value}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                    {title}
                </p>
            </div>
        </div>
    );
};

const StatsGrid: React.FC = () => {
    const { unreadCount } = useNotifications();
    const [emailStats, setEmailStats] = useState({ total: 0, todayCount: 0 });
    const [visitorStats, setVisitorStats] = useState({ todayVisitors: 0, totalVisitors: 0 });

    useEffect(() => {
        const fetchEmailStats = async () => {
            try {
                const response = await emailAPI.getMessages();
                const stats = emailAPI.getEmailStats(response.data);
                setEmailStats({ total: stats.total, todayCount: stats.todayCount });
            } catch (error) {
                console.error('Error fetching email stats:', error);
            }
        };

        // Simulate visitor stats (in production, this would come from analytics)
        setVisitorStats({ todayVisitors: 127, totalVisitors: 2847 });
        
        fetchEmailStats();
    }, []);

    const stats = [
        {
            title: 'New Messages',
            value: unreadCount,
            change: `${emailStats.todayCount} today`,
            changeType: unreadCount > 0 ? 'increase' as const : 'neutral' as const,
            icon: FaEnvelope,
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'Total Emails',
            value: emailStats.total,
            change: emailStats.todayCount > 0 ? `+${emailStats.todayCount}` : 'No new',
            changeType: emailStats.todayCount > 0 ? 'increase' as const : 'neutral' as const,
            icon: FaCheckCircle,
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Today Visitors',
            value: visitorStats.todayVisitors,
            change: `${visitorStats.totalVisitors} total`,
            changeType: 'increase' as const,
            icon: FaEye,
            color: 'from-purple-500 to-pink-500'
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    change={stat.change}
                    changeType={stat.changeType}
                    icon={stat.icon}
                    color={stat.color}
                />
            ))}
        </div>
    );
};

export default StatsGrid;
