import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "All Projects - Portfolio",
    description:
        "Explore all projects by Ripas Sorker Rifat. Browse through 30+ web development projects including React, Node.js, Next.js applications with live demos and source code.",
    keywords: [
        "projects",
        "portfolio",
        "web development",
        "React projects",
        "Node.js projects",
        "full stack projects",
    ],
    openGraph: {
        title: "All Projects - Ripas Sorker Rifat Portfolio",
        description:
            "Explore all projects by Ripas Sorker Rifat. Browse through 30+ web development projects including React, Node.js, Next.js applications.",
        url: "https://ripassorkerrifat.me/projects",
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
