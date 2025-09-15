/* eslint-disable react/no-unescaped-entities */
"use client";

import React, {useState, useEffect} from "react";
import {useParams, useRouter} from "next/navigation";
import Image from "next/image";
import {
    FaArrowLeft,
    FaExternalLinkAlt,
    FaGithub,
    FaCalendarAlt,
    FaTags,
    FaStar,
    FaImages,
    FaEdit,
    FaTrash,
    FaCode,
    FaEye,
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

const ProjectDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (params?.id) {
            fetchProject();
        }
    }, [params?.id]);

    const fetchProject = async () => {
        if (!params?.id) return;

        try {
            const response = await fetch(`/api/projects/${params.id}`);
            if (response.ok) {
                const data = await response.json();
                setProject(data.project);
            } else {
                console.error("Failed to fetch project");
            }
        } catch (error) {
            console.error("Error fetching project:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!params?.id) return;

        setDeleting(true);
        try {
            const response = await fetch(`/api/projects/${params.id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                router.push("/dashboard/projects?deleted=true");
            } else {
                alert("Failed to delete project");
            }
        } catch (error) {
            console.error("Error deleting project:", error);
            alert("Failed to delete project");
        } finally {
            setDeleting(false);
            setShowDeleteModal(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--primary-bg)] p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="animate-pulse">
                        <div className="h-8 bg-[var(--card-bg)]/50 rounded-lg mb-6 w-1/4"></div>
                        <div className="h-64 bg-[var(--card-bg)]/50 rounded-2xl mb-6"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-4">
                                <div className="h-6 bg-[var(--card-bg)]/50 rounded w-3/4"></div>
                                <div className="h-4 bg-[var(--card-bg)]/50 rounded w-full"></div>
                                <div className="h-4 bg-[var(--card-bg)]/50 rounded w-5/6"></div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-32 bg-[var(--card-bg)]/50 rounded-xl"></div>
                                <div className="h-32 bg-[var(--card-bg)]/50 rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--primary-bg)] p-6">
                <div className="max-w-6xl mx-auto text-center py-20">
                    <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                        Project Not Found
                    </h1>
                    <p className="text-[var(--text-secondary)] mb-6">
                        The project you're looking for doesn't exist.
                    </p>
                    <button
                        onClick={() => router.push("/dashboard/projects")}
                        className="px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-xl hover:shadow-lg transition-all duration-300">
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--primary-bg)] p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <button
                        onClick={() => router.push("/dashboard/projects")}
                        className="flex items-center space-x-3 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300 group">
                        <div className="w-10 h-10 bg-[var(--card-bg)]/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[var(--primary-color)]/10 transition-all duration-300">
                            <FaArrowLeft size={14} />
                        </div>
                        <span className="font-medium">Back to Projects</span>
                    </button>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() =>
                                params?.id &&
                                router.push(
                                    `/dashboard/projects/${params.id}/edit`
                                )
                            }
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[var(--primary-color)]/30 transition-all duration-300 hover:scale-105">
                            <FaEdit size={14} />
                            <span>Edit Project</span>
                        </button>
                        <button
                            onClick={() => setShowDeleteModal(true)}
                            className="flex items-center space-x-2 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300">
                            <FaTrash size={14} />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="bg-[var(--card-bg)]/40 backdrop-blur-xl rounded-3xl border border-[var(--border-color)]/20 overflow-hidden mb-8 shadow-2xl">
                    <div
                        className="relative h-80 md:h-96 group cursor-pointer"
                        onClick={() => window.open(project.liveUrl, "_blank")}>
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/20 via-transparent to-[var(--secondary-color)]/20" />

                        {/* View Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                <FaEye className="text-white" size={24} />
                            </div>
                        </div>

                        {/* Quick Action Buttons */}
                        <div className="absolute top-6 right-6 flex space-x-3">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(project.liveUrl, "_blank");
                                }}
                                className="flex items-center space-x-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-black/60 transition-all duration-300 hover:scale-105">
                                <FaExternalLinkAlt size={12} />
                                <span className="text-sm font-medium">
                                    Live Demo
                                </span>
                            </button>
                            {project.githubLink1 && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(
                                            project.githubLink1,
                                            "_blank"
                                        );
                                    }}
                                    className="flex items-center space-x-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-black/60 transition-all duration-300 hover:scale-105">
                                    <FaGithub size={12} />
                                    <span className="text-sm font-medium">
                                        Source
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Project Information Section */}
                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Project Details */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                                    {project.title}
                                </h2>
                                {project.shortDescription && (
                                    <p className="text-[var(--text-primary)] mb-2 font-medium">
                                        {project.shortDescription}
                                    </p>
                                )}
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Project Meta Info */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <FaCalendarAlt
                                            className="text-[var(--primary-color)]"
                                            size={14}
                                        />
                                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">
                                            Timeline
                                        </h4>
                                    </div>
                                    <p className="text-[var(--text-secondary)] text-sm">
                                        {new Date(
                                            project.startDate
                                        ).toLocaleDateString("en-US", {
                                            month: "short",
                                            year: "numeric",
                                        })}
                                        {project.endDate
                                            ? ` - ${new Date(
                                                  project.endDate
                                              ).toLocaleDateString("en-US", {
                                                  month: "short",
                                                  year: "numeric",
                                              })}`
                                            : " - Present"}
                                    </p>
                                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                                        {project.endDate
                                            ? "Completed"
                                            : "In Progress"}
                                    </p>
                                </div>

                                <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <FaTags
                                            className="text-[var(--primary-color)]"
                                            size={14}
                                        />
                                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">
                                            Category
                                        </h4>
                                    </div>
                                    <p className="text-[var(--text-secondary)] text-sm capitalize">
                                        {project.category.replace("-", " ")}
                                    </p>
                                    {project.is_featured && (
                                        <div className="flex items-center space-x-1 mt-2">
                                            <FaStar
                                                className="text-yellow-500"
                                                size={10}
                                            />
                                            <span className="text-yellow-500 text-xs font-medium">
                                                Featured
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Project Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[var(--text-primary)]">
                                Project Links
                            </h3>

                            {/* Live Demo */}
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 p-4 bg-[var(--primary-bg)]/50 rounded-xl border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/50 transition-all duration-300 group">
                                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                    <FaExternalLinkAlt
                                        className="text-white"
                                        size={16}
                                    />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                                        Live Demo
                                    </p>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        View live project
                                    </p>
                                </div>
                            </a>

                            {/* GitHub Links */}
                            {project.githubLink1 && (
                                <a
                                    href={project.githubLink1}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-4 bg-[var(--primary-bg)]/50 rounded-xl border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/50 transition-all duration-300 group">
                                    <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                                        <FaGithub
                                            className="text-white"
                                            size={16}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                                            {project.githubLink2
                                                ? "Source Code 1"
                                                : "Source Code"}
                                        </p>
                                        <p className="text-sm text-[var(--text-secondary)]">
                                            {project.githubLink2
                                                ? "Frontend Repository"
                                                : "View on GitHub"}
                                        </p>
                                    </div>
                                </a>
                            )}

                            {project.githubLink2 && (
                                <a
                                    href={project.githubLink2}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-4 bg-[var(--primary-bg)]/50 rounded-xl border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/50 transition-all duration-300 group">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-700 to-purple-900 rounded-lg flex items-center justify-center">
                                        <FaGithub
                                            className="text-white"
                                            size={16}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                                            Source Code 2
                                        </p>
                                        <p className="text-sm text-[var(--text-secondary)]">
                                            Backend Repository
                                        </p>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Gallery */}
                        {project.galleryImages &&
                            project.galleryImages.length > 0 && (
                                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <FaImages className="text-[var(--primary-color)]" />
                                            <h2 className="text-xl font-bold text-[var(--text-primary)]">
                                                Project Gallery
                                            </h2>
                                        </div>
                                        <span className="text-sm text-[var(--text-secondary)] bg-[var(--primary-bg)]/30 px-3 py-1 rounded-full">
                                            {project.galleryImages.length}{" "}
                                            images
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {project.galleryImages.map(
                                            (image, index) => (
                                                <div
                                                    key={index}
                                                    className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                                                    onClick={() =>
                                                        window.open(
                                                            image,
                                                            "_blank"
                                                        )
                                                    }>
                                                    <Image
                                                        src={image}
                                                        alt={`${
                                                            project.title
                                                        } gallery ${index + 1}`}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                                        <FaEye
                                                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                            size={20}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Technologies */}
                        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <FaCode className="text-[var(--primary-color)]" />
                                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                                        Technologies Used
                                    </h3>
                                </div>
                                <span className="text-sm text-[var(--text-secondary)] bg-[var(--primary-bg)]/30 px-3 py-1 rounded-full">
                                    {project.skills.length} skills
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 rounded-lg text-[var(--primary-color)] text-sm font-medium hover:bg-[var(--primary-color)]/20 transition-colors duration-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-[var(--card-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)]/30 p-6 max-w-md w-full">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                            Delete Project
                        </h3>
                        <p className="text-[var(--text-secondary)] mb-6">
                            Are you sure you want to delete "{project.title}"?
                            This action cannot be undone.
                        </p>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                disabled={deleting}
                                className="flex-1 px-4 py-2 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] hover:bg-[var(--primary-bg)]/70 transition-all duration-300">
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={deleting}
                                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-300 disabled:opacity-50">
                                {deleting ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailPage;
