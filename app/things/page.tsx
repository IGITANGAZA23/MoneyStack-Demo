import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function ThingsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lend & Borrow Things</h1>
          <p className="text-muted-foreground">Find tools, electronics, and gear nearby.</p>
        </div>
        <Link href="/things/new">
          <Button>List a Thing</Button>
        </Link>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for drills, cameras, etc..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">Filters</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Placeholders for Thing Cards */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="aspect-square bg-muted rounded-t-xl" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Power Drill</h3>
              <p className="text-sm text-muted-foreground">Downtown • 2km away</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold">$15/day</span>
                <Button size="sm" variant="secondary">Rent</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
