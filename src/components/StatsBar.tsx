import { Trophy, Zap, Shield, Users } from "lucide-react";

const STATS = [
  { icon: Users, label: "Active Players", value: "12L+" },
  { icon: Trophy, label: "Daily Winners", value: "₹2.8 Cr" },
  { icon: Zap, label: "Instant Payouts", value: "< 5 min" },
  { icon: Shield, label: "Trusted Since", value: "2018" },
];

export const StatsBar = () => (
  <section className="border-y border-border bg-card/50">
    <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {STATS.map((s) => (
        <div key={s.label} className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-lg bg-gradient-neon/20 border border-primary/30 flex items-center justify-center shrink-0">
            <s.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-xl md:text-2xl font-black text-gradient-gold">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
