'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useParams } from 'next/navigation';
import { projectSchema, ProjectFormData } from '@/lib/validations/project';
import BasicDetailsForm from '@/components/dashboard/forms/BasicDetailsForm';
import TimelineDatesForm from '@/components/dashboard/forms/TimelineDatesForm';
import SkillsTechForm from '@/components/dashboard/forms/SkillsTechForm';
import LinksGalleryForm from '@/components/dashboard/forms/LinksGalleryForm';
import SEOMetaForm from '@/components/dashboard/forms/SEOMetaForm';
import { FaArrowLeft, FaSave, FaSpinner, FaInfoCircle, FaCalendarAlt, FaCode, FaLink, FaSearch } from 'react-icons/fa';

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
            is_featured: false,
        },
    });

    const { setValue, watch, handleSubmit } = form;

    useEffect(() => {
        if (params?.id) {
            fetchProject();
        }
    }, [params?.id]);

    const fetchProject = async () => {
        if (!params?.id) return;
        
        try {
            const response = await fetch(`/api/projects/${params.id}`);
            if (response.ok) {
                const data = await response.json();
                const project = data.project;
                
                // Populate form with existing data
                setValue('title', project.title);
                setValue('thumbnail', project.thumbnail);
                setValue('description', project.description);
                setValue('startDate', project.startDate);
                setValue('endDate', project.endDate);
                setValue('skills', project.skills || []);
                setValue('category', project.category);
                setValue('is_featured', project.is_featured);
                setValue('liveUrl', project.liveUrl);
                setValue('githubLink1', project.githubLink1 || '');
                setValue('githubLink2', project.githubLink2 || '');
                setValue('galleryImages', project.galleryImages || []);
                setValue('meta_title', project.meta_title);
                setValue('meta_desc', project.meta_desc);
                setValue('meta_keywords', project.meta_keywords || []);
            } else {
                console.error('Failed to fetch project');
                router.push('/dashboard/projects');
            }
        } catch (error) {
            console.error('Error fetching project:', error);
            router.push('/dashboard/projects');
        } finally {
            setLoading(false);
        }
    };

    const uploadImage = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_upload_preset');

        const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to upload image');
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
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to update project');
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

    const steps = [
        {
            title: "Basic Details",
            description: "Project name, description, and category",
            icon: FaInfoCircle,
            component: BasicDetailsForm,
            fields: ["title", "thumbnail", "description", "category", "is_featured"],
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
            title: "SEO Meta Info",
            description: "Meta title, description, and keywords",
            icon: FaSearch,
            component: SEOMetaForm,
            fields: ["meta_title", "meta_desc", "meta_keywords"],
        },
    ];

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
        <div className="min-h-screen bg-gradient-to-br from-[var(--primary-bg)] via-[var(--secondary-bg)] to-[var(--primary-bg)] p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => params?.id && router.push(`/dashboard/projects/${params.id}`)}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-500/10 border border-gray-500/30 rounded-xl text-gray-400 hover:bg-gray-500/20 transition-all duration-300"
                    >
                        <FaArrowLeft />
                        <span>Back to Project</span>
                    </button>

                    <h1 className="text-2xl font-bold text-[var(--text-primary)]">Edit Project</h1>
                </div>

                {/* Progress Steps */}
                <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                                    index <= currentStep 
                                        ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white' 
                                        : 'bg-[var(--primary-bg)]/50 text-[var(--text-secondary)] border border-[var(--border-color)]/30'
                                }`}>
                                    {index + 1}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                                        index < currentStep ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]' : 'bg-[var(--border-color)]/30'
                                    }`} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-semibold text-[var(--text-primary)]">{steps[currentStep].title}</h2>
                        <p className="text-sm text-[var(--text-secondary)]">{steps[currentStep].description}</p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CurrentStepComponent form={form} />

                    {/* Navigation */}
                    <div className="flex justify-between mt-8">
                        <button
                            type="button"
                            onClick={prevStep}
                            disabled={currentStep === 0}
                            className="px-6 py-3 bg-[var(--card-bg)]/50 backdrop-blur-xl border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] hover:border-[var(--primary-color)]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>

                        <div className="flex space-x-3">
                            {currentStep === steps.length - 1 ? (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            <span>Updating...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaSave />
                                            <span>Update Project</span>
                                        </>
                                    )}
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-xl hover:shadow-lg transition-all duration-300"
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProjectPage;
