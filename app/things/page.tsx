import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, Drill, Camera, Bike, Tent, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const SAMPLE_ITEMS = [
  { id: 1, name: "Industrial Power Drill", category: "Tools", price: 15, distance: "0.8km", image_placeholder: "bg-blue-500/10", icon: Drill, provider: "Alex M." },
  { id: 2, name: "Sony Alpha a7 IV", category: "Electronics", price: 65, distance: "1.2km", image_placeholder: "bg-emerald-500/10", icon: Camera, provider: "Sarah K." },
  { id: 3, name: "Specialized Mountain Bike", category: "Sports", price: 30, distance: "2.4km", image_placeholder: "bg-orange-500/10", icon: Bike, provider: "John D." },
  { id: 4, name: "4-Person Camping Tent", category: "Outdoors", price: 20, distance: "3.1km", image_placeholder: "bg-purple-500/10", icon: Tent, provider: "Mike R." },
];

export default function ThingsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-mesh opacity-30 -z-10 blur-3xl pointer-events-none" />

      <div className="container px-6 py-12 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="h-3 w-3 mr-2" />
              Community Assets
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 italic">
              Lend & <span className="text-primary font-black">Borrow.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unlock the power of your neighborhood. Find specialized gear from trusted neighbors without the overhead of ownership.
            </p>
          </div>
          <Link href="/things/new">
            <Button size="lg" className="h-16 px-10 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
              List a Thing
            </Button>
          </Link>
        </header>

        {/* Search & Filter Bar */}
        <section className="glass p-4 rounded-[2.5rem] mb-16 border-primary/10 flex flex-col md:flex-row gap-4 items-center shadow-huge">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="What are you looking for today? (e.g. Cinema Camera, Jackhammer)"
              className="h-16 pl-14 pr-6 rounded-full border-none focus-visible:ring-2 focus-visible:ring-primary/20 text-lg bg-background/50"
            />
          </div>
          <Button variant="outline" className="h-16 px-8 rounded-full border-primary/10 hover:bg-primary/5 font-bold group">
            <SlidersHorizontal className="mr-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Advanced Filters
          </Button>
        </section>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SAMPLE_ITEMS.map((item) => (
            <div key={item.id} className="group h-full">
              <div className="glass-card rounded-[2rem] overflow-hidden h-full flex flex-col group-hover:-translate-y-2 transition-all duration-500">
                {/* Image Placeholder */}
                <div className={`aspect-[4/3] ${item.image_placeholder} flex items-center justify-center relative overflow-hidden`}>
                  <item.icon className="h-20 w-20 text-foreground/20 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm text-foreground hover:bg-white/90">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Button variant="secondary" className="w-full rounded-full font-bold">Quick View</Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-black text-2xl tracking-tight leading-tight group-hover:text-primary transition-colors cursor-pointer">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <div className="h-6 w-6 rounded-full bg-muted border border-border" />
                    <span className="text-sm font-medium">{item.provider} • {item.distance}</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-border pt-6">
                    <div>
                      <span className="text-3xl font-black tracking-tighter">${item.price}</span>
                      <span className="text-muted-foreground text-sm font-bold uppercase tracking-wider">/day</span>
                    </div>
                    <Button className="h-12 w-12 rounded-full p-0 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-primary/10">
                      <ArrowUpRight className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state hint */}
        <div className="mt-24 text-center">
          <p className="text-muted-foreground font-medium">Showing 4 of 428 neighbor listings</p>
          <Button variant="link" className="text-primary font-black text-lg mt-2">Load More Experiences</Button>
        </div>
      </div>
    </div>
  );
}
