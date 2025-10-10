/**
 * Server-side data fetching utilities for projects
 * Used for Static Site Generation (SSG) at build time
 */

import {Project} from "../types/project";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/**
 * Fetch all published projects for SSG
 * This runs at build time
 */
export async function getAllProjects(options?: {
    category?: string;
    limit?: number;
}): Promise<Project[]> {
    try {
        const params = new URLSearchParams();
        if (options?.category && options.category !== "all") {
            params.append("category", options.category);
        }
        if (options?.limit) {
            params.append("limit", options.limit.toString());
        }

        const url = `${BASE_URL}/api/projects/public${params.toString() ? `?${params.toString()}` : ""}`;
        
        const response = await fetch(url, {
            next: {revalidate: 3600}, // Revalidate every hour (ISR)
        });

        if (!response.ok) {
            console.error("Failed to fetch projects:", response.statusText);
            return [];
        }

        const data = await response.json();
        return data.projects || [];
    } catch (error) {
        console.error("Error fetching all projects:", error);
        return [];
    }
}

/**
 * Fetch featured projects for SSG
 * This runs at build time
 */
export async function getFeaturedProjects(): Promise<Project[]> {
    try {
        const response = await fetch(`${BASE_URL}/api/projects/featured`, {
            next: {revalidate: 3600}, // Revalidate every hour (ISR)
        });

        if (!response.ok) {
            console.error("Failed to fetch featured projects:", response.statusText);
            return [];
        }

        const data = await response.json();
        return data.projects || [];
    } catch (error) {
        console.error("Error fetching featured projects:", error);
        return [];
    }
}

/**
 * Fetch a single project by ID for SSG
 * This runs at build time
 */
export async function getProjectById(id: string): Promise<Project | null> {
    try {
        const response = await fetch(`${BASE_URL}/api/projects/${id}`, {
            next: {revalidate: 3600}, // Revalidate every hour (ISR)
        });

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data.project || null;
    } catch (error) {
        console.error(`Error fetching project ${id}:`, error);
        return null;
    }
}

/**
 * Get all project IDs for generateStaticParams
 * This runs at build time to generate all project pages
 */
export async function getAllProjectIds(): Promise<string[]> {
    try {
        const projects = await getAllProjects({limit: 100});
        return projects.map((project) => project._id || project.id?.toString()).filter(Boolean) as string[];
    } catch (error) {
        console.error("Error getting project IDs:", error);
        return [];
    }
}

/**
 * Get unique project categories for filtering
 */
export async function getProjectCategories(): Promise<string[]> {
    try {
        const projects = await getAllProjects();
        const categories = new Set(projects.map((p) => p.category).filter(Boolean));
        return Array.from(categories);
    } catch (error) {
        console.error("Error getting categories:", error);
        return [];
    }
}
