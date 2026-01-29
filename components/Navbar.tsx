'use client';

import Link from 'next/link';
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { KeyRound, Archive, Home, DollarSign, LayoutDashboard } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

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
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button size="sm">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
