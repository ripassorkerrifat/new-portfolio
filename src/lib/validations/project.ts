import {z} from "zod";

export const projectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    shortDescription: z.string().min(1, "Short description is required"),
    thumbnail: z.union([
        z.string().url("Please enter a valid URL for the thumbnail"),
        z.instanceof(File, {message: "Please select a valid image file"}),
        z.string().min(1, "Thumbnail is required"),
    ]),
    category: z.enum(["front-end", "backend", "full-stack", "others"], {
        message: "Please select a category",
    }),
    skills: z.array(z.string()).min(1, "At least one skill is required"),
    is_featured: z.boolean().default(false),
    is_published: z.boolean().default(true),
    order: z.number().optional(),
    liveUrl: z.string().url("Please enter a valid URL for the live demo"),
    githubLink1: z
        .union([
            z.string().url("Please enter a valid URL"),
            z.literal(""),
            z.undefined(),
        ])
        .optional(),
    githubLink2: z
        .union([
            z.string().url("Please enter a valid URL"),
            z.literal(""),
            z.undefined(),
        ])
        .optional(),
    galleryImages: z
        .union([z.array(z.string().url()), z.array(z.instanceof(File))])
        .optional(),
});

export type ProjectFormData = z.infer<typeof projectSchema>;
