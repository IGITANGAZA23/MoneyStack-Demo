import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function FundsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Peer-to-Peer Funds</h1>
          <p className="text-muted-foreground">Secure, transparent micro-loans within your community.</p>
        </div>
        <Link href="/funds/new">
          <Button>Request Funds</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="mb-2">Education</Badge>
                <span className="font-mono text-sm text-muted-foreground">Term: 3mo</span>
              </div>
              <CardTitle>$500 Request</CardTitle>
              <CardDescription>Posted by Sarah M. • 98% Trust Score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">Need to buy textbooks for the upcoming semester. Will repay monthly.</p>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Interest</span>
                  <span className="font-semibold text-green-600">5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Repayment</span>
                  <span className="font-semibold">$175/mo</span>
                </div>

                <Button className="w-full">Fund This Loan</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
