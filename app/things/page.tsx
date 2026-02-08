'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Drill, ShoppingBag, MapPin, Star, Sparkles, Filter, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useNexus, Thing } from "@/context/NexusContext";

/*
const SAMPLE_ITEMS = [
  { id: 1, name: "Industrial Power Drill", category: "Tools", price: 15, distance: "0.8km", image_placeholder: "bg-blue-500/10", icon: Drill, provider: "Alex M." },
  { id: 2, name: "Sony Alpha a7 IV", category: "Electronics", price: 65, distance: "1.2km", image_placeholder: "bg-emerald-500/10", icon: Camera, provider: "Sarah K." },
  { id: 3, name: "Specialized Mountain Bike", category: "Sports", price: 30, distance: "2.4km", image_placeholder: "bg-orange-500/10", icon: Bike, provider: "John D." },
  { id: 4, name: "4-Person Camping Tent", category: "Outdoors", price: 20, distance: "3.1km", image_placeholder: "bg-purple-500/10", icon: Tent, provider: "Mike R." },
];
*/

export default function ThingsPage() {
  const { listings, borrowItem } = useNexus();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "General", "Professional", "Creative", "Tools", "Electronics", "Outdoors", "Kitchen", "Sports"];

  const filteredItems = listings.filter(item => {
    if (item.type !== 'thing') return false;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.location?.toLowerCase() || "").includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24 pb-20">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-mesh opacity-30 -z-10 blur-[150px] pointer-events-none" />

      <div className="container px-6 py-12 relative z-10">
        <header className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-24 text-center lg:text-left">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 font-black px-4 py-1 uppercase tracking-[0.2em] text-xs">
              <Sparkles className="h-3 w-3 mr-2" />
              Community Inventory
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none italic uppercase">
              Access <br /><span className="text-primary italic">Anything.</span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium italic">
              Why buy when you can borrow? Unlock high-quality tools and gear from your neighbors with built-in insurance and trust.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/create?type=thing">
              <Button size="lg" className="h-20 px-12 rounded-[2rem] bg-primary hover:bg-primary/90 text-white font-black text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                List a Thing
              </Button>
            </Link>
            <Button size="lg" variant="ghost" asChild className="h-20 px-12 rounded-[2rem] font-black text-xl hover:bg-primary/5 transition-all text-primary">
              <Link href="/dashboard">Manage Inventory</Link>
            </Button>
          </div>
        </header>

        {/* Search & Filter Section */}
        <section className="space-y-8 mb-24">
          <div className="glass mx-auto max-w-5xl rounded-[2.5rem] p-3 border-primary/10 flex flex-col md:flex-row gap-3 items-center shadow-huge">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools, gear, electronics..."
                className="h-14 pl-14 pr-12 rounded-full border-none focus-visible:ring-2 focus-visible:ring-primary/20 text-lg bg-background/30 italic font-bold"
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
            <div className="w-[1px] h-10 bg-primary/10 hidden md:block" />
            <div className="flex items-center gap-6 px-4">
              <div className="flex flex-col text-right">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Radius</span>
                <span className="text-lg font-black text-primary">2.4 miles</span>
              </div>
              <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-black shadow-lg shadow-primary/20 transition-all active:scale-95">
                Change Area
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "glass text-muted-foreground hover:text-primary border-none"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="group relative">
                <div className={`glass-card rounded-[3rem] p-10 flex flex-col h-full border-primary/5 hover:border-primary/30 transition-all duration-700 shadow-xl hover:shadow-primary/5 ${item.status === 'borrowed' ? 'opacity-50 grayscale' : ''}`}>
                  <div className="relative aspect-square bg-primary/5 rounded-[2rem] mb-10 overflow-hidden flex items-center justify-center p-12 group-hover:bg-primary/10 transition-colors">
                    <Drill className="w-full h-full text-primary opacity-40 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white/90 text-black border-none font-black italic px-4">
                        {item.category.toUpperCase()}
                      </Badge>
                    </div>
                    {item.status === 'borrowed' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20">
                        <span className="text-white font-black italic text-3xl rotate-12">BORROWED</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-start mb-6 gap-4">
                    <h3 className="text-3xl font-black tracking-tighter group-hover:text-primary transition-colors italic leading-none">
                      {item.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-black tracking-tighter text-primary italic">${item.price}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">PER DAY</div>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-10 line-clamp-2 min-h-[3rem] font-medium italic leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 mb-10 pt-8 border-t border-primary/5">
                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black italic">
                      {item.provider.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-black italic truncate">{item.provider}</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{item.location}</p>
                    </div>
                    <div className="flex gap-1 text-accent">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                    </div>
                  </div>

                  <button
                    disabled={item.status === 'borrowed' || item.isListedByMe}
                    onClick={() => borrowItem(item.id)}
                    className="w-full h-16 rounded-[1.5rem] bg-foreground text-background hover:bg-primary hover:text-white font-black text-xl transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {item.isListedByMe ? 'My Listing' : item.status === 'borrowed' ? 'Unavailable' : 'Lend Now'}
                    <ShoppingBag className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center glass rounded-[3rem] border-dashed border-primary/20">
              <div className="text-muted-foreground text-xl font-medium italic">
                No items matching your scan parameters were detected.
              </div>
              <Button
                variant="link"
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="text-primary font-black mt-4"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Load More Section */}
        <div className="mt-24 flex justify-center">
          <Button variant="outline" className="h-20 px-12 rounded-[2.5rem] border-primary/20 hover:bg-primary hover:text-white transition-all duration-500 font-black text-xl italic group">
            Load More Experiences
            <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x- motion-safe:group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
