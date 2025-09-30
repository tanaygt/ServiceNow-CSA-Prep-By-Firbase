'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  BookOpen,
  ClipboardCheck,
  Zap,
  MessageSquare,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/learning-resources', label: 'Resources', icon: BookOpen },
  { href: '/dashboard/quizzes', label: 'Quizzes', icon: ClipboardCheck },
  { href: '/dashboard/flashcards', label: 'Flashcards', icon: Zap },
  { href: '/dashboard/ai-mentor', label: 'AI Mentor', icon: MessageSquare },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href) && (item.href === '/dashboard' ? pathname === item.href : true);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
              { 'bg-muted text-primary': isActive }
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
