/* eslint-disable react/no-unescaped-entities */
"use client";

import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaComment,
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationTriangle,
} from "react-icons/fa";
import {emailAPI} from "@/api/email-api";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().optional(),
    company: z.string().optional(),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
    className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({className = ""}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            await emailAPI.submitContactForm(data);
            setSubmitStatus("success");
            reset();

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus("idle");
            }, 5000);
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Failed to send message"
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className={`bg-gradient-to-br from-[var(--card-bg)]/95 to-[var(--primary-bg)]/95 backdrop-blur-xl rounded-2xl border border-[var(--border-color)]/30 shadow-2xl ${className}`}>
            <div className="md:p-8 p-3">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
                        Get In Touch
                    </h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                        Have a project in mind? Let's discuss how we can work
                        together to bring your ideas to life.
                    </p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center space-x-3">
                        <FaCheckCircle className="text-green-500 text-xl" />
                        <div>
                            <p className="text-green-400 font-medium">
                                Message sent successfully!
                            </p>
                            <p className="text-green-300 text-sm">
                                Thank you for reaching out. I'll get back to you
                                soon.
                            </p>
                        </div>
                    </div>
                )}

                {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center space-x-3">
                        <FaExclamationTriangle className="text-red-500 text-xl" />
                        <div>
                            <p className="text-red-400 font-medium">
                                Failed to send message
                            </p>
                            <p className="text-red-300 text-sm">
                                {errorMessage}
                            </p>
                        </div>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                Full Name *
                            </label>
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]" />
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full pl-12 pr-4 py-4 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-all duration-300"
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                Email Address *
                            </label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]" />
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="w-full pl-12 pr-4 py-4 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-all duration-300"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Phone and Company Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                Phone Number
                            </label>
                            <div className="relative">
                                <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]" />
                                <input
                                    {...register("phone")}
                                    type="tel"
                                    placeholder="+1 (555) 123-4567"
                                    className="w-full pl-12 pr-4 py-4 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                Company/Organization
                            </label>
                            <div className="relative">
                                <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]" />
                                <input
                                    {...register("company")}
                                    type="text"
                                    placeholder="Your company name"
                                    className="w-full pl-12 pr-4 py-4 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                            Subject *
                        </label>
                        <input
                            {...register("subject")}
                            type="text"
                            placeholder="What's this about?"
                            className="w-full px-4 py-4 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-all duration-300"
                        />
                        {errors.subject && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.subject.message}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                            Message *
                        </label>
                        <div className="relative">
                            <FaComment className="absolute left-4 top-4 text-[var(--text-secondary)]" />
                            <textarea
                                {...register("message")}
                                rows={6}
                                placeholder="Tell me about your project, goals, timeline, or any questions you have..."
                                className="w-full pl-12 pr-4 py-4 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-all duration-300 resize-none"
                            />
                        </div>
                        {errors.message && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-[var(--primary-color)]/25 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]">
                            <div className="flex items-center justify-center space-x-3">
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Sending Message...</span>
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </div>
                        </button>
                    </div>

                    {/* Privacy Note */}
                    <div className="text-center pt-2">
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            Your information is secure and will only be used to
                            respond to your inquiry. I respect your privacy and
                            will never share your details with third parties.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
