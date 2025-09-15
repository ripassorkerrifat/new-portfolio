"use client";

import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter, useParams} from "next/navigation";
import {projectSchema, ProjectFormData} from "@/lib/validations/project";
import BasicDetailsForm from "@/components/dashboard/forms/BasicDetailsForm";
import TimelineDatesForm from "@/components/dashboard/forms/TimelineDatesForm";
import SkillsTechForm from "@/components/dashboard/forms/SkillsTechForm";
import LinksGalleryForm from "@/components/dashboard/forms/LinksGalleryForm";
import PublishingForm from "@/components/dashboard/forms/PublishingForm";
import {
    FaArrowLeft,
    FaSave,
    FaSpinner,
    FaInfoCircle,
    FaCalendarAlt,
    FaCode,
    FaLink,
    FaToggleOn,
    FaCheck,
} from "react-icons/fa";

const EditProjectPage = () => {
    const params = useParams();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const form = useForm({
        resolver: zodResolver(projectSchema),
        mode: "onChange" as const,
        defaultValues: {
            title: "",
            description: "",
            shortDescription: "",
            thumbnail: "",
            category: "front-end" as const,
            skills: [],
            startDate: "",
            endDate: "",
            is_featured: false,
            is_published: true,
            order: undefined,
            liveUrl: "",
            githubLink1: "",
            githubLink2: "",
            galleryImages: [],
        },
    });

    const {
        setValue,
        handleSubmit,
        formState: {errors},
    } = form;

    useEffect(() => {
        fetchProject();
    }, [params?.id]);

    const fetchProject = async () => {
        if (!params?.id) return;

        try {
            const response = await fetch(`/api/projects/${params.id}`);
            if (response.ok) {
                const data = await response.json();
                const project = data.project;

                // Populate form with existing data
                setValue("title", project.title);
                setValue("thumbnail", project.thumbnail);
                setValue("description", project.description);
                setValue(
                    "shortDescription",
                    project.shortDescription ||
                        project.description?.substring(0, 200) ||
                        ""
                );
                setValue("startDate", project.startDate);
                setValue("endDate", project.endDate);
                setValue("skills", project.skills || []);
                setValue("category", project.category);
                setValue("is_featured", project.is_featured);
                setValue("liveUrl", project.liveUrl);
                setValue("githubLink1", project.githubLink1 || "");
                setValue("githubLink2", project.githubLink2 || "");
                setValue("galleryImages", project.galleryImages || []);
                setValue("is_published", project.is_published ?? true);
                setValue("order", project.order);
            } else {
                console.error("Failed to fetch project");
                router.push("/dashboard/projects");
            }
        } catch (error) {
            console.error("Error fetching project:", error);
            router.push("/dashboard/projects");
        } finally {
            setLoading(false);
        }
    };

    const uploadImage = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "your_upload_preset");

        const response = await fetch(
            "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
            {
                method: "POST",
                body: formData,
            }
        );

        if (!response.ok) {
            throw new Error("Failed to upload image");
        }

        const data = await response.json();
        return data.secure_url;
    };

    const onSubmit = async (data: ProjectFormData) => {
        setIsSubmitting(true);
        try {
            let thumbnailUrl = data.thumbnail;
            let galleryUrls = data.galleryImages || [];

            // Upload thumbnail if it's a File
            if (data.thumbnail instanceof File) {
                thumbnailUrl = await uploadImage(data.thumbnail);
            }

            // Upload gallery images if they are Files
            if (data.galleryImages && data.galleryImages.length > 0) {
                galleryUrls = await Promise.all(
                    data.galleryImages.map(async (image) => {
                        if (image instanceof File) {
                            return await uploadImage(image);
                        }
                        return image as string;
                    })
                );
            }

            // Prepare final data with uploaded URLs
            const finalData = {
                ...data,
                thumbnail: thumbnailUrl,
                galleryImages: galleryUrls,
            };

            if (!params?.id) return;

            const response = await fetch(`/api/projects/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(finalData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to update project");
            }

            console.log("Project updated successfully:", result.project);
            router.push(`/dashboard/projects/${params.id}?updated=true`);
        } catch (error) {
            console.error("Error updating project:", error);
            alert("Failed to update project. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Navigation functions
    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const goToStep = (step: number) => {
        if (step >= 0 && step < steps.length) {
            setCurrentStep(step);
        }
    };

    const steps = [
        {
            title: "Basic Details",
            description: "Project name, description, and category",
            icon: FaInfoCircle,
            component: BasicDetailsForm,
            fields: [
                "title",
                "thumbnail",
                "description",
                "shortDescription",
                "category",
                "is_featured",
            ],
        },
        {
            title: "Timeline & Dates",
            description: "Project timeline and duration",
            icon: FaCalendarAlt,
            component: TimelineDatesForm,
            fields: ["startDate", "endDate"],
        },
        {
            title: "Skills & Tech",
            description: "Technologies and skills used",
            icon: FaCode,
            component: SkillsTechForm,
            fields: ["skills"],
        },
        {
            title: "Links & Gallery",
            description: "Project links and images",
            icon: FaLink,
            component: LinksGalleryForm,
            fields: ["liveUrl", "githubLink1", "githubLink2", "galleryImages"],
        },
        {
            title: "Publishing Settings",
            description: "Visibility and ordering options",
            icon: FaToggleOn,
            component: PublishingForm,
            fields: ["is_published", "order"],
        },
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--primary-bg)] p-6">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-pulse">
                        <div className="h-8 bg-[var(--card-bg)]/50 rounded-lg mb-6 w-1/4"></div>
                        <div className="h-64 bg-[var(--card-bg)]/50 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        );
    }

    const CurrentStepComponent = steps[currentStep].component;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() =>
                            params?.id &&
                            router.push(`/dashboard/projects/${params.id}`)
                        }
                        className="w-10 h-10 bg-[var(--card-bg)]/50 hover:bg-[var(--primary-color)]/20 rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300">
                        <FaArrowLeft size={16} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
                            Edit Project
                        </h1>
                        <p className="text-[var(--text-secondary)]">
                            Update your project details, timeline, and technical
                            specifications
                        </p>
                    </div>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                <div className="flex items-center justify-between overflow-x-auto pb-2">
                    {steps.map((step, index) => {
                        const StepIcon = step.icon;
                        const isActive = index === currentStep;
                        const isCompleted = index < currentStep;

                        return (
                            <div key={index} className="flex items-center">
                                <button
                                    onClick={() => goToStep(index)}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 min-w-0 ${
                                        isActive
                                            ? "bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 border border-[var(--primary-color)]/30"
                                            : isCompleted
                                            ? "bg-green-500/10 border border-green-500/30 hover:bg-green-500/20"
                                            : "bg-[var(--primary-bg)]/30 border border-[var(--border-color)]/30 hover:bg-[var(--primary-bg)]/50"
                                    }`}>
                                    <div
                                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                            isActive
                                                ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white"
                                                : isCompleted
                                                ? "bg-green-500 text-white"
                                                : "bg-[var(--primary-bg)]/50 text-[var(--text-secondary)]"
                                        }`}>
                                        {isCompleted ? (
                                            <FaCheck size={12} />
                                        ) : (
                                            <StepIcon size={12} />
                                        )}
                                    </div>
                                    <div className="hidden sm:block text-left">
                                        <p
                                            className={`text-sm font-medium ${
                                                isActive
                                                    ? "text-[var(--primary-color)]"
                                                    : "text-[var(--text-primary)]"
                                            }`}>
                                            {step.title}
                                        </p>
                                        <p className="text-xs text-[var(--text-secondary)] hidden sm:block">
                                            {step.description}
                                        </p>
                                    </div>
                                </button>

                                {index < steps.length - 1 && (
                                    <div
                                        className={`w-8 h-px mx-2 ${
                                            index < currentStep
                                                ? "bg-green-500"
                                                : "bg-[var(--border-color)]/30"
                                        }`}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Form Content */}
            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                <CurrentStepComponent form={form as any} />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
                <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-[var(--card-bg)]/50 hover:bg-[var(--primary-bg)]/50 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-xl font-medium border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    <FaArrowLeft size={14} />
                    <span>Previous</span>
                </button>

                <div className="flex items-center space-x-3">
                    {currentStep < steps.length - 1 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                            <span>Next Step</span>
                            <FaArrowLeft className="rotate-180" size={14} />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleSubmit(onSubmit)}
                            disabled={isSubmitting}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                            {isSubmitting ? (
                                <>
                                    <FaSpinner
                                        className="animate-spin"
                                        size={14}
                                    />
                                    <span>Updating Project...</span>
                                </>
                            ) : (
                                <>
                                    <FaSave size={14} />
                                    <span>Update Project</span>
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditProjectPage;
