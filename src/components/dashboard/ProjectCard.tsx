"use client";

import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {
    FaEdit,
    FaTrash,
    FaCalendarAlt,
    FaClock,
    FaStar,
    FaCode,
} from "react-icons/fa";

interface Project {
    _id: string;
    title: string;
    description: string;
    shortDescription?: string;
    thumbnail: string;
    category: "front-end" | "backend" | "full-stack" | "others";
    skills: string[];
    startDate: string;
    endDate?: string;
    is_featured: boolean;
    liveUrl: string;
    githubLink1?: string;
    githubLink2?: string;
    galleryImages?: string[];
    meta_title?: string;
    meta_desc?: string;
    meta_keywords?: string[];
    createdAt: string;
    updatedAt: string;
}

interface ProjectCardProps {
    project: Project;
    onDelete: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project, onDelete}) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/dashboard/projects/${project._id}`);
    };
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
    };

    const getProjectStatus = () => {
        if (!project.endDate) {
            return {
                status: "In Progress",
                color: "from-orange-500 to-red-500",
                icon: FaCode,
            };
        }
        return {
            status: "Completed",
            color: "from-green-500 to-emerald-500",
            icon: FaClock,
        };
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "front-end":
                return "from-blue-500 to-cyan-500";
            case "backend":
                return "from-green-500 to-emerald-500";
            case "full-stack":
                return "from-purple-500 to-pink-500";
            case "others":
                return "from-orange-500 to-red-500";
            default:
                return "from-gray-500 to-gray-600";
        }
    };

    const projectStatus = getProjectStatus();
    const StatusIcon = projectStatus.icon;

    return (
        <div
            onClick={handleCardClick}
            className="group relative bg-[var(--card-bg)]/40 backdrop-blur-xl rounded-3xl border border-[var(--border-color)]/20 overflow-hidden hover:border-[var(--primary-color)]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary-color)]/10 hover:-translate-y-2 cursor-pointer">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Thumbnail Section */}
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/20 via-transparent to-[var(--secondary-color)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <div className="flex flex-col space-y-2">
                        {project.is_featured && (
                            <span className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-300 text-xs font-semibold shadow-lg">
                                <FaStar size={10} />
                                <span>Featured</span>
                            </span>
                        )}
                        <span
                            className={`px-3 py-1.5 bg-gradient-to-r ${getCategoryColor(
                                project.category
                            )} backdrop-blur-sm text-white text-xs font-semibold rounded-full capitalize shadow-lg`}>
                            {project.category.replace("-", " ")}
                        </span>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <Link
                            href={`/dashboard/projects/${project._id}/edit`}
                            onClick={(e) => e.stopPropagation()}
                            className="w-9 h-9 bg-orange-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-600/90 transition-all duration-300 hover:scale-110"
                            title="Edit Project">
                            <FaEdit size={12} />
                        </Link>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete(project._id);
                            }}
                            className="w-9 h-9 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-600/90 transition-all duration-300 hover:scale-110"
                            title="Delete Project">
                            <FaTrash size={12} />
                        </button>
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                        <div
                            className={`flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r ${projectStatus.color} backdrop-blur-sm rounded-full text-white text-xs font-medium shadow-lg`}>
                            <StatusIcon size={10} />
                            <span>{projectStatus.status}</span>
                        </div>

                        <div className="flex items-center space-x-1 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <FaCalendarAlt size={10} />
                            <span>
                                {formatDate(project.startDate)}
                                {project.endDate
                                    ? ` - ${formatDate(project.endDate)}`
                                    : " - Present"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
                {/* Title & Description */}
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] line-clamp-1 group-hover:text-[var(--primary-color)] transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm line-clamp-2 leading-relaxed">
                        {project.shortDescription || project.description}
                    </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                    {project.skills?.slice(0, 4).map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 rounded-lg text-[var(--primary-color)] text-xs font-medium hover:bg-[var(--primary-color)]/20 transition-colors duration-300">
                            {skill}
                        </span>
                    ))}
                    {project.skills.length > 4 && (
                        <span className="px-3 py-1.5 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-lg text-[var(--text-secondary)] text-xs font-medium">
                            +{project.skills.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
