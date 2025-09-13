'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ProjectFormData } from '@/lib/validations/project';
import { FaSearch, FaTags, FaPlus, FaTrash } from 'react-icons/fa';

interface SEOMetaFormProps {
    form: UseFormReturn<ProjectFormData>;
}

const SEOMetaForm: React.FC<SEOMetaFormProps> = ({ form }) => {
    const { register, formState: { errors }, watch, setValue } = form;
    const metaKeywords = watch('meta_keywords') || [];

    const addKeyword = () => {
        const newKeywords = [...metaKeywords, ''];
        setValue('meta_keywords', newKeywords);
    };

    const removeKeyword = (index: number) => {
        const newKeywords = metaKeywords.filter((_, i) => i !== index);
        setValue('meta_keywords', newKeywords);
    };

    const updateKeyword = (index: number, value: string) => {
        const newKeywords = [...metaKeywords];
        newKeywords[index] = value;
        setValue('meta_keywords', newKeywords);
    };

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <FaSearch className="text-white" size={16} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">SEO Meta Information</h2>
                    <p className="text-sm text-[var(--text-secondary)]">Optimize your project for search engines</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Meta Title */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Meta Title *
                    </label>
                    <input
                        {...register('meta_title')}
                        type="text"
                        placeholder="Enter SEO title (max 60 characters)"
                        maxLength={60}
                        className="w-full px-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                    />
                    <div className="flex justify-between items-center mt-1">
                        {errors.meta_title && (
                            <p className="text-red-400 text-sm">{errors.meta_title.message}</p>
                        )}
                        <p className="text-xs text-[var(--text-secondary)] ml-auto">
                            {watch('meta_title')?.length || 0}/60
                        </p>
                    </div>
                </div>

                {/* Meta Description */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Meta Description *
                    </label>
                    <textarea
                        {...register('meta_desc')}
                        rows={3}
                        placeholder="Enter SEO description (max 160 characters)"
                        maxLength={160}
                        className="w-full px-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300 resize-none"
                    />
                    <div className="flex justify-between items-center mt-1">
                        {errors.meta_desc && (
                            <p className="text-red-400 text-sm">{errors.meta_desc.message}</p>
                        )}
                        <p className="text-xs text-[var(--text-secondary)] ml-auto">
                            {watch('meta_desc')?.length || 0}/160
                        </p>
                    </div>
                </div>

                {/* Meta Keywords */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <label className="block text-sm font-medium text-[var(--text-primary)]">
                            Meta Keywords *
                        </label>
                        <button
                            type="button"
                            onClick={addKeyword}
                            className="flex items-center space-x-1 px-3 py-1.5 bg-[var(--primary-color)]/20 hover:bg-[var(--primary-color)]/30 border border-[var(--primary-color)]/30 rounded-lg text-[var(--primary-color)] text-sm transition-all duration-300"
                        >
                            <FaPlus size={12} />
                            <span>Add Keyword</span>
                        </button>
                    </div>

                    <div className="space-y-3">
                        {metaKeywords.map((keyword, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="flex-1 relative">
                                    <FaTags className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]" size={14} />
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => updateKeyword(index, e.target.value)}
                                        placeholder="Enter keyword"
                                        className="w-full pl-10 pr-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeKeyword(index)}
                                    className="w-10 h-10 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center text-red-400 transition-all duration-300"
                                >
                                    <FaTrash size={12} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {metaKeywords.length === 0 && (
                        <div className="text-center py-8 border-2 border-dashed border-[var(--border-color)]/30 rounded-xl">
                            <FaTags className="mx-auto text-[var(--text-secondary)] mb-2" size={24} />
                            <p className="text-[var(--text-secondary)] text-sm mb-3">No keywords added yet</p>
                            <button
                                type="button"
                                onClick={addKeyword}
                                className="px-4 py-2 bg-[var(--primary-color)]/20 hover:bg-[var(--primary-color)]/30 border border-[var(--primary-color)]/30 rounded-lg text-[var(--primary-color)] text-sm transition-all duration-300"
                            >
                                Add First Keyword
                            </button>
                        </div>
                    )}

                    {errors.meta_keywords && (
                        <p className="text-red-400 text-sm mt-2">{errors.meta_keywords.message}</p>
                    )}
                </div>

                {/* SEO Tips */}
                <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                    <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <FaSearch className="text-white" size={12} />
                        </div>
                        <h3 className="font-medium text-[var(--text-primary)]">SEO Tips</h3>
                    </div>
                    <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                        <li>• Keep meta title under 60 characters for better display</li>
                        <li>• Meta description should be 150-160 characters</li>
                        <li>• Use relevant keywords that describe your project</li>
                        <li>• Make titles and descriptions compelling and unique</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SEOMetaForm;
