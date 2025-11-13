import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Project from '@/models/Project';

// Configure route to handle larger payloads for image URLs
export const runtime = 'nodejs';
export const maxDuration = 180; // 3 minutes timeout

// GET /api/admin/projects - Get all projects (admin access - includes unpublished)
export async function GET(request: NextRequest) {
    try {
        await connectToDatabase();

        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const limit = parseInt(searchParams.get('limit') || '100');
        const page = parseInt(searchParams.get('page') || '1');

        // Build query - admin can see all projects
        const query: any = {};

        if (category && category !== 'all') {
            query.category = { $regex: new RegExp(category, 'i') };
        }

        // Fetch all projects (both published and unpublished)
        const skip = (page - 1) * limit;
        const projects = await Project.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean();

        // Get total count for pagination
        const total = await Project.countDocuments(query);

        return NextResponse.json({
            success: true,
            projects,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('Admin projects fetch error:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch projects',
            },
            { status: 500 }
        );
    }
}
