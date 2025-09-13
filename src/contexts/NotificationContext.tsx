'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { emailAPI } from '@/api/email-api';

interface NotificationContextType {
    unreadCount: number;
    refreshNotifications: () => Promise<void>;
    markAllAsRead: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
};

interface NotificationProviderProps {
    children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [unreadCount, setUnreadCount] = useState(0);

    const refreshNotifications = async () => {
        try {
            const response = await emailAPI.getMessages();
            setUnreadCount(response.unreadCount);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    const markAllAsRead = async () => {
        try {
            // This would need to be implemented in the API
            // For now, just refresh to get updated count
            await refreshNotifications();
        } catch (error) {
            console.error('Error marking all as read:', error);
        }
    };

    useEffect(() => {
        refreshNotifications();
        
        // Refresh notifications every 30 seconds
        const interval = setInterval(refreshNotifications, 30000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <NotificationContext.Provider value={{
            unreadCount,
            refreshNotifications,
            markAllAsRead
        }}>
            {children}
        </NotificationContext.Provider>
    );
};
