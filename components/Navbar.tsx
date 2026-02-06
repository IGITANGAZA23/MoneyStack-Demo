'use client';

import Link from 'next/link';
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Sparkles, Archive, Home, DollarSign, LayoutDashboard, MessageCircle, Plus, Shield, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  if (pathname === '/dashboard' || pathname === '/messages') {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          container max-w-7xl
          flex h-16 items-center justify-between px-6 rounded-full
          transition-all duration-500 ease-in-out
          ${scrolled
            ? 'glass shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] border-primary/10 translate-y-0 opacity-100'
            : 'bg-transparent border-transparent translate-y-2'
          }
        `}
      >
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="font-black text-2xl italic tracking-tighter text-foreground">Nexus.</span>
          </Link>

          <div className="hidden lg:flex gap-8 text-sm font-bold uppercase tracking-widest">
            {[
              { href: '/things', label: 'Things', icon: Archive },
              { href: '/spaces', label: 'Spaces', icon: Home },
              { href: '/funds', label: 'Funds', icon: DollarSign },
              { href: '/trust', label: 'Trust', icon: Shield },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 transition-all hover:text-primary relative group ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground'
                  }`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SignedIn>
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/messages">
                <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 hover:text-primary rounded-full">
                  <MessageCircle className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full animate-pulse" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary rounded-full">
                  <LayoutDashboard className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="h-8 w-[1px] bg-border mx-2 hidden sm:block" />
            <Link href="/create">
              <Button size="sm" className="hidden md:flex gap-2 rounded-full px-6 font-bold shadow-md shadow-primary/20">
                <Plus className="h-4 w-4" />
                Share
              </Button>
            </Link>
            <div className="p-0.5 rounded-full border border-primary/20">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-9 w-9 rounded-full"
                  }
                }}
              />
            </div>
          </SignedIn>

          <SignedOut>
            <div className="flex items-center gap-2">
              <SignInButton mode="modal">
                <Button variant="ghost" className="font-bold rounded-full hover:bg-primary/5 px-6">Log In</Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="font-bold rounded-full px-8 shadow-lg shadow-primary/20">Join Nexus</Button>
              </SignInButton>
            </div>
          </SignedOut>

          <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </div>
  );
}
