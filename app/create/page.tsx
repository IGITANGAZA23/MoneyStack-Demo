'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { Drill, Home, Coins, MapPin, Star, Shield, ArrowLeft, ArrowRight, Heart, Sparkles, Upload, Box, Camera, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, Suspense } from "react";
import { useNexus } from "@/context/NexusContext";

type Category = 'things' | 'spaces' | 'funds';

const categories = [
  { id: 'things' as Category, label: 'Things', description: 'Lend out tools, kitchenware, or gear.', icon: Drill, color: 'primary' },
  { id: 'spaces' as Category, label: 'Spaces', description: 'Share a desk, garden, or storage unit.', icon: Home, color: 'secondary' },
  { id: 'funds' as Category, label: 'Funds', description: 'Contribute to community peer-lending.', icon: Coins, color: 'accent' },
];

function CreateListingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addListing } = useNexus();
  const typeParam = searchParams.get('type') as Category;

  const [selectedCategory, setSelectedCategory] = useState<Category>(typeParam || 'things');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('San Francisco, CA');
  const [sector, setSector] = useState('General');

  const handleCreate = () => {
    if (!title || !price) return;

    const baseListing: any = {
      name: title,
      description: description,
      price: parseFloat(price),
      category: sector,
      location: location,
      provider: "Alex Sterling",
      type: selectedCategory === 'funds' ? 'fund' : selectedCategory === 'spaces' ? 'space' : 'thing',
    };

    if (selectedCategory === 'funds') {
      baseListing.amount = parseFloat(price);
      baseListing.rate = 5.0; // Default community rate
      baseListing.term = "12mo";
      baseListing.trustScore = 98;
    }

    addListing(baseListing);

    router.push(selectedCategory === 'funds' ? '/funds' : selectedCategory === 'spaces' ? '/spaces' : '/things');
  };

  useEffect(() => {
    if (typeParam && ['things', 'spaces', 'funds'].includes(typeParam)) {
      setSelectedCategory(typeParam);
    }
  }, [typeParam]);

  const activeColor = selectedCategory === 'things' ? 'primary' : selectedCategory === 'spaces' ? 'secondary' : 'accent';

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24 pb-20">
      {/* Dynamic Background */}
      <div className={`absolute top-0 left-0 w-full h-[600px] bg-mesh opacity-20 -z-10 blur-[120px] pointer-events-none transition-colors duration-1000`} />

      <main className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form Side */}
          <div className="flex-1 max-w-3xl">
            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Button variant="ghost" size="sm" onClick={() => router.back()} className="rounded-full hover:bg-white/10 italic font-bold">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </Button>
                <div className="h-1 w-24 bg-muted rounded-full overflow-hidden ml-4">
                  <div className={`h-full bg-${activeColor} transition-all duration-700`} style={{ width: '40%' }} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Phase 01: Origins</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic mb-4">
                Share <span className={`text-${activeColor} underline decoration-${activeColor}/20 underline-offset-8`}>Something.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium italic">Define your contribution to the community ecosystem.</p>
            </header>

            <section className="space-y-12">
              {/* Category Selector */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/50">Select Domain</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`relative group p-6 rounded-[2rem] border-2 transition-all duration-500 text-left flex flex-col gap-4 overflow-hidden ${selectedCategory === cat.id
                        ? `border-${cat.color} bg-${cat.color}/5 shadow-lg shadow-${cat.color}/10`
                        : 'border-white/5 bg-white/5 hover:border-white/20'
                        }`}
                    >
                      <div className={`size-12 rounded-2xl flex items-center justify-center transition-transform duration-500 ${selectedCategory === cat.id ? `bg-${cat.color} text-white` : 'bg-muted text-muted-foreground group-hover:scale-110'
                        }`}>
                        <cat.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className={`font-black italic text-lg ${selectedCategory === cat.id ? `text-${cat.color}` : 'text-foreground'}`}>{cat.label}</p>
                        <p className="text-xs font-medium text-muted-foreground leading-tight mt-1">{cat.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Details Form */}
              <div className="glass rounded-[3rem] p-10 md:p-14 border-white/5 shadow-huge space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Display Title</label>
                  <Input
                    placeholder="e.g. Vintage 35mm Leica, Industrial Woodshop..."
                    className={`h-16 rounded-2xl border-none bg-background/50 focus-visible:ring-2 focus-visible:ring-${activeColor}/20 text-xl font-black italic px-8`}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Description & Lore</label>
                  <Textarea
                    placeholder="Tell the story of this asset..."
                    className={`min-h-[160px] rounded-[2rem] border-none bg-background/50 focus-visible:ring-2 focus-visible:ring-${activeColor}/20 text-lg font-medium p-8 leading-relaxed`}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Rate (${selectedCategory === 'spaces' ? '/hr' : '/day'})</label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black italic opacity-30">$</span>
                      <Input
                        type="number"
                        placeholder="0.00"
                        className={`h-16 pl-12 pr-8 rounded-2xl border-none bg-background/50 focus-visible:ring-2 focus-visible:ring-${activeColor}/20 text-2xl font-black italic`}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Sector</label>
                    <Select value={sector} onValueChange={setSector}>
                      <SelectTrigger className={`h-16 rounded-2xl border-none bg-background/50 focus:ring-2 focus:ring-${activeColor}/20 px-8 text-lg font-bold italic`}>
                        <SelectValue placeholder="Choose Sector" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-white/10 glass">
                        <SelectItem value="General" className="rounded-xl font-bold italic">General Purpose</SelectItem>
                        <SelectItem value="Professional" className="rounded-xl font-bold italic">Professional Grade</SelectItem>
                        <SelectItem value="Creative" className="rounded-xl font-bold italic">Creative Studio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Base of Operations</label>
                  <div className="relative">
                    <MapPin className={`absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-${activeColor}`} />
                    <Input
                      className={`h-16 pl-14 pr-8 rounded-2xl border-none bg-background/50 focus-visible:ring-2 focus-visible:ring-${activeColor}/20 text-xl font-black italic`}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    className={`w-full h-20 rounded-[2rem] bg-foreground text-background hover:bg-${activeColor} hover:text-white transition-all duration-500 shadow-2xl text-2xl font-black italic group p-0`}
                    onClick={handleCreate}
                  >
                    Establish Connection
                    <ArrowRight className="ml-3 h-8 w-8 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </div>
            </section>
          </div>

          {/* Preview Side */}
          <div className="hidden lg:block w-[400px]">
            <div className="sticky top-32">
              <div className="flex justify-between items-center mb-6 px-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/50 italic">Digital Rendering</h3>
                <Badge variant="outline" className={`border-${activeColor}/30 text-${activeColor} bg-${activeColor}/5 animate-pulse`}>
                  <Sparkles className="h-3 w-3 mr-2" />
                  PREVIEW
                </Badge>
              </div>

              <div className="glass-card rounded-[3rem] overflow-hidden border-white/10 shadow-huge">
                <div className={`aspect-[4/3] bg-${activeColor}/10 flex items-center justify-center relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-mesh opacity-40 -z-10" />
                  <div className={`p-8 rounded-[2rem] bg-background/40 backdrop-blur-md border border-white/10 transition-transform duration-700 group-hover:scale-110`}>
                    {selectedCategory === 'things' ? <Box className={`h-20 w-20 text-${activeColor}`} /> : selectedCategory === 'spaces' ? <Home className={`h-20 w-20 text-${activeColor}`} /> : <Coins className={`h-20 w-20 text-${activeColor}`} />}
                  </div>
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-white/90 text-black border-none font-black italic px-4">
                      {selectedCategory.toUpperCase()}
                    </Badge>
                  </div>
                </div>

                <div className="p-10">
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <h4 className="text-3xl font-black tracking-tighter leading-none italic truncate">
                      {title || 'Untethered Asset'}
                    </h4>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-black tracking-tighter text-primary italic">
                        ${price || '0.00'}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        {selectedCategory === 'spaces' ? 'PER HOUR' : 'PER DAY'}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-medium italic mb-8 line-clamp-2 min-h-[3rem]">
                    {description || 'Establishing biometric link... awaiting description metadata...'}
                  </p>

                  <div className="flex items-center gap-3 pt-8 border-t border-white/5">
                    <div className={`size-10 rounded-xl bg-${activeColor}/10 flex items-center justify-center text-${activeColor}`}>
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-black italic truncate">Alex Sterling</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{location}</p>
                    </div>
                    <div className="flex gap-1 text-accent">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 glass p-8 rounded-[2rem] border-white/5">
                <div className="flex items-center gap-4 text-sm font-bold italic text-muted-foreground leading-relaxed">
                  <Shield className="h-6 w-6 text-emerald-500 shrink-0" />
                  Every connection is encrypted and backed by Nexus Security Protocols.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function CreateListingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center font-black italic text-4xl animate-pulse">Initializing Nexus...</div>}>
      <CreateListingContent />
    </Suspense>
  );
}
