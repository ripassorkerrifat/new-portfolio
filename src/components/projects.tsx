"use client";

import {useState} from "react";
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

    const projects: Project[] = [
        {
            id: 1,
            title: "E-commerce Platform",
            category: "fullstack" as const,
            description:
                "A complete e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
            image: "🛒",
            thumbnail:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
            liveUrl: "https://ecommerce-demo.com",
            githubUrl: "https://github.com/ripassorkerrifat/ecommerce",
            featured: true,
            detailedDescription:
                "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, secure payment processing with Stripe, inventory management, order tracking, and a complete admin dashboard for managing products, orders, and users.",
            challenges:
                "Implementing secure payment processing, optimizing database queries for large product catalogs, and creating a responsive design that works across all devices.",
            results:
                "Successfully deployed platform handling 1000+ daily transactions with 99.9% uptime and positive user feedback.",
            gallery: [
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            ],
        },
        {
            id: 2,
            title: "Task Management App",
            category: "frontend" as const,
            description:
                "A modern task management application built with Next.js and TypeScript. Features drag-and-drop functionality and real-time updates.",
            image: "📋",
            thumbnail:
                "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
            technologies: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
            ],
            liveUrl: "https://taskapp-demo.com",
            githubUrl: "https://github.com/ripassorkerrifat/taskapp",
            featured: true,
            detailedDescription:
                "A sophisticated task management application with intuitive drag-and-drop functionality, real-time collaboration features, and beautiful animations. Built with Next.js and TypeScript for optimal performance and type safety.",
            challenges:
                "Creating smooth drag-and-drop interactions, implementing real-time updates across multiple users, and maintaining state consistency.",
            results:
                "Achieved 40% increase in team productivity with seamless collaboration features and intuitive user interface.",
            gallery: [
                "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
            ],
        },
        {
            id: 3,
            title: "Weather Dashboard",
            category: "frontend" as const,
            description:
                "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
            image: "🌤️",
            thumbnail:
                "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
            technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
            liveUrl: "https://weather-dashboard.com",
            githubUrl: "https://github.com/ripassorkerrifat/weather-app",
            featured: false,
            detailedDescription:
                "An interactive weather dashboard providing comprehensive weather information with beautiful data visualizations, location-based forecasts, and detailed analytics powered by OpenWeather API.",
            challenges:
                "Integrating multiple weather APIs, creating responsive charts and graphs, and optimizing performance for real-time data updates.",
            results:
                "Delivered accurate weather predictions with engaging visual interface, used by 500+ users daily.",
            gallery: [
                "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
            ],
        },
        {
            id: 4,
            title: "REST API Server",
            category: "backend" as const,
            description:
                "A scalable REST API server with authentication, rate limiting, and comprehensive documentation using Swagger.",
            image: "🔌",
            thumbnail:
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
            technologies: [
                "Node.js",
                "Express",
                "PostgreSQL",
                "JWT",
                "Swagger",
            ],
            liveUrl: "https://api-server-demo.com",
            githubUrl: "https://github.com/ripassorkerrifat/api-server",
            featured: false,
            detailedDescription:
                "A robust and scalable REST API server built with Node.js and Express. Features comprehensive authentication system, rate limiting, input validation, and auto-generated API documentation with Swagger.",
            challenges:
                "Implementing secure authentication flows, designing efficient database schemas, and creating comprehensive API documentation.",
            results:
                "Successfully handles 10,000+ API requests per minute with 99.8% uptime and comprehensive security measures.",
            gallery: [
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
            ],
        },
        {
            id: 5,
            title: "Social Media Dashboard",
            category: "fullstack" as const,
            description:
                "A comprehensive social media management dashboard with analytics, post scheduling, and multi-platform integration.",
            image: "📱",
            thumbnail:
                "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
            technologies: [
                "React",
                "Node.js",
                "Redis",
                "Socket.io",
                "Chart.js",
            ],
            liveUrl: "https://social-dashboard.com",
            githubUrl: "https://github.com/ripassorkerrifat/social-dashboard",
            featured: true,
            detailedDescription:
                "A powerful social media management platform that allows users to manage multiple social media accounts from a single dashboard. Features include post scheduling, analytics tracking, engagement monitoring, and real-time notifications.",
            challenges:
                "Integrating multiple social media APIs, implementing real-time data synchronization, and creating intuitive analytics visualizations.",
            results:
                "Increased social media engagement by 60% for users, with streamlined workflow reducing management time by 50%.",
            gallery: [
                "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop",
            ],
        },
        {
            id: 6,
            title: "Portfolio Website",
            category: "frontend" as const,
            description:
                "A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.",
            image: "💼",
            thumbnail:
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
            technologies: [
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "TypeScript",
            ],
            liveUrl: "https://portfolio-demo.com",
            githubUrl: "https://github.com/ripassorkerrifat/portfolio",
            featured: false,
            detailedDescription:
                "A sleek and modern portfolio website showcasing projects and skills with beautiful animations, responsive design, and optimized performance. Built with Next.js and enhanced with Framer Motion for smooth interactions.",
            challenges:
                "Creating smooth animations without compromising performance, implementing dark mode with seamless transitions, and optimizing for SEO.",
            results:
                "Achieved 95+ Lighthouse score across all metrics, with engaging user experience and professional presentation.",
            gallery: [
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop",
            ],
        },
    ];

    const filters: Filter[] = [
        {id: "all", label: "All Projects"},
        {id: "fullstack", label: "Full Stack"},
        {id: "frontend", label: "Frontend"},
        {id: "backend", label: "Backend"},
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

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
            className="py-20 bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)]">
            {/* Call to Action */}
            <ProjectCTA />
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 animate-slide-up">
                        My{" "}
                        <span className="bg-gradient-to-r from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--accent-color)] bg-clip-text text-transparent animate-glow">
                            Projects
                        </span>
                    </h2>
                    <p
                        className="text-[var(--text-secondary)] text-base md:text-lg max-w-3xl mx-auto leading-relaxed animate-slide-up"
                        style={{animationDelay: "0.2s"}}>
                        A showcase of my recent work and creative solutions that
                        demonstrate my expertise in modern web development
                    </p>
                </div>

                {/* Featured Projects */}
                <FeaturedProjects
                    projects={projects}
                    onMoreInfo={openProjectModal}
                    onGalleryOpen={openGalleryModal}
                />

                {/* Enhanced Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`relative px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-500 transform hover:scale-105 ${
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

                {/* All Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onMoreInfo={openProjectModal}
                            onGalleryOpen={openGalleryModal}
                        />
                    ))}
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
