import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { openWA } from "@/lib/wa";
import { Button } from "@/components/ui/button";
import { MessageCircle, Headphones, MessagesSquare } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";

const Contact = () => {
  useSeo({
    title: "Contact Us – Khelo24x07 | 24x7 Support",
    description: "Get 24x7 support for login, deposits, withdrawals and games on Khelo24x07.",
    canonical: "/contact",
    keywords: "khelo24x07 contact, 24x7 support, betting support, customer service",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      <section className="container py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
          Contact <span className="text-gradient-gold">Khelo24x07</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mb-10">We're here to help — reach out anytime for login issues, deposits, withdrawals or game queries.</p>

        <h2 className="text-xl md:text-2xl font-bold mb-6">24x7 Support Available</h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mb-10">
          <button onClick={openWA} className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-all text-left">
            <div className="h-12 w-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
              <MessagesSquare className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold mb-1">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Instant replies from our support team, available round the clock.</p>
            </div>
          </button>
          <button onClick={openWA} className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-all text-left">
            <div className="h-12 w-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
              <Headphones className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold mb-1">WhatsApp Assistance</h3>
              <p className="text-sm text-muted-foreground">Chat with us on WhatsApp in Hindi, English, Telugu & Tamil.</p>
            </div>
          </button>
        </div>

        <div className="max-w-2xl mb-10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Need help with your <strong className="text-foreground">khelo24x07 online platform</strong> account? Whether it's about <strong className="text-foreground">live cricket betting</strong>, <strong className="text-foreground">Aviator crash game</strong>, <strong className="text-foreground">Teen Patti online</strong>, deposits, or <strong className="text-foreground">fast withdrawal betting</strong> — our team is available 24x7 on WhatsApp. We're proud to be among the <strong className="text-foreground">safe online sports betting websites 2026</strong> with dedicated multilingual support.
          </p>
        </div>

        <div className="text-center">
          <Button onClick={openWA} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
            <MessageCircle className="h-5 w-5 mr-2" /> Chat on WhatsApp Now
          </Button>
        </div>
      </section>

      <RelatedLinks links={[{ to: "/about", label: "About Khelo24x07" }, { to: "/blog/how-to-login-khelo24x07", label: "How to Login — Step by Step" }, { to: "/cricket", label: "Live Cricket Betting" }, { to: "/aviator", label: "Play Aviator Game" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Contact;
