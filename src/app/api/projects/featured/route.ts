import {NextResponse} from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET() {
    try {
        await connectToDatabase();

        // Fetch featured projects (is_featured=true, limit 3, sorted by order)
        const featuredProjects = await Project.find({
            is_featured: true,
            is_published: true,
        })
            .sort({order: 1}) // Sort by order ascending (1, 2, 3)
            .limit(3)
            .lean();

        return NextResponse.json({
            success: true,
            projects: featuredProjects,
        });
    } catch (error) {
        console.error("Error fetching featured projects:", error);
        return NextResponse.json(
            {success: false, error: "Failed to fetch featured projects"},
            {status: 500}
        );
    }
}
