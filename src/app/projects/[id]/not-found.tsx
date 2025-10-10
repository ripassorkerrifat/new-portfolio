/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import {ArrowLeft, Search} from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--accent-bg)] flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* 404 Animation */}
                    <div className="mb-8">
                        <div className="text-8xl md:text-9xl font-bold text-[var(--primary-color)] opacity-20 animate-pulse">
                            404
                        </div>
                    </div>

                    {/* Content */}
                    <div className="glass rounded-3xl p-8 md:p-12 border border-[var(--border-color)]/20 backdrop-blur-xl">
                        <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Search className="w-8 h-8 text-white" />
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                            Project Not Found
                        </h1>

                        <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                            Sorry, the project you're looking for doesn't exist
                            or may have been moved. Let's get you back to
                            exploring my other amazing projects!
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#projects"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[var(--primary-color)]/30 group">
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                                Back to Projects
                            </Link>

                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 bg-[var(--secondary-bg)]/60 hover:bg-[var(--secondary-bg)]/80 text-[var(--text-primary)] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/50">
                                Go Home
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[var(--accent-color)]/10 to-[var(--primary-color)]/10 rounded-full blur-2xl animate-float-delayed"></div>
                </div>
            </div>
        </div>
    );
}
