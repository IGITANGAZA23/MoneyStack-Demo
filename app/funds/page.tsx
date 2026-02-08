'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, ShieldCheck, Wallet, ArrowUpRight, Percent, Calendar, Search, X } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useNexus } from "@/context/NexusContext";

/*
const SAMPLE_LOANS = [ ... ];
*/

export default function FundsPage() {
  const { listings, borrowItem } = useNexus();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "General", "Professional", "Creative", "Expansion", "Education", "Green Energy", "Personal", "Health"];

  const filteredLoans = listings.filter(loan => {
    if (loan.type !== 'fund') return false;
    const matchesSearch = loan.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || loan.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24 pb-20">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-mesh opacity-30 -z-10 blur-[150px] pointer-events-none" />

      <div className="container px-6 py-12 relative z-10">
        <header className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-24 text-center lg:text-left">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 font-black px-4 py-1 uppercase tracking-[0.2em] text-xs">
              <Sparkles className="h-3 w-3 mr-2" />
              Direct Community Investment
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none italic uppercase">
              Empower <br /><span className="text-accent italic">Growth.</span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium italic">
              A transparent, secure, and human-centric way to lend and borrow. No banks, just people building futures together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/create?type=funds">
              <Button size="lg" className="h-20 px-12 rounded-[2rem] bg-accent hover:bg-accent/90 text-white font-black text-xl shadow-2xl shadow-accent/30 transition-all hover:scale-105 active:scale-95">
                Request Funds
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="ghost" className="h-20 px-12 rounded-[2rem] font-black text-xl hover:bg-accent/5 transition-all text-accent underline underline-offset-8">
                My Portfolio
              </Button>
            </Link>
          </div>
        </header>

        {/* Search & Filter Section */}
        <section className="space-y-8 mb-24">
          <div className="glass mx-auto max-w-5xl rounded-[2.5rem] p-3 border-accent/10 flex flex-col md:flex-row gap-3 items-center shadow-huge">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by mission or member..."
                className="h-14 pl-14 pr-12 rounded-full border-none focus-visible:ring-2 focus-visible:ring-accent/20 text-lg bg-background/30 italic font-bold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
            <div className="w-[1px] h-10 bg-accent/10 hidden md:block" />
            <div className="flex items-center gap-6 px-4">
              <div className="flex flex-col text-right">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Market Cap</span>
                <span className="text-lg font-black text-accent">$4.2M</span>
              </div>
              <Button className="h-14 px-8 rounded-full bg-accent hover:bg-accent/90 text-white font-black shadow-lg shadow-accent/20 transition-all active:scale-95">
                Optimize
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "glass text-muted-foreground hover:text-accent border-none"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Global Stats bar */}
        <div className="glass mx-auto max-w-5xl rounded-[2.5rem] p-8 mb-24 border-accent/10 flex flex-wrap justify-between items-center gap-8 shadow-huge">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <TrendingUp className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Avg. Return</div>
              <div className="text-2xl font-black">5.2%</div>
            </div>
          </div>
          <div className="w-[1px] h-12 bg-accent/10 hidden md:block" />
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Default Rate</div>
              <div className="text-2xl font-black">0.4%</div>
            </div>
          </div>
          <div className="w-[1px] h-12 bg-accent/10 hidden md:block" />
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Wallet className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Total Funded</div>
              <div className="text-2xl font-black">$4.2M</div>
            </div>
          </div>
        </div>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredLoans.length > 0 ? (
            filteredLoans.map((loan) => (
              <div key={loan.id} className="group relative">
                <div className={`glass-card rounded-[3rem] p-10 flex flex-col h-full border-accent/5 hover:border-accent/30 transition-all duration-700 shadow-xl hover:shadow-accent/5 ${loan.status === 'borrowed' ? 'opacity-50 grayscale' : ''}`}>
                  <div className="flex justify-between items-start mb-10">
                    <Badge className="bg-muted text-foreground hover:bg-muted/80 rounded-full px-4 py-1 font-bold">
                      {loan.category}
                    </Badge>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Score</span>
                      <span className="text-xl font-black text-secondary italic">{loan.trustScore || 98}</span>
                    </div>
                  </div>

                  <div className="mb-10">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Requesting</div>
                    <h3 className="text-5xl font-black tracking-tighter group-hover:text-accent transition-colors italic leading-none">
                      ${(loan.amount || 0).toLocaleString()}
                    </h3>
                  </div>

                  <p className="text-lg text-muted-foreground mb-10 line-clamp-3 font-medium italic leading-relaxed">
                    "{loan.description}"
                  </p>

                  <div className="space-y-6 mb-12 flex-1">
                    <div className="flex justify-between items-center border-b border-accent/5 pb-4">
                      <div className="flex items-center gap-3 text-muted-foreground font-bold italic">
                        <Percent className="h-4 w-4" /> Interest
                      </div>
                      <span className="text-xl font-black">{loan.rate || loan.price}%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-accent/5 pb-4">
                      <div className="flex items-center gap-3 text-muted-foreground font-bold italic">
                        <Calendar className="h-4 w-4" /> Duration
                      </div>
                      <span className="text-xl font-black">{loan.term || '12mo'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3 text-muted-foreground font-bold italic">
                        Member
                      </div>
                      <span className="font-bold underline decoration-accent/30 underline-offset-4 italic">{loan.provider}</span>
                    </div>
                  </div>

                  <button
                    disabled={loan.status === 'borrowed' || loan.isListedByMe}
                    onClick={() => borrowItem(loan.id)}
                    className="w-full h-16 rounded-[1.5rem] bg-foreground text-background hover:bg-accent hover:text-white font-black text-xl transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg group disabled:opacity-50"
                  >
                    {loan.isListedByMe ? 'My Request' : loan.status === 'borrowed' ? 'Fully Funded' : 'Fund Loan'}
                    <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center glass rounded-[3rem] border-dashed border-accent/20">
              <div className="text-muted-foreground text-xl font-medium italic">
                No funding opportunities found in this sector.
              </div>
              <Button
                variant="link"
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="text-accent font-black mt-4"
              >
                Refresh mission parameters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
