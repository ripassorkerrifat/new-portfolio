'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ProjectFormData } from '@/lib/validations/project';
import { 
    FaCheck, 
    FaImage, 
    FaCalendarAlt, 
    FaCode, 
    FaLink, 
    FaExternalLinkAlt,
    FaGithub,
    FaStar,
    FaTag
} from 'react-icons/fa';

interface ReviewSubmitFormProps {
    form: UseFormReturn<ProjectFormData>;
}

const ReviewSubmitForm: React.FC<ReviewSubmitFormProps> = ({ form }) => {
    const { watch } = form;
    const formData = watch();

    const formatDate = (dateString: string) => {
        if (!dateString) return 'Not specified';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <FaCheck className="text-white" size={16} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">Review & Submit</h2>
                    <p className="text-sm text-[var(--text-secondary)]">Review all project details before submission</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Project Overview */}
                <div className="bg-[var(--primary-bg)]/30 rounded-xl p-6 border border-[var(--border-color)]/20">
                    <div className="flex items-start space-x-4">
                        {formData.thumbnail && (
                            <img
                                src={formData.thumbnail}
                                alt="Project thumbnail"
                                className="w-24 h-24 object-cover rounded-xl border border-[var(--border-color)]/30 flex-shrink-0"
                            />
                        )}
                        <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                                    {formData.title || 'Untitled Project'}
                                </h3>
                                {formData.is_featured && (
                                    <span className="inline-flex items-center space-x-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 px-2 py-1 rounded-lg text-xs border border-yellow-500/30">
                                        <FaStar size={10} />
                                        <span>Featured</span>
                                    </span>
                                )}
                                <span className={`px-2 py-1 rounded-lg text-xs font-medium border capitalize ${
                                    formData.category === 'front-end' 
                                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                                        : formData.category === 'backend'
                                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                        : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                                }`}>
                                    <FaTag className="inline mr-1" size={8} />
                                    {formData.category}
                                </span>
                            </div>
                            <p className="text-[var(--text-secondary)] text-sm line-clamp-3">
                                {formData.description || 'No description provided'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                        <div className="flex items-center space-x-3 mb-2">
                            <FaCalendarAlt className="text-[var(--primary-color)]" size={16} />
                            <h4 className="font-semibold text-[var(--text-primary)]">Timeline</h4>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-[var(--text-secondary)]">Start Date:</span>
                                <span className="text-[var(--text-primary)]">{formatDate(formData.startDate)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[var(--text-secondary)]">End Date:</span>
                                <span className={`${formData.endDate ? 'text-[var(--text-primary)]' : 'text-orange-400'}`}>
                                    {formData.endDate ? formatDate(formData.endDate) : 'Under Development'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                        <div className="flex items-center space-x-3 mb-2">
                            <FaCode className="text-[var(--primary-color)]" size={16} />
                            <h4 className="font-semibold text-[var(--text-primary)]">Skills</h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {formData.skills?.slice(0, 6).map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-[var(--primary-color)]/20 text-[var(--primary-color)] text-xs rounded border border-[var(--primary-color)]/30"
                                >
                                    {skill}
                                </span>
                            ))}
                            {(formData.skills?.length || 0) > 6 && (
                                <span className="px-2 py-1 bg-[var(--text-secondary)]/20 text-[var(--text-secondary)] text-xs rounded">
                                    +{(formData.skills?.length || 0) - 6} more
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                    <div className="flex items-center space-x-3 mb-4">
                        <FaLink className="text-[var(--primary-color)]" size={16} />
                        <h4 className="font-semibold text-[var(--text-primary)]">Project Links</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Live URL */}
                        <div className="flex items-center space-x-3 p-3 bg-[var(--primary-bg)]/50 rounded-lg">
                            <FaExternalLinkAlt className="text-green-500" size={14} />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-[var(--text-secondary)]">Live URL</p>
                                <p className="text-sm text-[var(--text-primary)] truncate">
                                    {formData.liveUrl || 'Not provided'}
                                </p>
                            </div>
                        </div>

                        {/* GitHub Link 1 */}
                        <div className="flex items-center space-x-3 p-3 bg-[var(--primary-bg)]/50 rounded-lg">
                            <FaGithub className="text-blue-500" size={14} />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-[var(--text-secondary)]">GitHub Repo 1</p>
                                <p className="text-sm text-[var(--text-primary)] truncate">
                                    {formData.githubLink1 || 'Not provided'}
                                </p>
                            </div>
                        </div>

                        {/* GitHub Link 2 */}
                        <div className="flex items-center space-x-3 p-3 bg-[var(--primary-bg)]/50 rounded-lg">
                            <FaGithub className="text-purple-500" size={14} />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-[var(--text-secondary)]">GitHub Repo 2</p>
                                <p className="text-sm text-[var(--text-primary)] truncate">
                                    {formData.githubLink2 || 'Not provided'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Images */}
                {formData.galleryImages && formData.galleryImages.length > 0 && (
                    <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                        <div className="flex items-center space-x-3 mb-4">
                            <FaImage className="text-[var(--primary-color)]" size={16} />
                            <h4 className="font-semibold text-[var(--text-primary)]">Gallery Images ({formData.galleryImages.length})</h4>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                            {formData.galleryImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-20 object-cover rounded-lg border border-[var(--border-color)]/30"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Summary Stats */}
                <div className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 rounded-xl p-4 border border-[var(--primary-color)]/20">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-4">Project Summary</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <p className="text-lg font-bold text-[var(--primary-color)]">
                                {formData.skills?.length || 0}
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">Skills Used</p>
                        </div>
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <p className="text-lg font-bold text-green-500">
                                {[formData.liveUrl, formData.githubLink1, formData.githubLink2].filter(Boolean).length}
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">Project Links</p>
                        </div>
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <p className="text-lg font-bold text-blue-500">
                                {(formData.galleryImages?.length || 0) + (formData.thumbnail ? 1 : 0)}
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">Total Images</p>
                        </div>
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <p className="text-lg font-bold text-purple-500">
                                {formData.endDate ? 'Completed' : 'In Progress'}
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">Status</p>
                        </div>
                    </div>
                </div>

                {/* Raw Data Preview (Development) */}
                {process.env.NODE_ENV === 'development' && (
                    <div className="bg-[var(--primary-bg)]/20 rounded-xl p-4 border border-[var(--border-color)]/20">
                        <details>
                            <summary className="text-sm font-medium text-[var(--text-primary)] cursor-pointer mb-2">
                                Raw Form Data (Development Only)
                            </summary>
                            <pre className="text-xs text-[var(--text-secondary)] overflow-auto bg-[var(--primary-bg)]/50 p-3 rounded-lg">
                                {JSON.stringify(formData, null, 2)}
                            </pre>
                        </details>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewSubmitForm;
