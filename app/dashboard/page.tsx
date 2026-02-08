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
  Plus,
  Bell,
  Wallet,
  Sparkles,
  Zap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNexus } from "@/context/NexusContext";

export default function DashboardPage() {
  const { listings, borrowedItems, returnItem, removeListing } = useNexus();
  const [activeNav, setActiveNav] = useState('dashboard');

  const myListings = listings.filter(l => l.isListedByMe);
  const lendingOutCount = myListings.filter(l => l.status === 'borrowed').length;
  const borrowingInCount = borrowedItems.length;

  const navItems = [
    { id: 'dashboard', label: 'Command', icon: LayoutGrid, href: '/dashboard' },
    { id: 'inventory', label: 'Ecosystem', icon: Package, href: '/things' },
    { id: 'messages', label: 'Comms', icon: MessageCircle, href: '/messages' },
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-background relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full -z-10" />

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

        <div className="mt-auto p-8 rounded-[2rem] bg-mesh text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm -z-10" />
          <div className="flex flex-col items-center text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-4">Trust Core</div>
            <div className="text-5xl font-black tracking-tighter italic mb-2 group-hover:scale-110 transition-transform">982</div>
            <p className="text-xs font-bold opacity-70 leading-relaxed italic">Top 0.5% in Region</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden m-4 ml-0">
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

        <div className="flex-1 overflow-y-auto pr-4 space-y-8 pb-10 scrollbar-hide">
          <div className="flex flex-col gap-2 mb-10">
            <Badge variant="outline" className="w-fit mb-2 border-primary/20 text-primary font-black px-4 italic uppercase tracking-widest">Live Pulse</Badge>
            <h2 className="text-6xl font-black tracking-tighter italic">Welcome back, <span className="text-primary underline decoration-primary/10 underline-offset-8">Alex.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-[2.5rem] flex items-center gap-6 group hover:-translate-y-2 transition-all">
              <div className="size-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Upload className="h-10 w-10" />
              </div>
              <div>
                <p className="text-4xl font-black tracking-tighter italic">
                  {myListings.length.toString().padStart(2, '0')}
                </p>
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mt-1">My Listings</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-[2.5rem] flex items-center gap-6 group hover:-translate-y-2 transition-all">
              <div className="size-20 rounded-3xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Download className="h-10 w-10" />
              </div>
              <div>
                <p className="text-4xl font-black tracking-tighter italic">
                  {borrowingInCount.toString().padStart(2, '0')}
                </p>
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mt-1">Borrowing In</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-[2.5rem] flex items-center gap-6 group hover:-translate-y-2 transition-all border-accent/10 text-accent">
              <div className="size-20 rounded-3xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="h-10 w-10" />
              </div>
              <div>
                <p className="text-4xl font-black tracking-tighter italic">Active</p>
                <p className="text-xs font-black uppercase tracking-widest opacity-70 mt-1">Ecosystem Status</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lending Section */}
            <div className="glass pb-8 rounded-[3rem] border-primary/5 flex flex-col min-h-[400px]">
              <div className="p-10 flex justify-between items-center">
                <h3 className="text-2xl font-black tracking-tighter italic uppercase">My Offerings</h3>
                <Badge className="bg-primary/10 text-primary">{myListings.length} Active</Badge>
              </div>
              <div className="flex-1 px-4 space-y-4">
                {myListings.map((item) => (
                  <div key={item.id} className="glass-card p-6 rounded-[2rem] border-white/5 flex items-center justify-between group hover:bg-white/5 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black italic">
                        {item.name[0]}
                      </div>
                      <div>
                        <p className="text-md font-black italic tracking-tight">{item.name}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">${item.price}/day • {item.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={item.status === 'borrowed' ? 'default' : 'secondary'} className="rounded-full">
                        {item.status === 'borrowed' ? 'Rented Out' : 'Available'}
                      </Badge>
                      <Button variant="ghost" size="icon" onClick={() => removeListing(item.id)} className="rounded-full h-10 w-10 text-destructive hover:bg-destructive/10">
                        <Plus className="rotate-45 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
                {myListings.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-10 text-center">
                    <p className="italic font-medium">You haven't listed anything yet.</p>
                    <Link href="/create">
                      <Button variant="link" className="text-primary font-black underline">Broadcast an Asset</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Borrowing Section */}
            <div className="glass pb-8 rounded-[3rem] border-secondary/5 flex flex-col min-h-[400px]">
              <div className="p-10 flex justify-between items-center">
                <h3 className="text-2xl font-black tracking-tighter italic uppercase">Connections</h3>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary">{borrowedItems.length} Flux</Badge>
              </div>
              <div className="flex-1 px-4 space-y-4">
                {borrowedItems.map((item) => (
                  <div key={item.id} className="glass-card p-6 rounded-[2rem] border-white/5 flex items-center justify-between group hover:bg-white/5 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary font-black italic">
                        {item.name[0]}
                      </div>
                      <div>
                        <p className="text-md font-black italic tracking-tight">{item.name}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">From {item.provider} • Active</p>
                      </div>
                    </div>
                    <Button onClick={() => returnItem(item.id)} variant="outline" className="rounded-full h-10 px-4 font-black text-xs uppercase italic hover:bg-secondary hover:text-white transition-all">
                      Disconnect
                    </Button>
                  </div>
                ))}
                {borrowedItems.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-10 text-center">
                    <p className="italic font-medium">No active neural bridges detected.</p>
                    <Link href="/things">
                      <Button variant="link" className="text-secondary font-black underline">Explore Inventory</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-10 right-10 flex flex-col gap-4">
        <Link href="/create">
          <Button size="lg" className="h-20 w-20 rounded-full bg-primary shadow-2xl shadow-primary/40 hover:scale-110 transition-all flex items-center justify-center p-0 group border-none">
            <Plus className="h-10 w-10 text-white group-hover:rotate-90 transition-transform duration-500" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
