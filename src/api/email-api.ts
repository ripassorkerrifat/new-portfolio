import { ContactMessage } from '@/app/api/contact/route';

export interface EmailStats {
    total: number;
    unread: number;
    read: number;
    todayCount: number;
    weekCount: number;
}

class EmailAPI {
    private baseUrl = '/api/contact';

    async getMessages(): Promise<{ data: ContactMessage[]; unreadCount: number }> {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch messages');
        }
        return response.json();
    }

    async markAsRead(id: string): Promise<ContactMessage> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isRead: true }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to mark message as read');
        }
        
        const result = await response.json();
        return result.data;
    }

    async markAsUnread(id: string): Promise<ContactMessage> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isRead: false }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to mark message as unread');
        }
        
        const result = await response.json();
        return result.data;
    }

    async deleteMessage(id: string): Promise<void> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
        });
        
        if (!response.ok) {
            throw new Error('Failed to delete message');
        }
    }

    async submitContactForm(data: {
        name: string;
        email: string;
        phone?: string;
        company?: string;
        subject: string;
        message: string;
    }): Promise<ContactMessage> {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        if (!response.ok) {
            throw new Error('Failed to submit contact form');
        }
        
        const result = await response.json();
        return result.data;
    }

    getEmailStats(messages: ContactMessage[]): EmailStats {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

        return {
            total: messages.length,
            unread: messages.filter(msg => !msg.isRead).length,
            read: messages.filter(msg => msg.isRead).length,
            todayCount: messages.filter(msg => 
                new Date(msg.createdAt) >= today
            ).length,
            weekCount: messages.filter(msg => 
                new Date(msg.createdAt) >= weekAgo
            ).length,
        };
    }
}

export const emailAPI = new EmailAPI();
