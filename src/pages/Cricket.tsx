import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Trophy, BarChart3 } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import cardLive from "@/assets/card-livecricket.jpg";

const TIPS = [
  { icon: TrendingUp, title: "Live Cricket Betting Tips Online", desc: "Get real-time tips and insights based on match conditions, pitch reports and player form." },
  { icon: Trophy, title: "Best Cricket Prediction Sites Online", desc: "Our ML-powered predictions give you an edge with ball-by-ball analysis and win probability." },
  { icon: BarChart3, title: "Competitive Odds", desc: "Best odds in the market for IPL, T20 World Cup, ODI and all major tournaments." },
];

const Cricket = () => {
  useSeo({
    title: "Live Cricket Betting on Khelo24x07 | Best Odds",
    description: "Bet on live cricket matches online at Khelo24x07 with competitive odds and fast payouts.",
    canonical: "/cricket",
    keywords: "live cricket betting, cricket betting online, khelo24x07 cricket, best cricket odds",
  });

  const sportsEventSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Live Cricket Betting on Khelo24x07",
    description: "Bet on live cricket matches online including IPL, T20 World Cup, ODI and all major tournaments with the best odds.",
    url: "https://khelo24x07.live/cricket",
    location: {
      "@type": "VirtualLocation",
      url: "https://khelo24x07.live/cricket",
    },
    organizer: {
      "@type": "Organization",
      name: "Khelo24x07",
      url: "https://khelo24x07.live",
    },
    sport: "Cricket",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  };

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Cricket Betting" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventSchema) }}
      />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Live Cricket Betting on <span className="text-gradient-gold">Khelo24x07</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">Bet on live cricket matches online with the best odds and fastest payouts in India.</p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
          <img src={cardLive} alt="bet on gameplay interface with khelo24x07.live" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">How to Bet on Live Cricket Matches Online</h2>
            <p className="text-muted-foreground mb-4">Simply open WhatsApp, get your free cricket ID, deposit via UPI and start placing bets on live matches. It takes under 60 seconds to get started.</p>
            <Button onClick={openWA} className="bg-gradient-gold text-gold-foreground font-bold">
              <MessageCircle className="h-4 w-4 mr-2" /> Get Cricket ID Now
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {TIPS.map((t) => (
            <div key={t.title} className="p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
              <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                <t.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold mb-1 text-sm">{t.title}</h3>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Your Complete Cricket Betting Guide</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Khelo24x07 is among the <strong className="text-foreground">best cricket prediction sites online</strong> where you get <strong className="text-foreground">live cricket betting tips online</strong> powered by data-driven analysis. Our <strong className="text-foreground">khelo24x07 online platform</strong> covers IPL, T20 World Cup, Asia Cup and all international matches with the best odds.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Learn <strong className="text-foreground">how to bet on live cricket matches online</strong> with our step-by-step guides and start winning today. As a <strong className="text-foreground">safe online sports betting website</strong>, we ensure every transaction is encrypted and withdrawals are processed in under 5 minutes. Get your <strong className="text-foreground">free cricket ID</strong> now and experience the best <strong className="text-foreground">sports betting platform online</strong>.
          </p>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/blog/live-cricket-betting-tips-online", label: "Cricket Betting Tips 2026" }, { to: "/blog/best-cricket-prediction-sites-online", label: "Best Cricket Prediction Sites" }, { to: "/blog/how-to-bet-on-live-cricket-matches-online", label: "How to Bet on Live Cricket" }, { to: "/about", label: "About Khelo24x07" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Cricket;
