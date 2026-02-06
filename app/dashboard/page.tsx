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
  ArrowRight,
  Plus,
  Bell,
  Wallet,
  Sparkles,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Command', icon: LayoutGrid, href: '/dashboard' },
    { id: 'inventory', label: 'Ecosystem', icon: Package, href: '/things' },
    { id: 'messages', label: 'Comms', icon: MessageCircle, href: '/messages' },
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-background relative">
      {/* Decorative background for the dashboard */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full -z-10" />

      {/* Sidebar */}
      <aside className="w-80 glass border-r border-primary/5 flex flex-col p-8 overflow-y-auto m-4 rounded-[3rem] shadow-huge shrink-0">
        <div className="flex items-center gap-4 mb-14 px-2">
          <div className="bg-primary h-12 w-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 rotate-6">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black italic tracking-tighter leading-none">Nexus.</h1>
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mt-1">Command Center</p>
          </div>
        </div>

        <nav className="flex flex-col gap-4 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveNav(item.id)}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${activeNav === item.id
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'hover:bg-primary/5 text-muted-foreground hover:text-primary'
                }`}
            >
              <item.icon className={`h-5 w-5 ${activeNav === item.id ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`} />
              <span className="text-md font-black tracking-tight italic">{item.label}</span>
            </Link>
          ))}

          <div className="mt-10 px-6 py-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">Verification</p>
          </div>

          <Link
            href="/trust"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all group"
          >
            <ShieldCheck className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span className="text-md font-black tracking-tight italic">Protocol</span>
          </Link>
        </nav>

        {/* Reputation Card */}
        <div className="mt-auto p-8 rounded-[2rem] bg-mesh text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm -z-10" />
          <div className="flex flex-col items-center text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-4">Trust Core</div>
            <div className="text-5xl font-black tracking-tighter italic mb-2 group-hover:scale-110 transition-transform">982</div>
            <p className="text-xs font-bold opacity-70 leading-relaxed italic">Top 0.5% in Region</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden m-4 ml-0">
        {/* Header */}
        <header className="h-24 glass rounded-[2.5rem] border-primary/5 flex items-center justify-between px-10 mb-6 shadow-sm shrink-0">
          <div className="flex items-center gap-8 w-1/2">
            <div className="relative w-full max-w-md group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5 group-focus-within:text-primary transition-colors" />
              <Input
                className="w-full h-14 pl-14 pr-6 rounded-full border-none bg-background/50 focus-visible:ring-2 focus-visible:ring-primary/20 text-lg font-medium"
                placeholder="Search the ecosystem..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full relative group">
                <Bell className="h-5 w-5" />
                <span className="absolute top-3 right-3 h-2 w-2 bg-primary rounded-full animate-ping" />
              </Button>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full">
                <Zap className="h-5 w-5 text-accent" />
              </Button>
            </div>
            <div className="h-10 w-[1px] bg-border mx-2" />
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-lg font-black tracking-tighter leading-none italic">Alex Sterling</p>
                <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">Master Lender</p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 shadow-lg shadow-primary/20 cursor-pointer hover:scale-105 transition-all">
                <div className="h-full w-full rounded-[0.9rem] bg-background flex items-center justify-center font-black italic text-lg text-primary">AS</div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Canvas */}
        <div className="flex-1 overflow-y-auto pr-4 space-y-8 pb-10">
          <div className="flex flex-col gap-2 mb-10">
            <Badge variant="outline" className="w-fit mb-2 border-primary/20 text-primary font-black px-4 italic uppercase tracking-widest">Live Status</Badge>
            <h2 className="text-6xl font-black tracking-tighter italic">Welcome back, <span className="text-primary underline decoration-primary/10 underline-offset-8">Alex.</span></h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-[2.5rem] flex items-center gap-6 group hover:-translate-y-2 transition-all">
              <div className="size-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Upload className="h-10 w-10" />
              </div>
              <div>
                <p className="text-4xl font-black tracking-tighter italic">04</p>
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mt-1">Lending Out</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-[2.5rem] flex items-center gap-6 group hover:-translate-y-2 transition-all">
              <div className="size-20 rounded-3xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Download className="h-10 w-10" />
              </div>
              <div>
                <p className="text-4xl font-black tracking-tighter italic">02</p>
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mt-1">Borrowing In</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-[2.5rem] flex items-center gap-6 group hover:-translate-y-2 transition-all border-accent/10">
              <div className="size-20 rounded-3xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <Wallet className="h-10 w-10" />
              </div>
              <div>
                <p className="text-4xl font-black tracking-tighter italic">$2.5k</p>
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mt-1">Active Capital</p>
              </div>
            </div>
          </div>

          {/* Main Visual Center */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Visual Analytics Hub */}
            <div className="lg:col-span-3 glass-card p-10 rounded-[3rem] border-primary/5">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black tracking-tighter italic uppercase">Network Contribution</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="rounded-full px-6 font-bold">Monthly</Button>
                  <Button variant="ghost" size="sm" className="rounded-full px-6 font-bold">Annual</Button>
                </div>
              </div>
              <div className="h-[300px] w-full flex items-end justify-between px-10 gap-4">
                {[60, 85, 70, 95, 75, 45, 80, 65].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 group/bar">
                    <div
                      className="w-full bg-primary/20 rounded-2xl group-hover/bar:bg-primary transition-all duration-500 cursor-pointer shadow-inner"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-[10px] font-black text-muted-foreground/50 opacity-0 group-hover/bar:opacity-100 transition-opacity">JAN {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions / Action Center */}
            <div className="glass p-10 rounded-[3rem] border-primary/5 flex flex-col">
              <h3 className="text-2xl font-black tracking-tighter italic uppercase mb-10">Pipeline</h3>
              <div className="flex flex-col gap-6 flex-1">
                {[
                  { title: "Approve Lease", sub: "Sarah J. • Drill", icon: CheckCircle, color: "primary" },
                  { title: "Sign Agreement", sub: "Mike T. • Camera", icon: MessageCircle, color: "secondary" },
                  { title: "Review Funds", sub: "Bakery Expansion", icon: Wallet, color: "accent" },
                ].map((action, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-[2rem] bg-background/50 cursor-pointer hover:bg-muted transition-all border border-border/50 group/item">
                    <div className={`size-12 shrink-0 rounded-2xl bg-${action.color}/10 flex items-center justify-center text-${action.color}`}>
                      <action.icon className="h-6 w-6 group-hover/item:scale-110 transition-transform" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-md font-black italic tracking-tight truncate">{action.title}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1 truncate">{action.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="mt-10 h-16 rounded-2xl font-black group" variant="outline">
                View Protocol Logs <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Menu */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-4">
        <Link href="/create">
          <Button size="lg" className="h-20 w-20 rounded-full bg-primary shadow-2xl shadow-primary/40 hover:scale-110 transition-all flex items-center justify-center p-0 group">
            <Plus className="h-10 w-10 text-white group-hover:rotate-90 transition-transform duration-500" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
