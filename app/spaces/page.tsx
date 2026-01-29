import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function SpacesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rent Unique Spaces</h1>
          <p className="text-muted-foreground">Find studios, event, venues, and storage nearby.</p>
        </div>
        <Link href="/spaces/new">
          <Button>List a Space</Button>
        </Link>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by location..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filters</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholders for Space Cards */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
            <div className="aspect-video bg-muted" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Bright Photo Studio</h3>
              <p className="text-sm text-muted-foreground">Main St. • 500 sq ft</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="font-bold">$50</span>
                  <span className="text-sm text-muted-foreground">/hour</span>
                </div>
                <Button size="sm">Book</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
