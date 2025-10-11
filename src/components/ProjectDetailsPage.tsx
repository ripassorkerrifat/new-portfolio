/* eslint-disable @next/next/no-img-element */
"use client";

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Project} from "../types/project";
import {
    ExternalLink,
    Github,
    Tag,
    Images,
    Code,
    Eye,
    Play,
    Award,
    Home,
    ChevronRight,
} from "lucide-react";
import GalleryModal from "./gallery-modal";

interface ProjectDetailsPageProps {
    project: Project;
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({project}) => {
    const router = useRouter();
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [selectedGallery, setSelectedGallery] = useState<string[]>([]);

    const openGalleryModal = (gallery: string[]) => {
        setSelectedGallery(gallery);
        setShowGalleryModal(true);
    };

    const closeGalleryModal = () => {
        setShowGalleryModal(false);
        setSelectedGallery([]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)]">
            {/* Header with Back Button - Exact same as projects page */}
            <div className="sticky top-0 z-40 glass border-b border-[var(--border-color)]/30 backdrop-blur-xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-6 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center cursor-pointer gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group">
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            <span className="font-medium">Back</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Breadcrumb - Hidden on mobile */}
                <nav
                    aria-label="Breadcrumb"
                    className="hidden md:block mb-4 sm:mb-6 overflow-x-auto">
                    <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm whitespace-nowrap">
                        <li className="flex items-center">
                            <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-[var(--text-secondary)] flex-shrink-0" />
                            <Link
                                href="/"
                                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                                Home
                            </Link>
                        </li>
                        <li className="flex items-center">
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-[var(--text-secondary)] flex-shrink-0" />
                            <Link
                                href="/projects"
                                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                                Projects
                            </Link>
                        </li>
                        <li className="flex items-center min-w-0">
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-[var(--text-secondary)] flex-shrink-0" />
                            <span className="text-[var(--text-primary)] font-medium truncate max-w-[120px] sm:max-w-none">
                                {project.title}
                            </span>
                        </li>
                    </ol>
                </nav>

                {/* Title - Top on mobile only */}
                <div className="mb-6 md:hidden">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                            {project.title}
                        </span>
                    </h1>
                </div>

                <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="relative group animate-slide-up">
                            <div className="absolute -inset-8 bg-gradient-to-r from-[var(--primary-color)]/30 via-[var(--secondary-color)]/20 to-[var(--accent-color)]/30 rounded-[2rem] blur-3xl group-hover:blur-[4rem] transition-all duration-700 opacity-60 w-full"></div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                            <div className="relative overflow-hidden rounded-3xl border border-[var(--border-color)]/20 shadow-2xl">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-auto max-h-[75vh] object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                <div className="absolute  inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                                <div className="absolute  inset-0 bg-gradient-to-br from-[var(--primary-color)]/10 via-transparent to-[var(--secondary-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="absolute md:bottom-8 md:left-8 bottom-4 left-4 flex flex-wrap gap-4">
                                    <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl text-white md:px-6 px-3 md:py-3 py-2 rounded-2xl md:text-sm text-xs font-bold border border-white/20 shadow-xl">
                                        <Tag className="w-5 h-5" />
                                        <span>
                                            {project.category
                                                ?.replace("-", " ")
                                                .toUpperCase() || "PROJECT"}
                                        </span>
                                    </div>

                                    {(project.featured ||
                                        project.is_featured) && (
                                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white md:px-6 px-3 md:py-3 py-2 rounded-2xl md:text-sm text-xs font-bold shadow-xl animate-pulse">
                                            <Award className="size-4" />
                                            <span>Featured Project</span>
                                        </div>
                                    )}

                                    {project.liveUrl && (
                                        <div className="inline-flex items-center gap-3 bg-emerald-500/20 backdrop-blur-xl text-emerald-100 md:px-6 px-3 md:py-3 py-2 rounded-2xl md:text-sm text-xs font-semibold border border-emerald-400/30 shadow-xl">
                                            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                                            <span>Live & Active</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="lg:col-span-1 flex flex-col gap-4 animate-slide-up"
                        style={{animationDelay: "0.2s"}}>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                                    <ExternalLink className="size-5" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm opacity-90">
                                            View
                                        </span>
                                        <span>Live Demo</span>
                                    </div>
                                    <Play className="size-6 ml-auto" />
                                </div>
                            </a>
                        )}

                        {((project.galleryImages?.length ?? 0) > 0 ||
                            (project.gallery?.length ?? 0) > 0) && (
                            <button
                                onClick={() =>
                                    openGalleryModal(
                                        project.galleryImages ||
                                            project.gallery ||
                                            []
                                    )
                                }
                                className="group relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] text-white px-6 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                                    <Images className="size-5" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm opacity-90">
                                            View
                                        </span>
                                        <span>Gallery</span>
                                    </div>
                                    <Eye className="size-6 ml-auto" />
                                </div>
                            </button>
                        )}

                        {(project.githubUrl || project.githubLink1) && (
                            <a
                                href={project.githubUrl || project.githubLink1}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-6 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                                    <Github className="size-6" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm opacity-90">
                                            View
                                        </span>
                                        <span>Source Code</span>
                                    </div>
                                    <Code className="size-6 ml-auto" />
                                </div>
                            </a>
                        )}

                        <div className="mt-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl flex items-center justify-center">
                                    <Code className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-[var(--text-primary)]">
                                        Technologies
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {(project.technologies || project.skills)?.map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 bg-[var(--secondary-bg)] text-[var(--text-primary)] rounded-2xl text-sm font-medium border border-[var(--border-color)]/60 hover:border-[var(--primary-color)]/50 transition-colors duration-300">
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    {/* Title - Hidden on mobile, shown on desktop */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 hidden md:block">
                        <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                            {project.title}
                        </span>
                    </h1>
                    {/* Description - Shown on both mobile and desktop */}
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                        {project.shortDescription}
                    </p>
                </div>
            </div>

            <div className="md:py-20 py-10 bg-gradient-to-b from-[var(--primary-bg)] to-[var(--secondary-bg)]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {project.description && (
                            <div className="animate-slide-up">
                                <div className="bg-gradient-to-br from-[var(--secondary-bg)]/60 to-[var(--secondary-bg)]/40 backdrop-blur-xl rounded-3xl p-4 md:p-8 border border-[var(--border-color)]/20">
                                    <div
                                        className="text-[var(--text-secondary)] leading-relaxed text-lg project-description"
                                        dangerouslySetInnerHTML={{
                                            __html: project.description || "",
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <GalleryModal
                images={selectedGallery}
                isOpen={showGalleryModal}
                onClose={closeGalleryModal}
            />
        </div>
    );
};

export default ProjectDetailsPage;
