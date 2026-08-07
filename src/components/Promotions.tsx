import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Crown, Wallet } from "lucide-react";

const PROMOS = [
  { icon: Gift, title: "Welcome Bonus", value: "₹15,000", desc: "100% match on first deposit. T&C apply.", color: "from-primary to-accent" },
  { icon: Sparkles, title: "Daily Cashback", value: "10%", desc: "Get back 10% of your daily losses, every day.", color: "from-secondary to-gold" },
  { icon: Crown, title: "VIP Rewards", value: "₹1 Lakh", desc: "Exclusive perks, faster payouts, dedicated manager.", color: "from-gold to-secondary" },
  { icon: Wallet, title: "Refer & Earn", value: "₹500", desc: "Per friend you bring on WhatsApp. Unlimited.", color: "from-accent to-primary" },
];

export const Promotions = () => (
  <section className="container py-10 md:py-14">
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-4xl font-black tracking-tight">
        Daily <span className="text-gradient-gold">Promotions</span> & Bonuses
      </h2>
      <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">All payouts in INR. Direct UPI, IMPS, Net Banking. Withdrawals under 5 minutes.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {PROMOS.map((p) => (
        <div key={p.title} className="group relative overflow-hidden rounded-xl bg-gradient-card border border-border p-5 hover:border-primary/50 transition-smooth shadow-card">
          <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl group-hover:opacity-40 transition-smooth`} />
          <p.icon className="h-7 w-7 text-primary mb-3" />
          <div className="text-3xl font-black text-gradient-gold mb-1">{p.value}</div>
          <h3 className="font-bold mb-1">{p.title}</h3>
          <p className="text-xs text-muted-foreground mb-4">{p.desc}</p>
          <Button onClick={openWA} variant="outline" size="sm" className="w-full border-primary/40 hover:bg-primary hover:text-primary-foreground">
            Claim Now
          </Button>
        </div>
      ))}
    </div>
  </section>
);
