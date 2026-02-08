'use client';

import Link from "next/link";
import {
  Search,
  Phone,
  MoreVertical,
  PlusCircle,
  Smile,
  Send,
  Shield,
  X,
  Calendar,
  CreditCard,
  CheckCircle,
  Handshake,
  Sparkles,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  isActive: boolean;
  isOnline: boolean;
  color: string;
}

interface Message {
  id: number;
  content: string;
  time: string;
  isSent: boolean;
  isRead?: boolean;
}

const conversations: Conversation[] = [
  {
    id: 1,
    name: "Sarah Miller",
    avatar: "SM",
    lastMessage: "Is the DSLR still available for next...",
    time: "2m ago",
    isActive: true,
    isOnline: true,
    color: "primary"
  },
  {
    id: 2,
    name: "James Chen",
    avatar: "JC",
    lastMessage: "The camping tent worked perfectly! Thanks again.",
    time: "1h ago",
    isActive: false,
    isOnline: false,
    color: "secondary"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: "ER",
    lastMessage: "Would you be open to a 3-day rental for the drill?",
    time: "Yesterday",
    isActive: false,
    isOnline: true,
    color: "accent"
  }
];

const messages: Message[] = [
  {
    id: 1,
    content: "Hi there! I saw your Professional DSLR listing. Is it still available for the weekend of the 15th? I'm shooting a small wedding and would love to use it.",
    time: "10:42 PM",
    isSent: false
  },
  {
    id: 2,
    content: "Hi Sarah! Yes, it's available. It comes with two extra batteries and a 64GB SD card. Does that work for you?",
    time: "10:45 PM",
    isSent: true,
    isRead: true
  },
  {
    id: 3,
    content: "That's perfect. I've sent a formal request for those dates. Could you let me know about the pickup location?",
    time: "9:15 AM",
    isSent: false
  }
];

