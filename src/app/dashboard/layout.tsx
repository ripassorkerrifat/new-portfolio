"use client";

import React, {useEffect, useState} from "react";
import Sidebar from "../../components/dashboard/layout/Sidebar";
import {NotificationProvider} from "@/contexts/NotificationContext";
import {useRouter} from "next/navigation";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [authorized, setAuthorized] = useState<boolean>(false);
    const router = useRouter();

    // Client-side guard: require localStorage.is_admin === "true"
    useEffect(() => {
        try {
            const isAdmin =
                typeof window !== "undefined" &&
                localStorage.getItem("is_admin") === "true";
            if (!isAdmin) {
                router.replace("/");
                return;
            }
            setAuthorized(true);
        } catch {
            router.replace("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Prevent flash of protected content while checking
    if (!authorized) {
        return null;
    }

    return (
        <NotificationProvider>
            <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--primary-bg)] to-[var(--card-bg)]/30">
                {/* Background Pattern */}
                <div className="fixed inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, var(--primary-color) 0%, transparent 50%), 
                                         radial-gradient(circle at 75% 75%, var(--secondary-color) 0%, transparent 50%)`,
                        }}
                    />
                </div>

                <div className="flex relative">
                    {/* Sidebar */}
                    <Sidebar
                        isOpen={sidebarOpen}
                        onClose={() => setSidebarOpen(false)}
                    />

                    {/* Main Content Area */}
                    <main
                        className={`flex-1 transition-all duration-500 ease-out lg:ml-80 pt-20`}>
                        {/* Content Container */}
                        <div className="relative min-h-screen">
                            {/* Content Wrapper with responsive padding */}
                            <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 mx-auto w-[calc(100%-80px)]">
                                {/* Content Background - Enhanced Glassmorphism */}
                                <div className="relative">
                                    {/* Enhanced Glassmorphism Background like sidebar */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--card-bg)]/95 via-[var(--card-bg)]/90 to-[var(--primary-bg)]/95 backdrop-blur-3xl border border-[var(--border-color)]/20 shadow-2xl shadow-black/10 rounded-2xl sm:rounded-3xl" />

                                    {/* Main Content */}
                                    <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                                        {children}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="fixed bottom-8 right-8 z-30">
                                <div className="flex flex-col space-y-3">
                                    {/* Scroll to Top Button */}
                                    <button
                                        onClick={() =>
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            })
                                        }
                                        className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl shadow-2xl shadow-[var(--primary-color)]/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 backdrop-blur-xl border border-white/20">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

                {/* Mobile overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </div>
        </NotificationProvider>
    );
};

export default DashboardLayout;
