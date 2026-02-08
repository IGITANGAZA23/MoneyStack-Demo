'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Thing {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  location?: string;
  provider: string;
  type: 'thing' | 'space' | 'fund';
  isListedByMe?: boolean;
  status?: 'available' | 'borrowed' | 'pending';
  // Fund specific
  amount?: number;
  rate?: number;
  term?: string;
  trustScore?: number;
}

interface NexusContextType {
  listings: Thing[];
  borrowedItems: Thing[];
  addListing: (thing: Omit<Thing, 'id'>) => void;
  borrowItem: (id: string) => void;
  removeListing: (id: string) => void;
  returnItem: (id: string) => void;
}

const NexusContext = createContext<NexusContextType | undefined>(undefined);

const INITIAL_LISTINGS: Thing[] = [
  { id: '1', name: 'MacBook Pro M2', description: 'High performance laptop for creative work.', price: 50, category: 'Electronics', location: 'Downtown', provider: 'Alex Sterling', type: 'thing', isListedByMe: true, status: 'available' },
  { id: '2', name: 'Power Drill', description: 'Heavy duty drill for construction.', price: 15, category: 'Tools', location: 'Riverside', provider: 'Maria Chen', type: 'thing', status: 'available' },
  { id: '3', name: 'Mountain Bike', description: 'Perfect for local trails.', price: 25, category: 'Sports', location: 'West End', provider: 'John Doe', type: 'thing', status: 'available' },
  { id: 's1', name: "Industrial Loft Studio", description: "Natural light, 1200sqft.", location: "Art District", price: 75, category: 'Studio', provider: 'Creative Hub', type: "space", status: 'available' },
  { id: 'f1', name: "Artisan Bakery Expansion", description: "Scaling production with a new industrial oven.", price: 4.5, category: "Expansion", provider: "Bakery Group", type: "fund", amount: 1500, rate: 4.5, term: "6mo", trustScore: 99 }
];

export function NexusProvider({ children }: { children: React.ReactNode }) {
  const [listings, setListings] = useState<Thing[]>([]);
  const [borrowedItems, setBorrowedItems] = useState<Thing[]>([]);

  // Initialize and Sync
  useEffect(() => {
    const savedListings = localStorage.getItem('nexus_listings');
    const savedBorrowed = localStorage.getItem('nexus_borrowed');

    if (savedListings) {
      setListings(JSON.parse(savedListings));
    } else {
      setListings(INITIAL_LISTINGS);
    }

    if (savedBorrowed) {
      setBorrowedItems(JSON.parse(savedBorrowed));
    }
  }, []);

  useEffect(() => {
    if (listings.length > 0) {
      localStorage.setItem('nexus_listings', JSON.stringify(listings));
    }
  }, [listings]);

  useEffect(() => {
    localStorage.setItem('nexus_borrowed', JSON.stringify(borrowedItems));
  }, [borrowedItems]);

  const addListing = (thing: Omit<Thing, 'id'>) => {
    const newThing: Thing = {
      ...thing,
      id: Math.random().toString(36).substr(2, 9),
      isListedByMe: true,
      status: 'available'
    };
    setListings(prev => [newThing, ...prev]);
  };

  const borrowItem = (id: string) => {
    setListings(prev => prev.map(item =>
      item.id === id ? { ...item, status: 'borrowed' } : item
    ));

    const item = listings.find(i => i.id === id);
    if (item && !borrowedItems.find(i => i.id === id)) {
      setBorrowedItems(prev => [...prev, { ...item, status: 'borrowed' }]);
    }
  };

  const removeListing = (id: string) => {
    setListings(prev => prev.filter(item => item.id !== id));
  };

  const returnItem = (id: string) => {
    setListings(prev => prev.map(item =>
      item.id === id ? { ...item, status: 'available' } : item
    ));
    setBorrowedItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <NexusContext.Provider value={{ listings, borrowedItems, addListing, borrowItem, removeListing, returnItem }}>
      {children}
    </NexusContext.Provider>
  );
}

export function useNexus() {
  const context = useContext(NexusContext);
  if (context === undefined) {
    throw new Error('useNexus must be used within a NexusProvider');
  }
  return context;
}
