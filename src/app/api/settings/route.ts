import {NextRequest, NextResponse} from "next/server";
import Settings from "../../../models/Settings";
import connectDB from "../../../lib/mongodb";

// GET - Fetch settings
export async function GET() {
    try {
        await connectDB();

        let settings = await Settings.findOne();

        // If no settings exist, create default settings
        if (!settings) {
            settings = new Settings({
                socialLinks: {
                    github: "https://github.com/ripassorkerrifat",
                    linkedin:
                        "https://www.linkedin.com/in/ripas-sorker-rifat-b42a01257/",
                    facebook: "https://www.facebook.com/ripassorkerrifat",
                    twitter: "https://x.com/ripassorker",
                    instagram: "https://www.instagram.com/ripassorkerrifat",
                    whatsapp: "01744876681",
                },
                resumeUrl: "",
            });
            await settings.save();
        }

        return NextResponse.json({
            success: true,
            settings,
        });
    } catch (error) {
        console.error("Error fetching settings:", error);
        return NextResponse.json(
            {success: false, error: "Failed to fetch settings"},
            {status: 500}
        );
    }
}

// PUT - Update settings
export async function PUT(request: NextRequest) {
    try {
        await connectDB();

        const body = await request.json();
        const {socialLinks, resumeUrl} = body;

        // Validate required fields
        if (!socialLinks) {
            return NextResponse.json(
                {success: false, error: "Social links are required"},
                {status: 400}
            );
        }

        // Find existing settings or create new one
        let settings = await Settings.findOne();

        if (settings) {
            // Update existing settings
            settings.socialLinks = {
                ...settings.socialLinks,
                ...socialLinks,
            };
            if (resumeUrl !== undefined) {
                settings.resumeUrl = resumeUrl;
            }
            await settings.save();
        } else {
            // Create new settings
            settings = new Settings({
                socialLinks: {
                    github:
                        socialLinks.github ||
                        "https://github.com/ripassorkerrifat",
                    linkedin:
                        socialLinks.linkedin ||
                        "https://www.linkedin.com/in/ripas-sorker-rifat-b42a01257/",
                    facebook:
                        socialLinks.facebook ||
                        "https://www.facebook.com/ripassorkerrifat",
                    twitter: socialLinks.twitter || "https://x.com/ripassorker",
                    instagram:
                        socialLinks.instagram ||
                        "https://www.instagram.com/ripassorkerrifat",
                    whatsapp: socialLinks.whatsapp || "01744876681",
                },
                resumeUrl: resumeUrl || "",
            });
            await settings.save();
        }

        return NextResponse.json({
            success: true,
            message: "Settings updated successfully",
            settings,
        });
    } catch (error) {
        console.error("Error updating settings:", error);
        return NextResponse.json(
            {success: false, error: "Failed to update settings"},
            {status: 500}
        );
    }
}
