import { openWA } from "@/lib/wa";
import { Trophy } from "lucide-react";

const TICKER = [
  { user: "RAJ****88", game: "Aviator", amt: "₹1,24,500" },
  { user: "PRI****22", game: "Teen Patti", amt: "₹84,200" },
  { user: "AMI****55", game: "Andar Bahar", amt: "₹2,10,800" },
  { user: "VIK****14", game: "IPL Fantasy", amt: "₹4,75,000" },
  { user: "NEH****07", game: "Roulette", amt: "₹62,400" },
  { user: "SUR****33", game: "Dragon Tiger", amt: "₹91,250" },
  { user: "KAR****91", game: "Lightning Roulette", amt: "₹1,88,000" },
  { user: "MEE****46", game: "Crash", amt: "₹54,900" },
];

export const WinnersTicker = () => {
  const items = [...TICKER, ...TICKER];
  return (
    <section className="border-b border-border bg-card/30 overflow-hidden">
      <div className="container py-3 flex items-center gap-3 sm:gap-4">
        <div className="shrink-0 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-secondary/15 border border-secondary/40">
          <Trophy className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary" />
          <span className="text-[10px] sm:text-xs font-bold text-secondary tracking-wider">LIVE WINS</span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {items.map((t, i) => (
              <button key={i} onClick={openWA} className="flex items-center gap-2 text-sm hover:text-primary transition-smooth">
                <span className="text-muted-foreground">{t.user}</span>
                <span className="text-foreground/60">won at</span>
                <span className="font-semibold text-foreground">{t.game}</span>
                <span className="font-black text-gold">{t.amt}</span>
                <span className="text-muted-foreground/40">•</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
