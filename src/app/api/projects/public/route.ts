import {NextRequest, NextResponse} from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET(request: NextRequest) {
    try {
        await connectToDatabase();

        const {searchParams} = new URL(request.url);
        const category = searchParams.get("category");
        const limit = parseInt(searchParams.get("limit") || "6");

        // Build query for published projects
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, prefer-const
        let query: any = {
            is_published: true,
            // Include all published projects (both featured and non-featured)
        };

        // Add category filter if specified and not 'all'
        if (category && category !== "all") {
            query.category = {$regex: new RegExp(category, "i")};
        }

        console.log("Query:", JSON.stringify(query));
        console.log("Category filter:", category);

        // Fetch regular projects sorted by id (newest first)
        const projects = await Project.find(query)
            .sort({_id: -1}) // Sort by id descending (newest first)
            .limit(limit)
            .lean();

        console.log("Found projects:", projects.length);
        console.log("Project categories:", projects.map(p => p.category));

        return NextResponse.json({
            success: true,
            projects: projects,
            total: projects.length,
        });
    } catch (error) {
        console.error("Error fetching public projects:", error);
        return NextResponse.json(
            {success: false, error: "Failed to fetch projects"},
            {status: 500}
        );
    }
}
