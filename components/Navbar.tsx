'use client';

import Link from 'next/link';
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { KeyRound, Archive, Home, DollarSign, LayoutDashboard, MessageCircle, Plus, Shield } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  // Hide navbar on dashboard and messages pages (they have their own navigation)
  if (pathname === '/dashboard' || pathname === '/messages') {
    return null;
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <KeyRound className="h-6 w-6" />
            Nexus Lend
          </Link>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link
              href="/things"
              className={`flex items-center gap-2 transition-colors hover:text-primary ${isActive('/things') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Archive className="h-4 w-4" />
              Things
            </Link>
            <Link
              href="/spaces"
              className={`flex items-center gap-2 transition-colors hover:text-primary ${isActive('/spaces') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Home className="h-4 w-4" />
              Spaces
            </Link>
            <Link
              href="/funds"
              className={`flex items-center gap-2 transition-colors hover:text-primary ${isActive('/funds') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <DollarSign className="h-4 w-4" />
              Funds
            </Link>
            <Link
              href="/trust"
              className={`flex items-center gap-2 transition-colors hover:text-primary ${isActive('/trust') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Shield className="h-4 w-4" />
              Trust
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SignedIn>
            <Link href="/create">
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Start Sharing
              </Button>
            </Link>
            <Link href="/messages">
              <Button variant="ghost" size="icon" className="relative">
                <MessageCircle className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <LayoutDashboard className="h-5 w-5" />
              </Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link href="/create">
              <Button size="sm" variant="outline" className="gap-2">
                <Plus className="h-4 w-4" />
                Start Sharing
              </Button>
            </Link>
            <SignInButton mode="modal">
              <Button size="sm">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
