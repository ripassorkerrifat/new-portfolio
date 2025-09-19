import {v2 as cloudinary} from "cloudinary";

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Validate Cloudinary configuration
if (
    !process.env.CLOUDINARY_CLOUD_NAME ||
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET
) {
    console.error(
        "Missing Cloudinary configuration. Please check your .env file."
    );
    console.error(
        "Required variables: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET"
    );
}

export interface CloudinaryUploadResult {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
}

export const uploadToCloudinary = async (
    file: string,
    options: {
        folder?: string;
        public_id?: string;
        transformation?: any;
    } = {}
): Promise<CloudinaryUploadResult> => {
    try {
        const result = await cloudinary.uploader.upload(file, {
            folder: options.folder || "portfolio-projects",
            public_id: options.public_id,
            transformation: options.transformation,
            resource_type: "auto",
        });

        return {
            public_id: result.public_id,
            secure_url: result.secure_url,
            width: result.width,
            height: result.height,
            format: result.format,
            resource_type: result.resource_type,
        };
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        throw new Error("Failed to upload image to Cloudinary");
    }
};

export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.error("Cloudinary delete error:", error);
        throw new Error("Failed to delete image from Cloudinary");
    }
};

export const generateImageUrl = (
    publicId: string,
    transformations?: {
        width?: number;
        height?: number;
        crop?: string;
        quality?: string;
        format?: string;
    }
): string => {
    if (!transformations) {
        return cloudinary.url(publicId);
    }

    return cloudinary.url(publicId, {
        transformation: [
            {
                width: transformations.width,
                height: transformations.height,
                crop: transformations.crop || "fill",
                quality: transformations.quality || "auto",
                fetch_format: transformations.format || "auto",
            },
        ],
    });
};

export default cloudinary;
