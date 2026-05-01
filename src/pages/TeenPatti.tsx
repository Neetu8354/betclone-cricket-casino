import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import cardTeen from "@/assets/card-teenpatti.jpg";

const TeenPatti = () => {
  useSeo({
    title: "Play Teen Patti Online on Khelo24x07",
    description: "Enjoy Teen Patti online on Khelo24x07 - India's favourite card game.",
    canonical: "/teen-patti",
    keywords: "teen patti online, khelo24x07 teen patti, play teen patti, indian card game",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Teen Patti" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Teen Patti on <span className="text-gradient-gold">Khelo24x07</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">India's favourite card game — play live with real dealers, 24/7 in INR.</p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
          <img src={cardTeen} alt="bet on gameplay interface with khelo24x07.live" className="rounded-xl border border-border w-full aspect-video object-cover" loading="lazy" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">Rules and Strategies</h2>
            <p className="text-muted-foreground mb-3">Teen Patti is a 3-card poker game. Each player gets three cards, and the goal is to have the best hand. Rankings go from Trail (three of a kind) at the top to High Card at the bottom.</p>
            <h3 className="font-bold mb-2 text-sm">Bet on Gameplay Interface with Khelo24x07</h3>
            <p className="text-muted-foreground text-sm mb-4">Our smooth interface lets you place bets quickly, view live dealer cards, and track your winnings in real time.</p>
            <Button onClick={openWA} className="bg-gradient-gold text-gold-foreground font-bold">
              <MessageCircle className="h-4 w-4 mr-2" /> Play Teen Patti Now
            </Button>
          </div>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Play Teen Patti on Khelo24x07</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong className="text-foreground">Teen Patti online</strong> on <strong className="text-foreground">khelo24x07.live</strong> brings India's favourite card game to your fingertips. Our <strong className="text-foreground">khelo24x07 online platform</strong> features live dealers, instant deposits via UPI, and <strong className="text-foreground">fast withdrawal betting</strong> so you never have to wait for your winnings.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As one of the <strong className="text-foreground">safe online sports betting websites 2026</strong>, we offer a <strong className="text-foreground">mobile friendly sports betting platform</strong> where you can enjoy Teen Patti 24/7 in Hindi, English, Telugu and Tamil. Get your <strong className="text-foreground">free cricket ID</strong> and access all games including Teen Patti, Andar Bahar, and more.
          </p>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/aviator", label: "Play Aviator Crash Game" }, { to: "/cricket", label: "Live Cricket Betting" }, { to: "/blog/safe-online-sports-betting-websites-2026", label: "Safe Betting Websites 2026" }, { to: "/blog/mobile-friendly-sports-betting-platforms", label: "Mobile Friendly Platforms" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default TeenPatti;
