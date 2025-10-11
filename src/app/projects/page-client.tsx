"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {Project, Filter} from "../../types/project";
import ProjectCard from "../../components/project-card";
import ProjectDetailsModal from "../../components/project-details-modal";
import GalleryModal from "../../components/gallery-modal";
import Breadcrumb from "../../components/Breadcrumb";

interface ProjectsPageClientProps {
    initialProjects: Project[];
    activeCategory: string;
}

export default function ProjectsPageClient({
    initialProjects,
    activeCategory,
}: ProjectsPageClientProps) {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
    const [showGalleryModal, setShowGalleryModal] = useState<boolean>(false);
    const [selectedGallery, setSelectedGallery] = useState<string[]>([]);

    const filters: Filter[] = [
        {id: "all", label: "All Projects"},
        {id: "front-end", label: "Frontend"},
        {id: "backend", label: "Backend"},
        {id: "full-stack", label: "Full Stack"},
        {id: "others", label: "Others"},
    ];

    // Handle filter change with URL navigation
    const handleFilterChange = (filterId: string) => {
        if (filterId === "all") {
            router.push("/projects");
        } else {
            router.push(`/projects?category=${filterId}`);
        }
    };

    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
        setShowProjectModal(true);
    };

    const openGalleryModal = (gallery: string[]) => {
        setSelectedGallery(gallery);
        setShowGalleryModal(true);
    };

    const closeModals = () => {
        setShowProjectModal(false);
        setShowGalleryModal(false);
        setSelectedProject(null);
        setSelectedGallery([]);
    };

    const handleBackClick = () => {
        router.push("/#projects");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)]">
            {/* Header with Back Button */}
            <div className="sticky top-0 z-40 glass border-b border-[var(--border-color)]/30 backdrop-blur-xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-6 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleBackClick}
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
                {/* Breadcrumb Navigation */}
                <Breadcrumb />

                {/* Page Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 animate-slide-up">
                        My Complete{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Portfolio
                        </span>
                    </h2>
                    <p
                        className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-slide-up px-4"
                        style={{animationDelay: "0.2s"}}>
                        Explore all my projects and creative solutions across
                        different technologies and domains
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 px-4">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => handleFilterChange(filter.id)}
                            className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold text-xs sm:text-base transition-all duration-500 transform hover:scale-105 ${
                                activeCategory === filter.id
                                    ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-2xl shadow-[var(--glow-primary)]/50 scale-105"
                                    : "glass border-2 border-[var(--border-color)]/50 text-[var(--text-secondary)] hover:border-[var(--secondary-color)]/80 hover:text-[var(--text-primary)] hover:shadow-xl hover:shadow-[var(--glow-secondary)]/30 backdrop-blur-lg"
                            }`}>
                            <span className="relative z-10">
                                {filter.label}
                            </span>
                            {activeCategory === filter.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl blur-xl"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div>
                    {initialProjects.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
                                {initialProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id || project._id}
                                        project={project}
                                        index={index}
                                        onMoreInfo={openProjectModal}
                                        onGalleryOpen={openGalleryModal}
                                    />
                                ))}
                            </div>

                            {/* Projects Count */}
                            <div className="text-center mt-12">
                                <p className="text-[var(--text-secondary)] text-lg">
                                    Showing {initialProjects.length} project
                                    {initialProjects.length !== 1 ? "s" : ""}
                                    {activeCategory !== "all" &&
                                        ` in ${
                                            filters.find(
                                                (f) => f.id === activeCategory
                                            )?.label
                                        }`}
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">📂</div>
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                No Projects Found
                            </h3>
                            <p className="text-[var(--text-secondary)] text-lg">
                                No projects found for the selected category.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modals */}
            <ProjectDetailsModal
                project={selectedProject}
                isOpen={showProjectModal}
                onClose={closeModals}
                onGalleryOpen={openGalleryModal}
            />

            <GalleryModal
                images={selectedGallery}
                isOpen={showGalleryModal}
                onClose={closeModals}
            />
        </div>
    );
}
