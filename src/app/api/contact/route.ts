import { NextRequest, NextResponse } from 'next/server';
import { contactStore } from '@/lib/contact-store';

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: string;
    userAgent?: string;
    ipAddress?: string;
    location?: string;
}

export async function GET() {
    try {
        const messages = await contactStore.getAllMessages();
        const unreadCount = await contactStore.getUnreadCount();
        
        return NextResponse.json({
            success: true,
            data: messages,
            unreadCount
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch messages' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, company, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Get user information
        const userAgent = request.headers.get('user-agent') || '';
        const forwarded = request.headers.get('x-forwarded-for');
        const ipAddress = forwarded ? forwarded.split(',')[0] : 'unknown';

        // Create new contact message
        const newMessage = await contactStore.addMessage({
            name,
            email,
            phone,
            company,
            subject,
            message,
            isRead: false,
            createdAt: new Date().toISOString(),
            userAgent,
            ipAddress,
            location: 'Unknown' // In production, you could use a geolocation service
        });

        return NextResponse.json({
            success: true,
            message: 'Contact form submitted successfully',
            data: newMessage
        });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to submit contact form' },
            { status: 500 }
        );
    }
}
