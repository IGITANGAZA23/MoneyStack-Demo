import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Drill, Home as HomeIcon, Banknote, ShieldCheck, Sparkles, Zap, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-secondary/10 blur-[100px] rounded-full animate-float" />
        <div className="absolute top-[30%] left-[60%] w-[25%] h-[25%] bg-accent/10 blur-[80px] rounded-full animate-pulse-slow" />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 md:pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="h-3 w-3" />
            Empowering 10,000+ neighbors
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            <span className="text-foreground">Share More.</span> <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent italic">Own Less.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            The world's most trusted unified marketplace for borrowing high-end things, 
            booking unique spaces, and securing community funding.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <Link href="/things">
              <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1">
                Start Exploring
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="ghost" className="h-14 px-10 text-lg font-semibold rounded-full hover:bg-muted group">
                How it works 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Items Shared", value: "25k+", icon: Zap },
              { label: "Active Users", value: "12k+", icon: Users },
              { label: "Trust Score", value: "4.9/5", icon: ShieldCheck },
              { label: "Community Fund", value: "$2.4M", icon: Banknote },
            ].map((stat, i) => (stat && (
              <div key={i} className="flex flex-col items-center text-center">
                <stat.icon className="h-6 w-6 text-primary mb-3" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">Unprecedented Versatility</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">One Account. <span className="text-primary italic">Three Infinite Journeys.</span></h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-sm text-left md:text-right">
              Whether it's physical assets, square footage, or financial capital, we've got you covered.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Things */}
            <Link href="/things" className="group h-full">
              <div className="glass-card rounded-[2rem] p-10 h-full flex flex-col justify-between group-hover:-translate-y-2 transition-all">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    <Drill className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Things</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Unlock access to premium gear without the high cost of ownership. From industrial tools to high-end cameras.
                  </p>
                </div>
                <div className="flex items-center text-primary font-bold text-lg">
                  Explore Gear <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Spaces */}
            <Link href="/spaces" className="group h-full">
              <div className="glass-card rounded-[2rem] p-10 h-full flex flex-col justify-between group-hover:-translate-y-2 transition-all">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    <HomeIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Spaces</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Find the perfect environment for your next project. Studios, darkrooms, workshops, or even entire garages.
                  </p>
                </div>
                <div className="flex items-center text-secondary font-bold text-lg">
                  Find Space <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Funds */}
            <Link href="/funds" className="group h-full">
              <div className="glass-card rounded-[2rem] p-10 h-full flex flex-col justify-between group-hover:-translate-y-2 transition-all">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    <Banknote className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Funds</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Empower your dreams or help others achieve theirs through transparent, secure peer-to-peer micro-loans.
                  </p>
                </div>
                <div className="flex items-center text-accent font-bold text-lg">
                  View Wealth <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section: Trust */}
      <section className="py-32 bg-mesh text-white dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">Security Protocol</Badge>
              <h2 className="text-5xl md:text-6xl font-black leading-tight italic">
                Built on a <br />Foundation of <br />Absolute Trust.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-primary border border-white/10">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Identity Verification 2.0</h4>
                    <p className="text-white/60 text-lg">Military-grade KYC verification ensures every member is exactly who they say they are.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-secondary border border-white/10">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Neural TrustScore™</h4>
                    <p className="text-white/60 text-lg">An AI-driven reputation engine that monitors transaction health across all categories in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative z-10 glass rounded-[2.5rem] p-12 border-white/5 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-10" />
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-20 w-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                    JD
                  </div>
                  <div>
                    <div className="h-6 w-48 bg-white/20 rounded-full mb-3" />
                    <div className="h-4 w-24 bg-white/10 rounded-full" />
                  </div>
                  <div className="ml-auto flex flex-col items-end">
                    <div className="text-sm font-bold text-primary mb-1 uppercase tracking-widest">TrustScore</div>
                    <div className="text-4xl font-black text-white italic">98</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-gradient-to-r from-primary to-secondary" />
                  </div>
                  <div className="flex justify-between text-sm text-white/40 font-medium">
                    <span>Verified neighbor since 2024</span>
                    <span>Superior Reliability</span>
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 rounded-xl bg-white/5 border border-white/5" />
                  ))}
                </div>
              </div>
              {/* Background Glow */}
              <div className="absolute -inset-10 bg-primary/20 blur-[100px] opacity-50 -z-10 rounded-full translate-x-10 translate-y-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto glass p-16 md:p-24 rounded-[3rem] border-primary/10 shadow-huge">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight"> Ready to rethink <br /><span className="text-primary italic">ownership?</span></h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Joint the revolution of sharing. Access everything you need, share everything you don't.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="h-16 px-12 text-xl font-bold rounded-full transition-all hover:scale-105">
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            <div>
              <div className="text-3xl font-black italic text-primary mb-4 tracking-tighter">Nexus Lend.</div>
              <p className="text-muted-foreground">The future of collaborative consumption.</p>
            </div>
            <div className="flex gap-10 text-sm font-bold uppercase tracking-widest text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
            </div>
            <div className="text-sm text-muted-foreground/60">
              © 2026 Nexus Lend. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}