import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BlogPostingSchema } from "@/components/BlogPostingSchema";
import blogImg from "@/assets/card-livecricket.jpg";

const BlogHowToBetCricket = () => {
  useSeo({
    title: "How to Bet on Live Cricket Matches Online 2026 | Khelo24Bet",
    description: "Learn how to bet on live cricket matches online in 2026. Complete guide to live cricket betting on Khelo24Bet with best odds.",
    canonical: "/blog/how-to-bet-on-live-cricket-matches-online",
    keywords: "bet on live cricket, live cricket betting, how to bet cricket online",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Bet on Cricket" }]} />
      <BlogPostingSchema title="How to Bet on Live Cricket Matches Online 2026" description="Complete guide to live cricket betting with best odds." slug="/blog/how-to-bet-on-live-cricket-matches-online" />
      <article className="container py-12 md:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          How to Bet on Live Cricket <span className="text-gradient-gold">Matches Online</span>
        </h1>

        <img src={blogImg} alt="how to bet on live cricket matches online khelo24app.live" className="rounded-xl border border-border w-full aspect-video object-cover mb-8" loading="lazy" />

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Complete Guide to Live Cricket Betting</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Want to learn <strong className="text-foreground">how to bet on live cricket matches online</strong>? Live cricket betting lets you place bets while the match is happening — making it more exciting and potentially more profitable than pre-match betting. Khelo24Bet is the best <strong className="text-foreground">online sports gaming platform</strong> for live cricket betting in India.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            On our <strong className="text-foreground">sports betting platform online</strong>, you can bet on match winner, top batsman, total runs, wickets and many more markets — all updating in real-time as the game progresses.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Step-by-Step: Place Your First Live Bet</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">1</span>
              <div>
                <h3 className="font-bold mb-1">Get Your Cricket ID</h3>
                <p className="text-sm text-muted-foreground">Message us on WhatsApp for a free ID on this <strong>online betting website</strong>.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">2</span>
              <div>
                <h3 className="font-bold mb-1">Choose a Live Match</h3>
                <p className="text-sm text-muted-foreground">Browse ongoing matches on the <strong>live sports betting site</strong> and pick one.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">3</span>
              <div>
                <h3 className="font-bold mb-1">Select Market & Place Bet</h3>
                <p className="text-sm text-muted-foreground">Choose your market (match winner, runs, etc.), enter amount and confirm.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">4</span>
              <div>
                <h3 className="font-bold mb-1">Win & Withdraw Instantly</h3>
                <p className="text-sm text-muted-foreground">If you win, withdraw profits in under 5 minutes via UPI on our <strong>mobile friendly sports betting platforms</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Pro Tips for Live Cricket Betting</h2>
          <p className="text-muted-foreground leading-relaxed">
            Use our <strong className="text-foreground">live cricket betting tips online</strong> — watch the first few overs before betting, pay attention to momentum shifts, and always check our <strong className="text-foreground">best cricket prediction sites online</strong> analysis before placing big bets. Smart betting on our <strong className="text-foreground">sports gaming app online</strong> is always better than impulsive betting.
          </p>
        </section>

        <div className="text-center mt-8">
          <Button onClick={openWA} size="lg" className="bg-gradient-gold text-gold-foreground font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Start Live Betting Now
          </Button>
        </div>
      </article>

      <RelatedLinks links={[{ to: "/blog/live-cricket-betting-tips-online", label: "Live Cricket Betting Tips" }, { to: "/blog/best-cricket-prediction-sites-online", label: "Best Prediction Sites" }, { to: "/cricket", label: "Live Cricket Betting" }, { to: "/blog/how-to-join-online-sports-gaming-website", label: "How to Join & Get Free ID" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default BlogHowToBetCricket;
