import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Drill, Home as HomeIcon, Banknote, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 pt-16 md:pt-24 lg:pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto relative z-10 text-center">
          <Badge variant="secondary" className="mb-4 text-emerald-700 bg-emerald-100 hover:bg-emerald-200">
            Trusted by 10,000+ neighbors
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-600 via-emerald-600 to-orange-500 bg-clip-text text-transparent pb-2">
            Share More. Own Less. <br className="hidden md:block" /> Trust Completely.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Nexus Lend is the unified marketplace for lending things, renting spaces, and peer-to-peer funding.
            built on a foundation of community trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/things">
              <Button size="lg" className="h-12 px-8 text-base">Start Exploring</Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">How it works</Button>
            </Link>
          </div>
        </div>

        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[800px] opacity-10 blur-3xl rounded-full bg-gradient-to-tr from-blue-400 to-emerald-400 pointer-events-none" />
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10 text-center">One Account. Three Journeys.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Things */}
            <Link href="/things" className="group">
              <div className="bg-background rounded-2xl p-8 shadow-sm border hover:shadow-md transition-all hover:border-blue-200 cursor-pointer h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 group-hover:w-2 transition-all" />
                <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <Drill className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Things</h3>
                <p className="text-muted-foreground mb-4">Borrow a pressure washer, lend a camera, or rent powerful tools nearby.</p>
                <span className="text-blue-600 font-medium flex items-center text-sm group-hover:translate-x-1 transition-transform">
                  Explore Things <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Spaces */}
            <Link href="/spaces" className="group">
              <div className="bg-background rounded-2xl p-8 shadow-sm border hover:shadow-md transition-all hover:border-emerald-200 cursor-pointer h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 group-hover:w-2 transition-all" />
                <div className="h-12 w-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <HomeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Spaces</h3>
                <p className="text-muted-foreground mb-4">Rent a studio for a day, book a meeting room, or list your garage.</p>
                <span className="text-emerald-600 font-medium flex items-center text-sm group-hover:translate-x-1 transition-transform">
                  Find Spaces <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Funds */}
            <Link href="/funds" className="group">
              <div className="bg-background rounded-2xl p-8 shadow-sm border hover:shadow-md transition-all hover:border-orange-200 cursor-pointer h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 group-hover:w-2 transition-all" />
                <div className="h-12 w-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                  <Banknote className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Funds</h3>
                <p className="text-muted-foreground mb-4">Responsible peer-to-peer loans. Invest in your community or get funded.</p>
                <span className="text-orange-600 font-medium flex items-center text-sm group-hover:translate-x-1 transition-transform">
                  View Funds <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Badge className="mb-4">Trust First</Badge>
              <h2 className="text-3xl font-bold mb-6">Built on a Foundation of Trust</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Identity Verification</h4>
                    <p className="text-muted-foreground">Every user is verified via government ID before they can rent or lend high-value assets.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Smart TrustScore™</h4>
                    <p className="text-muted-foreground">See a user's reputation at a glance, aggregated from all their activities across Things, Spaces, and Funds.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-muted/50 rounded-3xl p-8 min-h-[300px] flex items-center justify-center">
              {/* Visual placeholder for Trust Profile */}
              <div className="bg-background p-6 rounded-xl shadow-lg max-w-sm w-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full" />
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                    <div className="h-3 w-16 bg-gray-100 rounded" />
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded mb-2" />
                <div className="h-2 w-2/3 bg-gray-100 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}