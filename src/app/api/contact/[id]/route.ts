import { NextRequest, NextResponse } from 'next/server';
import { contactStore } from '@/lib/contact-store';

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const body = await request.json();
        const { isRead } = body;

        // Update the message
        const updatedMessage = await contactStore.updateMessage(id, { isRead });
        
        if (!updatedMessage) {
            return NextResponse.json(
                { success: false, error: 'Message not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: updatedMessage
        });
    } catch (error) {
        console.error('Error updating message:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to update message' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;

        // Delete the message
        const deletedMessage = await contactStore.deleteMessage(id);
        
        if (!deletedMessage) {
            return NextResponse.json(
                { success: false, error: 'Message not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Message deleted successfully',
            data: deletedMessage
        });
    } catch (error) {
        console.error('Error deleting message:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete message' },
            { status: 500 }
        );
    }
}
