import { ContactMessage } from "@/app/api/contact/route";
import ContactMessageModel, { IContactMessage } from "@/models/ContactMessage";
import connectToDatabase from "@/lib/mongodb";
import mongoose from "mongoose";

class ContactStore {
    async getAllMessages(): Promise<ContactMessage[]> {
        try {
            await connectToDatabase();
            const messages = await ContactMessageModel.find({})
                .sort({ createdAt: -1 })
                .lean<IContactMessage[]>();
            
            return messages.map(msg => ({
                id: (msg._id as mongoose.Types.ObjectId).toString(),
                name: msg.name,
                email: msg.email,
                phone: msg.phone,
                company: msg.company,
                subject: msg.subject,
                message: msg.message,
                isRead: msg.isRead,
                createdAt: msg.createdAt.toISOString(),
                userAgent: msg.userAgent,
                ipAddress: msg.ipAddress,
                location: msg.location
            }));
        } catch (error) {
            console.error('Error fetching messages:', error);
            return [];
        }
    }

    async addMessage(message: Omit<ContactMessage, 'id'>): Promise<ContactMessage> {
        try {
            await connectToDatabase();
            const newMessage = new ContactMessageModel({
                name: message.name,
                email: message.email,
                phone: message.phone,
                company: message.company,
                subject: message.subject,
                message: message.message,
                isRead: false,
                userAgent: message.userAgent,
                ipAddress: message.ipAddress,
                location: message.location
            });
            
            const savedMessage = await newMessage.save();
            
            return {
                id: savedMessage._id.toString(),
                name: savedMessage.name,
                email: savedMessage.email,
                phone: savedMessage.phone,
                company: savedMessage.company,
                subject: savedMessage.subject,
                message: savedMessage.message,
                isRead: savedMessage.isRead,
                createdAt: savedMessage.createdAt.toISOString(),
                userAgent: savedMessage.userAgent,
                ipAddress: savedMessage.ipAddress,
                location: savedMessage.location
            };
        } catch (error) {
            console.error('Error adding message:', error);
            throw new Error('Failed to save message to database');
        }
    }

    async updateMessage(
        id: string,
        updates: Partial<ContactMessage>
    ): Promise<ContactMessage | null> {
        try {
            await connectToDatabase();
            const updatedMessage = await ContactMessageModel.findByIdAndUpdate(
                id,
                updates,
                { new: true }
            ).lean<IContactMessage>();
            
            if (!updatedMessage) return null;
            
            return {
                id: (updatedMessage._id as mongoose.Types.ObjectId).toString(),
                name: updatedMessage.name,
                email: updatedMessage.email,
                phone: updatedMessage.phone,
                company: updatedMessage.company,
                subject: updatedMessage.subject,
                message: updatedMessage.message,
                isRead: updatedMessage.isRead,
                createdAt: updatedMessage.createdAt.toISOString(),
                userAgent: updatedMessage.userAgent,
                ipAddress: updatedMessage.ipAddress,
                location: updatedMessage.location
            };
        } catch (error) {
            console.error('Error updating message:', error);
            return null;
        }
    }

    async deleteMessage(id: string): Promise<ContactMessage | null> {
        try {
            await connectToDatabase();
            const deletedMessage = await ContactMessageModel.findByIdAndDelete(id).lean<IContactMessage>();
            
            if (!deletedMessage) return null;
            
            return {
                id: (deletedMessage._id as mongoose.Types.ObjectId).toString(),
                name: deletedMessage.name,
                email: deletedMessage.email,
                phone: deletedMessage.phone,
                company: deletedMessage.company,
                subject: deletedMessage.subject,
                message: deletedMessage.message,
                isRead: deletedMessage.isRead,
                createdAt: deletedMessage.createdAt.toISOString(),
                userAgent: deletedMessage.userAgent,
                ipAddress: deletedMessage.ipAddress,
                location: deletedMessage.location
            };
        } catch (error) {
            console.error('Error deleting message:', error);
            return null;
        }
    }

    async getUnreadCount(): Promise<number> {
        try {
            await connectToDatabase();
            return await ContactMessageModel.countDocuments({ isRead: false });
        } catch (error) {
            console.error('Error getting unread count:', error);
            return 0;
        }
    }
}

export const contactStore = new ContactStore();
