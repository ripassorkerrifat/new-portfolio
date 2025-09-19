"use client";

import React, {useState, useEffect} from "react";
import {
    FaProjectDiagram,
    FaArrowUp,
    FaArrowDown,
    FaEye,
    FaStar,
    FaCode,
} from "react-icons/fa";

interface StatCardProps {
    title: string;
    value: string | number;
    change: string;
    changeType: "increase" | "decrease" | "neutral";
    icon: React.ComponentType<{size?: number; className?: string}>;
    color: string;
}

const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    change,
    changeType,
    icon: IconComponent,
    color,
}) => {
    const getTrendIcon = () => {
        if (changeType === "increase")
            return <FaArrowUp className="text-green-500" />;
        if (changeType === "decrease")
            return <FaArrowDown className="text-red-500" />;
        return null;
    };

    const getChangeColor = () => {
        if (changeType === "increase") return "text-green-500";
        if (changeType === "decrease") return "text-red-500";
        return "text-[var(--text-secondary)]";
    };

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
                <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={20} />
                </div>
                <div className="flex items-center space-x-1 text-sm">
                    {getTrendIcon()}
                    <span className={getChangeColor()}>{change}</span>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                    {value}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">{title}</p>
            </div>
        </div>
    );
};

const StatsGrid: React.FC = () => {
    const [projectStats, setProjectStats] = useState({
        total: 0,
        published: 0,
        featured: 0,
        categories: {
            frontend: 0,
            backend: 0,
            fullstack: 0,
            other: 0,
        },
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjectStats = async () => {
            try {
                setLoading(true);

                // Fetch all projects to calculate stats (including unpublished)
                const response = await fetch("/api/projects?published=false");
                const data = await response.json();

                if (data?.success && data?.projects) {
                    const projects = data.projects;
                    const published =
                        projects?.filter((p: any) => p?.is_published) || [];
                    const featured =
                        projects?.filter((p: any) => p?.is_featured) || [];

                    // Count by categories
                    const categories = {
                        frontend:
                            projects?.filter(
                                (p: any) => p?.category === "frontend"
                            )?.length || 0,
                        backend:
                            projects?.filter(
                                (p: any) => p?.category === "backend"
                            )?.length || 0,
                        fullstack:
                            projects?.filter(
                                (p: any) => p?.category === "fullstack"
                            )?.length || 0,
                        other:
                            projects?.filter(
                                (p: any) => p?.category === "other"
                            )?.length || 0,
                    };

                    setProjectStats({
                        total: projects.length,
                        published: published.length,
                        featured: featured.length,
                        categories,
                    });
                }
            } catch (error) {
                console.error("Failed to fetch project stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjectStats();
    }, []);

    const stats = [
        {
            title: "Total Projects",
            value: loading ? "..." : projectStats.total.toString(),
            change: `${projectStats.published} published`,
            changeType: "neutral" as const,
            icon: FaProjectDiagram,
            color: "from-blue-500 to-blue-600",
        },
        {
            title: "Featured Projects",
            value: loading ? "..." : projectStats.featured.toString(),
            change: "Highlighted work",
            changeType: "neutral" as const,
            icon: FaStar,
            color: "from-yellow-500 to-yellow-600",
        },
        {
            title: "Full Stack Projects",
            value: loading
                ? "..."
                : projectStats.categories.fullstack.toString(),
            change: "Complete solutions",
            changeType: "increase" as const,
            icon: FaCode,
            color: "from-green-500 to-green-600",
        },
        {
            title: "Published Projects",
            value: loading ? "..." : projectStats.published.toString(),
            change: `${(
                (projectStats.published / projectStats.total) * 100 || 0
            ).toFixed(0)}% of total`,
            changeType:
                projectStats.published > projectStats.total * 0.7
                    ? ("increase" as const)
                    : ("neutral" as const),
            icon: FaEye,
            color: "from-purple-500 to-purple-600",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    change={stat.change}
                    changeType={stat.changeType}
                    icon={stat.icon}
                    color={stat.color}
                />
            ))}
        </div>
    );
};

export default StatsGrid;
