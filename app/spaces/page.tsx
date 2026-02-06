import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, MapPin, Users, Maximize2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const SAMPLE_SPACES = [
  { id: 1, name: "Industrial Loft Studio", sqft: "1,200", capacity: "25", location: "Art District", price: 75, type: "Photo/Video", hue: "blue" },
  { id: 2, name: "Minimalist Meeting Box", sqft: "200", capacity: "6", location: "Financial Hub", price: 35, type: "Work", hue: "emerald" },
  { id: 3, name: "Rustic Garden Venue", sqft: "2,500", capacity: "100", location: "Westside", price: 150, type: "Event", hue: "orange" },
];

export default function SpacesPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24">
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
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              From creative studios to professional boardrooms, discover spaces that inspire your next big move.
            </p>
          </div>
          <Link href="/spaces/new">
            <Button size="lg" variant="secondary" className="h-16 px-10 rounded-full font-bold text-lg shadow-xl shadow-secondary/20 hover:-translate-y-1 transition-all">
              List Your Space
            </Button>
          </Link>
        </header>

        {/* Search & Filter Bar */}
        <section className="glass p-3 rounded-full mb-20 border-secondary/10 flex flex-col md:flex-row gap-2 items-center shadow-huge max-w-5xl mx-auto">
          <div className="relative flex-1 w-full">
            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
            <Input
              type="search"
              placeholder="Where do you need to be? (e.g. Downtown, Riverside)"
              className="h-14 pl-14 pr-6 rounded-full border-none focus-visible:ring-2 focus-visible:ring-secondary/20 text-lg bg-background/30"
            />
          </div>
          <div className="w-[1px] h-10 bg-secondary/10 hidden md:block" />
          <Button variant="ghost" className="h-14 px-8 rounded-full font-bold hover:bg-secondary/5 group">
            <SlidersHorizontal className="mr-3 h-5 w-5 group-hover:rotate-90 transition-transform" />
            Filters
          </Button>
          <Button className="h-14 px-10 rounded-full bg-secondary hover:bg-secondary/90 text-white font-bold shadow-lg shadow-secondary/20">
            Search
          </Button>
        </section>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SAMPLE_SPACES.map((space) => (
            <div key={space.id} className="group relative">
              <div className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full border-white/10 hover:border-secondary/30 transition-all duration-700">
                {/* Visual Area */}
                <div className={`aspect-video bg-${space.hue}-500/10 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-1000`}>
                  <div className="absolute top-6 left-6 z-10">
                    <Badge className="bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 font-bold px-3 py-1">
                      {space.type}
                    </Badge>
                  </div>
                  <div className="absolute top-6 right-6 z-10 flex items-center gap-1 text-white font-black text-2xl drop-shadow-lg">
                    ${space.price}<span className="text-sm font-medium opacity-80 mt-2">/hr</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-secondary transition-colors italic">
                    {space.name}
                  </h3>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Area</span>
                      <div className="flex items-center gap-1 font-bold">
                        <Maximize2 className="h-3 w-3 text-secondary" />
                        {space.sqft} <span className="text-[10px] opacity-60 ml-0.5">FT²</span>
                      </div>
                    </div>
                    <div className="flex flex-col border-x border-secondary/10 px-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">People</span>
                      <div className="flex items-center gap-1 font-bold">
                        <Users className="h-3 w-3 text-secondary" />
                        {space.capacity}
                      </div>
                    </div>
                    <div className="flex flex-col pl-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Loc</span>
                      <div className="font-bold truncate">{space.location}</div>
                    </div>
                  </div>

                  <Button className="mt-auto w-full h-14 rounded-2xl bg-muted text-foreground hover:bg-secondary hover:text-white font-black text-lg transition-all group/btn flex items-center justify-center gap-2">
                    Reserve Now
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
