import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Project from '@/models/Project';
import { projectSchema } from '@/lib/validations/project';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectToDatabase();

    // Parse request body
    const body = await request.json();

    // Validate data using Zod schema
    const validatedData = projectSchema.parse(body);

    // Create new project
    const project = new Project(validatedData);
    const savedProject = await project.save();

    return NextResponse.json({
      success: true,
      message: 'Project created successfully',
      project: savedProject,
    }, { status: 201 });

  } catch (error: any) {
    console.error('Project creation error:', error);

    // Handle validation errors
    if (error.name === 'ZodError') {
      return NextResponse.json({
        success: false,
        error: 'Validation failed',
        details: error.errors,
      }, { status: 400 });
    }

    // Handle MongoDB validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => ({
        field: err.path,
        message: err.message,
      }));
      
      return NextResponse.json({
        success: false,
        error: 'Database validation failed',
        details: validationErrors,
      }, { status: 400 });
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      return NextResponse.json({
        success: false,
        error: 'Project with this title already exists',
      }, { status: 409 });
    }

    // Generic error response
    return NextResponse.json({
      success: false,
      error: 'Failed to create project',
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // Connect to database
    await connectToDatabase();

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');

    // Build query
    const query: any = {};
    if (category && category !== 'all') {
      query.category = category;
    }
    if (featured === 'true') {
      query.is_featured = true;
    }

    // Execute query with pagination
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
    console.error('Projects fetch error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch projects',
    }, { status: 500 });
  }
}
