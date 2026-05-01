import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, CreditCard, Smartphone, Headphones } from "lucide-react";

const REASONS = [
  { icon: MessageCircle, title: "Instant Free Cricket ID", desc: "Get your cricket ID on WhatsApp in under 60 seconds — completely free." },
  { icon: Zap, title: "Fast Withdrawals", desc: "Withdrawals processed in under 5 minutes directly to your bank or UPI." },
  { icon: Smartphone, title: "Mobile Friendly Sports Betting Platforms", desc: "Play anywhere on any device — fully optimized for mobile gaming." },
  { icon: Headphones, title: "24x7 Support", desc: "Always available via WhatsApp in Hindi, English, Telugu & Tamil." },
];

export const TrustSection = () => (
  <section className="container py-10 md:py-14">
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-4xl font-black tracking-tight">
        India's Trusted <span className="text-gradient-gold">Online Sports Gaming</span> Platform
      </h2>
      <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
        Enjoy fast and secure betting on Khelo24x07 — one of the best places for online sports gaming. Whether you're looking for a <strong className="text-foreground">khelo24x07 online platform</strong> to play cricket, Aviator or Teen Patti, we've got you covered with India's most trusted <strong className="text-foreground">sports betting platform online</strong>.
      </p>
    </div>

    <h2 className="text-xl md:text-2xl font-black tracking-tight mb-6 text-center">
      Why Players <span className="text-gradient-gold">Choose Us</span>
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {REASONS.map((r) => (
        <button key={r.title} onClick={openWA} className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all text-left group">
          <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3 group-hover:bg-primary/25 transition-all">
            <r.icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-bold mb-1 text-sm">{r.title}</h3>
          <p className="text-xs text-muted-foreground">{r.desc}</p>
        </button>
      ))}
    </div>

    <div className="mt-8 text-center">
      <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Khelo24x07 is among the <strong className="text-foreground">safe online sports betting websites 2026</strong> that Indian players trust. As a leading <strong className="text-foreground">mobile friendly sports betting platform</strong>, we offer seamless gameplay on every device with <strong className="text-foreground">fast withdrawal betting</strong> processed in under 5 minutes. Join thousands of players who already use our <strong className="text-foreground">online sports gaming platform</strong> daily.
      </p>
    </div>
  </section>
);
