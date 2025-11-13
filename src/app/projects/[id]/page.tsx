import {Metadata} from "next";
import {notFound} from "next/navigation";
import ProjectDetailsPage from "@/components/ProjectDetailsPage";

interface ProjectPageProps {
    params: {
        id: string;
    };
}

// Function to fetch project data with ISR (Incremental Static Regeneration)
async function getProject(id: string, includeUnpublished: boolean = false) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const url = new URL(`${baseUrl}/api/projects/${id}`);
        
        // Add includeUnpublished parameter if needed
        if (includeUnpublished) {
            url.searchParams.append('includeUnpublished', 'true');
        }

        const response = await fetch(url.toString(), {
            next: { revalidate: 3600 }, // Revalidate every hour (ISR)
            headers: {
                "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=3600",
            },
        });

        if (!response.ok) {
            console.error(`Failed to fetch project ${id}:`, response.status, response.statusText);
            return null;
        }

        const data = await response.json();
        const project = data.project;

        // Double-check the published status as a safety measure
        if (!includeUnpublished && project && !project.is_published) {
            console.warn('Received unpublished project when not requested:', id);
            return null;
        }

        return project || null;
    } catch (error) {
        console.error("Error fetching project:", error);
        return null;
    }
}

// Generate metadata for SEO
export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const project = await getProject(params.id);

    if (!project) {
        return {
            title: "Project Not Found | Ripas Sorker Rifat",
            description: "The requested project could not be found.",
            robots: {
                index: false,
                follow: true,
                nocache: true,
                googleBot: {
                    index: false,
                    follow: false,
                    noimageindex: true,
                    "max-video-preview": -1,
                    "max-image-preview": "none",
                    "max-snippet": -1,
                },
            },
        };
    }

    // For published projects, ensure they are indexable
    const metadata: Metadata = {
        title: `${project.title} | Ripas Sorker Rifat - Full Stack Developer`,
        description:
            project.shortDescription ||
            project.description?.substring(0, 160) ||
            `${project.title} - A project by Ripas Sorker Rifat`,
        keywords: [
            project.title,
            ...(project.technologies || []),
            ...(project.skills || []),
            "Ripas Sorker Rifat",
            "Full Stack Developer",
            "Web Development",
            project.category,
        ],
        robots: {
            index: project.is_published === true,
            follow: true,
            googleBot: {
                index: project.is_published === true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            title: `${project.title} | Ripas Sorker Rifat`,
            description:
                project.shortDescription ||
                `${project.title} - A project by Ripas Sorker Rifat`,
            images: project.thumbnail
                ? [
                      {
                          url: project.thumbnail,
                          width: 1200,
                          height: 630,
                          alt: project.title,
                      },
                  ]
                : [],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} | Ripas Sorker Rifat`,
            description:
                project.shortDescription ||
                `${project.title} - A project by Ripas Sorker Rifat`,
            images: project.thumbnail ? [project.thumbnail] : [],
        },
        alternates: {
            canonical: `https://ripassorkerrifat.me/projects/${params.id}`,
        },
    };

    return metadata;
}

export default async function ProjectPage({params}: ProjectPageProps) {
    // Only fetch published projects by default
    const project = await getProject(params.id, false);

    if (!project) {
        // This will show a 404 page for unpublished projects
        notFound();
    }

    return <ProjectDetailsPage project={project} />;
}

// Generate static params for better performance (only includes published projects)
export async function generateStaticParams() {
    try {
        const baseUrl =
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        // Fetch published projects for static generation
        const response = await fetch(
            `${baseUrl}/api/projects/public?limit=100`
        );

        if (!response.ok) {
            console.error(
                "Failed to fetch projects for static generation:",
                response.statusText
            );
            return [];
        }

        const data = await response.json();
        const projects = data.projects || [];

        return projects.map((project: any) => ({
            id: project._id || project.id?.toString(),
        }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}
