"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href: string;
}

const Breadcrumb = () => {
    const pathname = usePathname();
    
    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        if (!pathname) return [{ label: 'Home', href: '/' }];
        
        const pathSegments = pathname.split('/').filter(segment => segment);
        const breadcrumbs: BreadcrumbItem[] = [
            { label: 'Home', href: '/' }
        ];

        let currentPath = '';
        pathSegments.forEach(segment => {
            currentPath += `/${segment}`;
            
            // Customize labels for specific routes
            let label = segment.charAt(0).toUpperCase() + segment.slice(1);
            if (segment === 'projects') {
                label = 'All Projects';
            }
            
            breadcrumbs.push({
                label,
                href: currentPath
            });
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    // Don't show breadcrumbs on home page or if pathname is null
    if (!pathname || pathname === '/') {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
                {breadcrumbs.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        {index > 0 && (
                            <ChevronRight className="w-4 h-4 mx-2 text-[var(--text-secondary)]" />
                        )}
                        {index === 0 && (
                            <Home className="w-4 h-4 mr-2 text-[var(--text-secondary)]" />
                        )}
                        {index === breadcrumbs.length - 1 ? (
                            <span className="text-[var(--text-primary)] font-medium">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
