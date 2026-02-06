'use client';

import { useRouter } from "next/navigation";
import { Shield, Upload, CheckCircle, FileText, Camera, CreditCard, Sparkles, Lock, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const verificationSteps = [
  { id: 1, label: 'Email Authenticated', icon: CheckCircle, completed: true },
  { id: 2, label: 'Biometric Link', icon: CheckCircle, completed: true },
  { id: 3, label: 'Quantum Identity Check', icon: FileText, completed: false, current: true, description: 'Verify your government-issued documents.' },
  { id: 4, label: 'Neural Presence Check', icon: Camera, completed: false, description: 'Live selfie to confirm your identity.' },
  { id: 5, label: 'Asset Backing', icon: CreditCard, completed: false, description: 'Connect a secure payment method.' },
];

export default function TrustPage() {
  const router = useRouter();
  const completedSteps = verificationSteps.filter(s => s.completed).length;
  const progress = (completedSteps / verificationSteps.length) * 100;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24 pb-20">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full -z-10 animate-float" />

      <main className="container px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 font-black px-4 py-1.5 uppercase tracking-widest text-xs">
                Protocol: Security Level 1
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 italic">
                Trust <span className="text-primary font-black uppercase underline decoration-primary/20 underline-offset-8">Genesis.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed italic">
                Our ecosystem thrives on mutual certainty. Complete your profile to unseal the full potential of the Nexus.
              </p>
            </div>
            <div className="glass px-10 py-8 rounded-[2.5rem] border-primary/10 text-right shadow-huge group hover:-translate-y-2 transition-transform duration-500">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">Network Reputation</p>
              <p className="text-4xl font-black text-foreground tracking-tighter italic group-hover:scale-105 transition-transform">Level 1: <span className="text-primary">Novice</span></p>
            </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {/* Main Content (Glass Card) */}
            <div className="xl:col-span-2 space-y-12">
              <section className="glass rounded-[3rem] p-12 md:p-16 border-primary/5 shadow-huge relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 translate-x-32 -translate-y-32" />

                <div className="flex flex-col items-center text-center gap-10">
                  <div className="relative">
                    <div className="w-32 h-32 bg-primary/10 rounded-[2rem] flex items-center justify-center rotate-12 group hover:rotate-0 transition-transform duration-700">
                      <Shield className="h-16 w-16 text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-background border border-border p-2 rounded-full shadow-lg">
                      <Lock className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Badge variant="outline" className="border-primary/20 text-primary font-black uppercase tracking-widest">Stage 3 Protocol</Badge>
                    <h2 className="text-4xl font-black tracking-tight leading-none italic">Identity Matrix Scan</h2>
                    <p className="text-lg text-muted-foreground max-w-lg mx-auto font-medium">
                      Nexus requires a high-fidelity image of your official government identification to maintain network integrity.
                    </p>
                  </div>

                  <div className="w-full relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-full border-2 border-dashed border-primary/20 rounded-[2.5rem] p-16 md:p-24 cursor-pointer hover:bg-primary/5 transition-all flex flex-col items-center gap-6 bg-background/50 backdrop-blur-sm">
                      <Upload className="h-16 w-16 text-primary/40 group-hover:text-primary transition-colors animate-bounce" />
                      <div className="space-y-2 text-center">
                        <p className="text-xl font-black tracking-tight">Transmission Hub</p>
                        <p className="text-muted-foreground font-medium">Drop raw files or browse secure archives (PNG, JPG up to 10MB)</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 w-full">
                    <Button variant="ghost" className="flex-1 h-16 rounded-2xl font-black text-lg border border-border hover:bg-muted" onClick={() => router.back()}>
                      Previous Step
                    </Button>
                    <Button className="flex-1 h-16 rounded-2xl bg-foreground text-background font-black text-lg hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-primary/20" onClick={() => router.push('/dashboard')}>
                      Proceed to Phase 4
                    </Button>
                  </div>
                </div>
              </section>

              {/* Progress Bar (Floating Glass) */}
              <div className="glass rounded-full px-12 py-8 border-primary/5 flex items-center justify-between gap-10 shadow-lg">
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-center text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Neural Mapping Progress</span>
                    <span className="text-primary italic">{Math.round(progress)}% Complete</span>
                  </div>
                  <Progress value={progress} className="h-2 bg-primary/10" />
                </div>
                <div className="h-12 w-12 rounded-full border border-primary/20 flex items-center justify-center text-primary font-black italic">
                  {completedSteps}/5
                </div>
              </div>
            </div>

            {/* Sidebar Flow */}
            <aside className="space-y-10">
              <div className="glass rounded-[2.5rem] p-10 border-primary/5 shadow-huge">
                <h3 className="text-2xl font-black mb-8 italic tracking-tight flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Protocol Stack
                </h3>
                <div className="space-y-6">
                  {verificationSteps.map((step) => (
                    <div key={step.id} className={`flex items-start gap-4 p-5 rounded-3xl transition-all ${step.current ? 'bg-primary/10 border border-primary/20 shadow-inner' : 'opacity-60'}`}>
                      <div className={`mt-1 size-10 rounded-2xl flex items-center justify-center shrink-0 ${step.completed ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : step.current ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-muted'}`}>
                        {step.completed ? <CheckCircle className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-lg font-black tracking-tight leading-none mb-1 ${step.completed ? 'text-muted-foreground line-through opacity-50' : ''}`}>
                          {step.label}
                        </div>
                        {step.description && !step.completed && (
                          <p className="text-sm font-medium text-muted-foreground leading-tight italic">{step.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-mesh p-10 rounded-[2.5rem] text-white overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />
                <h4 className="text-2xl font-black mb-6 italic tracking-tight flex items-center gap-2">
                  <Info className="h-5 w-5 text-secondary" />
                  Tier Rewards
                </h4>
                <ul className="space-y-5">
                  {[
                    "Access to elite community assets",
                    "Infinite TrustScore scalability",
                    "70% reduction in protocol fees",
                    "Priority neural support routing"
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-4 items-center group/item hover:translate-x-2 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(var(--secondary),0.8)]" />
                      <span className="text-sm font-bold opacity-80 group-hover/item:opacity-100 transition-opacity">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-10 w-full rounded-2xl border-white/20 text-white bg-transparent hover:bg-white hover:text-black font-black py-6 transition-all group-hover:bg-white group-hover:text-black">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
