"use client";

import {useState, useEffect} from "react";
import {Project, Filter} from "../types/project";
import ProjectCard from "./project-card";
import FeaturedProjects from "./featured-projects";
import ProjectDetailsModal from "./project-details-modal";
import GalleryModal from "./gallery-modal";
import ProjectCTA from "./project-cta";

const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
    const [showGalleryModal, setShowGalleryModal] = useState<boolean>(false);
    const [selectedGallery, setSelectedGallery] = useState<string[]>([]);
    const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
    const [regularProjects, setRegularProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Debug state changes
    useEffect(() => {
        console.log("Featured projects state updated:", featuredProjects);
    }, [featuredProjects]);

    useEffect(() => {
        console.log("Regular projects state updated:", regularProjects);
    }, [regularProjects]);

    // Fetch featured projects
    const fetchFeaturedProjects = async () => {
        try {
            const response = await fetch("/api/projects/featured");
            if (response.ok) {
                const data = await response.json();
                console.log("Featured projects API response:", data);
                console.log("Featured projects array:", data.projects);
                setFeaturedProjects(data.projects || []);
            } else {
                console.error(
                    "Featured projects API error:",
                    response.status,
                    response.statusText
                );
            }
        } catch (error) {
            console.error("Error fetching featured projects:", error);
        }
    };

    // Fetch regular projects
    const fetchRegularProjects = async (category: string = "all") => {
        try {
            const url = `/api/projects/public?category=${category}&limit=6`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log("Regular projects API response:", data);
                console.log("Regular projects array:", data.projects);
                setRegularProjects(data.projects || []);
            } else {
                console.error(
                    "Regular projects API error:",
                    response.status,
                    response.statusText
                );
            }
        } catch (error) {
            console.error("Error fetching regular projects:", error);
            setError("Failed to load projects");
        }
    };

    // Load projects on component mount
    useEffect(() => {
        const loadProjects = async () => {
            setLoading(true);
            await Promise.all([
                fetchFeaturedProjects(),
                fetchRegularProjects(activeFilter),
            ]);
            setLoading(false);
        };
        loadProjects();
    }, [activeFilter]);

    // Reload regular projects when filter changes
    useEffect(() => {
        fetchRegularProjects(activeFilter);
    }, [activeFilter]);

    const filters: Filter[] = [
        {id: "all", label: "All Projects"},
        {id: "frontend", label: "Frontend"},
        {id: "backend", label: "Backend"},
        {id: "fullstack", label: "Full Stack"},
        {id: "other", label: "Other"},
    ];

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

    return (
        <section
            id="projects"
            className="py-8 sm:py-16 lg:py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)]">
            {/* Call to Action */}
            <ProjectCTA />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-6 animate-slide-up">
                        My{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Projects
                        </span>
                    </h2>
                    <p
                        className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-slide-up px-4"
                        style={{animationDelay: "0.2s"}}>
                        A showcase of my recent work and creative solutions that
                        demonstrate my expertise in modern web development
                    </p>
                </div>

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
                    <div className="mb-16">
                        <FeaturedProjects
                            projects={featuredProjects}
                            onMoreInfo={openProjectModal}
                            onGalleryOpen={openGalleryModal}
                        />
                    </div>
                )}

                {/* Enhanced Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 px-4">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`relative px-3 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold text-xs sm:text-base transition-all duration-500 transform hover:scale-105 ${
                                activeFilter === filter.id
                                    ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-2xl shadow-[var(--glow-primary)]/50 scale-105"
                                    : "glass border-2 border-[var(--border-color)]/50 text-[var(--text-secondary)] hover:border-[var(--secondary-color)]/80 hover:text-[var(--text-primary)] hover:shadow-xl hover:shadow-[var(--glow-secondary)]/30 backdrop-blur-lg"
                            }`}>
                            <span className="relative z-10">
                                {filter.label}
                            </span>
                            {activeFilter === filter.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl blur-xl"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-color)]"></div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="text-center py-12">
                        <p className="text-red-500 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)]/80 transition-colors">
                            Retry
                        </button>
                    </div>
                )}

                {/* Regular Projects Grid */}
                {!loading && !error && (
                    <div>
                        {regularProjects.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                {regularProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id || project._id}
                                        project={project}
                                        index={index}
                                        onMoreInfo={openProjectModal}
                                        onGalleryOpen={openGalleryModal}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-[var(--text-secondary)] text-lg">
                                    No projects found for the selected category.
                                </p>
                            </div>
                        )}
                    </div>
                )}

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
        </section>
    );
};

export default Projects;
