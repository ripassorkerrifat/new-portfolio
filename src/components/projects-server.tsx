import {getAllProjects, getFeaturedProjects} from "../lib/projects";
import ProjectsClient from "./projects-client";

/**
 * Server Component for Projects Section
 * Fetches data at build time (SSG) and passes to client component
 */
export default async function ProjectsServer() {
    // Fetch data at build time
    const [featuredProjects, allProjects] = await Promise.all([
        getFeaturedProjects(),
        getAllProjects({limit: 6}),
    ]);

    // Pass server-fetched data to client component
    return (
        <ProjectsClient
            initialFeaturedProjects={featuredProjects}
            initialProjects={allProjects}
        />
    );
}
