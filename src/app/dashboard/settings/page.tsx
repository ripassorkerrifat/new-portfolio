"use client";

import React, { useState, useEffect } from "react";
import { 
    FaGithub, 
    FaLinkedin, 
    FaFacebook, 
    FaTwitter, 
    FaInstagram, 
    FaWhatsapp,
    FaFileAlt,
    FaSave,
    FaSpinner
} from "react-icons/fa";

interface SocialLinks {
    github: string;
    linkedin: string;
    facebook: string;
    twitter: string;
    instagram: string;
    whatsapp: string;
}

interface Settings {
    socialLinks: SocialLinks;
    resumeUrl: string;
}

const SettingsPage: React.FC = () => {
    const [settings, setSettings] = useState<Settings>({
        socialLinks: {
            github: "",
            linkedin: "",
            facebook: "",
            twitter: "",
            instagram: "",
            whatsapp: ""
        },
        resumeUrl: ""
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    // Fetch current settings
    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const response = await fetch('/api/settings');
            const data = await response.json();
            
            if (data.success) {
                setSettings({
                    socialLinks: data.settings.socialLinks,
                    resumeUrl: data.settings.resumeUrl || ""
                });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to load settings' });
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLinkChange = (platform: keyof SocialLinks, value: string) => {
        setSettings(prev => ({
            ...prev,
            socialLinks: {
                ...prev.socialLinks,
                [platform]: value
            }
        }));
    };

    const handleResumeUrlChange = (value: string) => {
        setSettings(prev => ({
            ...prev,
            resumeUrl: value
        }));
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage(null);

        try {
            const response = await fetch('/api/settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(settings),
            });

            const data = await response.json();

            if (data.success) {
                setMessage({ type: 'success', text: 'Settings saved successfully!' });
            } else {
                setMessage({ type: 'error', text: data.error || 'Failed to save settings' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to save settings' });
        } finally {
            setSaving(false);
        }
    };

    const socialPlatforms = [
        { key: 'github' as keyof SocialLinks, label: 'GitHub', icon: FaGithub, placeholder: 'https://github.com/username' },
        { key: 'linkedin' as keyof SocialLinks, label: 'LinkedIn', icon: FaLinkedin, placeholder: 'https://linkedin.com/in/username' },
        { key: 'facebook' as keyof SocialLinks, label: 'Facebook', icon: FaFacebook, placeholder: 'https://facebook.com/username' },
        { key: 'twitter' as keyof SocialLinks, label: 'Twitter', icon: FaTwitter, placeholder: 'https://twitter.com/username' },
        { key: 'instagram' as keyof SocialLinks, label: 'Instagram', icon: FaInstagram, placeholder: 'https://instagram.com/username' },
        { key: 'whatsapp' as keyof SocialLinks, label: 'WhatsApp', icon: FaWhatsapp, placeholder: '01744876681' },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="flex items-center space-x-3 text-[var(--text-secondary)]">
                    <FaSpinner className="animate-spin text-2xl" />
                    <span>Loading settings...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                        Settings
                    </h1>
                    <p className="text-[var(--text-secondary)]">
                        Manage your social links and resume URL
                    </p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center space-x-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--primary-color)]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {saving ? (
                        <>
                            <FaSpinner className="animate-spin" />
                            <span>Saving...</span>
                        </>
                    ) : (
                        <>
                            <FaSave />
                            <span>Save Changes</span>
                        </>
                    )}
                </button>
            </div>

            {/* Message */}
            {message && (
                <div className={`p-4 rounded-xl border ${
                    message.type === 'success' 
                        ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}>
                    {message.text}
                </div>
            )}

            {/* Social Links Section */}
            <div className="glass rounded-3xl p-8 border border-[var(--border-color)]/30">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center space-x-3">
                    <span>Social Links</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {socialPlatforms.map((platform) => {
                        const Icon = platform.icon;
                        return (
                            <div key={platform.key} className="space-y-2">
                                <label className="flex items-center space-x-2 text-[var(--text-primary)] font-medium">
                                    <Icon className="text-lg" />
                                    <span>{platform.label}</span>
                                </label>
                                <input
                                    type="text"
                                    value={settings.socialLinks[platform.key]}
                                    onChange={(e) => handleSocialLinkChange(platform.key, e.target.value)}
                                    placeholder={platform.placeholder}
                                    className="w-full px-4 py-3 bg-[var(--card-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all duration-300"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Resume URL Section */}
            <div className="glass rounded-3xl p-8 border border-[var(--border-color)]/30">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center space-x-3">
                    <FaFileAlt />
                    <span>Resume URL</span>
                </h2>
                <div className="space-y-2">
                    <label className="text-[var(--text-primary)] font-medium">
                        Resume Download Link
                    </label>
                    <input
                        type="url"
                        value={settings.resumeUrl}
                        onChange={(e) => handleResumeUrlChange(e.target.value)}
                        placeholder="https://drive.google.com/file/d/your-resume-id/view"
                        className="w-full px-4 py-3 bg-[var(--card-bg)]/50 border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all duration-300"
                    />
                    <p className="text-sm text-[var(--text-secondary)]">
                        Add your Google Drive resume link or any other direct download URL
                    </p>
                </div>
            </div>

            {/* Default Values Info */}
            <div className="glass rounded-3xl p-6 border border-[var(--border-color)]/30 bg-blue-500/5">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                    ℹ️ Default Values
                </h3>
                <div className="text-sm text-[var(--text-secondary)] space-y-1">
                    <p>• If you leave any social link empty, the default portfolio links will be used</p>
                    <p>• WhatsApp default number: 01744876681</p>
                    <p>• WhatsApp will appear as a floating button on all portfolio pages</p>
                    <p>• Resume button will redirect to the URL you provide above</p>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
