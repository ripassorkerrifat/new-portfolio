"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

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

interface SettingsContextType {
    settings: Settings;
    loading: boolean;
    error: string | null;
    updateSettings: (newSettings: Partial<Settings>) => Promise<{ success: boolean; error?: string }>;
    refetch: () => Promise<void>;
}

const defaultSettings: Settings = {
    socialLinks: {
        github: "https://github.com/ripassorkerrifat",
        linkedin: "https://www.linkedin.com/in/ripas-sorker-rifat-b42a01257/",
        facebook: "https://www.facebook.com/ripassorkerrifat",
        twitter: "https://x.com/ripassorker",
        instagram: "https://www.instagram.com/ripassorkerrifat",
        whatsapp: "01744876681"
    },
    resumeUrl: ""
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [settings, setSettings] = useState<Settings>(defaultSettings);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchSettings = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/settings');
            const data = await response.json();
            
            if (data.success) {
                setSettings({
                    socialLinks: {
                        ...defaultSettings.socialLinks,
                        ...data.settings.socialLinks
                    },
                    resumeUrl: data.settings.resumeUrl || ""
                });
            } else {
                setError('Failed to fetch settings');
            }
        } catch (err) {
            setError('Failed to fetch settings');
            // Use default settings on error
            setSettings(defaultSettings);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSettings();
    }, []);

    const updateSettings = async (newSettings: Partial<Settings>) => {
        try {
            const response = await fetch('/api/settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSettings),
            });

            const data = await response.json();
            
            if (data.success) {
                setSettings(prev => ({
                    ...prev,
                    ...newSettings
                }));
                return { success: true };
            } else {
                return { success: false, error: data.error };
            }
        } catch (err) {
            return { success: false, error: 'Failed to update settings' };
        }
    };

    return (
        <SettingsContext.Provider value={{ settings, loading, error, updateSettings, refetch: fetchSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};
