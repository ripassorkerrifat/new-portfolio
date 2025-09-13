'use client';

import React from 'react';
import { 
    FaPlus, 
    FaEdit, 
    FaCheckCircle, 
    FaUsers, 
    FaComments,
    FaFileAlt,
    FaClock
} from 'react-icons/fa';

interface ActivityItem {
    id: number;
    type: 'project_created' | 'task_completed' | 'team_joined' | 'comment_added' | 'file_uploaded';
    title: string;
    description: string;
    timestamp: string;
    user: string;
    avatar?: string;
}

const ActivityFeed: React.FC = () => {
    const activities: ActivityItem[] = [
        {
            id: 1,
            type: 'project_created',
            title: 'New project created',
            description: 'E-commerce Platform project has been initialized with team setup',
            timestamp: '2 hours ago',
            user: 'Ripas Sorker'
        },
        {
            id: 2,
            type: 'task_completed',
            title: 'Task completed',
            description: 'Frontend authentication module has been completed and tested',
            timestamp: '4 hours ago',
            user: 'Sarah Johnson'
        },
        {
            id: 3,
            type: 'team_joined',
            title: 'Team member joined',
            description: 'Alex Chen joined the Mobile App UI project as a designer',
            timestamp: '6 hours ago',
            user: 'Alex Chen'
        },
        {
            id: 4,
            type: 'comment_added',
            title: 'New comment',
            description: 'Added feedback on the dashboard wireframes and suggested improvements',
            timestamp: '8 hours ago',
            user: 'Mike Davis'
        },
        {
            id: 5,
            type: 'file_uploaded',
            title: 'File uploaded',
            description: 'Design assets and mockups uploaded to Portfolio Website project',
            timestamp: '1 day ago',
            user: 'Ripas Sorker'
        }
    ];

    const getActivityIcon = (type: string) => {
        switch (type) {
            case 'project_created': return { icon: FaPlus, color: 'from-blue-500 to-cyan-500' };
            case 'task_completed': return { icon: FaCheckCircle, color: 'from-green-500 to-emerald-500' };
            case 'team_joined': return { icon: FaUsers, color: 'from-purple-500 to-pink-500' };
            case 'comment_added': return { icon: FaComments, color: 'from-orange-500 to-red-500' };
            case 'file_uploaded': return { icon: FaFileAlt, color: 'from-indigo-500 to-purple-500' };
            default: return { icon: FaClock, color: 'from-gray-500 to-gray-600' };
        }
    };

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">Recent Activity</h2>
                <button className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] text-sm font-medium transition-colors duration-300">
                    View All
                </button>
            </div>

            <div className="space-y-4">
                {activities.map((activity, index) => {
                    const { icon: IconComponent, color } = getActivityIcon(activity.type);
                    
                    return (
                        <div key={activity.id} className="relative">
                            {/* Timeline line */}
                            {index !== activities.length - 1 && (
                                <div className="absolute left-6 top-12 w-px h-8 bg-gradient-to-b from-[var(--border-color)]/50 to-transparent" />
                            )}
                            
                            <div className="flex items-start space-x-4 group">
                                {/* Activity Icon */}
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className="text-white" size={16} />
                                </div>

                                {/* Activity Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/30 transition-all duration-300">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-semibold text-[var(--text-primary)] text-sm">
                                                {activity.title}
                                            </h3>
                                            <div className="flex items-center space-x-1 text-xs text-[var(--text-secondary)]">
                                                <FaClock size={10} />
                                                <span>{activity.timestamp}</span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-sm text-[var(--text-secondary)] mb-3">
                                            {activity.description}
                                        </p>
                                        
                                        <div className="flex items-center space-x-2">
                                            <div className="w-6 h-6 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">
                                                    {activity.user.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <span className="text-xs font-medium text-[var(--text-primary)]">
                                                {activity.user}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ActivityFeed;
