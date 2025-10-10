import {Metadata} from "next";
import {getAllProjects} from "../../lib/projects";
import ProjectsPageClient from "./page-client";

/**
 * Static metadata for Projects Page
 */
export const metadata: Metadata = {
    title: "All Projects | Ripas Sorker Rifat - Full Stack Developer",
    description:
        "Explore my complete portfolio of web development projects including full-stack applications, frontend designs, backend systems, and more.",
    keywords: [
        "portfolio",
        "projects",
        "web development",
        "full stack developer",
        "Ripas Sorker Rifat",
        "frontend",
        "backend",
        "full stack",
    ],
    openGraph: {
        title: "All Projects | Ripas Sorker Rifat",
        description:
            "Explore my complete portfolio of web development projects",
        type: "website",
    },
};

/**
 * Projects Page - Server Component with Dynamic Rendering
 * Filters projects based on URL search params
 */
export default async function ProjectsPage({
    searchParams,
}: {
    searchParams: Promise<{category?: string}>;
}) {
    const params = await searchParams;
    const category = params.category || "all";

    // Fetch projects based on category filter (server-side)
    const projects = await getAllProjects({
        category: category !== "all" ? category : undefined,
        limit: 50,
    });

    // Pass server-fetched data to client component
    return <ProjectsPageClient initialProjects={projects} activeCategory={category} />;
}
