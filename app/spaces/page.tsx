'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, MapPin, Users, Maximize2, Sparkles, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useNexus } from "@/context/NexusContext";

/*
const SAMPLE_SPACES = [ ... ];
*/

export default function SpacesPage() {
  const { listings, borrowItem } = useNexus();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState("All");

  const spaceTypes = ["All", "General", "Professional", "Creative", "Studio", "Workshop", "Gallery"];

  const filteredSpaces = listings.filter(space => {
    if (space.type !== 'space') return false;
    const matchesSearch = space.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      space.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (space.location?.toLowerCase() || "").includes(searchQuery.toLowerCase());
    const matchesType = activeType === "All" || space.category === activeType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24 pb-20">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-mesh opacity-20 -z-10 blur-[120px] pointer-events-none rotate-180" />

      <div className="container px-6 py-12 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 underline-offset-8">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 border-secondary/30 text-secondary bg-secondary/5 font-bold uppercase tracking-widest px-4 py-1">
              <Sparkles className="h-3 w-3 mr-2" />
              Unique Environments
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              Find Your <span className="text-secondary italic">Space.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl italic">
              From creative studios to professional boardrooms, discover spaces that inspire your next big move.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/create?type=space">
              <Button size="lg" variant="secondary" className="h-20 px-12 rounded-[2rem] font-bold text-xl shadow-xl shadow-secondary/20 hover:-translate-y-1 transition-all active:scale-95">
                List Your Space
              </Button>
            </Link>
            <Button size="lg" variant="ghost" className="h-20 px-12 rounded-[2rem] font-black text-xl hover:bg-secondary/5 transition-all text-secondary">
              My Reservations
            </Button>
          </div>
        </header>

        {/* Search & Filter Bar */}
        <section className="space-y-6 mb-20">
          <div className="glass p-3 rounded-full border-secondary/10 flex flex-col md:flex-row gap-2 items-center shadow-huge max-w-5xl mx-auto">
            <div className="relative flex-1 w-full">
              <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where do you need to be? (e.g. Downtown, Riverside)"
                className="h-14 pl-14 pr-12 rounded-full border-none focus-visible:ring-2 focus-visible:ring-secondary/20 text-lg bg-background/30 italic font-bold"
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
            <div className="w-[1px] h-10 bg-secondary/10 hidden md:block" />
            <Button variant="ghost" className="h-14 px-8 rounded-full font-bold hover:bg-secondary/5 group">
              <SlidersHorizontal className="mr-3 h-5 w-5 group-hover:rotate-90 transition-transform" />
              Filters
            </Button>
            <Button className="h-14 px-10 rounded-full bg-secondary hover:bg-secondary/90 text-white font-bold shadow-lg shadow-secondary/20 transition-all active:scale-95">
              Engage
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {spaceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeType === type
                  ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                  : "glass text-muted-foreground hover:text-secondary border-none"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredSpaces.length > 0 ? (
            filteredSpaces.map((space) => (
              <div key={space.id} className="group relative">
                <div className={`glass-card rounded-[3rem] overflow-hidden flex flex-col h-full border-white/10 hover:border-secondary/30 transition-all duration-700 ${space.status === 'borrowed' ? 'opacity-50 grayscale' : ''}`}>
                  {/* Visual Area */}
                  <div className={`aspect-video bg-secondary/5 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-1000 overflow-hidden`}>
                    <div className="absolute top-6 left-6 z-10">
                      <Badge className="bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 font-bold px-3 py-1">
                        {space.category}
                      </Badge>
                    </div>
                    <div className="absolute top-6 right-6 z-10 flex items-center gap-1 text-white font-black text-2xl drop-shadow-lg">
                      ${space.price}<span className="text-sm font-medium opacity-80 mt-2">/hr</span>
                    </div>
                    {space.status === 'borrowed' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20">
                        <span className="text-white font-black italic text-3xl rotate-12">RESERVED</span>
                      </div>
                    )}
                    <div className="w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                      <Maximize2 className="h-20 w-20" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-10 flex flex-col flex-1">
                    <h3 className="text-3xl font-black mb-4 tracking-tighter group-hover:text-secondary transition-colors italic leading-none">
                      {space.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-8 pt-4 border-t border-secondary/10">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Provider</span>
                        <div className="font-bold underline decoration-secondary/30 underline-offset-4 italic">{space.provider}</div>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Zone</span>
                        <div className="font-bold italic">{space.location}</div>
                      </div>
                    </div>

                    <Button
                      disabled={space.status === 'borrowed' || space.isListedByMe}
                      onClick={() => borrowItem(space.id)}
                      className="mt-auto w-full h-16 rounded-2xl bg-muted text-foreground hover:bg-secondary hover:text-white font-black text-lg transition-all group/btn flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {space.isListedByMe ? 'My Space' : space.status === 'borrowed' ? 'Booked Out' : 'Reserve Now'}
                      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center glass rounded-[3rem] border-dashed border-secondary/20">
              <div className="text-muted-foreground text-xl font-medium italic">
                No spaces found in this dimension.
              </div>
              <Button
                variant="link"
                onClick={() => { setSearchQuery(""); setActiveType("All"); }}
                className="text-secondary font-black mt-4"
              >
                Reset search parameters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
