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
    published?: boolean; // This is now ignored since the public endpoint only returns published
}): Promise<Project[]> {
    try {
        const params = new URLSearchParams();
        
        // Only add category if it's specified and not 'all'
        if (options?.category && options.category !== "all") {
            params.append("category", options.category);
        }
        
        // Add limit if specified (default is 6 in the API)
        if (options?.limit) {
            params.append("limit", options.limit.toString());
        }

        const queryString = params.toString();
        const url = `${BASE_URL}/api/projects/public${queryString ? `?${queryString}` : ""}`;
        
        const response = await fetch(url, {
            next: { revalidate: 3600 }, // Revalidate every hour (ISR)
            headers: {
                'Content-Type': 'application/json',
            },
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
export async function getProjectById(id: string, includeUnpublished: boolean = false): Promise<Project | null> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const url = new URL(`${baseUrl}/api/projects/${id}`);
        
        // Add includeUnpublished parameter if needed
        if (includeUnpublished) {
            url.searchParams.append('includeUnpublished', 'true');
        }

        const response = await fetch(url.toString(), {
            next: { revalidate: 3600 }, // Revalidate every hour (ISR)
        });

        if (!response.ok) {
            console.error(`Failed to fetch project ${id}:`, response.status, response.statusText);
            return null;
        }

        const data = await response.json();
        
        // Double-check the published status as a safety measure
        if (!includeUnpublished && !data.project?.is_published) {
            console.warn('Received unpublished project when not requested:', id);
            return null;
        }
        
        return data.project || null;
    } catch (error) {
        console.error('Error fetching project by ID:', error);
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
