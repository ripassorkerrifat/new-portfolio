"use client";

import {useState} from "react";
import {Project} from "../types/project";
import ProjectCard from "./project-card";
import ProjectDetailsModal from "./project-details-modal";
import GalleryModal from "./gallery-modal";
import ProjectCTA from "./project-cta";
import Link from "next/link";

interface ProjectsProps {
    initialFeaturedProjects?: Project[];
    initialProjects?: Project[];
}

const Projects: React.FC<ProjectsProps> = ({initialProjects = []}) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
    const [showGalleryModal, setShowGalleryModal] = useState<boolean>(false);
    const [selectedGallery, setSelectedGallery] = useState<string[]>([]);

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
                <div className="text-center mb-16 sm:mb-20">
                    {/* Subtitle Badge */}
                    <div className="mb-8 animate-slide-up inline-block">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-pulse"></div>
                            <span className="text-xs sm:text-sm font-semibold text-[var(--primary-color)] uppercase tracking-wider">
                                Portfolio
                            </span>
                        </div>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight animate-slide-up"
                        style={{animationDelay: "0.1s"}}>
                        My{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent font-black">
                            Projects
                        </span>
                    </h2>
                    <p
                        className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed animate-slide-up font-light"
                        style={{animationDelay: "0.2s"}}>
                        A showcase of my recent work and creative solutions that
                        demonstrate my expertise in modern web development
                    </p>
                </div>

                {/* Projects Grid */}
                <div>
                    {initialProjects.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-12">
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

                            {/* Browse All Projects Button */}
                            <div className="text-center flex justify-end mt-6">
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[var(--glow-primary)]/50 group">
                                    <span>Browse All Projects</span>
                                    <svg
                                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-[var(--text-secondary)] text-lg">
                                No projects available at the moment.
                            </p>
                        </div>
                    )}
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
        </section>
    );
};

export default Projects;
