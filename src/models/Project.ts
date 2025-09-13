import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  thumbnail: string;
  description: string;
  startDate: string;
  endDate?: string;
  skills: string[];
  category: 'front-end' | 'backend' | 'others';
  is_featured: boolean;
  liveUrl: string;
  githubLink1?: string;
  githubLink2?: string;
  galleryImages?: string[];
  meta_title: string;
  meta_desc: string;
  meta_keywords: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    thumbnail: {
      type: String,
      required: [true, 'Project thumbnail is required'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      minlength: [10, 'Description must be at least 10 characters'],
    },
    startDate: {
      type: String,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: String,
      required: false,
    },
    skills: {
      type: [String],
      required: [true, 'At least one skill is required'],
      validate: {
        validator: function(v: string[]) {
          return v && v.length > 0;
        },
        message: 'At least one skill must be provided',
      },
    },
    category: {
      type: String,
      required: [true, 'Project category is required'],
      enum: {
        values: ['front-end', 'backend', 'others'],
        message: 'Category must be one of: front-end, backend, others',
      },
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
    liveUrl: {
      type: String,
      required: [true, 'Live URL is required'],
      validate: {
        validator: function(v: string) {
          return /^https?:\/\/.+/.test(v);
        },
        message: 'Please provide a valid URL',
      },
    },
    githubLink1: {
      type: String,
      required: false,
      validate: {
        validator: function(v: string) {
          return !v || /^https?:\/\/.+/.test(v);
        },
        message: 'Please provide a valid URL',
      },
    },
    githubLink2: {
      type: String,
      required: false,
      validate: {
        validator: function(v: string) {
          return !v || /^https?:\/\/.+/.test(v);
        },
        message: 'Please provide a valid URL',
      },
    },
    galleryImages: {
      type: [String],
      default: [],
    },
    meta_title: {
      type: String,
      required: [true, 'Meta title is required'],
      maxlength: [60, 'Meta title cannot exceed 60 characters'],
    },
    meta_desc: {
      type: String,
      required: [true, 'Meta description is required'],
      maxlength: [160, 'Meta description cannot exceed 160 characters'],
    },
    meta_keywords: {
      type: [String],
      required: [true, 'Meta keywords are required'],
      validate: {
        validator: function(v: string[]) {
          return v && v.length > 0;
        },
        message: 'At least one meta keyword must be provided',
      },
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
ProjectSchema.index({ category: 1 });
ProjectSchema.index({ is_featured: 1 });
ProjectSchema.index({ createdAt: -1 });
ProjectSchema.index({ title: 'text', description: 'text' });

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
