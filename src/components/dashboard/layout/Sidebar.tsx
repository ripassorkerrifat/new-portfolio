/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {
    FaTachometerAlt,
    FaProjectDiagram,
    FaPlus,
    FaTimes,
    FaChevronRight,
    FaEnvelope,
    FaChartBar,
} from "react-icons/fa";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen, onClose}) => {
    const pathname = usePathname();

    const menuItems = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: FaTachometerAlt,
            color: "from-blue-500 to-cyan-500",
        },
        {
            name: "Analytics",
            href: "/dashboard/analytics",
            icon: FaChartBar,
            color: "from-purple-500 to-pink-500",
        },
        {
            name: "Projects",
            href: "/dashboard/projects",
            icon: FaProjectDiagram,
            color: "from-green-500 to-emerald-500",
        },
        {
            name: "Add Project",
            href: "/dashboard/projects/add",
            icon: FaPlus,
            color: "from-indigo-500 to-purple-500",
        },
        {
            name: "Emails",
            href: "/dashboard/emails",
            icon: FaEnvelope,
            color: "from-orange-500 to-red-500",
        },
    ];

    const isActive = (href: string) => {
        if (!pathname) return false;
        if (href === "/dashboard") {
            return pathname === "/dashboard";
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-20 h-[calc(100vh-5rem)] w-80 bg-gradient-to-b from-[var(--card-bg)]/95 via-[var(--card-bg)]/90 to-[var(--primary-bg)]/95 backdrop-blur-3xl border-r border-[var(--border-color)]/20 shadow-2xl shadow-black/10 transform transition-all duration-500 ease-out z-50 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 overflow-hidden`}>
                {/* Brand Section */}
                <div className="px-6 py-8 border-b border-[var(--border-color)]/10 bg-gradient-to-r from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl flex items-center justify-center shadow-xl shadow-[var(--primary-color)]/25">
                                <span className="text-white font-bold text-xl">
                                    ⚡
                                </span>
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                                Portfolio
                            </h2>
                            <p className="text-sm text-[var(--text-secondary)]/80 font-medium">
                                Admin Dashboard
                            </p>
                        </div>
                        {/* Mobile Close Button */}
                        <button
                            onClick={onClose}
                            className="lg:hidden w-10 h-10 bg-[var(--primary-bg)]/60 backdrop-blur-sm rounded-2xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-all duration-300 border border-[var(--border-color)]/20">
                            <FaTimes size={16} />
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="px-6 py-8 flex-1 overflow-y-auto">
                    <div className="space-y-2">
                        {menuItems.map((item, index) => {
                            const IconComponent = item.icon;
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => onClose()}
                                    className={`group relative flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                                        active
                                            ? "bg-gradient-to-r from-[var(--primary-color)]/20 via-[var(--primary-color)]/15 to-[var(--secondary-color)]/20 text-[var(--primary-color)] border border-[var(--primary-color)]/30 shadow-xl shadow-[var(--primary-color)]/20 backdrop-blur-sm"
                                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gradient-to-r hover:from-[var(--primary-bg)]/80 hover:to-[var(--card-bg)]/80 hover:border hover:border-[var(--border-color)]/20 hover:backdrop-blur-sm"
                                    }`}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                    }}>
                                    {/* Active indicator */}
                                    {active && (
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] rounded-r-full" />
                                    )}

                                    {/* Icon Container */}
                                    <div
                                        className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                            active
                                                ? `bg-gradient-to-br ${item.color} text-white shadow-lg transform scale-105`
                                                : "bg-[var(--primary-bg)]/60 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-[var(--primary-color)]/30 group-hover:to-[var(--secondary-color)]/30 group-hover:shadow-md border border-[var(--border-color)]/10"
                                        }`}>
                                        <IconComponent
                                            size={16}
                                            className={`transition-transform duration-300 ${
                                                active
                                                    ? "scale-110"
                                                    : "group-hover:scale-110"
                                            }`}
                                        />
                                    </div>

                                    {/* Label */}
                                    <div className="flex-1">
                                        <span
                                            className={`font-semibold text-sm transition-all duration-300 ${
                                                active
                                                    ? "text-[var(--primary-color)]"
                                                    : "group-hover:text-[var(--text-primary)]"
                                            }`}>
                                            {item.name}
                                        </span>
                                        {active && (
                                            <div className="flex items-center space-x-1 mt-1">
                                                <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
                                                <span className="text-xs text-[var(--primary-color)]/80 font-medium">
                                                    Current
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Arrow for active state */}
                                    <div
                                        className={`transition-all duration-300 ${
                                            active
                                                ? "opacity-100 translate-x-0 text-[var(--primary-color)]"
                                                : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
                                        }`}>
                                        <FaChevronRight className="text-xs" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Quick Stats Section */}
                    <div className="mt-8 pt-6 border-t border-[var(--border-color)]/10">
                        <div className="bg-gradient-to-br from-[var(--primary-color)]/10 via-[var(--secondary-color)]/5 to-[var(--primary-color)]/10 rounded-2xl p-4 border border-[var(--border-color)]/20 backdrop-blur-sm">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl flex items-center justify-center">
                                    <span className="text-white text-sm">
                                        📊
                                    </span>
                                </div>
                                <span className="text-sm font-semibold text-[var(--text-primary)]">
                                    Quick Stats
                                </span>
                            </div>
                            <div className="space-y-2 text-xs">
                                <div className="flex justify-between items-center">
                                    <span className="text-[var(--text-secondary)]">
                                        Today's Visitors
                                    </span>
                                    <span className="text-[var(--text-primary)] font-semibold">
                                        127
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[var(--text-secondary)]">
                                        New Messages
                                    </span>
                                    <span className="text-[var(--text-primary)] font-semibold">
                                        3
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Bottom Section */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[var(--border-color)]/20">
                    <div className="bg-gradient-to-br from-[var(--primary-color)]/15 via-[var(--secondary-color)]/10 to-[var(--primary-color)]/15 rounded-2xl p-5 border border-[var(--border-color)]/20 shadow-lg backdrop-blur-sm">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl flex items-center justify-center shadow-xl">
                                <span className="text-white font-bold text-lg">
                                    💡
                                </span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-[var(--text-primary)] mb-1">
                                    Need Help?
                                </p>
                                <p className="text-xs text-[var(--text-secondary)]/80 leading-relaxed">
                                    Documentation & Support
                                </p>
                            </div>
                            <FaChevronRight className="text-[var(--text-secondary)] text-xs opacity-60" />
                        </div>
                    </div>
                </div> */}
            </aside>
        </>
    );
};

export default Sidebar;
