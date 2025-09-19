"use client";

import React, {useState, useEffect} from "react";
import {UseFormReturn} from "react-hook-form";
import {ProjectFormData} from "@/lib/validations/project";
import {FaLink, FaExternalLinkAlt, FaGithub} from "react-icons/fa";
import {MultiImageUpload} from "@/components/ui/MultiImageUpload";

interface LinksGalleryFormProps {
    form: UseFormReturn<ProjectFormData>;
}

const LinksGalleryForm: React.FC<LinksGalleryFormProps> = ({form}) => {
    const {
        register,
        formState: {errors},
        setValue,
        watch,
    } = form;
    const [galleryImages, setGalleryImages] = useState<(string | File)[]>([]);

    // Initialize gallery images from form data
    useEffect(() => {
        const currentGalleryImages = watch("galleryImages") || [];
        setGalleryImages(currentGalleryImages);
    }, [watch]);

    const handleGalleryChange = (files: (string | File)[]) => {
        setGalleryImages(files);
        setValue('galleryImages', files as string[]);
    };

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <FaLink className="text-white" size={16} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">
                        Links & Gallery
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Project links and gallery images
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Live URL */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Live URL *
                    </label>
                    <div className="relative">
                        <FaExternalLinkAlt
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]"
                            size={14}
                        />
                        <input
                            {...register("liveUrl")}
                            type="url"
                            placeholder="https://your-project.com"
                            className="w-full pl-10 pr-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                        />
                    </div>
                    {errors.liveUrl && (
                        <p className="text-red-400 text-sm mt-1">
                            {errors.liveUrl.message}
                        </p>
                    )}
                </div>

                {/* GitHub Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* GitHub Link 1 */}
                    <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                            GitHub Repository 1
                        </label>
                        <div className="relative">
                            <FaGithub
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]"
                                size={14}
                            />
                            <input
                                {...register("githubLink1")}
                                type="url"
                                placeholder="https://github.com/username/repo"
                                className="w-full pl-10 pr-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                            />
                        </div>
                        {errors.githubLink1 && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.githubLink1.message}
                            </p>
                        )}
                    </div>

                    {/* GitHub Link 2 */}
                    <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                            GitHub Repository 2
                        </label>
                        <div className="relative">
                            <FaGithub
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]"
                                size={14}
                            />
                            <input
                                {...register("githubLink2")}
                                type="url"
                                placeholder="https://github.com/username/repo-2"
                                className="w-full pl-10 pr-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                            />
                        </div>
                        {errors.githubLink2 && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.githubLink2.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Gallery Images */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Gallery Images
                    </label>

                    <MultiImageUpload
                        value={galleryImages}
                        onChange={handleGalleryChange}
                        maxFiles={10}
                        maxSize={10}
                    />
                </div>

                {/* Links Summary */}
                <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                    <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                            <FaLink className="text-white" size={12} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-[var(--text-primary)]">
                                Links & Media Summary
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">
                                Project links and gallery overview
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <p className="text-lg font-bold text-green-500">
                                {watch("liveUrl") ? "1" : "0"}
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">
                                Live URL
                            </p>
                        </div>
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <p className="text-lg font-bold text-blue-500">
                                {
                                    [
                                        watch("githubLink1"),
                                        watch("githubLink2"),
                                    ].filter(Boolean).length
                                }
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">
                                GitHub Links
                            </p>
                        </div>
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <p className="text-lg font-bold text-purple-500">
                                {galleryImages.length}
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">
                                Gallery Images
                            </p>
                        </div>
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <p className="text-lg font-bold text-orange-500">
                                {[
                                    watch("liveUrl"),
                                    watch("githubLink1"),
                                    watch("githubLink2"),
                                ].filter(Boolean).length + galleryImages.length}
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">
                                Total Assets
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinksGalleryForm;
