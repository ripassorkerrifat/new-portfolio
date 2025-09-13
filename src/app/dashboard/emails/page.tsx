'use client';

import React, { useState, useEffect } from 'react';
import { 
    FaEnvelope, 
    FaEnvelopeOpen, 
    FaTrash, 
    FaEye, 
    FaEyeSlash,
    FaSearch,
    FaFilter,
    FaClock,
    FaUser,
    FaBuilding,
    FaPhone,
    FaMapMarkerAlt,
    FaDesktop
} from 'react-icons/fa';
import { emailAPI } from '@/api/email-api';
import { ContactMessage } from '@/app/api/contact/route';

const EmailsPage = () => {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        filterMessages();
    }, [messages, searchTerm, filter]);

    const fetchMessages = async () => {
        try {
            setLoading(true);
            const response = await emailAPI.getMessages();
            setMessages(response.data);
            setUnreadCount(response.unreadCount);
        } catch (error) {
            console.error('Error fetching messages:', error);
        } finally {
            setLoading(false);
        }
    };

    const filterMessages = () => {
        let filtered = messages;

        // Apply status filter
        if (filter === 'unread') {
            filtered = filtered.filter(msg => !msg.isRead);
        } else if (filter === 'read') {
            filtered = filtered.filter(msg => msg.isRead);
        }

        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(msg =>
                msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                msg.message.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredMessages(filtered);
    };

    const handleMarkAsRead = async (id: string) => {
        try {
            await emailAPI.markAsRead(id);
            setMessages(prev => prev.map(msg => 
                msg.id === id ? { ...msg, isRead: true } : msg
            ));
            setUnreadCount(prev => prev - 1);
        } catch (error) {
            console.error('Error marking as read:', error);
        }
    };

    const handleMarkAsUnread = async (id: string) => {
        try {
            await emailAPI.markAsUnread(id);
            setMessages(prev => prev.map(msg => 
                msg.id === id ? { ...msg, isRead: false } : msg
            ));
            setUnreadCount(prev => prev + 1);
        } catch (error) {
            console.error('Error marking as unread:', error);
        }
    };

    const handleDeleteMessage = async (id: string) => {
        try {
            await emailAPI.deleteMessage(id);
            setMessages(prev => prev.filter(msg => msg.id !== id));
            if (selectedMessage?.id === id) {
                setSelectedMessage(null);
            }
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    const handleSelectMessage = async (message: ContactMessage) => {
        setSelectedMessage(message);
        if (!message.isRead) {
            await handleMarkAsRead(message.id);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

        if (diffInHours < 24) {
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else if (diffInHours < 168) { // 7 days
            return date.toLocaleDateString([], { weekday: 'short', hour: '2-digit', minute: '2-digit' });
        } else {
            return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
        }
    };

    const stats = emailAPI.getEmailStats(messages);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-color)]"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                        Email Management
                    </h1>
                    <p className="text-[var(--text-secondary)]">
                        Manage contact form submissions and communications
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="flex gap-4">
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/20">
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-blue-500 text-xl" />
                            <div>
                                <p className="text-sm text-[var(--text-secondary)]">Total</p>
                                <p className="text-xl font-bold text-[var(--text-primary)]">{stats.total}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-500/20">
                        <div className="flex items-center space-x-3">
                            <FaEnvelopeOpen className="text-orange-500 text-xl" />
                            <div>
                                <p className="text-sm text-[var(--text-secondary)]">Unread</p>
                                <p className="text-xl font-bold text-[var(--text-primary)]">{stats.unread}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)]" />
                    <input
                        type="text"
                        placeholder="Search messages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)]/30 rounded-xl text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary-color)]/50 transition-colors"
                    />
                </div>
                <div className="flex gap-2">
                    {(['all', 'unread', 'read'] as const).map((filterType) => (
                        <button
                            key={filterType}
                            onClick={() => setFilter(filterType)}
                            className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                                filter === filterType
                                    ? 'bg-[var(--primary-color)] text-white'
                                    : 'bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]/30'
                            }`}
                        >
                            <FaFilter className="inline mr-2" />
                            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Messages List */}
                <div className="lg:col-span-1 space-y-3">
                    <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                        Messages ({filteredMessages.length})
                    </h2>
                    <div className="space-y-2 max-h-[600px] overflow-y-auto">
                        {filteredMessages.map((message) => (
                            <div
                                key={message.id}
                                onClick={() => handleSelectMessage(message)}
                                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-lg ${
                                    selectedMessage?.id === message.id
                                        ? 'border-[var(--primary-color)]/50 bg-[var(--primary-color)]/5'
                                        : message.isRead
                                        ? 'border-[var(--border-color)]/30 bg-[var(--card-bg)]'
                                        : 'border-[var(--primary-color)]/30 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                        {message.isRead ? (
                                            <FaEnvelopeOpen className="text-[var(--text-secondary)] text-sm" />
                                        ) : (
                                            <FaEnvelope className="text-[var(--primary-color)] text-sm" />
                                        )}
                                        <span className={`font-medium text-sm ${
                                            message.isRead ? 'text-[var(--text-secondary)]' : 'text-[var(--text-primary)]'
                                        }`}>
                                            {message.name}
                                        </span>
                                    </div>
                                    <span className="text-xs text-[var(--text-secondary)]">
                                        {formatDate(message.createdAt)}
                                    </span>
                                </div>
                                <p className={`text-sm mb-1 ${
                                    message.isRead ? 'text-[var(--text-secondary)]' : 'text-[var(--text-primary)] font-medium'
                                }`}>
                                    {message.subject}
                                </p>
                                <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                                    {message.message}
                                </p>
                            </div>
                        ))}
                        {filteredMessages.length === 0 && (
                            <div className="text-center py-8">
                                <FaEnvelope className="mx-auto text-4xl text-[var(--text-secondary)] mb-4" />
                                <p className="text-[var(--text-secondary)]">No messages found</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Message Detail */}
                <div className="lg:col-span-2">
                    {selectedMessage ? (
                        <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)]/30 overflow-hidden">
                            {/* Message Header */}
                            <div className="p-6 border-b border-[var(--border-color)]/30">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                                            {selectedMessage.subject}
                                        </h3>
                                        <div className="flex items-center space-x-4 text-sm text-[var(--text-secondary)]">
                                            <span className="flex items-center space-x-1">
                                                <FaUser />
                                                <span>{selectedMessage.name}</span>
                                            </span>
                                            <span className="flex items-center space-x-1">
                                                <FaClock />
                                                <span>{formatDate(selectedMessage.createdAt)}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => selectedMessage.isRead 
                                                ? handleMarkAsUnread(selectedMessage.id)
                                                : handleMarkAsRead(selectedMessage.id)
                                            }
                                            className="p-2 rounded-lg bg-[var(--primary-bg)] text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                                        >
                                            {selectedMessage.isRead ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                        <button
                                            onClick={() => handleDeleteMessage(selectedMessage.id)}
                                            className="p-2 rounded-lg bg-[var(--primary-bg)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[var(--primary-bg)]/50 rounded-lg">
                                    <div className="space-y-2">
                                        <p className="text-sm text-[var(--text-secondary)]">Email:</p>
                                        <p className="text-[var(--text-primary)] font-medium">{selectedMessage.email}</p>
                                    </div>
                                    {selectedMessage.phone && (
                                        <div className="space-y-2">
                                            <p className="text-sm text-[var(--text-secondary)]">Phone:</p>
                                            <p className="text-[var(--text-primary)] font-medium flex items-center space-x-1">
                                                <FaPhone className="text-xs" />
                                                <span>{selectedMessage.phone}</span>
                                            </p>
                                        </div>
                                    )}
                                    {selectedMessage.company && (
                                        <div className="space-y-2">
                                            <p className="text-sm text-[var(--text-secondary)]">Company:</p>
                                            <p className="text-[var(--text-primary)] font-medium flex items-center space-x-1">
                                                <FaBuilding className="text-xs" />
                                                <span>{selectedMessage.company}</span>
                                            </p>
                                        </div>
                                    )}
                                    {selectedMessage.location && (
                                        <div className="space-y-2">
                                            <p className="text-sm text-[var(--text-secondary)]">Location:</p>
                                            <p className="text-[var(--text-primary)] font-medium flex items-center space-x-1">
                                                <FaMapMarkerAlt className="text-xs" />
                                                <span>{selectedMessage.location}</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Message Content */}
                            <div className="p-6">
                                <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Message</h4>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap">
                                        {selectedMessage.message}
                                    </p>
                                </div>
                            </div>

                            {/* Technical Info */}
                            {(selectedMessage.userAgent || selectedMessage.ipAddress) && (
                                <div className="p-6 border-t border-[var(--border-color)]/30 bg-[var(--primary-bg)]/30">
                                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Technical Information</h4>
                                    <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                                        {selectedMessage.ipAddress && (
                                            <p><span className="font-medium">IP Address:</span> {selectedMessage.ipAddress}</p>
                                        )}
                                        {selectedMessage.userAgent && (
                                            <p className="flex items-start space-x-1">
                                                <FaDesktop className="mt-0.5 flex-shrink-0" />
                                                <span><span className="font-medium">User Agent:</span> {selectedMessage.userAgent}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)]/30 h-96 flex items-center justify-center">
                            <div className="text-center">
                                <FaEnvelope className="mx-auto text-4xl text-[var(--text-secondary)] mb-4" />
                                <p className="text-[var(--text-secondary)]">Select a message to view details</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmailsPage;
