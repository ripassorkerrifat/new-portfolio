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

                {/* Projects Grid */}
                <div>
                    {initialProjects.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                            <div className="text-center mt-12">
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
