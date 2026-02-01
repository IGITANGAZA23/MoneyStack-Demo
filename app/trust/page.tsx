'use client';

import { useRouter } from "next/navigation";
import { Shield, Upload, CheckCircle, FileText, Camera, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const verificationSteps = [
  { id: 1, label: 'Email Verified', icon: CheckCircle, completed: true },
  { id: 2, label: 'Phone Verified', icon: CheckCircle, completed: true },
  { id: 3, label: 'Government ID', icon: FileText, completed: false, current: true },
  { id: 4, label: 'Selfie Verification', icon: Camera, completed: false },
  { id: 5, label: 'Payment Method', icon: CreditCard, completed: false },
];

export default function TrustPage() {
  const router = useRouter();
  const completedSteps = verificationSteps.filter(s => s.completed).length;
  const progress = (completedSteps / verificationSteps.length) * 100;

  return (
    <div className="min-h-screen">
      <main className="container py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-4xl font-black tracking-tight">Verification Flow</h1>
              <p className="text-muted-foreground mt-2">Complete your verification to unlock all features</p>
            </div>
            <div className="bg-primary/10 px-6 py-3 rounded-xl text-right">
              <p className="text-xs font-bold uppercase text-primary">Trust Status</p>
              <p className="text-lg font-bold text-primary">Level 1: Novice</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Verification Progress</span>
              <span className="text-muted-foreground">{completedSteps} of {verificationSteps.length} complete</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 bg-card p-8 rounded-xl border flex flex-col items-center text-center gap-6">
              <div className="w-32 h-32 bg-primary/5 rounded-full flex items-center justify-center">
                <Shield className="h-16 w-16 text-primary" />
              </div>
              <div>
                <Badge className="mb-2">Step 3 of 5</Badge>
                <h2 className="text-2xl font-bold">Government ID Upload</h2>
                <p className="text-muted-foreground mt-2">
                  Upload a clear photo of your government-issued ID (passport, driver&apos;s license, or national ID).
                </p>
              </div>

              <div className="w-full border-2 border-dashed rounded-xl p-10 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
                <div className="flex flex-col items-center gap-4">
                  <Upload className="h-12 w-12 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Drag and drop or browse files</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 w-full">
                <Button variant="outline" className="flex-1" onClick={() => router.back()}>
                  Back
                </Button>
                <Button className="flex-1" onClick={() => router.push('/dashboard')}>
                  Continue
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="font-bold mb-4">Verification Steps</h3>
                <div className="space-y-4">
                  {verificationSteps.map((step) => (
                    <div key={step.id} className={`flex items-center gap-3 p-3 rounded-lg ${step.current ? 'bg-primary/10 border border-primary/20' : ''}`}>
                      <div className={`size-8 rounded-full flex items-center justify-center ${step.completed ? 'bg-green-500 text-white' : step.current ? 'bg-primary text-white' : 'bg-muted'}`}>
                        {step.completed ? <CheckCircle className="h-4 w-4" /> : <step.icon className="h-4 w-4" />}
                      </div>
                      <span className={`text-sm ${step.completed ? 'text-muted-foreground line-through' : step.current ? 'font-bold' : ''}`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-xl border border-emerald-200">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Why verify?</h4>
                <ul className="text-sm text-emerald-600 dark:text-emerald-500 space-y-2">
                  <li>• Access to higher-value listings</li>
                  <li>• Increased trust score</li>
                  <li>• Lower platform fees</li>
                  <li>• Priority support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
