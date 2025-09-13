'use client';

import React from 'react';
import { 
    FaProjectDiagram, 
    FaCheckCircle, 
    FaClock, 
    FaUsers,
    FaArrowUp,
    FaArrowDown
} from 'react-icons/fa';

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
    const stats = [
        {
            title: 'Total Projects',
            value: 24,
            change: '+12%',
            changeType: 'increase' as const,
            icon: FaProjectDiagram,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Completed Tasks',
            value: 156,
            change: '+8%',
            changeType: 'increase' as const,
            icon: FaCheckCircle,
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Pending Tasks',
            value: 23,
            change: '-5%',
            changeType: 'decrease' as const,
            icon: FaClock,
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'Team Members',
            value: 8,
            change: '+2',
            changeType: 'increase' as const,
            icon: FaUsers,
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
