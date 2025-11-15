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
        <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] relative overflow-hidden pb-10">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[var(--accent-color)]/15 to-[var(--primary-color)]/15 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[var(--secondary-color)]/10 to-[var(--accent-color)]/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Header with Back Button */}
            <div className="sticky top-0 z-40 glass border-b border-[var(--border-color)]/30 backdrop-blur-xl">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-6 py-4 relative z-10">
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5 relative z-10">
                {/* Breadcrumb Navigation */}
                <Breadcrumb />

                {/* Page Header */}
                <div className="text-center mb-10 animate-slide-up">
                    <div className="mb-8 inline-block">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 border border-[var(--primary-color)]/40 backdrop-blur-md">
                            <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"></div>
                            <span className="text-xs sm:text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider">
                                Portfolio
                            </span>
                        </div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[var(--text-primary)] mb-6 leading-tight">
                        My Complete{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-light">
                        Explore all my creative solutions and professional
                        projects across different technologies, domains, and
                        innovative ideas
                    </p>
                </div>

                {/* Filter Tabs */}
                <div
                    className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 px-4 animate-slide-up"
                    style={{animationDelay: "0.1s"}}>
                    {filters.map((filter, idx) => (
                        <button
                            key={filter.id}
                            onClick={() => handleFilterChange(filter.id)}
                            className={`relative px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-500 transform hover:scale-105 ${
                                activeCategory === filter.id
                                    ? "bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] text-white shadow-2xl shadow-[var(--primary-color)]/40 scale-105"
                                    : "glass border border-[var(--border-color)]/50 text-[var(--text-secondary)] hover:border-[var(--primary-color)]/70 hover:text-[var(--text-primary)] hover:shadow-xl hover:shadow-[var(--primary-color)]/20 backdrop-blur-md"
                            }`}
                            style={{animationDelay: `${0.15 + idx * 0.05}s`}}>
                            <span className="relative z-10">
                                {filter.label}
                            </span>
                            {activeCategory === filter.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/30 to-[var(--secondary-color)]/30 rounded-2xl blur-xl -z-10"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div
                    className="animate-slide-up"
                    style={{animationDelay: "0.2s"}}>
                    {initialProjects.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                                {initialProjects.map((project, index) => (
                                    <div
                                        key={project.id || project._id}
                                        style={{
                                            animationDelay: `${
                                                0.25 + index * 0.08
                                            }s`,
                                        }}
                                        className="animate-slide-up">
                                        <ProjectCard
                                            project={project}
                                            index={index}
                                            onMoreInfo={openProjectModal}
                                            onGalleryOpen={openGalleryModal}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Projects Count */}
                            <div className="text-center mt-16 sm:mt-20">
                                <p className="text-[var(--text-secondary)] text-lg font-light">
                                    Showing{" "}
                                    <span className="font-bold text-[var(--primary-color)]">
                                        {initialProjects.length}
                                    </span>{" "}
                                    project
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
                        <div className="text-center py-24">
                            <div className="text-7xl mb-6">📂</div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
                                No Projects Found
                            </h3>
                            <p className="text-[var(--text-secondary)] text-lg font-light">
                                No projects found for the selected category. Try
                                another filter!
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
