import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, ShieldCheck, Headphones } from "lucide-react";

const FEATS = [
  { icon: Clock, t: "Instant ID", d: "Get your ID in under 60 seconds via WhatsApp" },
  { icon: ShieldCheck, t: "100% Secure", d: "End-to-end encrypted chat with our verified agents" },
  { icon: Headphones, t: "24x7 Support", d: "Hindi, English, Telugu, Tamil — always online" },
];

export const WhatsAppCTA = () => (
  <section className="container py-12 md:py-16">
    <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-gradient-card p-6 md:p-12 shadow-glow">
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold tracking-widest mb-4">
            <MessageCircle className="h-3 w-3" /> WHATSAPP CHATBOT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-3">
            Chat with our <span className="text-gradient-gold">AI Bot</span> on WhatsApp
          </h2>
          <p className="text-muted-foreground mb-6">
            Get your ID, deposit, withdraw, place predictions, check live scores — all in one chat. No app needed. Powered by Khelo24Bet official desk.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={openWA} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold animate-pulse-glow">
              <MessageCircle className="h-5 w-5 mr-2" /> Start Chat Now
            </Button>
            <Button onClick={openWA} size="lg" variant="outline" className="border-border font-bold">
              Talk to Live Agent
            </Button>
          </div>
        </div>
        <div className="grid gap-3">
          {FEATS.map((f) => (
            <button key={f.t} onClick={openWA} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-accent/50 transition-smooth text-left">
              <div className="h-11 w-11 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                <f.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-0.5">{f.t}</h3>
                <p className="text-xs text-muted-foreground">{f.d}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);
