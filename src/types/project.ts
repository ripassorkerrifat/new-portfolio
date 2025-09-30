export interface Project {
    _id?: string;
    id?: number;
    title: string;
    category: "full-stack" | "front-end" | "backend" | "others";
    description: string;
    shortDescription?: string;
    image?: string;
    thumbnail: string;
    technologies?: string[];
    skills?: string[];
    liveUrl?: string;
    githubUrl?: string;
    githubLink1?: string;
    githubLink2?: string;
    featured?: boolean;
    is_featured?: boolean;
    is_published?: boolean;
    detailedDescription?: string;
    challenges?: string;
    results?: string;
    gallery?: string[];
    galleryImages?: string[];
    order?: number;
}

export interface Filter {
    id: string;
    label: string;
}
