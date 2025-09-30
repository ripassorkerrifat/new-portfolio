"use client";

import {Project} from "../types/project";
import {Images} from "lucide-react";

interface ProjectDetailsModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
    onGalleryOpen: (gallery: string[]) => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
    project,
    isOpen,
    onClose,
    onGalleryOpen,
}) => {
    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}>
            <div
                className="glass rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[var(--border-color)]/50 backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/95 to-[var(--secondary-bg)]/95"
                onClick={(e) => e.stopPropagation()}>
                {/* Modal Header */}
                <div className="relative md:p-8 p-4 border-b border-[var(--border-color)]/30">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-10 h-10 glass rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--primary-color)]/20 transition-all duration-300">
                        ✕
                    </button>
                    <div className="flex md:items-center mr-6 md:gap-6 gap-4">
                        <div>
                            <div className="md:size-16 size-14 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl flex items-center justify-center text-3xl border border-[var(--border-color)]/30">
                                {project?.image || "📁"}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
                                {project?.title}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project?.skills?.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 text-[var(--text-primary)] px-3 py-1 rounded-full text-sm font-medium border border-[var(--border-color)]/30">
                                        {skill}
                                    </span>
                                )) ||
                                    project?.technologies?.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 text-[var(--text-primary)] px-3 py-1 rounded-full text-sm font-medium border border-[var(--border-color)]/30">
                                            {tech}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Content */}
                <div className="p-4 md:p-12 space-y-8">
                    {/* Project Image */}
                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                        <img
                            src={project?.thumbnail}
                            alt={project?.title || "Project"}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project Info */}
                        <div className="space-y-4 md:space-y-6 lg:space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                                    🏷️ Category
                                </h3>
                                <span className="inline-block bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 text-[var(--text-primary)] px-3 py-1 rounded-full text-sm font-medium border border-[var(--border-color)]/30 capitalize">
                                    {project?.category || "General"}
                                </span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="space-y-4 md:space-y-6 lg:space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                                    🔗 Links
                                </h3>
                                <div className="space-y-2">
                                    {project?.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors">
                                            🚀 Live Demo
                                        </a>
                                    )}
                                    {project?.githubLink1 && (
                                        <a
                                            href={project.githubLink1}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors">
                                            💻 GitHub Repository
                                        </a>
                                    )}
                                    {project?.githubLink2 && (
                                        <a
                                            href={project.githubLink2}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors">
                                            🔧 Additional Repository
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Short Description fallback */}
                    {project?.shortDescription && project?.shortDescription && (
                        <div>
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                                📋 Project Overview
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                                {project.shortDescription}
                            </p>
                        </div>
                    )}

                    {/* Project Description */}
                    {project?.description && (
                        <div
                            className="text-[var(--text-secondary)] leading-relaxed max-w-none project-description"
                            dangerouslySetInnerHTML={{
                                __html: project.description,
                            }}
                        />
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        {project?.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white text-center md:py-4 py-3 md:px-6 px-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[var(--glow-primary)]/50 md:text-base text-sm">
                                🚀 View Live Demo
                            </a>
                        )}
                        {project?.githubLink1 && (
                            <a
                                href={project.githubLink1}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 glass border border-[var(--border-color)]/50 hover:border-[var(--secondary-color)]/80 text-[var(--text-primary)] text-center md:py-4 py-3 md:px-6 px-4 rounded-xl font-bold   transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[var(--glow-secondary)]/30 md:text-base text-sm">
                                💻 View Source Code
                            </a>
                        )}
                        {((project?.galleryImages?.length ?? 0) > 0 ||
                            (project?.gallery?.length ?? 0) > 0) && (
                            <button
                                onClick={() =>
                                    onGalleryOpen(
                                        project?.galleryImages ||
                                            project?.gallery ||
                                            []
                                    )
                                }
                                className="flex-1 bg-gradient-to-r from-[var(--secondary-color)]/20 to-[var(--primary-color)]/20 text-[var(--text-primary)] text-center md:py-4 py-3 md:px-6 px-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border border-[var(--border-color)]/30 hover:border-[var(--secondary-color)]/50 md:text-base text-sm">
                                <span className="inline-flex items-center gap-2 justify-center">
                                    <Images className="w-5 h-5" />
                                    <span>
                                        View Gallery (
                                        {(project?.galleryImages?.length ?? 0) +
                                            (project?.gallery?.length ?? 0)}
                                        )
                                    </span>
                                </span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsModal;
