import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { ArrowRight } from "lucide-react";

const BLOGS = [
  { slug: "/blog/how-to-login-khelo24x07", title: "How to Login Khelo24x07 Step by Step Guide 2026", desc: "Complete step by step guide on how to login khelo24x07 with username." },
  { slug: "/blog/how-to-use-khelo24x07-online", title: "How to Use Khelo24x07 Online — Complete Guide", desc: "Learn how to use khelo24x07 online platform and start playing instantly." },
  { slug: "/blog/best-online-sports-betting-platform-for-beginners", title: "Best Online Sports Betting Platform for Beginners 2026", desc: "India's easiest platform with free ID, fast payouts and 24x7 support." },
  { slug: "/blog/how-to-join-online-sports-gaming-website", title: "How to Join Online Sports Gaming Website", desc: "Get free cricket ID, deposit via UPI, and start playing instantly." },
  { slug: "/blog/live-cricket-betting-tips-online", title: "Live Cricket Betting Tips Online 2026", desc: "Expert predictions, match analysis and winning strategies." },
  { slug: "/blog/how-sports-betting-platforms-work-online", title: "How Sports Betting Platforms Work Online", desc: "Understand odds, deposits, withdrawals and gameplay." },
  { slug: "/blog/safe-online-sports-betting-websites-2026", title: "Safe Online Sports Betting Websites 2026", desc: "Secure transactions, verified gameplay and fast withdrawals." },
  { slug: "/blog/best-cricket-prediction-sites-online", title: "Best Cricket Prediction Sites Online 2026", desc: "ML-powered predictions, live odds and expert analysis." },
  { slug: "/blog/how-to-bet-on-live-cricket-matches-online", title: "How to Bet on Live Cricket Matches Online", desc: "Complete guide to live cricket betting with best odds." },
  { slug: "/blog/mobile-friendly-sports-betting-platforms", title: "Mobile Friendly Sports Betting Platforms 2026", desc: "Works perfectly on all phones with no app download needed." },
];

const BlogListing = () => {
  useSeo({
    title: "Blog — Khelo24x07 | Sports Gaming Tips & Guides",
    description: "Read the latest tips, guides and strategies for online sports gaming on Khelo24x07. Cricket betting tips, Aviator strategies, login guides and more.",
    canonical: "/blog",
    keywords: "sports betting blog, cricket betting tips, online gaming guides",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Blog & <span className="text-gradient-gold">Guides</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">Tips, strategies and step-by-step guides to help you win more on Khelo24x07.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BLOGS.map((b) => (
            <Link key={b.slug} to={b.slug} className="group p-5 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
              <h2 className="font-bold mb-2 group-hover:text-primary transition-colors text-sm md:text-base">{b.title}</h2>
              <p className="text-xs text-muted-foreground mb-3">{b.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Read More <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default BlogListing;
