import {z} from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be less than 100 characters"),
  description: z.string().min(1, "Description is required").max(1000, "Description must be less than 1000 characters"),
  shortDescription: z.string().min(1, "Short description is required").max(200, "Short description must be less than 200 characters"),
  thumbnail: z.union([
    z.string().url("Please enter a valid URL for the thumbnail"),
    z.instanceof(File, { message: "Please select a valid image file" }),
    z.string().min(1, "Thumbnail is required")
  ]),
  category: z.enum(["front-end", "backend", "full-stack", "others"], {
    message: "Please select a category",
  }),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  is_featured: z.boolean().default(false),
  is_published: z.boolean().default(true),
  order: z.number().optional(),
  liveUrl: z.string().url("Please enter a valid URL for the live demo"),
  githubLink1: z.union([
    z.string().url("Please enter a valid URL"),
    z.literal(""),
    z.undefined()
  ]).optional(),
  githubLink2: z.union([
    z.string().url("Please enter a valid URL"), 
    z.literal(""),
    z.undefined()
  ]).optional(),
  galleryImages: z.union([
    z.array(z.string().url()),
    z.array(z.instanceof(File))
  ]).optional(),
});

export type ProjectFormData = z.infer<typeof projectSchema>;