export default function MessagesPage() {
  const router = useRouter();
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [showBanner, setShowBanner] = useState(true);
  const [messageText, setMessageText] = useState('');

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-background relative">
      {/* Decorative background */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-${activeConversation.color}/5 blur-[120px] rounded-full -z-10 transition-colors duration-1000`} />

      {/* Left Sidebar: Conversation List */}
      <aside className="w-80 glass border-r border-white/5 flex flex-col m-4 rounded-[3rem] shadow-huge shrink-0">
        <div className="p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.push('/dashboard')} className="rounded-full hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-3xl font-black italic tracking-tighter">Comms.</h1>
          </div>

          {/* Search */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              className="h-12 pl-12 pr-4 rounded-2xl bg-background/50 border-none focus-visible:ring-2 focus-visible:ring-primary/20 font-bold italic"
              placeholder="Locate connection..."
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {["All", "Requests", "Lending"].map((f) => (
              <Badge key={f} variant={f === "All" ? "default" : "secondary"} className={`cursor-pointer rounded-full px-4 py-1 font-black italic uppercase tracking-widest text-[10px] ${f === "All" ? 'bg-primary shadow-lg shadow-primary/20' : ''}`}>
                {f}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-8 space-y-2">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setActiveConversation(conv)}
              className={`flex items-center gap-4 px-6 py-5 cursor-pointer rounded-[2rem] transition-all duration-500 group ${activeConversation.id === conv.id
                ? `bg-${conv.color} text-white shadow-lg shadow-${conv.color}/20`
                : 'hover:bg-white/5 text-muted-foreground hover:text-foreground'
                }`}
            >
              <div className="relative shrink-0">
                <div className={`rounded-2xl h-12 w-12 flex items-center justify-center font-black text-sm italic transition-transform duration-500 group-hover:scale-110 ${activeConversation.id === conv.id ? 'bg-white text-black shadow-lg' : `bg-${conv.color}/20 text-${conv.color}`
                  }`}>
                  {conv.avatar}
                </div>
                {conv.isOnline && (
                  <div className={`absolute -bottom-1 -right-1 h-3 w-3 bg-emerald-500 border-2 ${activeConversation.id === conv.id ? 'border-primary' : 'border-background'} rounded-full animate-pulse`} />
                )}
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <p className="text-md font-black tracking-tight italic truncate leading-none">{conv.name}</p>
                </div>
                <p className={`text-[10px] truncate mt-1 font-black uppercase tracking-widest ${activeConversation.id === conv.id ? 'text-white/70' : 'text-muted-foreground'
                  }`}>
                  {conv.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Center Pane: Chat Window */}
      <section className="flex-1 flex flex-col m-4 ml-0 bg-transparent relative">
        {/* Chat Window Container */}
        <div className="flex-1 flex flex-col glass rounded-[3rem] border-white/5 shadow-huge overflow-hidden">
          {/* Safety Banner */}
          {showBanner && (
            <div className="bg-amber-500/10 backdrop-blur-md px-8 py-3 flex items-center justify-between border-b border-amber-500/20">
              <div className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-amber-500" />
                <p className="text-[10px] text-amber-500 font-black uppercase tracking-[0.2em]">
                  ECC-ENCRYPTED PROTOCOL ACTIVE. REMAIN WITHIN THE NEXUS FOR FULL NEURAL PROTECTION.
                </p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="text-amber-500 hover:scale-125 transition-transform"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Chat Header */}
          <div className="px-10 py-6 flex items-center justify-between bg-white/5 border-b border-white/5">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className={`rounded-2xl h-12 w-12 flex items-center justify-center font-black text-lg italic bg-${activeConversation.color}/20 text-${activeConversation.color}`}>
                  {activeConversation.avatar}
                </div>
                {activeConversation.isOnline && (
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-emerald-500 border-4 border-background rounded-full" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-black italic tracking-tighter leading-none">{activeConversation.name}</h3>
                <p className={`text-[10px] font-black uppercase tracking-widest mt-1 ${activeConversation.isOnline ? 'text-emerald-500' : 'text-muted-foreground'}`}>
                  {activeConversation.isOnline ? 'Active Connection' : 'Offline Mode'}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-white/10">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-white/10">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Message Thread */}
          <div className="flex-1 overflow-y-auto p-10 flex flex-col gap-8 scrollbar-hide">
            <div className="flex justify-center">
              <span className="px-4 py-1.5 glass rounded-full text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] border-none shadow-none">
                Neural History: Yesterday
              </span>
            </div>

            {messages.slice(0, 2).map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 max-w-[70%] group ${msg.isSent ? 'self-end flex-row-reverse' : ''}`}
              >
                <div className={`rounded-xl h-10 w-10 shrink-0 flex items-center justify-center font-black text-[10px] italic shadow-lg transition-transform group-hover:scale-110 ${msg.isSent ? 'bg-primary text-white' : `bg-${activeConversation.color}/20 text-${activeConversation.color}`
                  }`}>
                  {msg.isSent ? 'ME' : activeConversation.avatar}
                </div>
                <div className={`flex flex-col gap-2 ${msg.isSent ? 'items-end' : ''}`}>
                  <div className={`p-6 rounded-[2rem] shadow-2xl transition-all ${msg.isSent
                    ? 'bg-primary text-white rounded-tr-none'
                    : 'glass border-white/10 rounded-tl-none'
                    }`}>
                    <p className="text-md font-medium leading-relaxed italic">{msg.content}</p>
                  </div>
                  <div className="flex items-center gap-2 px-2">
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{msg.time}</p>
                    {msg.isSent && msg.isRead && (
                      <CheckCircle className="h-3 w-3 text-primary" />
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center">
              <span className="px-4 py-1.5 glass rounded-full text-[10px] font-black text-primary uppercase tracking-[0.3em] border-none shadow-none animate-pulse">
                Live Pulse: Today
              </span>
            </div>

            {messages.slice(2).map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 max-w-[70%] group ${msg.isSent ? 'self-end flex-row-reverse' : ''}`}
              >
                <div className={`rounded-xl h-10 w-10 shrink-0 flex items-center justify-center font-black text-[10px] italic shadow-lg transition-transform group-hover:scale-110 ${msg.isSent ? 'bg-primary text-white' : `bg-${activeConversation.color}/20 text-${activeConversation.color}`
                  }`}>
                  {msg.isSent ? 'ME' : activeConversation.avatar}
                </div>
                <div className={`flex flex-col gap-2 ${msg.isSent ? 'items-end' : ''}`}>
                  <div className={`p-6 rounded-[2rem] shadow-2xl transition-all ${msg.isSent
                    ? 'bg-primary text-white rounded-tr-none'
                    : 'glass border-white/10 rounded-tl-none'
                    }`}>
                    <p className="text-md font-medium leading-relaxed italic">{msg.content}</p>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest px-2">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-8 bg-white/5 border-t border-white/5">
            <div className={`flex items-center gap-4 bg-background/50 rounded-[2rem] p-3 border-2 border-transparent focus-within:border-${activeConversation.color}/20 transition-all shadow-inner`}>
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-muted-foreground hover:bg-white/10">
                <PlusCircle className="h-6 w-6" />
              </Button>
              <Input
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-lg font-bold italic"
                placeholder="Transmit data..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-muted-foreground hover:bg-white/10">
                <Smile className="h-6 w-6" />
              </Button>
              <Button size="icon" className={`h-12 w-12 rounded-full bg-${activeConversation.color} text-white shadow-lg shadow-${activeConversation.color}/20 active:scale-90 transition-all`}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Right Sidebar: Listing Details */}
      <aside className="w-96 glass m-4 ml-0 rounded-[3rem] border-white/5 overflow-y-auto shadow-huge shrink-0">
        <div className="p-10 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/50">Asset Context</h2>
            <h3 className="text-2xl font-black italic tracking-tighter">Listing Details</h3>
          </div>

          {/* Item Card */}
          <div className={`rounded-[2.5rem] overflow-hidden border border-${activeConversation.color}/10 group`}>
            <div className={`aspect-video bg-${activeConversation.color}/10 flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-mesh opacity-20 -z-10" />
              <div className={`p-6 rounded-[2rem] bg-background/40 backdrop-blur-md border border-white/10 transition-transform duration-1000 group-hover:scale-110`}>
                <Camera className={`h-16 w-16 text-${activeConversation.color}`} />
              </div>
            </div>
            <div className="p-8 bg-white/5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-black italic text-xl tracking-tight leading-none truncate">Professional DSLR Camera</h3>
              </div>
              <p className={`text-2xl font-black tracking-tighter text-${activeConversation.color} italic`}>
                $45 <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest align-middle ml-1">/ day</span>
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className={`bg-${activeConversation.color}/10 border border-${activeConversation.color}/20 rounded-[2rem] p-5 flex items-center justify-center gap-3`}>
            <div className={`h-3 w-3 rounded-full bg-${activeConversation.color} animate-ping`} />
            <span className={`text-[10px] font-black text-${activeConversation.color} uppercase tracking-[0.2em]`}>
              Pending Signal Request
            </span>
          </div>

          {/* Transaction Summary */}
          <div className="flex flex-col gap-8 py-4 border-y border-white/5">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-2xl bg-white/5 flex items-center justify-center text-muted-foreground shrink-0 mt-1">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Temporal Window</p>
                <p className="text-lg font-black italic tracking-tight">Oct 15 — Oct 17</p>
                <div className="h-1 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
                  <div className={`h-full bg-${activeConversation.color} w-3/4`} />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-2xl bg-white/5 flex items-center justify-center text-muted-foreground shrink-0 mt-1">
                <CreditCard className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Neural Value</p>
                <p className="text-3xl font-black italic tracking-tighter">$135.00</p>
                <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mt-1">Inclusive of Insurance</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-4">
            <Button className={`h-16 rounded-2xl bg-${activeConversation.color} text-white font-black italic text-lg shadow-xl shadow-${activeConversation.color}/20`}>
              Approve Connection
            </Button>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="ghost" className="h-14 rounded-2xl font-black italic hover:bg-white/10 border border-white/10">Modify</Button>
              <Button variant="ghost" className="h-14 rounded-2xl font-black italic text-destructive hover:bg-destructive/10 border border-destructive/10">Abort</Button>
            </div>
          </div>

          {/* Trust Section */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                Identity Profile: {activeConversation.name.split(' ')[0]}
              </h4>
              <div className="flex items-center gap-1 font-black italic text-lg text-primary">
                ★ 4.9
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="size-10 rounded-2xl glass border-none flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Shield className="h-5 w-5" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Matrix Verified</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="size-10 rounded-2xl glass border-none flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <Handshake className="h-5 w-5" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">12 High-Yield Shares</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="size-10 rounded-2xl glass border-none flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Alpha Contributor</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
