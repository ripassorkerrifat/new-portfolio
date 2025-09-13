import mongoose, { Document, Schema } from 'mongoose';

export interface IContactMessage extends Document {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
    userAgent?: string;
    ipAddress?: string;
    location?: string;
}

const ContactMessageSchema = new Schema<IContactMessage>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userAgent: {
        type: String
    },
    ipAddress: {
        type: String
    },
    location: {
        type: String
    }
}, {
    timestamps: true
});

// Add indexes for better query performance
ContactMessageSchema.index({ createdAt: -1 });
ContactMessageSchema.index({ isRead: 1 });
ContactMessageSchema.index({ email: 1 });

const ContactMessage = mongoose.models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);

export default ContactMessage;
