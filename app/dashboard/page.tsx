'use client';

import Link from "next/link";
import {
  LayoutGrid,
  Package,
  MessageCircle,
  ShieldCheck,
  Search,
  Upload,
  Download,
  Home,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '/dashboard' },
    { id: 'inventory', label: 'Inventory', icon: Package, href: '/things' },
    { id: 'messages', label: 'Messages', icon: MessageCircle, href: '/messages' },
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-card border-r flex flex-col p-6 overflow-y-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-primary size-10 rounded-full flex items-center justify-center text-primary-foreground">
            <Package className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold leading-none">Nexus Lend</h1>
            <p className="text-muted-foreground text-xs font-normal">Command Center</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveNav(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${activeNav === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-muted'
                }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm font-semibold">{item.label}</span>
            </Link>
          ))}

          <Link
            href="/trust"
            className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-muted transition-colors mt-auto"
          >
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm font-medium">Verification</span>
          </Link>
        </nav>

        {/* Trust Score Card */}
        <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20 flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center mb-3">
            <svg className="size-24 transform -rotate-90">
              <circle
                className="text-muted"
                cx="48" cy="48"
                fill="transparent"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
              />
              <circle
                className="text-primary"
                cx="48" cy="48"
                fill="transparent"
                r="40"
                stroke="currentColor"
                strokeDasharray="251.2"
                strokeDashoffset="37.68"
                strokeWidth="8"
              />
            </svg>
            <span className="absolute text-xl font-bold text-primary">850</span>
          </div>
          <h3 className="text-sm font-bold text-primary">Trust Score</h3>
          <p className="text-xs text-muted-foreground mt-1 leading-tight">
            Your reputation is excellent! Keep sharing to grow.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-card border-b flex items-center justify-between px-10 shrink-0">
          <div className="flex items-center gap-6 w-1/2">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="w-full pl-12 rounded-full"
                placeholder="Search items, spaces, or people..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold leading-none">Alex Sterling</p>
                <p className="text-xs text-muted-foreground font-medium">Pro Lender</p>
              </div>
              <div className="size-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 border-2 border-primary" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-10 space-y-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-black tracking-tight">Welcome back, Alex</h2>
            <p className="text-muted-foreground text-base">
              Here&apos;s a unified view of your peer-to-peer ecosystem today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border flex items-center gap-5">
              <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Upload className="h-7 w-7" />
              </div>
              <div>
                <p className="text-2xl font-black">4 Items Out</p>
                <p className="text-sm font-medium text-muted-foreground">Active Lending</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border flex items-center gap-5">
              <div className="size-14 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Download className="h-7 w-7" />
              </div>
              <div>
                <p className="text-2xl font-black">2 Items Pending</p>
                <p className="text-sm font-medium text-muted-foreground">Active Borrowing</p>
              </div>
            </div>

            <Link href="/funds/1" className="bg-card p-6 rounded-xl border flex items-center gap-5 cursor-pointer hover:border-primary transition-all">
              <div className="size-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                <Home className="h-7 w-7" />
              </div>
              <div>
                <p className="text-2xl font-black">1 Fund Active</p>
                <p className="text-sm font-medium text-muted-foreground">Business Upgrade</p>
              </div>
            </Link>
          </div>

          {/* Activity and Action Center */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Earnings Activity */}
            <div className="lg:col-span-2 bg-card p-8 rounded-xl border">
              <h3 className="text-xl font-bold tracking-tight mb-6">Earnings Activity</h3>
              <div className="h-64 w-full relative mt-4">
                <div className="absolute inset-0 flex items-end justify-around px-2">
                  {[60, 85, 70, 90, 75, 95, 80].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-primary/20 rounded-t-lg hover:bg-primary/40 transition-colors cursor-pointer"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Center */}
            <div className="bg-card p-8 rounded-xl border flex flex-col">
              <h3 className="text-xl font-bold tracking-tight mb-6">Action Center</h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/messages"
                  className="flex gap-4 p-4 rounded-xl bg-muted cursor-pointer hover:border-primary/30 border border-transparent transition-all"
                >
                  <div className="size-10 shrink-0 rounded-full bg-card flex items-center justify-center text-primary border">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Approve Drill Request</p>
                    <p className="text-xs text-muted-foreground">From Sarah J. • 2h ago</p>
                  </div>
                </Link>

                <Link
                  href="/messages"
                  className="flex gap-4 p-4 rounded-xl bg-muted cursor-pointer hover:border-primary/30 border border-transparent transition-all"
                >
                  <div className="size-10 shrink-0 rounded-full bg-card flex items-center justify-center text-orange-500 border">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">New Message</p>
                    <p className="text-xs text-muted-foreground">From Mike T. • 5h ago</p>
                  </div>
                </Link>
              </div>

              <Button className="mt-auto" variant="outline">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
