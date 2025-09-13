import { z } from 'zod';

export const projectSchema = z.object({
  // Basic Project Details
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  thumbnail: z.union([z.string(), z.instanceof(File)]).refine(val => val !== null && val !== "", 'Thumbnail is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  
  // Timeline
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(), // Optional - if not provided, project is under development
  
  // Technical Details
  skills: z.array(z.string()).min(1, 'At least one skill is required'),
  category: z.enum(['front-end', 'backend', 'full-stack', 'others']),
  
  // Features & Links
  is_featured: z.boolean().default(false),
  liveUrl: z.string().url('Invalid live URL').min(1, 'Live URL is required'),
  githubLink1: z.string().url('Invalid GitHub URL').optional().or(z.literal('')),
  githubLink2: z.string().url('Invalid GitHub URL').optional().or(z.literal('')),
  
  // Gallery
  galleryImages: z.array(z.union([z.string(), z.instanceof(File)])).optional(),
  
  // SEO Meta Fields
  meta_title: z.string().min(1, 'Meta title is required').max(60, 'Meta title should be under 60 characters'),
  meta_desc: z.string().min(1, 'Meta description is required').max(160, 'Meta description should be under 160 characters'),
  meta_keywords: z.array(z.string()).min(1, 'At least one meta keyword is required'),
});

export type ProjectFormData = z.infer<typeof projectSchema>;
