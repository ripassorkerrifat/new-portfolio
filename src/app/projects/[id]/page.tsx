import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailsPage from '@/components/ProjectDetailsPage';

interface ProjectPageProps {
    params: {
        id: string;
    };
}

// Function to fetch project data
async function getProject(id: string) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/projects/${id}`, {
            cache: 'no-store' // Ensure fresh data for SEO
        });
        
        if (!response.ok) {
            return null;
        }
        
        const data = await response.json();
        return data.project;
    } catch (error) {
        console.error('Error fetching project:', error);
        return null;
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = await getProject(params.id);
    
    if (!project) {
        return {
            title: 'Project Not Found | Ripas Sorker Rifat',
            description: 'The requested project could not be found.',
        };
    }
    
    return {
        title: `${project.title} | Ripas Sorker Rifat - Full Stack Developer`,
        description: project.shortDescription || project.description?.substring(0, 160) || `${project.title} - A project by Ripas Sorker Rifat`,
        keywords: [
            project.title,
            ...(project.technologies || []),
            ...(project.skills || []),
            'Ripas Sorker Rifat',
            'Full Stack Developer',
            'Web Development',
            project.category
        ],
        openGraph: {
            title: `${project.title} | Ripas Sorker Rifat`,
            description: project.shortDescription || `${project.title} - A project by Ripas Sorker Rifat`,
            images: [
                {
                    url: project.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | Ripas Sorker Rifat`,
            description: project.shortDescription || `${project.title} - A project by Ripas Sorker Rifat`,
            images: [project.thumbnail],
        },
        alternates: {
            canonical: `https://ripassorkerrifat.me/projects/${params.id}`,
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await getProject(params.id);
    
    if (!project) {
        notFound();
    }
    
    return <ProjectDetailsPage project={project} />;
}

// Generate static params for better performance (optional)
export async function generateStaticParams() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/projects/public?limit=50`);
        
        if (!response.ok) {
            return [];
        }
        
        const data = await response.json();
        const projects = data.projects || [];
        
        return projects.map((project: any) => ({
            id: project._id || project.id?.toString(),
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}
