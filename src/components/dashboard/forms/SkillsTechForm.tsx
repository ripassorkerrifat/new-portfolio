'use client';

import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ProjectFormData } from '@/lib/validations/project';
import { FaCode, FaPlus, FaTimes } from 'react-icons/fa';

interface SkillsTechFormProps {
    form: UseFormReturn<ProjectFormData>;
}

const SkillsTechForm: React.FC<SkillsTechFormProps> = ({ form }) => {
    const { formState: { errors }, setValue, watch } = form;
    const [newSkill, setNewSkill] = useState('');
    
    const skills = watch('skills') || [];

    const popularSkills = [
        // Frontend - JavaScript/TypeScript Focus
        'React', 'Next.js', 'Vue.js', 'Nuxt.js', 'TypeScript', 'JavaScript',
        'Tailwind CSS', 'Material-UI', 'Styled Components', 'SASS', 'CSS3', 'HTML5',
        
        // Backend - Python/Node.js Focus
        'Node.js', 'Express.js', 'Fastify', 'Python', 'Django', 'Flask',
        'FastAPI', 'Prisma', 'Mongoose', 'SQLAlchemy',
        
        // Databases
        'MongoDB', 'PostgreSQL', 'Redis', 'SQLite', 'Firebase Firestore',
        
        // Cloud & Deployment
        'Vercel', 'Netlify', 'Railway', 'Render', 'Heroku', 'AWS', 'Docker',
        
        // Tools & Testing
        'Git', 'GitHub', 'VS Code', 'Postman', 'Jest', 'Pytest', 'Cypress',
        'ESLint', 'Prettier', 'Webpack', 'Vite', 'Turborepo',
        
        // APIs & Integration
        'REST API', 'GraphQL', 'WebSocket', 'Stripe', 'Auth0', 'JWT',
        'Cloudinary', 'SendGrid', 'Twilio'
    ];

    const addSkill = (skill: string) => {
        if (skill && !skills.includes(skill)) {
            setValue('skills', [...skills, skill]);
            setNewSkill('');
        }
    };

    const removeSkill = (skillToRemove: string) => {
        setValue('skills', skills.filter(skill => skill !== skillToRemove));
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill(newSkill);
        }
    };

    return (
        <div className="bg-[var(--card-bg)]/50 backdrop-blur-xl rounded-2xl p-6 border border-[var(--border-color)]/30">
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <FaCode className="text-white" size={16} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]">Skills & Technologies</h2>
                    <p className="text-sm text-[var(--text-secondary)]">Technologies and skills used in this project</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Selected Skills */}
                {skills.length > 0 && (
                    <div>
                        <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                            Selected Skills ({skills.length})
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 text-[var(--primary-color)] px-3 py-2 rounded-lg text-sm border border-[var(--primary-color)]/30"
                                >
                                    <span>{skill}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeSkill(skill)}
                                        className="text-[var(--primary-color)]/70 hover:text-red-400 transition-colors duration-300"
                                    >
                                        <FaTimes size={10} />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Add New Skill */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Add Skills *
                    </label>
                    <div className="flex space-x-2 mb-4">
                        <input
                            type="text"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a skill or technology..."
                            className="flex-1 px-4 py-3 bg-[var(--primary-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors duration-300"
                        />
                        <button
                            type="button"
                            onClick={() => addSkill(newSkill)}
                            disabled={!newSkill.trim()}
                            className="px-4 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-xl font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        >
                            <FaPlus size={14} />
                        </button>
                    </div>

                    {errors.skills && (
                        <p className="text-red-400 text-sm mb-4">{errors.skills.message}</p>
                    )}
                </div>

                {/* Popular Skills */}
                <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-3">
                        Popular Skills
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {popularSkills
                            .filter(skill => !skills.includes(skill))
                            .map((skill) => (
                                <button
                                    key={skill}
                                    type="button"
                                    onClick={() => addSkill(skill)}
                                    className="px-3 py-2 bg-[var(--primary-bg)]/30 hover:bg-[var(--primary-color)]/20 text-[var(--text-secondary)] hover:text-[var(--primary-color)] text-sm rounded-lg border border-[var(--border-color)]/30 hover:border-[var(--primary-color)]/30 transition-all duration-300 text-left"
                                >
                                    {skill}
                                </button>
                            ))
                        }
                    </div>
                </div>

                {/* Skills Summary */}
                {skills.length > 0 && (
                    <div className="bg-[var(--primary-bg)]/30 rounded-xl p-4 border border-[var(--border-color)]/20">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                                <FaCode className="text-white" size={12} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[var(--text-primary)]">Skills Summary</p>
                                <p className="text-xs text-[var(--text-secondary)]">
                                    {skills.length} skill{skills.length === 1 ? '' : 's'} selected
                                </p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                                <p className="text-lg font-bold text-[var(--primary-color)]">{skills.length}</p>
                                <p className="text-xs text-[var(--text-secondary)]">Total Skills</p>
                            </div>
                            <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                                <p className="text-lg font-bold text-blue-500">
                                    {skills.filter(skill => 
                                        ['React', 'Vue.js', 'Angular', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'].includes(skill)
                                    ).length}
                                </p>
                                <p className="text-xs text-[var(--text-secondary)]">Frontend</p>
                            </div>
                            <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                                <p className="text-lg font-bold text-green-500">
                                    {skills.filter(skill => 
                                        ['Node.js', 'Express.js', 'Python', 'Django', 'Java', 'Spring Boot', 'C#', '.NET', 'PHP', 'Laravel'].includes(skill)
                                    ).length}
                                </p>
                                <p className="text-xs text-[var(--text-secondary)]">Backend</p>
                            </div>
                            <div className="bg-[var(--primary-bg)]/50 rounded-lg p-3">
                                <p className="text-lg font-bold text-purple-500">
                                    {skills.filter(skill => 
                                        ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'AWS', 'Azure', 'Docker'].includes(skill)
                                    ).length}
                                </p>
                                <p className="text-xs text-[var(--text-secondary)]">Tools & DB</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillsTechForm;
