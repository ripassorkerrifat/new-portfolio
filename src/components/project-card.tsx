/* eslint-disable @next/next/no-img-element */
"use client";

import {Project} from "../types/project";
import {Images, ExternalLink, Info, Star, Zap} from "lucide-react";

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
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-[var(--primary-color)]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 animate-slide-up"
            style={{animationDelay: `${index * 0.1}s`}}>
            {/* Simple animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/5 via-transparent to-[var(--secondary-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Single glowing effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

            {/* Project Thumbnail */}
            <div className="relative h-52 overflow-hidden rounded-t-2xl">
                <img
                    src={project.thumbnail}
                    alt={`${project.title}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Floating action buttons */}
                <div className="absolute top-4 left-4 flex gap-2">
                    {/* Gallery button */}
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
                            className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                            title="View Gallery">
                            <Images className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Featured badge */}
                {(project?.featured || project?.is_featured) && (
                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg">
                            <Star className="w-3 h-3 fill-current" />
                            Featured
                        </div>
                    </div>
                )}

                {/* Category badge */}
                <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-medium border border-white/20">
                        <Zap className="w-3 h-3" />
                        {project.category?.replace("-", " ").toUpperCase() ||
                            "PROJECT"}
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="relative p-4 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/95 backdrop-blur-md border-t border-white/5">
                {/* Project title */}
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-color)] transition-colors duration-300 line-clamp-1 leading-tight">
                    {project.title}
                </h4>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-2 mb-4 min-h-[2.5rem]">
                    {project.shortDescription}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {(project.technologies || project.skills)
                        ?.slice(0, 3)
                        .map((tech) => (
                            <span
                                key={tech}
                                className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 text-[var(--text-primary)] px-3 py-1 rounded-lg text-xs font-medium border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/40 hover:bg-[var(--primary-color)]/5 transition-all duration-300">
                                {tech}
                            </span>
                        ))}
                    {(project?.technologies || project?.skills) &&
                        (project?.technologies?.length ||
                            project?.skills?.length ||
                            0) > 3 && (
                            <span className="text-[var(--text-secondary)] text-xs px-3 py-1 bg-[var(--secondary-bg)]/30 rounded-lg border border-[var(--border-color)]/20">
                                +
                                {(project?.technologies?.length ||
                                    project?.skills?.length ||
                                    0) - 3}
                            </span>
                        )}
                </div>

                {/* Enhanced action buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={() => onMoreInfo(project)}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--secondary-bg)]/60 to-[var(--secondary-bg)]/40 hover:from-[var(--secondary-bg)]/80 hover:to-[var(--secondary-bg)]/60 text-[var(--text-primary)] py-3.5 px-5 rounded-2xl text-sm font-bold transition-all duration-300 border border-[var(--border-color)]/40 hover:border-[var(--primary-color)]/60 hover:scale-105 cursor-pointer group/btn shadow-lg hover:shadow-xl backdrop-blur-sm">
                        <Info className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>Details</span>
                    </button>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)] hover:from-[var(--primary-color)]/90 hover:via-[var(--secondary-color)]/90 hover:to-[var(--primary-color)]/90 text-white py-3.5 px-5 rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[var(--primary-color)]/40 cursor-pointer group/btn relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300 relative z-10" />
                            <span className="relative z-10">Live Demo</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Simple corner decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--primary-color)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
};

export default ProjectCard;
