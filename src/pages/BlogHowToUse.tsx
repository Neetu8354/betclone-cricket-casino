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

const BlogHowToUse = () => {
  useSeo({
    title: "How to Use Khelo24Bet Online | Complete Guide 2026",
    description: "Learn how to use khelo24bet online platform. Step by step guide to access the best online sports gaming platform and start playing instantly.",
    canonical: "/blog/how-to-use-khelo24bet-online",
    keywords: "how to use khelo24bet, khelo24bet guide, online sports platform",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Use" }]} />
      <BlogPostingSchema title="How to Use Khelo24Bet Online | Complete Guide 2026" description="Learn how to use khelo24bet online platform and start playing instantly." slug="/blog/how-to-use-khelo24bet-online" />
      <article className="container py-12 md:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          How to Use <span className="text-gradient-gold">Khelo24Bet Online</span> — Complete Guide 2026
        </h1>

        <img src={blogImg} alt="how to use khelo24bet online platform guide khelo24app.live" className="rounded-xl border border-border w-full aspect-video object-cover mb-8" loading="lazy" />

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Getting Started with Khelo24Bet</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you're wondering <strong className="text-foreground">how to use khelo24bet online</strong>, you've come to the right place. Khelo24Bet is a modern <strong className="text-foreground">online sports gaming platform</strong> designed specifically for Indian players who want a fast, clean and reliable betting experience.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're into live cricket betting, Aviator crash games, or Teen Patti — our <strong className="text-foreground">khelo24bet online platform</strong> has everything you need. The platform works seamlessly on mobile and desktop, making it one of the most <strong className="text-foreground">mobile friendly sports betting platforms</strong> available today.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">How to Access Khelo24Bet Online</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Using the <strong className="text-foreground">sports betting platform online</strong> is incredibly simple. Just follow these steps:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">1</span>
              <div>
                <h3 className="font-bold mb-1">Visit Khelo24Bet</h3>
                <p className="text-sm text-muted-foreground">Open the website on any browser — works on mobile, tablet and desktop.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">2</span>
              <div>
                <h3 className="font-bold mb-1">Get Your Free Cricket ID on WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Click the WhatsApp button and our agent will share your ID in under 60 seconds.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">3</span>
              <div>
                <h3 className="font-bold mb-1">Deposit via UPI and Start Playing</h3>
                <p className="text-sm text-muted-foreground">Minimum deposit is just ₹100 via UPI, IMPS or Net Banking. Start betting instantly on the <strong>online betting website</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Why Choose This Online Sports Gaming Platform</h2>
          <p className="text-muted-foreground leading-relaxed">
            Khelo24Bet stands out as one of the best <strong className="text-foreground">sports gaming app online</strong> platforms because of instant withdrawals, 24x7 WhatsApp support, and a huge variety of games. Whether you're a beginner or experienced player, our <strong className="text-foreground">live sports betting site</strong> is built for everyone.
          </p>
        </section>

        <div className="text-center mt-8">
          <Button onClick={openWA} size="lg" className="bg-gradient-gold text-gold-foreground font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Start Playing Now
          </Button>
        </div>
      </article>

      <RelatedLinks links={[{ to: "/blog/how-to-login-khelo24bet", label: "How to Login Khelo24Bet" }, { to: "/blog/how-to-join-online-sports-gaming-website", label: "How to Join Gaming Website" }, { to: "/cricket", label: "Live Cricket Betting" }, { to: "/aviator", label: "Play Aviator Game" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default BlogHowToUse;
