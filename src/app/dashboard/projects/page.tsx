'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ProjectCard from '@/components/dashboard/ProjectCard';
import { 
    FaPlus, 
    FaSearch, 
    FaTh, 
    FaList,
    FaFolderOpen,
    FaCheckCircle,
    FaExclamationTriangle
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

const ProjectsPage: React.FC = () => {
    const searchParams = useSearchParams();
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
    const [deleting, setDeleting] = useState(false);
    const [notification, setNotification] = useState<{
        type: 'success' | 'error';
        message: string;
    } | null>(null);

    useEffect(() => {
        fetchProjects();
        
        // Check for URL parameters for notifications
        if (searchParams?.get('created') === 'true') {
            setNotification({
                type: 'success',
                message: 'Project created successfully!'
            });
        } else if (searchParams?.get('updated') === 'true') {
            setNotification({
                type: 'success',
                message: 'Project updated successfully!'
            });
        } else if (searchParams?.get('deleted') === 'true') {
            setNotification({
                type: 'success',
                message: 'Project deleted successfully!'
            });
        }

        // Clear notification after 5 seconds
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [searchParams]);

    const fetchProjects = async () => {
        try {
            // Fetch ALL projects (including unpublished) for dashboard management
            const response = await fetch('/api/projects?published=false');
            if (response.ok) {
                const data = await response.json();
                setProjects(data?.projects || []);
            } else {
                console.error('Failed to fetch projects');
            }
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteProject = (projectId: string) => {
        setProjectToDelete(projectId);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!projectToDelete) return;
        
        setDeleting(true);
        try {
            const response = await fetch(`/api/projects/${projectToDelete}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setProjects(projects.filter(p => p._id !== projectToDelete));
                setNotification({
                    type: 'success',
                    message: 'Project deleted successfully!'
                });
            } else {
                setNotification({
                    type: 'error',
                    message: 'Failed to delete project'
                });
            }
        } catch (error) {
            console.error('Error deleting project:', error);
            setNotification({
                type: 'error',
                message: 'Failed to delete project'
            });
        } finally {
            setDeleting(false);
            setShowDeleteModal(false);
            setProjectToDelete(null);
        }
    };

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    if (loading) {
        return (
            <div className="space-y-6">
                <div className="animate-pulse">
                    <div className="h-8 bg-[var(--card-bg)]/50 rounded-lg mb-6 w-1/4"></div>
                    <div className="h-32 bg-[var(--card-bg)]/50 rounded-2xl mb-6"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-64 bg-[var(--card-bg)]/50 rounded-2xl"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Notification */}
            {notification && (
                <div className={`p-4 rounded-xl border flex items-center space-x-3 ${
                    notification.type === 'success' 
                        ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}>
                    {notification.type === 'success' ? (
                        <FaCheckCircle size={16} />
                    ) : (
                        <FaExclamationTriangle size={16} />
                    )}
                    <span>{notification.message}</span>
                    <button
                        onClick={() => setNotification(null)}
                        className="ml-auto text-current hover:opacity-70"
                    >
                        ×
                    </button>
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Projects</h1>
                    <p className="text-[var(--text-secondary)]">
                        Manage and track all your projects in one place.
                    </p>
                </div>
                <Link 
                    href="/dashboard/projects/add"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                    <FaPlus size={14} />
                    <span>New Project</span>
                </Link>
            </div>

            {/* Filters and Search */}
            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]" size={14} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Category Filter */}
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="px-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                        >
                            <option value="all">All Categories</option>
                            <option value="front-end">Front-end</option>
                            <option value="backend">Backend</option>
                            <option value="others">Others</option>
                        </select>

                        {/* View Mode Toggle */}
                        <div className="flex items-center bg-[var(--primary-bg)]/50 rounded-xl border border-[var(--border-color)]/30 p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg transition-all duration-300 ${
                                    viewMode === 'grid' 
                                        ? 'bg-[var(--primary-color)] text-white' 
                                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                }`}
                            >
                                <FaTh size={14} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition-all duration-300 ${
                                    viewMode === 'list' 
                                        ? 'bg-[var(--primary-color)] text-white' 
                                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                }`}
                            >
                                <FaList size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Grid/List */}
            <div className={`grid gap-6 ${
                viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
            }`}>
                {filteredProjects.map((project) => (
                    <ProjectCard 
                        key={project._id} 
                        project={project} 
                        onDelete={handleDeleteProject}
                    />
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && !loading && (
                <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaFolderOpen className="text-[var(--primary-color)]" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">No projects found</h3>
                    <p className="text-[var(--text-secondary)] mb-6">
                        {searchTerm || categoryFilter !== 'all' 
                            ? 'Try adjusting your search or filters.' 
                            : 'Get started by creating your first project.'
                        }
                    </p>
                    <Link 
                        href="/dashboard/projects/add"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        <FaPlus size={14} />
                        <span>Create Project</span>
                    </Link>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-[var(--card-bg)] backdrop-blur-xl rounded-2xl border border-[var(--border-color)]/30 p-6 max-w-md w-full">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Delete Project</h3>
                        <p className="text-[var(--text-secondary)] mb-6">
                            Are you sure you want to delete this project? This action cannot be undone.
                        </p>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setProjectToDelete(null);
                                }}
                                disabled={deleting}
                                className="flex-1 px-4 py-2 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] hover:bg-[var(--primary-bg)]/70 transition-all duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
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

export default ProjectsPage;
