import { openWA } from "@/lib/wa";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

type FooterLink = { label: string; to?: string; wa?: boolean };

const COLS: { title: string; links: FooterLink[] }[] = [
  { title: "Games", links: [
    { label: "Live Cricket Betting", to: "/cricket" },
    { label: "Aviator", to: "/aviator" },
    { label: "Teen Patti", to: "/teen-patti" },
    { label: "Andar Bahar", wa: true },
    { label: "Roulette", wa: true },
  ]},
  { title: "Company", links: [
    { label: "About Us", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Contact Us", to: "/contact" },
    { label: "Responsible Gaming", wa: true },
    { label: "Terms", wa: true },
  ]},
  { title: "Account", links: [
    { label: "Get Free ID", wa: true },
    { label: "Deposit", wa: true },
    { label: "Withdraw", wa: true },
    { label: "Bonuses", wa: true },
    { label: "VIP Club", wa: true },
  ]},
  { title: "Support", links: [
    { label: "WhatsApp Chat", wa: true },
    { label: "24x7 Help", to: "/contact" },
    { label: "Login Guide", to: "/blog" },
    { label: "Privacy Policy", wa: true },
  ]},
];

export const Footer = () => (
  <footer className="border-t border-border bg-card/40 mt-10">
    <div className="container py-12 grid md:grid-cols-2 lg:grid-cols-6 gap-8">
      <div className="lg:col-span-2">
        <Link to="/" className="flex items-center gap-2 mb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-neon shadow-glow">
            <span className="font-black text-sm text-primary-foreground">K24</span>
          </div>
          <span className="font-black text-lg">
            <span className="text-primary">Khelo24</span><span className="text-secondary">Login</span>
          </span>
        </Link>
        <p className="text-sm text-muted-foreground mb-4">India's most trusted online sports gaming platform. WhatsApp-first, INR-only, instant payouts.</p>
        <button onClick={openWA} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-bold text-sm hover:opacity-90">
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </button>
      </div>
      {COLS.map((c) => (
        <div key={c.title}>
          <h4 className="font-bold mb-3">{c.title}</h4>
          <ul className="space-y-2">
            {c.links.map((l) => (
              <li key={l.label}>
                {l.to ? (
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-smooth">{l.label}</Link>
                ) : (
                  <button onClick={openWA} className="text-sm text-muted-foreground hover:text-primary transition-smooth">{l.label}</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-border">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Khelo24Bet. 18+ only. Play responsibly.</p>
        <p>Contact via WhatsApp • 24x7 Support</p>
      </div>
    </div>
  </footer>
);
