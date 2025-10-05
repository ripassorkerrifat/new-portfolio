/* eslint-disable @next/next/no-img-element */
"use client";

import {Project} from "../types/project";
import {Images} from "lucide-react";

interface ProjectCardProps {
    project: Project;
    index: number;
    onMoreInfo: (project: Project) => void;
    onGalleryOpen: (gallery: string[]) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
    index,
    onMoreInfo,
    onGalleryOpen,
}) => {
    return (
        <div
            className="group relative glass rounded-3xl overflow-hidden border border-[var(--border-color)]/40 hover:border-[var(--secondary-color)]/80 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--glow-secondary)]/30 backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/90 to-[var(--secondary-bg)]/90"
            style={{animationDelay: `${index * 0.1}s`}}>
            {/* Enhanced hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/8 via-transparent to-[var(--secondary-color)]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Project Thumbnail with enhanced styling */}
            <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                    src={project.thumbnail}
                    alt={`${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Gallery Icon with cursor pointer */}
                {((project?.galleryImages?.length ?? 0) > 0 ||
                    (project?.gallery?.length ?? 0) > 0) && (
                    <button
                        onClick={() =>
                            onGalleryOpen(
                                project?.galleryImages || project?.gallery || []
                            )
                        }
                        className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-lg"
                        title="View Gallery">
                        <Images className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                )}

                {/* Enhanced Featured Badge */}
                {(project?.featured || project?.is_featured) && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
                            ⭐ Featured
                        </span>
                    </div>
                )}

                {/* Project category badge */}
                <div className="absolute bottom-4 left-4">
                    <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                        {project.category?.replace("-", " ").toUpperCase() ||
                            "PROJECT"}
                    </span>
                </div>
            </div>

            <div className="relative p-4  sm:p-5">
                {/* Project title with better spacing */}
                <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300 line-clamp-1">
                    {project.title}
                </h4>

                {/* Enhanced short description display */}
                <div className="mb-4">
                    <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed line-clamp-2 md:min-h-[3.5rem]">
                        {project.shortDescription}
                    </p>
                </div>

                {/* Technologies with better styling */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {(project.technologies || project.skills)
                        ?.slice(0, 4)
                        .map((tech) => (
                            <span
                                key={tech}
                                className="bg-gradient-to-r from-[var(--primary-color)]/15 to-[var(--secondary-color)]/15 text-[var(--text-primary)] px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border-color)]/40 hover:border-[var(--primary-color)]/60 transition-all duration-300 hover:scale-105 cursor-default">
                                {tech}
                            </span>
                        ))}
                    {(project?.technologies || project?.skills) &&
                        (project?.technologies?.length ||
                            project?.skills?.length ||
                            0) > 4 && (
                            <span className="text-[var(--text-secondary)] text-xs px-3 py-1.5 bg-[var(--secondary-bg)]/40 rounded-full border border-[var(--border-color)]/30 cursor-default">
                                +
                                {(project?.technologies?.length ||
                                    project?.skills?.length ||
                                    0) - 4}
                            </span>
                        )}
                </div>

                {/* Enhanced action buttons with proper cursor pointers */}
                <div className="flex gap-3">
                    <button
                        onClick={() => onMoreInfo(project)}
                        className="flex-1 pointer-cursor  bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 hover:from-[var(--primary-color)]/30 hover:to-[var(--secondary-color)]/30 text-[var(--text-primary)] text-center py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/50 transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
                        <span className="flex items-center justify-center gap-2">
                            More Details
                        </span>
                    </button>
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 pointer-cursor bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/90 hover:to-[var(--secondary-color)]/90 text-white text-center py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[var(--glow-primary)]/50 cursor-pointer">
                        <span className="flex items-center justify-center gap-2">
                            Live Demo
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
