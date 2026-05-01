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
import blogImg from "@/assets/card-prediction.jpg";

const BlogHowToJoin = () => {
  useSeo({
    title: "How to Join Online Sports Gaming Website 2026 | Khelo24Bet",
    description: "Complete guide on how to join online sports gaming website Khelo24Bet. Get free cricket ID, deposit via UPI, and start playing instantly.",
    canonical: "/blog/how-to-join-online-sports-gaming-website",
    keywords: "join sports gaming website, free cricket id, khelo24bet join",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Join" }]} />
      <BlogPostingSchema title="How to Join Online Sports Gaming Website 2026" description="Get free cricket ID, deposit via UPI, and start playing instantly." slug="/blog/how-to-join-online-sports-gaming-website" />
      <article className="container py-12 md:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          How to Join Online <span className="text-gradient-gold">Sports Gaming Website</span> in 2026
        </h1>

        <img src={blogImg} alt="how to join khelo24bet online registration guide khelo24app.live" className="rounded-xl border border-border w-full aspect-video object-cover mb-8" loading="lazy" />

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Joining Khelo24Bet Is Easy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Many players search for <strong className="text-foreground">how to join online sports gaming website</strong> but get confused by complicated processes. At Khelo24Bet, we've simplified everything. Our <strong className="text-foreground">online sports gaming platform</strong> lets you join via WhatsApp in under 60 seconds.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            No app download required. No lengthy registration forms. Just open WhatsApp, send us a message, and receive your free cricket ID. That's how simple it is to join this <strong className="text-foreground">sports betting platform online</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Step-by-Step Joining Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">1</span>
              <div>
                <h3 className="font-bold mb-1">Click "Join" on Khelo24Bet</h3>
                <p className="text-sm text-muted-foreground">Visit the website and tap the Join button to open WhatsApp chat.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">2</span>
              <div>
                <h3 className="font-bold mb-1">Receive Your Free Cricket ID</h3>
                <p className="text-sm text-muted-foreground">Our agent will send you login credentials within 60 seconds on this <strong>online betting website</strong>.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">3</span>
              <div>
                <h3 className="font-bold mb-1">Deposit & Play</h3>
                <p className="text-sm text-muted-foreground">Deposit ₹100+ via UPI and start playing on the <strong>live sports betting site</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">What You Can Play After Joining</h2>
          <p className="text-muted-foreground leading-relaxed">
            Once you join our <strong className="text-foreground">sports gaming app online</strong>, you get access to live cricket betting, Aviator, Teen Patti, Andar Bahar, Roulette and many more games. All with fast withdrawals and 24x7 support.
          </p>
        </section>

        <div className="text-center mt-8">
          <Button onClick={openWA} size="lg" className="bg-gradient-gold text-gold-foreground font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Join Now on WhatsApp
          </Button>
        </div>
      </article>

      <RelatedLinks links={[{ to: "/blog/how-to-login-khelo24bet", label: "How to Login Khelo24Bet" }, { to: "/blog/how-to-use-khelo24bet-online", label: "How to Use Khelo24Bet" }, { to: "/cricket", label: "Live Cricket Betting" }, { to: "/aviator", label: "Play Aviator Game" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default BlogHowToJoin;
