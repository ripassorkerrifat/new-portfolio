/* eslint-disable @next/next/no-img-element */
"use client";

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Project} from "../types/project";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Tag,
    Zap,
    Images,
    Globe,
    Code,
    Target,
    CheckCircle,
    Eye,
    Play,
    Sparkles,
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

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Breadcrumb Navigation - Responsive */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-4 sm:mb-6 overflow-x-auto">
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

                {/* Project Image First */}
                <div className="mb-12">
                    <div className="relative group animate-slide-up">
                        {/* Multiple Glow Layers */}
                        <div className="absolute -inset-8 bg-gradient-to-r from-[var(--primary-color)]/30 via-[var(--secondary-color)]/20 to-[var(--accent-color)]/30 rounded-[2rem] blur-3xl group-hover:blur-[4rem] transition-all duration-700 opacity-60"></div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                        {/* Main Image Container */}
                        <div className="relative overflow-hidden rounded-3xl border border-[var(--border-color)]/20 shadow-2xl">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-auto max-h-[75vh] object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)]/10 via-transparent to-[var(--secondary-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Enhanced Floating Badges */}
                            <div className="absolute md:bottom-8 md:left-8  md:right-8 bottom-4 left-4 right-4 flex flex-wrap gap-4">
                                <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl text-white md:px-6 px-3 md:py-3 py-2  rounded-2xl md:text-sm text-xs font-bold border border-white/20 shadow-xl">
                                    <Tag className="w-5 h-5" />
                                    <span>
                                        {project.category
                                            ?.replace("-", " ")
                                            .toUpperCase() || "PROJECT"}
                                    </span>
                                </div>

                                {(project.featured || project.is_featured) && (
                                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white md:px-6 px-3 md:py-3 py-2  rounded-2xl md:text-sm text-xs font-bold shadow-xl animate-pulse">
                                        <Award className="w-5 h-5" />
                                        <span>Featured Project</span>
                                    </div>
                                )}

                                {project.liveUrl && (
                                    <div className="inline-flex items-center gap-3 bg-emerald-500/20 backdrop-blur-xl text-emerald-100 md:px-6 px-3 md:py-3 py-2  rounded-2xl md:text-sm text-xs font-semibold border border-emerald-400/30 shadow-xl">
                                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                                        <span>Live & Active</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Page Header - Left Aligned */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                            {project.title}
                        </span>
                    </h1>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl">
                        {project.shortDescription}
                    </p>
                </div>

                {/* Simple Technologies Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl flex items-center justify-center">
                            <Code className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                                Technologies
                            </h2>
                            <p className="text-[var(--text-secondary)] text-sm">
                                Built with modern tech stack
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {(project.technologies || project.skills)?.map(
                            (tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1.5 sm:px-4 sm:py-2 bg-[var(--secondary-bg)] text-[var(--text-primary)] rounded-lg text-sm font-medium border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/50 transition-colors duration-300">
                                    {tech}
                                </span>
                            )
                        )}
                    </div>
                </div>

                {/* Simple Project Links Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-[var(--accent-color)] to-[var(--primary-color)] rounded-xl flex items-center justify-center">
                            <Globe className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                                Project Links
                            </h2>
                            <p className="text-[var(--text-secondary)] text-sm">
                                Explore the project resources
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-4">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 sm:gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors duration-300">
                                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span className="hidden xs:inline">
                                    View Live Demo
                                </span>
                                <span className="xs:hidden">Live Demo</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}

                        {(project.githubUrl || project.githubLink1) && (
                            <a
                                href={project.githubUrl || project.githubLink1}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors duration-300">
                                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                Source Code
                                <ExternalLink className="w-3 h-3" />
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
                                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[var(--secondary-color)] hover:bg-[var(--secondary-color)]/80 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors duration-300">
                                <Images className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                Gallery (
                                {(project.galleryImages?.length ?? 0) +
                                    (project.gallery?.length ?? 0)}
                                )
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="md:py-20 py-10 bg-gradient-to-b from-[var(--primary-bg)] to-[var(--secondary-bg)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-16">
                        {/* Project Overview */}
                        {project.description && (
                            <div className="animate-slide-up">
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl flex items-center justify-center">
                                            <Sparkles className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                                            Project Overview
                                        </h2>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[var(--secondary-bg)]/60 to-[var(--secondary-bg)]/40 backdrop-blur-xl rounded-3xl p-4 md:p-12 border border-[var(--border-color)]/20">
                                    <div
                                        className="text-[var(--text-secondary)] leading-relaxed text-lg project-description"
                                        dangerouslySetInnerHTML={{
                                            __html: project.description || "",
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Challenges & Solutions */}
                        {project.challenges && (
                            <div className="animate-slide-up">
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] rounded-2xl flex items-center justify-center">
                                            <Target className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                                            Challenges & Solutions
                                        </h2>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[var(--secondary-bg)]/60 to-[var(--secondary-bg)]/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[var(--border-color)]/20">
                                    <div
                                        className="text-[var(--text-secondary)] leading-relaxed text-lg project-description"
                                        dangerouslySetInnerHTML={{
                                            __html: project.challenges || "",
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Results & Impact */}
                        {project.results && (
                            <div className="animate-slide-up">
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-color)] to-[var(--primary-color)] rounded-2xl flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                                            Results & Impact
                                        </h2>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[var(--secondary-bg)]/60 to-[var(--secondary-bg)]/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[var(--border-color)]/20">
                                    <div
                                        className="text-[var(--text-secondary)] leading-relaxed text-lg project-description"
                                        dangerouslySetInnerHTML={{
                                            __html: project.results || "",
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="py-16 bg-gradient-to-br from-[var(--primary-bg)] to-[var(--secondary-bg)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-br from-[var(--secondary-bg)]/80 to-[var(--secondary-bg)]/60 backdrop-blur-xl rounded-3xl p-4 py-8 md:p-12 border border-[var(--border-color)]/20 shadow-2xl">
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                                    Ready to Explore More?
                                </h2>
                                <p className="text-[var(--text-secondary)] md:text-lg leading-relaxed">
                                    Check out more of my projects or get in
                                    touch to discuss potential collaborations.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/80 hover:to-[var(--secondary-color)]/80 text-white px-8 py-4 rounded-xl font-semibold md:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[var(--primary-color)]/30">
                                    <Eye className="w-5 h-5" />
                                    View All Projects
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                                </Link>

                                <Link
                                    href="/#contact"
                                    className="inline-flex items-center gap-3 bg-[var(--secondary-bg)]/80 backdrop-blur-xl hover:bg-[var(--secondary-bg)] text-[var(--text-primary)] px-8 py-4 rounded-xl font-semibold md:text-lg transition-all duration-300 hover:scale-105 border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/50 shadow-xl hover:shadow-2xl">
                                    <Zap className="w-5 h-5" />
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Modal */}
            <GalleryModal
                images={selectedGallery}
                isOpen={showGalleryModal}
                onClose={closeGalleryModal}
            />
        </div>
    );
};

export default ProjectDetailsPage;
