import mongoose from 'mongoose';

export interface ISocialLinks {
    github?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    whatsapp?: string;
}

export interface ISettings {
    _id?: string;
    socialLinks: ISocialLinks;
    resumeUrl?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const socialLinksSchema = new mongoose.Schema({
    github: {
        type: String,
        default: "https://github.com/ripassorkerrifat"
    },
    linkedin: {
        type: String,
        default: "https://www.linkedin.com/in/ripas-sorker-rifat-b42a01257/"
    },
    facebook: {
        type: String,
        default: "https://www.facebook.com/ripassorkerrifat"
    },
    twitter: {
        type: String,
        default: "https://x.com/ripassorker"
    },
    instagram: {
        type: String,
        default: "https://www.instagram.com/ripassorkerrifat"
    },
    whatsapp: {
        type: String,
        default: "01744876681"
    }
});

const settingsSchema = new mongoose.Schema({
    socialLinks: {
        type: socialLinksSchema,
        default: () => ({})
    },
    resumeUrl: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

// Ensure only one settings document exists
settingsSchema.index({}, { unique: true });

const Settings = mongoose.models.Settings || mongoose.model<ISettings>('Settings', settingsSchema);

export default Settings;
