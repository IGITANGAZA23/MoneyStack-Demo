'use client';

import { useRouter } from "next/navigation";
import { Drill, Home, Coins, MapPin, Star, Shield, ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

type Category = 'things' | 'spaces' | 'funds';

const categories = [
  { id: 'things' as Category, label: 'Things', description: 'Lend out tools, kitchenware, or gear.', icon: Drill, color: 'blue' },
  { id: 'spaces' as Category, label: 'Spaces', description: 'Share a desk, garden, or storage unit.', icon: Home, color: 'emerald' },
  { id: 'funds' as Category, label: 'Funds', description: 'Contribute to community peer-lending.', icon: Coins, color: 'orange' },
];

export default function CreateListingPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category>('things');
  const [title, setTitle] = useState('Professional DeWalt Hammer Drill');
  const [description, setDescription] = useState('Heavy-duty power tool perfect for masonry projects.');
  const [price, setPrice] = useState('15.00');
  const [location, setLocation] = useState('San Francisco, CA');

  return (
    <div className="min-h-screen bg-background">
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 md:px-10 py-8 gap-8">
        <div className="flex-1 max-w-2xl">
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex justify-between items-end">
              <p className="font-semibold">Listing Progress</p>
              <p className="text-sm text-muted-foreground">Step 2 of 4</p>
            </div>
            <div className="rounded-full bg-muted h-2 w-full overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: '50%' }} />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-2">What are you sharing today?</h1>
          <p className="text-muted-foreground text-lg mb-8">Choose a category and tell the community more.</p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {categories.map((cat) => (
              <div key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${selectedCategory === cat.id ? 'border-primary bg-primary/5' : 'border-transparent bg-card'}`}>
                <div className={`w-full aspect-square rounded-lg mb-2 flex items-center justify-center ${cat.color === 'blue' ? 'bg-blue-100 text-blue-600' : cat.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600'}`}>
                  <cat.icon className="h-12 w-12" />
                </div>
                <p className={`font-bold ${selectedCategory === cat.id ? 'text-primary' : ''}`}>{cat.label}</p>
                <p className="text-muted-foreground text-xs">{cat.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-b pb-3">Listing Details</h2>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Title</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Description</label>
              <Textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Daily Rate ($)</label>
                <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Sub-category</label>
                <Select defaultValue="power-tools">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="power-tools">Power Tools</SelectItem>
                    <SelectItem value="gardening">Gardening</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-10" value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
            </div>
            <div className="flex justify-between pt-10">
              <Button variant="ghost" onClick={() => router.back()}><ArrowLeft className="h-4 w-4 mr-2" /> Back</Button>
              <Button onClick={() => router.push('/things')}>Continue <ArrowRight className="h-4 w-4 ml-2" /></Button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-[360px]">
          <div className="sticky top-24">
            <div className="flex justify-between mb-4">
              <h3 className="text-sm font-bold uppercase text-muted-foreground">Preview</h3>
              <Badge variant="secondary" className="bg-green-100 text-green-700 text-[10px]">LIVE</Badge>
            </div>
            <div className="bg-card rounded-xl overflow-hidden shadow-xl border">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                <Drill className="h-20 w-20 text-yellow-600" />
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold">{title || 'Title'}</h4>
                  <span className="text-primary font-bold">${price}/day</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex text-yellow-500">{[1, 2, 3, 4].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}</div>
                  <span>• {location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
