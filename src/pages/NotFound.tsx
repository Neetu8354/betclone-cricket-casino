import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSeo } from "@/hooks/use-seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ArrowRight, Home, BookOpen, MessageCircle } from "lucide-react";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";

const QUICK_LINKS = [
  { to: "/", label: "Homepage", desc: "Back to the main page", icon: Home },
  { to: "/cricket", label: "Live Cricket Betting", desc: "Bet on live matches with best odds", icon: ArrowRight },
  { to: "/aviator", label: "Aviator Crash Game", desc: "Play and win big with smart cash outs", icon: ArrowRight },
  { to: "/teen-patti", label: "Teen Patti Online", desc: "India's favourite card game", icon: ArrowRight },
  { to: "/blog", label: "Gaming Guides & Tips", desc: "Read our expert betting guides", icon: BookOpen },
  { to: "/contact", label: "Contact Support", desc: "Get 24x7 help via WhatsApp", icon: MessageCircle },
];

const NotFound = () => {
  const location = useLocation();

  useSeo({
    title: "Page Not Found — Khelo24Bet",
    description: "The page you're looking for doesn't exist. Browse our games, betting guides, or contact 24x7 support on Khelo24Bet.",
    canonical: "/404",
    keywords: "khelo24bet, page not found, 404",
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main>
      <Header />
      <section className="container py-16 md:py-24 text-center">
        <p className="text-7xl md:text-9xl font-black text-primary/20 mb-2 select-none">404</p>
        <h1 className="text-2xl md:text-4xl font-black tracking-tight mb-3">
          Page Not <span className="text-gradient-gold">Found</span>
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          Sorry, the page <code className="text-xs bg-card/80 border border-border rounded px-1.5 py-0.5">{location.pathname}</code> doesn't exist. Try one of the links below or contact our support team.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto mb-12">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all group text-left"
            >
              <div className="h-9 w-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                <link.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <span className="text-sm font-bold group-hover:text-primary transition-colors block">{link.label}</span>
                <span className="text-xs text-muted-foreground">{link.desc}</span>
              </div>
            </Link>
          ))}
        </div>

        <Button onClick={openWA} size="lg" className="bg-gradient-gold text-gold-foreground font-bold">
          <MessageCircle className="h-5 w-5 mr-2" /> Chat with Support
        </Button>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default NotFound;
