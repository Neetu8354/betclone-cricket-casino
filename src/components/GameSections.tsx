import { openWA } from "@/lib/wa";
import { Play, Flame } from "lucide-react";
import cardFantasy from "@/assets/card-fantasy.jpg";
import cardAndar from "@/assets/card-andarbahar.jpg";
import cardTeen from "@/assets/card-teenpatti.jpg";
import cardRoulette from "@/assets/card-roulette.jpg";
import cardLive from "@/assets/card-livecricket.jpg";
import cardPred from "@/assets/card-prediction.jpg";
import cardLeader from "@/assets/card-leaderboard.jpg";

type Game = { img: string; title: string; tag: string; hot?: boolean; alt?: string };

const CRICKET: Game[] = [
  { img: cardLive, title: "Live IPL Match", tag: "LIVE NOW", hot: true, alt: "live cricket betting on khelo24app.live" },
  { img: cardFantasy, title: "Fantasy XI", tag: "Win ₹10L", alt: "fantasy cricket on khelo24app.live" },
  { img: cardPred, title: "Match Predictions", tag: "Daily Quiz", alt: "cricket predictions on khelo24app.live" },
  { img: cardLeader, title: "Leaderboards", tag: "Top 100", hot: true, alt: "leaderboards on khelo24app.live" },
];

const CASINO: Game[] = [
  { img: cardAndar, title: "Andar Bahar", tag: "₹10 - ₹5L", hot: true, alt: "play andar bahar on khelo24app.live" },
  { img: cardTeen, title: "Teen Patti", tag: "Live Dealer", hot: true, alt: "play teen patti on khelo24app.live" },
  { img: cardRoulette, title: "Lightning Roulette", tag: "500x", alt: "play roulette on khelo24app.live" },
  { img: cardAndar, title: "Dragon Tiger", tag: "Fast Paced", alt: "play dragon tiger on khelo24app.live" },
  { img: cardTeen, title: "32 Cards", tag: "Indian Live", alt: "play 32 cards on khelo24app.live" },
  { img: cardRoulette, title: "Auto Roulette", tag: "24/7", alt: "play auto roulette on khelo24app.live" },
];

const Card = ({ g }: { g: Game }) => (
  <button onClick={openWA} className="group relative overflow-hidden rounded-xl bg-gradient-card border border-border hover:border-primary/60 transition-smooth shadow-card hover:shadow-glow text-left">
    <div className="aspect-[4/3] overflow-hidden">
      <img src={g.img} alt={g.alt || g.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="absolute top-2 left-2 flex gap-1.5">
      {g.hot && (
        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold">
          <Flame className="h-3 w-3" /> HOT
        </span>
      )}
      <span className="px-2 py-0.5 rounded-full bg-background/80 backdrop-blur text-[10px] font-bold text-foreground border border-border">
        {g.tag}
      </span>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
    <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
      <h3 className="font-bold text-sm md:text-base">{g.title}</h3>
      <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
        <Play className="h-4 w-4 fill-current" />
      </div>
    </div>
  </button>
);

const Section = ({ title, sub, games }: { title: string; sub: string; games: Game[] }) => (
  <section className="container py-10 md:py-14">
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-2xl md:text-4xl font-black tracking-tight">
          {title.split(" ").map((w, i) => (
            <span key={i} className={i === 1 ? "text-gradient-gold" : ""}>{w} </span>
          ))}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">{sub}</p>
      </div>
      <button onClick={openWA} className="hidden md:block text-sm font-semibold text-primary hover:underline">View all →</button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {games.map((g, i) => <Card key={i} g={g} />)}
    </div>
  </section>
);

export const GameSections = () => (
  <>
    <Section title="Cricket Hub" sub="IPL, T20, ODI — fantasy, predictions, live scores" games={CRICKET} />
    <Section title="Live Casino" sub="Authentic Indian casino games with real dealers" games={CASINO} />
  </>
);
