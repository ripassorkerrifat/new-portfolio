"use client";

import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {projectSchema, ProjectFormData} from "@/lib/validations/project";
import BasicDetailsForm from "@/components/dashboard/forms/BasicDetailsForm";
import SkillsTechForm from "@/components/dashboard/forms/SkillsTechForm";
import LinksGalleryForm from "@/components/dashboard/forms/LinksGalleryForm";
import PublishingForm from "@/components/dashboard/forms/PublishingForm";
import ReviewSubmitForm from "@/components/dashboard/forms/ReviewSubmitForm";
import {
    FaArrowLeft,
    FaSave,
    FaCheck,
    FaSpinner,
    FaInfoCircle,
    FaCode,
    FaLink,
    FaEye,
    FaGlobe,
} from "react-icons/fa";

const AddProjectPage: React.FC = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const defaultValues = {
        title: "",
        description: "",
        shortDescription: "",
        thumbnail: "",
        category: "front-end" as const,
        skills: [],
        is_featured: false,
        is_published: true,
        order: undefined,
        liveUrl: "",
        githubLink1: "",
        githubLink2: "",
        galleryImages: [],
    };

    const form = useForm({
        resolver: zodResolver(projectSchema),
        mode: "onChange" as const,
        defaultValues,
    });

    const steps = [
        {
            title: "Basic Details",
            description: "Title, thumbnail, and description",
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
            title: "Skills & Tech",
            description: "Technologies and skills used",
            icon: FaCode,
            component: SkillsTechForm,
            fields: ["skills"],
        },
        {
            title: "Publishing",
            description: "Set visibility and display order",
            icon: FaGlobe,
            component: PublishingForm,
            fields: ["is_published", "is_featured", "order"],
        },
        {
            title: "Links & Gallery",
            description: "Project links and images",
            icon: FaLink,
            component: LinksGalleryForm,
            fields: ["liveUrl", "githubLink1", "githubLink2", "galleryImages"],
        },
        {
            title: "Review & Submit",
            description: "Review all details",
            icon: FaEye,
            component: ReviewSubmitForm,
            fields: [],
        },
    ];

    const uploadFile = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Failed to upload file");
        }

        const result = await response.json();
        return result.url;
    };

    const onSubmit = async (data: ProjectFormData) => {
        setIsSubmitting(true);
        try {
            // Upload thumbnail if it's a File
            let thumbnailUrl = data.thumbnail;
            if (data.thumbnail instanceof File) {
                thumbnailUrl = await uploadFile(data.thumbnail);
            }

            // Upload gallery images if they are Files
            let galleryUrls: string[] = [];
            if (data.galleryImages) {
                galleryUrls = await Promise.all(
                    data.galleryImages.map(async (item) => {
                        if (item instanceof File) {
                            return await uploadFile(item);
                        }
                        return item as string;
                    })
                );
            }

            // Prepare final data with uploaded URLs
            const finalData = {
                ...data,
                thumbnail: thumbnailUrl,
                galleryImages: galleryUrls,
            };

            const response = await fetch("/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(finalData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to create project");
            }

            console.log("Project created successfully:", result.project);

            // Show success message and redirect
            router.push("/dashboard/projects?created=true");
        } catch (error) {
            console.error("Error creating project:", error);
            alert(
                error instanceof Error
                    ? error.message
                    : "Failed to create project"
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const validateCurrentStep = async () => {
        const currentStepFields = steps[currentStep].fields;
        if (currentStepFields.length === 0) return true; // Review step has no fields to validate
        const result = await form.trigger(
            currentStepFields as (keyof ProjectFormData)[]
        );
        return result;
    };

    const nextStep = async () => {
        const isValid = await validateCurrentStep();
        if (isValid && currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const goToStep = async (stepIndex: number) => {
        if (stepIndex < currentStep) {
            setCurrentStep(stepIndex);
        } else if (stepIndex > currentStep) {
            // Validate all previous steps
            let canProceed = true;
            for (let i = currentStep; i < stepIndex; i++) {
                const stepFields = steps[i].fields;
                if (stepFields.length > 0) {
                    const isValid = await form.trigger(
                        stepFields as (keyof ProjectFormData)[]
                    );
                    if (!isValid) {
                        canProceed = false;
                        break;
                    }
                }
            }
            if (canProceed) {
                setCurrentStep(stepIndex);
            }
        }
    };

    const CurrentStepComponent = steps[currentStep].component;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => router.back()}
                        className="w-10 h-10 bg-[var(--card-bg)]/50 hover:bg-[var(--primary-color)]/20 rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-300">
                        <FaArrowLeft size={16} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
                            Create New Project
                        </h1>
                        <p className="text-[var(--text-secondary)]">
                            Set up your project with team, timeline, and
                            technical details
                        </p>
                    </div>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
                <div className="flex items-center justify-between">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        const isActive = index === currentStep;
                        const isCompleted = index < currentStep;
                        const isAccessible = index <= currentStep;

                        return (
                            <div key={index} className="flex items-center">
                                <button
                                    onClick={() => goToStep(index)}
                                    disabled={!isAccessible}
                                    className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 ${
                                        isActive
                                            ? "bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 border border-[var(--primary-color)]/30"
                                            : isCompleted
                                            ? "bg-green-500/20 border border-green-500/30"
                                            : "hover:bg-[var(--primary-bg)]/30"
                                    } ${
                                        !isAccessible
                                            ? "opacity-50 cursor-not-allowed"
                                            : "cursor-pointer"
                                    }`}>
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                            isActive
                                                ? "bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] text-white"
                                                : isCompleted
                                                ? "bg-green-500 text-white"
                                                : "bg-[var(--primary-bg)]/50 text-[var(--text-secondary)]"
                                        }`}>
                                        {isCompleted ? (
                                            <FaCheck size={16} />
                                        ) : (
                                            <IconComponent size={16} />
                                        )}
                                    </div>
                                    <div className="text-center">
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
            <div className="space-y-6">
                <CurrentStepComponent form={form as any} />

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
                                onClick={form.handleSubmit(onSubmit)}
                                disabled={isSubmitting}
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner
                                            className="animate-spin"
                                            size={14}
                                        />
                                        <span>Creating Project...</span>
                                    </>
                                ) : (
                                    <>
                                        <FaSave size={14} />
                                        <span>Create Project</span>
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Form Debug (Development only) */}
            {process.env.NODE_ENV === "development" && (
                <div className="bg-[var(--card-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                    <details>
                        <summary className="text-sm font-medium text-[var(--text-primary)] cursor-pointer">
                            Form Debug (Development)
                        </summary>
                        <pre className="text-xs text-[var(--text-secondary)] mt-2 overflow-auto">
                            {JSON.stringify(form.watch(), null, 2)}
                        </pre>
                    </details>
                </div>
            )}
        </div>
    );
};

export default AddProjectPage;
