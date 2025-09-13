'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
    FaArrowLeft, 
    FaEdit, 
    FaTrash, 
    FaExternalLinkAlt, 
    FaGithub, 
    FaCalendarAlt,
    FaStar,
    FaEye,
    FaTags,
    FaImages
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
                console.error('Failed to fetch project');
            }
        } catch (error) {
            console.error('Error fetching project:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!params?.id) return;
        
        setDeleting(true);
        try {
            const response = await fetch(`/api/projects/${params.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.push('/dashboard/projects?deleted=true');
            } else {
                alert('Failed to delete project');
            }
        } catch (error) {
            console.error('Error deleting project:', error);
            alert('Failed to delete project');
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
                    <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Project Not Found</h1>
                    <p className="text-[var(--text-secondary)] mb-6">The project you're looking for doesn't exist.</p>
                    <button
                        onClick={() => router.push('/dashboard/projects')}
                        className="px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--primary-bg)] p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => router.push('/dashboard/projects')}
                        className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-300"
                    >
                        <FaArrowLeft />
                        <span>Back to Projects</span>
                    </button>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => params?.id && router.push(`/dashboard/projects/${params.id}/edit`)}
                            className="flex items-center space-x-2 px-4 py-2 bg-[var(--primary-color)]/20 hover:bg-[var(--primary-color)]/30 border border-[var(--primary-color)]/30 rounded-lg text-[var(--primary-color)] transition-all duration-300"
                        >
                            <FaEdit size={14} />
                            <span>Edit</span>
                        </button>
                        <button
                            onClick={() => setShowDeleteModal(true)}
                            className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/20 transition-all duration-300"
                        >
                            <FaTrash size={14} />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl border border-[var(--border-color)]/30 overflow-hidden mb-8">
                    <div className="relative h-64 md:h-80">
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center space-x-3 mb-3">
                                {project.is_featured && (
                                    <span className="flex items-center space-x-1 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm">
                                        <FaStar size={12} />
                                        <span>Featured</span>
                                    </span>
                                )}
                                <span className="px-3 py-1 bg-[var(--primary-color)]/20 border border-[var(--primary-color)]/30 rounded-full text-[var(--primary-color)] text-sm capitalize">
                                    {project.category}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
                            <p className="text-gray-200 text-lg">{project.description}</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Project Links */}
                        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Project Links</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 p-4 bg-[var(--primary-bg)]/50 rounded-xl border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/50 transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                        <FaExternalLinkAlt className="text-white" size={16} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">Live Demo</p>
                                        <p className="text-sm text-[var(--text-secondary)]">View live project</p>
                                    </div>
                                </a>

                                {project.githubLink1 && (
                                    <a
                                        href={project.githubLink1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-3 p-4 bg-[var(--primary-bg)]/50 rounded-xl border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/50 transition-all duration-300 group"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                                            <FaGithub className="text-white" size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">Source Code</p>
                                            <p className="text-sm text-[var(--text-secondary)]">View on GitHub</p>
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Gallery */}
                        {project.galleryImages && project.galleryImages.length > 0 && (
                            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                                <div className="flex items-center space-x-3 mb-4">
                                    <FaImages className="text-[var(--primary-color)]" />
                                    <h2 className="text-xl font-bold text-[var(--text-primary)]">Project Gallery</h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {project.galleryImages.map((image, index) => (
                                        <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
                                            <Image
                                                src={image}
                                                alt={`${project.title} gallery ${index + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Project Info */}
                        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Project Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <FaCalendarAlt className="text-[var(--primary-color)]" size={16} />
                                    <div>
                                        <p className="text-sm text-[var(--text-secondary)]">Duration</p>
                                        <p className="text-[var(--text-primary)] font-medium">
                                            {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaEye className="text-[var(--primary-color)]" size={16} />
                                    <div>
                                        <p className="text-sm text-[var(--text-secondary)]">Category</p>
                                        <p className="text-[var(--text-primary)] font-medium capitalize">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                            <div className="flex items-center space-x-3 mb-4">
                                <FaTags className="text-[var(--primary-color)]" />
                                <h3 className="text-lg font-bold text-[var(--text-primary)]">Technologies</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 rounded-full text-[var(--primary-color)] text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* SEO Meta */}
                        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">SEO Information</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm text-[var(--text-secondary)] mb-1">Meta Title</p>
                                    <p className="text-[var(--text-primary)] text-sm">{project.meta_title}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--text-secondary)] mb-1">Meta Description</p>
                                    <p className="text-[var(--text-primary)] text-sm">{project.meta_desc}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--text-secondary)] mb-1">Keywords</p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.meta_keywords.map((keyword, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-[var(--primary-bg)]/50 rounded text-xs text-[var(--text-secondary)]"
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-[var(--card-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)]/30 p-6 max-w-md w-full">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Delete Project</h3>
                        <p className="text-[var(--text-secondary)] mb-6">
                            Are you sure you want to delete "{project.title}"? This action cannot be undone.
                        </p>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                disabled={deleting}
                                className="flex-1 px-4 py-2 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] hover:bg-[var(--primary-bg)]/70 transition-all duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={deleting}
                                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-300 disabled:opacity-50"
                            >
                                {deleting ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailPage;
