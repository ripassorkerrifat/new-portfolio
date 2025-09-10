export interface Project {
    id: number;
    title: string;
    category: "fullstack" | "frontend" | "backend";
    description: string;
    image: string;
    thumbnail: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
    detailedDescription: string;
    challenges: string;
    results: string;
    gallery: string[];
}

export interface Filter {
    id: string;
    label: string;
}
