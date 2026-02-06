import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, ShieldCheck, Wallet, ArrowUpRight, Percent, Calendar } from "lucide-react";
import Link from "next/link";

const SAMPLE_LOANS = [
  { id: 1, amount: 1500, category: "Expansion", user: "Artisan Bakery", trust: 99, rate: 4.5, term: "6mo", purpose: "Scaling production with a new industrial oven.", color: "primary" },
  { id: 2, amount: 800, category: "Education", user: "Maria G.", trust: 97, rate: 3.2, term: "4mo", purpose: "Final semester tuition for UX Design certification.", color: "secondary" },
  { id: 3, amount: 2500, category: "Green Energy", user: "Solar Community", trust: 98, rate: 5.0, term: "12mo", purpose: "Neighborhood shared solar panel installation.", color: "accent" },
];

export default function FundsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24 pb-20">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-mesh opacity-30 -z-10 blur-[150px] pointer-events-none" />

      <div className="container px-6 py-12 relative z-10">
        <header className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-24 text-center lg:text-left">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 font-black px-4 py-1 uppercase tracking-[0.2em] text-xs">
              <Sparkles className="h-3 w-3 mr-2" />
              Direct Community Investment
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
              Empower <br /><span className="text-accent italic">Growth.</span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              A transparent, secure, and human-centric way to lend and borrow. No banks, just people building futures together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/funds/new">
              <Button size="lg" className="h-20 px-12 rounded-[2rem] bg-accent hover:bg-accent/90 text-white font-black text-xl shadow-2xl shadow-accent/30 transition-all hover:scale-105">
                Request Funds
              </Button>
            </Link>
            <Button size="lg" variant="ghost" className="h-20 px-12 rounded-[2rem] font-black text-xl hover:bg-accent/5 transition-all">
              My Portfolio
            </Button>
          </div>
        </header>

        {/* Global Stats bar */}
        <div className="glass mx-auto max-w-5xl rounded-[2.5rem] p-8 mb-24 border-accent/10 flex flex-wrap justify-between items-center gap-8 shadow-huge">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <TrendingUp className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Avg. Return</div>
              <div className="text-2xl font-black">5.2%</div>
            </div>
          </div>
          <div className="w-[1px] h-12 bg-accent/10 hidden md:block" />
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Default Rate</div>
              <div className="text-2xl font-black">0.4%</div>
            </div>
          </div>
          <div className="w-[1px] h-12 bg-accent/10 hidden md:block" />
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Wallet className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Total Funded</div>
              <div className="text-2xl font-black">$4.2M</div>
            </div>
          </div>
        </div>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SAMPLE_LOANS.map((loan) => (
            <div key={loan.id} className="group relative">
              <div className="glass-card rounded-[3rem] p-10 flex flex-col h-full border-accent/5 hover:border-accent/30 transition-all duration-700 shadow-xl hover:shadow-accent/5">
                <div className="flex justify-between items-start mb-10">
                  <Badge className="bg-muted text-foreground hover:bg-muted/80 rounded-full px-4 py-1 font-bold">
                    {loan.category}
                  </Badge>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Score</span>
                    <span className="text-xl font-black text-secondary italic">{loan.trust}</span>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Requesting</div>
                  <h3 className="text-5xl font-black tracking-tighter group-hover:text-accent transition-colors">
                    ${loan.amount.toLocaleString()}
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground mb-10 line-clamp-3 font-medium italic leading-relaxed">
                  "{loan.purpose}"
                </p>

                <div className="space-y-6 mb-12 flex-1">
                  <div className="flex justify-between items-center border-b border-accent/5 pb-4">
                    <div className="flex items-center gap-3 text-muted-foreground font-bold">
                      <Percent className="h-4 w-4" /> Interest
                    </div>
                    <span className="text-xl font-black">{loan.rate}%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-accent/5 pb-4">
                    <div className="flex items-center gap-3 text-muted-foreground font-bold">
                      <Calendar className="h-4 w-4" /> Duration
                    </div>
                    <span className="text-xl font-black">{loan.term}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 text-muted-foreground font-bold">
                      Member
                    </div>
                    <span className="font-bold underline decoration-accent/30 underline-offset-4">{loan.user}</span>
                  </div>
                </div>

                <button className="w-full h-16 rounded-[1.5rem] bg-foreground text-background hover:bg-accent hover:text-white font-black text-xl transition-all flex items-center justify-center gap-3">
                  Fund Loan
                  <ArrowUpRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
