"use client";

import React from "react";
import {UseFormReturn} from "react-hook-form";
import {FaInfoCircle} from "react-icons/fa";
import {PreviewImageUpload} from "@/components/ui/PreviewImageUpload";
import TextEditor from "@/components/TextEditor";

interface ProjectFormData {
    title: string;
    name: string;
    description: string;
    shortDescription: string;
    category: string;
    status: string;
    priority: string;
    tags: string[];
    startDate: string;
    endDate: string;
    budget: number;
    teamLead: string;
    teamMembers: string[];
    technologies: string[];
    repository: string;
    notes: string;
    thumbnail: File | string;
    is_featured: boolean;
}

interface BasicDetailsFormProps {
    form: UseFormReturn<ProjectFormData>;
}

const BasicDetailsForm: React.FC<BasicDetailsFormProps> = ({form}) => {
    const {
        register,
        formState: {errors},
        setValue,
        watch,
    } = form;

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <FaInfoCircle className="text-white" size={16} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">
                        Basic Details
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Project title, thumbnail, and description
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Project Title */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Project Title *
                    </label>
                    <input
                        {...register("title")}
                        type="text"
                        placeholder="Enter project title"
                        className="w-full px-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                    />
                    {errors.title && (
                        <p className="text-red-400 text-sm">
                            {String(errors.title.message || "This field is required")}
                        </p>
                    )}
                </div>

                {/* Thumbnail Upload */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Project Thumbnail *
                    </label>

                    <PreviewImageUpload
                        value={watch("thumbnail")}
                        onChange={(file) => setValue("thumbnail", file || "")}
                        onRemove={() => setValue("thumbnail", "")}
                        placeholder="Upload project thumbnail"
                    />

                    {errors.thumbnail && (
                        <p className="text-red-400 text-sm mt-1">
                            {String(errors.thumbnail.message ||
                                "This field is required")}
                        </p>
                    )}
                </div>

                {/* Short Description */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Short Description *
                    </label>
                    <textarea
                        {...register("shortDescription")}
                        rows={3}
                        placeholder="Brief summary of your project (max 200 characters)"
                        className="w-full px-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300 resize-none"
                        maxLength={200}
                    />
                    {errors.shortDescription && (
                        <p className="text-red-400 text-sm mt-1">
                            {String(errors.shortDescription.message || "This field is required")}
                        </p>
                    )}
                </div>

                {/* Description with Rich Text Editor */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Detailed Description *
                    </label>
                    <div className="relative">
                        <TextEditor
                            value={watch("description") || ""}
                            onChange={(value: string) => setValue("description", value || "")}
                        />
                    </div>
                    {errors.description && (
                        <p className="text-red-400 text-sm mt-1">
                            {String(errors.description.message ||
                                "This field is required")}
                        </p>
                    )}
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Category *
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                        {["front-end", "backend", "full-stack", "others"].map(
                            (category) => (
                                <label
                                    key={category}
                                    className="relative cursor-pointer">
                                    <input
                                        {...register("category")}
                                        type="radio"
                                        value={category}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                                            watch("category") === category
                                                ? "border-[var(--primary-color)] bg-[var(--primary-color)]/10 text-[var(--primary-color)]"
                                                : "border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/30 text-[var(--text-secondary)]"
                                        }`}>
                                        <p className="font-medium capitalize">
                                            {category}
                                        </p>
                                    </div>
                                </label>
                            )
                        )}
                    </div>
                    {errors.category && (
                        <p className="text-red-400 text-sm mt-1">
                            {String(errors.category.message ||
                                "This field is required")}
                        </p>
                    )}
                </div>

                {/* Featured Toggle */}
                <div>
                    <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                            {...register("is_featured")}
                            type="checkbox"
                            className="sr-only"
                        />
                        <div
                            className={`w-12 h-6 rounded-full transition-colors duration-300 relative ${
                                watch("is_featured")
                                    ? "bg-[var(--primary-color)]"
                                    : "bg-[var(--border-color)]/30"
                            }`}>
                            <div
                                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                                    watch("is_featured")
                                        ? "translate-x-6"
                                        : "translate-x-0.5"
                                }`}
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-[var(--text-primary)]">
                                Featured Project
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">
                                Mark this project as featured on your portfolio
                            </p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BasicDetailsForm;
