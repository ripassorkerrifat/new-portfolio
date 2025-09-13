'use client';

import React from 'react';
import Link from 'next/link';
import { 
    FaEye, 
    FaEdit, 
    FaTrash, 
    FaCalendarAlt,
    FaUsers,
    FaClock,
    FaCheckCircle
} from 'react-icons/fa';

interface Project {
    id: number;
    name: string;
    description: string;
    status: 'active' | 'completed' | 'pending';
    progress: number;
    dueDate: string;
    teamSize: number;
    priority: 'high' | 'medium' | 'low';
}

const RecentProjects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            name: 'E-commerce Platform',
            description: 'Modern React-based e-commerce solution with advanced features',
            status: 'active',
            progress: 75,
            dueDate: '2024-02-15',
            teamSize: 4,
            priority: 'high'
        },
        {
            id: 2,
            name: 'Portfolio Website',
            description: 'Personal portfolio with interactive animations and modern design',
            status: 'completed',
            progress: 100,
            dueDate: '2024-01-20',
            teamSize: 1,
            priority: 'medium'
        },
        {
            id: 3,
            name: 'Mobile App UI',
            description: 'Cross-platform mobile application user interface design',
            status: 'active',
            progress: 45,
            dueDate: '2024-03-01',
            teamSize: 3,
            priority: 'high'
        },
        {
            id: 4,
            name: 'Dashboard Analytics',
            description: 'Real-time analytics dashboard with data visualization',
            status: 'pending',
            progress: 20,
            dueDate: '2024-02-28',
            teamSize: 2,
            priority: 'low'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'from-blue-500 to-cyan-500';
            case 'completed': return 'from-green-500 to-emerald-500';
            case 'pending': return 'from-orange-500 to-red-500';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
            case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
            default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">Recent Projects</h2>
                <Link 
                    href="/dashboard/projects"
                    className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] text-sm font-medium transition-colors duration-300"
                >
                    View All
                </Link>
            </div>

            <div className="space-y-4">
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/30 transition-all duration-300 group"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                        {project.name}
                                    </h3>
                                    <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getPriorityColor(project.priority)}`}>
                                        {project.priority}
                                    </span>
                                </div>
                                <p className="text-sm text-[var(--text-secondary)] mb-3">
                                    {project.description}
                                </p>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-3">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-[var(--text-secondary)]">Progress</span>
                                <span className="text-xs font-medium text-[var(--text-primary)]">{project.progress}%</span>
                            </div>
                            <div className="w-full bg-[var(--primary-bg)]/50 rounded-full h-2">
                                <div 
                                    className={`h-2 rounded-full bg-gradient-to-r ${getStatusColor(project.status)} transition-all duration-300`}
                                    style={{ width: `${project.progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Project Meta */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-[var(--text-secondary)]">
                                <div className="flex items-center space-x-1">
                                    <FaCalendarAlt />
                                    <span>{project.dueDate}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <FaUsers />
                                    <span>{project.teamSize} members</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    {project.status === 'completed' ? <FaCheckCircle /> : <FaClock />}
                                    <span className="capitalize">{project.status}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center space-x-2">
                                <button className="w-8 h-8 bg-[var(--primary-bg)]/50 hover:bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300">
                                    <FaEye size={12} />
                                </button>
                                <button className="w-8 h-8 bg-[var(--primary-bg)]/50 hover:bg-[var(--primary-color)]/20 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300">
                                    <FaEdit size={12} />
                                </button>
                                <button className="w-8 h-8 bg-[var(--primary-bg)]/50 hover:bg-red-500/20 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-red-400 transition-all duration-300">
                                    <FaTrash size={12} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
