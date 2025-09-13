'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    FaEdit, 
    FaTrash, 
    FaExternalLinkAlt, 
    FaGithub, 
    FaCalendarAlt,
    FaStar,
    FaEye
} from 'react-icons/fa';

interface Project {
    _id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: 'front-end' | 'backend' | 'others';
    skills: string[];
    startDate: string;
    endDate: string;
    is_featured: boolean;
    liveUrl: string;
    githubLink1?: string;
    githubLink2?: string;
    galleryImages?: string[];
    meta_title: string;
    meta_desc: string;
    meta_keywords: string[];
    createdAt: string;
    updatedAt: string;
}

interface ProjectCardProps {
    project: Project;
    onDelete: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDelete }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'front-end':
                return 'from-blue-500 to-cyan-500';
            case 'backend':
                return 'from-green-500 to-emerald-500';
            case 'others':
                return 'from-purple-500 to-pink-500';
            default:
                return 'from-gray-500 to-gray-600';
        }
    };

    return (
        <div className="group bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl border border-[var(--border-color)]/30 overflow-hidden hover:border-[var(--primary-color)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary-color)]/10">
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Featured Badge */}
                {project.is_featured && (
                    <div className="absolute top-3 left-3">
                        <span className="flex items-center space-x-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium">
                            <FaStar size={10} />
                            <span>Featured</span>
                        </span>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-medium rounded-full capitalize`}>
                        {project.category}
                    </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                        href={`/dashboard/projects/${project._id}`}
                        className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                        title="View Project"
                    >
                        <FaEye size={12} />
                    </Link>
                    <Link
                        href={`/dashboard/projects/${project._id}/edit`}
                        className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                        title="Edit Project"
                    >
                        <FaEdit size={12} />
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 line-clamp-1">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                    {project.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {project.skills.slice(0, 3).map((skill, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 rounded text-[var(--primary-color)] text-xs"
                        >
                            {skill}
                        </span>
                    ))}
                    {project.skills.length > 3 && (
                        <span className="px-2 py-1 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded text-[var(--text-secondary)] text-xs">
                            +{project.skills.length - 3}
                        </span>
                    )}
                </div>

                {/* Date */}
                <div className="flex items-center space-x-2 mb-4 text-[var(--text-secondary)] text-xs">
                    <FaCalendarAlt size={10} />
                    <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-lg text-xs font-medium hover:shadow-lg transition-all duration-300"
                        >
                            <FaExternalLinkAlt size={10} />
                            <span>Demo</span>
                        </a>
                        
                        {project.githubLink1 && (
                            <a
                                href={project.githubLink1}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-1 px-3 py-1.5 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 text-[var(--text-primary)] rounded-lg text-xs font-medium hover:border-[var(--primary-color)]/50 transition-all duration-300"
                            >
                                <FaGithub size={10} />
                                <span>Code</span>
                            </a>
                        )}
                    </div>

                    <button
                        onClick={() => onDelete(project._id)}
                        className="w-8 h-8 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-all duration-300"
                        title="Delete Project"
                    >
                        <FaTrash size={12} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
