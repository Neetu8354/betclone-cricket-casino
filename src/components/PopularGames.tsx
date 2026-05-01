import { openWA } from "@/lib/wa";
import { Link } from "react-router-dom";
import cardLive from "@/assets/card-livecricket.jpg";
import cardTeen from "@/assets/card-teenpatti.jpg";
import cardAndar from "@/assets/card-andarbahar.jpg";
import { Play } from "lucide-react";

const GAMES = [
  { img: cardLive, title: "Live Cricket Betting", to: "/cricket", alt: "play online games on khelo24app.live" },
  { img: cardAndar, title: "Aviator", to: "/aviator", alt: "free cricket ID on khelo24app.live" },
  { img: cardTeen, title: "Teen Patti", to: "/teen-patti", alt: "get your ID and play now at khelo24app.live" },
];

export const PopularGames = () => (
  <section className="container py-10 md:py-14">
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-4xl font-black tracking-tight">
        Popular <span className="text-gradient-gold">Games</span>
      </h2>
      <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
        Explore top games on <strong className="text-foreground">khelo24app.live</strong> — from <strong className="text-foreground">live cricket betting</strong> and <strong className="text-foreground">Aviator crash game</strong> to <strong className="text-foreground">Teen Patti online</strong>. Get your <strong className="text-foreground">free cricket ID</strong> and start playing today.
      </p>
    </div>
    <div className="grid sm:grid-cols-3 gap-4">
      {GAMES.map((g) => (
        <Link key={g.title} to={g.to} className="group relative overflow-hidden rounded-xl bg-gradient-card border border-border hover:border-primary/60 transition-smooth shadow-card hover:shadow-glow">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={g.img} alt={g.alt} loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
            <h3 className="font-bold text-base md:text-lg">{g.title}</h3>
            <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-5 w-5 fill-current" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
