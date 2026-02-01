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
  Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  isActive: boolean;
  isOnline: boolean;
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
    isOnline: true
  },
  {
    id: 2,
    name: "James Chen",
    avatar: "JC",
    lastMessage: "The camping tent worked perfectly! Thanks again.",
    time: "1h ago",
    isActive: false,
    isOnline: false
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: "ER",
    lastMessage: "Would you be open to a 3-day rental for the drill?",
    time: "Yesterday",
    isActive: false,
    isOnline: true
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
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [showBanner, setShowBanner] = useState(true);
  const [messageText, setMessageText] = useState('');

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Left Sidebar: Conversation List */}
      <aside className="w-80 border-r bg-card flex flex-col">
        <div className="p-4 flex flex-col gap-4">
          <h1 className="text-xl font-bold">Inbox</h1>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-10 rounded-full bg-muted border-none"
              placeholder="Search conversations..."
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Badge className="cursor-pointer">All</Badge>
            <Badge variant="secondary" className="cursor-pointer">Requests</Badge>
            <Badge variant="secondary" className="cursor-pointer">Lending</Badge>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setActiveConversation(conv)}
              className={`flex items-center gap-3 px-4 py-4 cursor-pointer transition-colors ${activeConversation.id === conv.id
                  ? 'bg-primary/10 border-l-4 border-primary'
                  : 'hover:bg-muted'
                }`}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold text-sm">
                  {conv.avatar}
                </div>
                {conv.isOnline && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-bold truncate">{conv.name}</p>
                  <p className="text-[10px] text-muted-foreground font-medium">{conv.time}</p>
                </div>
                <p className={`text-xs truncate ${activeConversation.id === conv.id ? 'text-primary font-bold' : 'text-muted-foreground'
                  }`}>
                  {conv.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Center Pane: Chat Window */}
      <section className="flex-1 flex flex-col bg-background relative">
        {/* Safety Banner */}
        {showBanner && (
          <div className="bg-orange-50 dark:bg-orange-950/30 px-6 py-2 flex items-center justify-between border-b border-orange-100">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-orange-600" />
              <p className="text-xs text-orange-700 dark:text-orange-400 font-medium">
                Keep your payments and communication on Nexus Lend to stay protected.
              </p>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="text-orange-600 hover:opacity-75"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Chat Header */}
        <div className="px-6 py-4 flex items-center justify-between bg-card border-b">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold text-sm">
                {activeConversation.avatar}
              </div>
              {activeConversation.isOnline && (
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
              )}
            </div>
            <div>
              <h3 className="text-sm font-bold">{activeConversation.name}</h3>
              <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">
                {activeConversation.isOnline ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <div className="flex justify-center">
            <span className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Yesterday
            </span>
          </div>

          {messages.slice(0, 2).map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[80%] ${msg.isSent ? 'self-end flex-row-reverse' : ''}`}
            >
              <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full h-8 w-8 shrink-0 flex items-center justify-center text-white font-bold text-xs">
                {msg.isSent ? 'You' : activeConversation.avatar}
              </div>
              <div className={`flex flex-col gap-1 ${msg.isSent ? 'items-end' : ''}`}>
                <div className={`p-4 rounded-xl shadow-sm ${msg.isSent
                    ? 'bg-primary text-primary-foreground rounded-br-sm'
                    : 'bg-card border rounded-bl-sm'
                  }`}>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-[10px] text-muted-foreground font-medium">{msg.time}</p>
                  {msg.isSent && msg.isRead && (
                    <CheckCircle className="h-3 w-3 text-primary" />
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center">
            <span className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Today
            </span>
          </div>

          {messages.slice(2).map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[80%] ${msg.isSent ? 'self-end flex-row-reverse' : ''}`}
            >
              <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full h-8 w-8 shrink-0 flex items-center justify-center text-white font-bold text-xs">
                {msg.isSent ? 'You' : activeConversation.avatar}
              </div>
              <div className={`flex flex-col gap-1 ${msg.isSent ? 'items-end' : ''}`}>
                <div className={`p-4 rounded-xl shadow-sm ${msg.isSent
                    ? 'bg-primary text-primary-foreground rounded-br-sm'
                    : 'bg-card border rounded-bl-sm'
                  }`}>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
                <p className="text-[10px] text-muted-foreground font-medium">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-card border-t">
          <div className="flex items-center gap-2 bg-muted rounded-xl p-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <PlusCircle className="h-5 w-5" />
            </Button>
            <Input
              className="flex-1 bg-transparent border-none focus-visible:ring-0"
              placeholder="Write a message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Smile className="h-5 w-5" />
            </Button>
            <Button size="icon" className="rounded-full">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Right Sidebar: Listing Details */}
      <aside className="w-80 border-l bg-card flex flex-col overflow-y-auto">
        <div className="p-6 flex flex-col gap-6">
          <h2 className="text-lg font-bold">Listing Details</h2>

          {/* Item Card */}
          <div className="rounded-xl overflow-hidden border">
            <div className="h-40 bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
              <div className="text-6xl">📷</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm mb-1">Professional DSLR Camera</h3>
              <p className="text-primary font-bold text-base">
                $45 <span className="text-xs text-muted-foreground font-normal">/ day</span>
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="bg-orange-100 dark:bg-orange-900/30 border border-orange-200 rounded-lg p-3 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider">
              Pending Request
            </span>
          </div>

          {/* Transaction Summary */}
          <div className="flex flex-col gap-4 py-2 border-y">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-col">
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Dates</p>
                <p className="text-sm font-semibold">Oct 15 - Oct 17, 2023</p>
                <p className="text-xs text-muted-foreground">3 days total</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              <div className="flex flex-col">
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Total Price</p>
                <p className="text-sm font-semibold">$135.00</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-3">
            <Button className="w-full">Approve Request</Button>
            <Button variant="secondary" className="w-full">Modify Dates</Button>
            <Button variant="outline" className="w-full text-destructive hover:text-destructive">
              Decline
            </Button>
          </div>

          {/* Trust Section */}
          <div className="pt-4 mt-2">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                About {activeConversation.name.split(' ')[0]}
              </h4>
              <div className="flex items-center text-orange-500">
                <span className="text-yellow-500">★</span>
                <span className="text-xs font-bold ml-1">4.9</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-primary" />
              <p className="text-xs">Identity Verified</p>
            </div>
            <div className="flex items-center gap-2">
              <Handshake className="h-4 w-4 text-primary" />
              <p className="text-xs">12 successful shares</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
