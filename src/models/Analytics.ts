import mongoose, { Document, Schema } from 'mongoose';

export interface IPageView extends Document {
    page: string;
    userAgent: string;
    ipAddress: string;
    referrer?: string;
    country?: string;
    city?: string;
    device: 'desktop' | 'mobile' | 'tablet';
    browser: string;
    os: string;
    timestamp: Date;
    sessionId: string;
    userId?: string;
}

export interface IVisitorSession extends Document {
    sessionId: string;
    ipAddress: string;
    userAgent: string;
    country?: string;
    city?: string;
    device: 'desktop' | 'mobile' | 'tablet';
    browser: string;
    os: string;
    startTime: Date;
    endTime?: Date;
    pageViews: number;
    duration?: number;
    referrer?: string;
    isReturning: boolean;
}

const PageViewSchema = new Schema<IPageView>({
    page: {
        type: String,
        required: true,
        trim: true
    },
    userAgent: {
        type: String,
        required: true
    },
    ipAddress: {
        type: String,
        required: true
    },
    referrer: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    device: {
        type: String,
        enum: ['desktop', 'mobile', 'tablet'],
        required: true
    },
    browser: {
        type: String,
        required: true
    },
    os: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    sessionId: {
        type: String,
        required: true
    },
    userId: {
        type: String
    }
}, {
    timestamps: true
});

const VisitorSessionSchema = new Schema<IVisitorSession>({
    sessionId: {
        type: String,
        required: true,
        unique: true
    },
    ipAddress: {
        type: String,
        required: true
    },
    userAgent: {
        type: String,
        required: true
    },
    country: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    device: {
        type: String,
        enum: ['desktop', 'mobile', 'tablet'],
        required: true
    },
    browser: {
        type: String,
        required: true
    },
    os: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: Date
    },
    pageViews: {
        type: Number,
        default: 1
    },
    duration: {
        type: Number // in seconds
    },
    referrer: {
        type: String
    },
    isReturning: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Add indexes for better query performance
PageViewSchema.index({ timestamp: -1 });
PageViewSchema.index({ page: 1 });
PageViewSchema.index({ sessionId: 1 });
PageViewSchema.index({ ipAddress: 1 });

VisitorSessionSchema.index({ startTime: -1 });
VisitorSessionSchema.index({ sessionId: 1 });
VisitorSessionSchema.index({ ipAddress: 1 });

export const PageView = mongoose.models.PageView || mongoose.model<IPageView>('PageView', PageViewSchema);
export const VisitorSession = mongoose.models.VisitorSession || mongoose.model<IVisitorSession>('VisitorSession', VisitorSessionSchema);
