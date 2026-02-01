'use client';

import Link from "next/link";
import {
  Home,
  Calculator,
  ArrowRight,
  MapPin,
  Shield,
  CheckCircle,
  Clock,
  Share2,
  Bookmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function FundDetailsPage() {
  const [contribution, setContribution] = useState([500]);

  const interestRate = 8.5;
  const loanTerm = 12;
  const monthlyPayment = (contribution[0] * (1 + interestRate / 100) / loanTerm).toFixed(2);
  const totalInterest = (contribution[0] * interestRate / 100).toFixed(2);

  const vouchers = [
    { initials: "MS", color: "from-purple-500 to-pink-500" },
    { initials: "JD", color: "from-blue-500 to-cyan-500" },
    { initials: "AR", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="container py-4">
        <div className="flex flex-wrap gap-2 text-sm">
          <Link href="/" className="text-muted-foreground flex items-center gap-1 hover:text-primary">
            <Home className="h-4 w-4" /> Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/funds" className="text-muted-foreground hover:text-primary">Community Funds</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-primary font-bold">Small Business Equipment Upgrade</span>
        </div>
      </div>

      <div className="container pb-20">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between items-start gap-3 mb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 border-orange-200">
                High Trust Listing
              </Badge>
              <Badge variant="secondary">Business</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
              Coffee Roaster Upgrade & Expansion
            </h1>
            <p className="text-muted-foreground text-base">
              ID: BF-99281 • Posted Oct 12, 2023 • Verified by 12 Peers
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" /> Share
            </Button>
            <Button className="gap-2">
              <Bookmark className="h-4 w-4" /> Save
            </Button>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Purpose and Profile */}
          <div className="flex-[1.5] flex flex-col gap-8">
            {/* Profile Header Section */}
            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-orange-400 to-rose-500 rounded-full h-20 w-20 md:h-24 md:w-24 flex items-center justify-center text-white text-2xl font-bold border-4 border-primary/10">
                      ER
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-orange-500 text-white p-1 rounded-full border-2 border-white">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xl md:text-2xl font-bold">Elena Rodriguez</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-orange-500 font-bold text-sm">High-Trust Member</span>
                      <span className="text-muted-foreground text-sm">• since 2021</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" /> 100% Repayment Rate • 42 Transactions
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="text-primary">
                  View Trust Resume
                </Button>
              </div>
            </div>

            {/* Loan Purpose */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold tracking-tight pt-2">Loan Purpose</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am looking to upgrade my small-batch coffee roasting equipment to meet growing demand from local cafes.
                The current roaster capacity is limited to 5kg per hour, and I&apos;m looking to upgrade to a 15kg Mill City roaster.
                This upgrade will allow me to fulfill 3 new wholesale contracts and increase monthly revenue by an estimated 40%.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-card p-4 rounded-xl border">
                  <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-1">Impact</p>
                  <p className="font-medium">Supporting 2 new part-time jobs and sustainable sourcing.</p>
                </div>
                <div className="bg-card p-4 rounded-xl border">
                  <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-1">Collateral</p>
                  <p className="font-medium">Business equipment valued at $12,500.</p>
                </div>
              </div>
            </div>

            {/* Trust Resume Snapshot */}
            <div className="mt-4">
              <h2 className="text-xl font-bold tracking-tight mb-4">Trust Resume</h2>
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-3xl font-black text-primary">A+</p>
                    <p className="text-muted-foreground text-xs font-bold uppercase">Borrower Grade</p>
                  </div>
                  <div className="flex flex-col gap-1 border-x border-primary/20">
                    <p className="text-3xl font-black">12</p>
                    <p className="text-muted-foreground text-xs font-bold uppercase">Active Endorsements</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-3xl font-black">0%</p>
                    <p className="text-muted-foreground text-xs font-bold uppercase">Late Payments</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-primary/20 flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {vouchers.map((v, i) => (
                      <div
                        key={i}
                        className={`size-10 rounded-full border-2 border-white bg-gradient-to-br ${v.color} flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {v.initials}
                      </div>
                    ))}
                    <div className="size-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-[10px] font-bold">
                      +9
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm italic">
                    &quot;Elena is a staple in the local business community.&quot; - Marco S.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator */}
          <div className="flex-1">
            <div className="sticky top-24 bg-card rounded-xl border shadow-xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Funding Goal: $10,000
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-muted-foreground">Your Contribution</span>
                  <span className="text-lg font-bold text-primary">${contribution[0]}</span>
                </div>

                <Slider
                  value={contribution}
                  onValueChange={setContribution}
                  max={5000}
                  min={50}
                  step={50}
                  className="w-full"
                />

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-lg border border-primary/10">
                    <p className="text-[10px] font-bold uppercase text-muted-foreground">Est. Monthly</p>
                    <p className="text-lg font-black">${monthlyPayment}</p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg border border-primary/10">
                    <p className="text-[10px] font-bold uppercase text-muted-foreground">Interest Rate</p>
                    <p className="text-lg font-black text-orange-500">{interestRate}%</p>
                  </div>
                </div>

                <div className="py-4 border-y">
                  <p className="text-sm font-bold mb-3">Repayment Schedule</p>
                  <div className="flex items-end justify-between h-16 gap-1">
                    {[20, 30, 45, 60, 75, 90, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary rounded-t transition-all hover:bg-primary/80"
                        style={{ height: `${h}%`, opacity: 0.2 + (i * 0.1) }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-muted-foreground font-bold">
                    <span>OCT &apos;23</span>
                    <span>MAY &apos;24</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Loan Term</span>
                    <span className="font-medium">{loanTerm} Months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Interest Earned</span>
                    <span className="font-medium text-primary">+${totalInterest}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Nexus Lend Fee (0%)</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                </div>

                <Button className="w-full h-12 text-base font-bold shadow-lg">
                  Commit ${contribution[0]} to Fund
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-center text-[10px] text-muted-foreground">
                  Funds are held in escrow until the goal is 100% met.
                  Repayments start 30 days after disbursement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-card rounded-xl overflow-hidden border">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Community Location</h3>
              <p className="text-muted-foreground mb-6">
                This business is a staple of the Portland roaster scene, operating out of the Southeast industrial district since 2019.
              </p>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-bold">Southeast Portland, OR</p>
                  <p className="text-xs text-muted-foreground">97214 District • 1.2 miles from your saved location</p>
                </div>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-br from-emerald-100 to-blue-100 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.03)_25%,rgba(0,0,0,0.03)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.03)_75%)] bg-[length:20px_20px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
