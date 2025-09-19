"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import {
    FaEdit,
    FaCalendarAlt,
    FaGithub,
    FaExternalLinkAlt,
    FaCheckCircle,
    FaStar,
} from "react-icons/fa";

interface Project {
    _id: string;
    title: string;
    shortDescription: string;
    category: string;
    is_published: boolean;
    is_featured: boolean;
    createdAt: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
}

const RecentProjects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecentProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "/api/projects?limit=5&published=false"
                );
                const data = await response.json();

                if (data?.success && data?.projects) {
                    setProjects(data.projects);
                }
            } catch (error) {
                console.error("Failed to fetch recent projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecentProjects();
    }, []);

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                    Recent Projects
                </h2>
                <Link
                    href="/dashboard/projects"
                    className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] text-sm font-medium transition-colors duration-300">
                    View All
                </Link>
            </div>

            <div className="space-y-4">
                {loading ? (
                    <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary-color)] mx-auto"></div>
                        <p className="text-[var(--text-secondary)] mt-2">
                            Loading projects...
                        </p>
                    </div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-[var(--text-secondary)]">
                            No projects found
                        </p>
                        <Link
                            href="/dashboard/projects/add"
                            className="text-[var(--primary-color)] hover:underline mt-2 inline-block">
                            Create your first project
                        </Link>
                    </div>
                ) : (
                    projects.map((project) => (
                        <div
                            key={project._id}
                            className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/30 transition-all duration-300 group">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <span
                                            className={`px-2 py-1 rounded-lg text-xs font-medium border ${
                                                project.is_featured
                                                    ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
                                                    : "border-[var(--border-color)]/30 bg-[var(--primary-bg)]/30 text-[var(--text-secondary)]"
                                            }`}>
                                            {project.is_featured ? (
                                                <div className="flex items-center space-x-1">
                                                    <FaStar size={10} />
                                                    <span>Featured</span>
                                                </div>
                                            ) : (
                                                <span className="capitalize">
                                                    {project.category}
                                                </span>
                                            )}
                                        </span>
                                        <span
                                            className={`px-2 py-1 rounded-lg text-xs font-medium border ${
                                                project.is_published
                                                    ? "border-green-500/30 bg-green-500/10 text-green-400"
                                                    : "border-orange-500/30 bg-orange-500/10 text-orange-400"
                                            }`}>
                                            {project.is_published
                                                ? "Published"
                                                : "Draft"}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--text-secondary)] mb-3">
                                        {project.shortDescription}
                                    </p>
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="mb-3">
                                <div className="flex flex-wrap gap-1">
                                    {project?.technologies
                                        ?.slice(0, 4)
                                        ?.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-xs rounded-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    {(project?.technologies?.length || 0) >
                                        4 && (
                                        <span className="px-2 py-1 bg-[var(--border-color)]/10 text-[var(--text-secondary)] text-xs rounded-lg">
                                            +
                                            {(project?.technologies?.length ||
                                                0) - 4}{" "}
                                            more
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Project Meta */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-xs text-[var(--text-secondary)]">
                                    <div className="flex items-center space-x-1">
                                        <FaCalendarAlt />
                                        <span>
                                            {project?.createdAt
                                                ? new Date(
                                                      project.createdAt
                                                  ).toLocaleDateString()
                                                : "N/A"}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        {project.is_published ? (
                                            <FaCheckCircle className="text-green-500" />
                                        ) : (
                                            <FaEdit className="text-orange-500" />
                                        )}
                                        <span className="capitalize">
                                            {project.is_published
                                                ? "Live"
                                                : "Draft"}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-[var(--primary-color)]/10 text-[var(--primary-color)] hover:bg-[var(--primary-color)]/20 transition-colors duration-300">
                                            <FaExternalLinkAlt size={12} />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-gray-500/10 text-gray-400 hover:bg-gray-500/20 transition-colors duration-300">
                                            <FaGithub size={12} />
                                        </a>
                                    )}
                                    <Link
                                        href={`/dashboard/projects/edit/${project._id}`}
                                        className="p-2 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors duration-300">
                                        <FaEdit size={12} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RecentProjects;
