import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { Radio } from "lucide-react";

const MATCHES = [
  { t1: "IND", t2: "AUS", s1: "268/4", s2: "—", overs: "38.4", status: "LIVE", venue: "Wankhede, Mumbai", odds: { t1: "1.65", t2: "2.20" } },
  { t1: "MI", t2: "CSK", s1: "184/6", s2: "—", overs: "20.0", status: "LIVE", venue: "Chepauk", odds: { t1: "2.10", t2: "1.75" } },
  { t1: "RCB", t2: "KKR", s1: "—", s2: "—", overs: "Today 7:30 PM", status: "UPCOMING", venue: "Chinnaswamy", odds: { t1: "1.90", t2: "1.95" } },
  { t1: "ENG", t2: "PAK", s1: "—", s2: "—", overs: "Tomorrow 3:00 PM", status: "UPCOMING", venue: "Lord's", odds: { t1: "1.80", t2: "2.05" } },
];

export const LiveScores = () => (
  <section className="container py-10 md:py-14">
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-2xl md:text-4xl font-black tracking-tight">
          Live <span className="text-gradient-gold">Cricket</span> Scores
        </h2>
        <p className="text-sm text-muted-foreground mt-1">Ball-by-ball updates and instant prediction markets</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {MATCHES.map((m, i) => (
        <div key={i} className="rounded-xl bg-gradient-card border border-border p-5 shadow-card hover:border-primary/40 transition-smooth">
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${m.status === "LIVE" ? "bg-destructive/20 text-destructive border border-destructive/40" : "bg-muted text-muted-foreground border border-border"}`}>
              {m.status === "LIVE" && <Radio className="h-3 w-3 animate-pulse" />}
              {m.status}
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground truncate ml-2 max-w-[55%] text-right">{m.venue}</span>
          </div>
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-neon flex items-center justify-center font-black text-sm text-primary-foreground">{m.t1}</div>
                <span className="font-bold">{m.t1}</span>
              </div>
              <div className="text-right">
                <div className="font-black text-lg">{m.s1}</div>
                {m.status === "LIVE" && <div className="text-[10px] text-muted-foreground">{m.overs} overs</div>}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center font-black text-sm text-gold-foreground">{m.t2}</div>
                <span className="font-bold">{m.t2}</span>
              </div>
              <div className="text-right">
                <div className="font-black text-lg">{m.s2}</div>
                {m.status !== "LIVE" && <div className="text-[10px] text-muted-foreground">{m.overs}</div>}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={openWA} className="rounded-lg border border-primary/40 bg-primary/10 hover:bg-primary/20 transition-smooth p-2.5 text-left">
              <div className="text-[10px] text-muted-foreground">{m.t1} wins</div>
              <div className="font-black text-primary">{m.odds.t1}</div>
            </button>
            <button onClick={openWA} className="rounded-lg border border-secondary/40 bg-secondary/10 hover:bg-secondary/20 transition-smooth p-2.5 text-left">
              <div className="text-[10px] text-muted-foreground">{m.t2} wins</div>
              <div className="font-black text-secondary">{m.odds.t2}</div>
            </button>
          </div>
          <Button onClick={openWA} className="w-full mt-3 bg-gradient-gold text-gold-foreground hover:opacity-90 font-bold" size="sm">
            Predict & Win on WhatsApp
          </Button>
        </div>
      ))}
    </div>
  </section>
);
