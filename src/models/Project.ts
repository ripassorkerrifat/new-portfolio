import mongoose, {Document, Schema} from "mongoose";

export interface IProject extends Document {
    title: string;
    thumbnail: string;
    description: string;
    shortDescription: string;
    skills: string[];
    category: "front-end" | "backend" | "full-stack" | "others";
    is_featured: boolean;
    is_published: boolean;
    order?: number;
    liveUrl: string;
    githubLink1?: string;
    githubLink2?: string;
    galleryImages?: string[];
    createdAt: Date;
    updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Project title is required"],
            trim: true,
            maxlength: [100, "Title cannot exceed 100 characters"],
        },
        thumbnail: {
            type: String,
            required: [true, "Project thumbnail is required"],
        },
        description: {
            type: String,
            required: [true, "Project description is required"],
            minlength: [3, "Description must be at least 3 characters"],
        },
        shortDescription: {
            type: String,
            required: [true, "Short description is required"],
            minlength: [3, "Short description must be at least 3 characters"],
        },
        skills: {
            type: [String],
            required: [true, "At least one skill is required"],
            validate: {
                validator: function (v: string[]) {
                    return v && v.length > 0;
                },
                message: "At least one skill must be provided",
            },
        },
        category: {
            type: String,
            required: [true, "Project category is required"],
            enum: {
                values: ["front-end", "backend", "full-stack", "others"],
                message:
                    "Category must be one of: front-end, backend, full-stack, others",
            },
        },
        is_featured: {
            type: Boolean,
            default: false,
        },
        is_published: {
            type: Boolean,
            default: false,
        },
        order: {
            type: Number,
            required: false,
        },
        liveUrl: {
            type: String,
            required: [true, "Live URL is required"],
            validate: {
                validator: function (v: string) {
                    return /^https?:\/\/.+/.test(v);
                },
                message: "Please provide a valid URL",
            },
        },
        githubLink1: {
            type: String,
            required: false,
            validate: {
                validator: function (v: string) {
                    return !v || /^https?:\/\/.+/.test(v);
                },
                message: "Please provide a valid URL",
            },
        },
        githubLink2: {
            type: String,
            required: false,
            validate: {
                validator: function (v: string) {
                    return !v || /^https?:\/\/.+/.test(v);
                },
                message: "Please provide a valid URL",
            },
        },
        galleryImages: {
            type: [String],
            default: [],
            validate: {
                validator: function (v: string[]) {
                    return !v || v.length <= 100;
                },
                message: "Gallery images cannot exceed 100 items",
            },
        },
    },
    {
        timestamps: true,
    }
);

// Create indexes for better query performance
ProjectSchema.index({category: 1});
ProjectSchema.index({is_featured: 1});
ProjectSchema.index({is_published: 1});
ProjectSchema.index({order: 1});
ProjectSchema.index({createdAt: -1});
ProjectSchema.index({title: "text", description: "text"});

// Clear any existing model to ensure schema updates are applied
if (mongoose.models.Project) {
    delete mongoose.models.Project;
}

const Project = mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
