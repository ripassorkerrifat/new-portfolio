"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { ProjectFormData } from "@/lib/validations/project";
import { FaGlobe, FaStar, FaSort, FaEye, FaEyeSlash } from "react-icons/fa";

interface PublishingFormProps {
    form: UseFormReturn<ProjectFormData>;
}

const PublishingForm: React.FC<PublishingFormProps> = ({ form }) => {
    const {
        register,
        formState: { errors },
        watch,
    } = form;

    const isPublished = watch("is_published");
    const isFeatured = watch("is_featured");

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <FaGlobe className="text-white" size={16} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">
                        Publishing Settings
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Control project visibility and display order
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Publishing Status */}
                <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                isPublished 
                                    ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                                    : 'bg-gradient-to-br from-gray-500 to-gray-600'
                            }`}>
                                {isPublished ? (
                                    <FaEye className="text-white" size={12} />
                                ) : (
                                    <FaEyeSlash className="text-white" size={12} />
                                )}
                            </div>
                            <div>
                                <h3 className="font-semibold text-[var(--text-primary)]">
                                    Project Visibility
                                </h3>
                                <p className="text-xs text-[var(--text-secondary)]">
                                    {isPublished 
                                        ? 'Project will be visible on the website' 
                                        : 'Project will be hidden from public view'
                                    }
                                </p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                {...register("is_published")}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--primary-color)]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary-color)]"></div>
                        </label>
                    </div>
                    
                    {isPublished && (
                        <div className="pt-4 border-t border-[var(--border-color)]/20">
                            <p className="text-sm text-green-600 bg-green-500/10 px-3 py-2 rounded-lg border border-green-500/20">
                                ✓ This project will appear in the public projects section
                            </p>
                        </div>
                    )}
                </div>

                {/* Featured Status */}
                <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                isFeatured 
                                    ? 'bg-gradient-to-br from-yellow-500 to-orange-500' 
                                    : 'bg-gradient-to-br from-gray-500 to-gray-600'
                            }`}>
                                <FaStar className="text-white" size={12} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[var(--text-primary)]">
                                    Featured Project
                                </h3>
                                <p className="text-xs text-[var(--text-secondary)]">
                                    {isFeatured 
                                        ? 'Project will appear in the featured section' 
                                        : 'Project will appear in regular projects'
                                    }
                                </p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                {...register("is_featured")}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                    </div>
                    
                    {isFeatured && (
                        <div className="pt-4 border-t border-[var(--border-color)]/20">
                            <p className="text-sm text-yellow-600 bg-yellow-500/10 px-3 py-2 rounded-lg border border-yellow-500/20">
                                ⭐ This project will appear in the featured projects section (last 3 featured projects are shown)
                            </p>
                        </div>
                    )}
                </div>

                {/* Display Order */}
                <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <FaSort className="text-white" size={12} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-[var(--text-primary)]">
                                Display Order
                            </h3>
                            <p className="text-xs text-[var(--text-secondary)]">
                                Lower numbers appear first (optional)
                            </p>
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <input
                            type="number"
                            {...register("order", { valueAsNumber: true })}
                            placeholder="e.g., 1, 2, 3..."
                            className="w-full px-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 focus:bg-[var(--primary-bg)]/70 transition-all duration-300"
                        />
                        {errors.order && (
                            <p className="text-red-400 text-sm">{errors.order.message}</p>
                        )}
                        <p className="text-xs text-[var(--text-secondary)]">
                            Leave empty for automatic ordering by creation date
                        </p>
                    </div>
                </div>

                {/* Publishing Summary */}
                <div className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 rounded-xl p-4 border border-[var(--primary-color)]/20">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-3">Publishing Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <div className={`text-lg font-bold ${isPublished ? 'text-green-500' : 'text-gray-500'}`}>
                                {isPublished ? 'Published' : 'Draft'}
                            </div>
                            <p className="text-xs text-[var(--text-secondary)]">Visibility Status</p>
                        </div>
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <div className={`text-lg font-bold ${isFeatured ? 'text-yellow-500' : 'text-gray-500'}`}>
                                {isFeatured ? 'Featured' : 'Regular'}
                            </div>
                            <p className="text-xs text-[var(--text-secondary)]">Project Type</p>
                        </div>
                        <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                            <div className="text-lg font-bold text-blue-500">
                                {watch("order") || 'Auto'}
                            </div>
                            <p className="text-xs text-[var(--text-secondary)]">Display Order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublishingForm;
