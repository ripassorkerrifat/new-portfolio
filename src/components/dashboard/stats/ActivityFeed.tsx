"use client";

import React, {useState, useEffect} from "react";
import {
    FaPlus,
    FaCheckCircle,
    FaStar,
    FaEye,
    FaCode,
    FaClock,
} from "react-icons/fa";

interface Project {
    _id: string;
    title: string;
    shortDescription: string;
    category: string;
    is_published: boolean;
    is_featured: boolean;
    createdAt: string;
    updatedAt: string;
}

interface ActivityItem {
    id: string;
    type:
        | "project_created"
        | "project_published"
        | "project_featured"
        | "project_updated";
    title: string;
    description: string;
    timestamp: string;
    project: Project;
}

const ActivityFeed: React.FC = () => {
    const [activities, setActivities] = useState<ActivityItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecentActivity = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "/api/projects?published=false&limit=10"
                );
                const data = await response.json();

                if (data?.success && data?.projects) {
                    // Convert projects to activity items
                    const projectActivities: ActivityItem[] =
                        data.projects?.map((project: Project) => {
                            const createdDate = new Date(project.createdAt);
                            const updatedDate = new Date(project.updatedAt);
                            const timeDiff = Date.now() - createdDate.getTime();
                            const daysDiff = Math.floor(
                                timeDiff / (1000 * 60 * 60 * 24)
                            );

                            let timeAgo = "";
                            if (daysDiff === 0) {
                                const hoursDiff = Math.floor(
                                    timeDiff / (1000 * 60 * 60)
                                );
                                timeAgo =
                                    hoursDiff === 0
                                        ? "Just now"
                                        : `${hoursDiff} hours ago`;
                            } else if (daysDiff === 1) {
                                timeAgo = "1 day ago";
                            } else {
                                timeAgo = `${daysDiff} days ago`;
                            }

                            // Determine activity type based on project properties
                            let type: ActivityItem["type"] = "project_created";
                            let title = "Project created";
                            let description = `Created "${project.title}" project`;

                            if (project.is_featured) {
                                type = "project_featured";
                                title = "Project featured";
                                description = `"${project.title}" was marked as featured`;
                            } else if (project.is_published) {
                                type = "project_published";
                                title = "Project published";
                                description = `"${project.title}" is now live and visible to visitors`;
                            }

                            return {
                                id: project._id,
                                type,
                                title,
                                description,
                                timestamp: timeAgo,
                                project,
                            };
                        }) || [];

                    setActivities(projectActivities.slice(0, 5));
                }
            } catch (error) {
                console.error("Failed to fetch activity:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecentActivity();
    }, []);

    const getActivityIcon = (type: string) => {
        switch (type) {
            case "project_created":
                return {icon: FaPlus, color: "from-blue-500 to-cyan-500"};
            case "project_published":
                return {icon: FaEye, color: "from-green-500 to-emerald-500"};
            case "project_featured":
                return {icon: FaStar, color: "from-yellow-500 to-orange-500"};
            case "project_updated":
                return {icon: FaCode, color: "from-purple-500 to-pink-500"};
            default:
                return {icon: FaClock, color: "from-gray-500 to-gray-600"};
        }
    };

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                    Recent Activity
                </h2>
                <button className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] text-sm font-medium transition-colors duration-300">
                    View All
                </button>
            </div>

            <div className="space-y-4">
                {loading ? (
                    <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary-color)] mx-auto"></div>
                        <p className="text-[var(--text-secondary)] mt-2">
                            Loading activity...
                        </p>
                    </div>
                ) : activities.length === 0 ? (
                    <div className="text-center py-8">
                        <FaClock className="mx-auto text-4xl text-[var(--text-secondary)] mb-4" />
                        <p className="text-[var(--text-secondary)]">
                            No recent activity
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]/70 mt-1">
                            Create your first project to see activity here
                        </p>
                    </div>
                ) : (
                    activities.map((activity, index) => {
                        const {icon: IconComponent, color} = getActivityIcon(
                            activity.type
                        );

                        return (
                            <div key={activity.id} className="relative">
                                {/* Timeline line */}
                                {index !== activities.length - 1 && (
                                    <div className="absolute left-6 top-12 w-px h-8 bg-gradient-to-b from-[var(--border-color)]/50 to-transparent" />
                                )}

                                <div className="flex items-start space-x-4 group">
                                    {/* Activity Icon */}
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent
                                            className="text-white"
                                            size={16}
                                        />
                                    </div>

                                    {/* Activity Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20 hover:border-[var(--primary-color)]/30 transition-all duration-300">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="font-semibold text-[var(--text-primary)] text-sm">
                                                    {activity.title}
                                                </h3>
                                                <div className="flex items-center space-x-1 text-xs text-[var(--text-secondary)]">
                                                    <FaClock size={10} />
                                                    <span>
                                                        {activity.timestamp}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-sm text-[var(--text-secondary)] mb-3">
                                                {activity.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-6 h-6 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex items-center justify-center">
                                                        <span className="text-white text-xs font-bold">
                                                            RS
                                                        </span>
                                                    </div>
                                                    <span className="text-xs text-[var(--text-secondary)]">
                                                        Ripas Sorker Rifat
                                                    </span>
                                                </div>
                                                <span
                                                    className={`px-2 py-1 rounded-lg text-xs font-medium border ${
                                                        activity.project
                                                            ?.category ===
                                                        "fullstack"
                                                            ? "border-purple-500/30 bg-purple-500/10 text-purple-400"
                                                            : activity.project
                                                                  ?.category ===
                                                              "frontend"
                                                            ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                                                            : activity.project
                                                                  ?.category ===
                                                              "backend"
                                                            ? "border-green-500/30 bg-green-500/10 text-green-400"
                                                            : "border-gray-500/30 bg-gray-500/10 text-gray-400"
                                                    }`}>
                                                    {activity.project
                                                        ?.category || "Project"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default ActivityFeed;
