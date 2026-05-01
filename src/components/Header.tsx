import { Button } from "@/components/ui/button";
import { openWA } from "@/lib/wa";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "Cricket", to: "/cricket" },
  { label: "Aviator", to: "/aviator" },
  { label: "Teen Patti", to: "/teen-patti" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between gap-2 sm:gap-4">
        <Link to="/" className="flex items-center gap-2 md:gap-3 group min-w-0" aria-label="Khelo24Bet home">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-lg bg-gradient-neon shadow-glow shrink-0">
            <span className="font-black text-xs sm:text-sm text-primary-foreground">K24</span>
          </div>
          <div className="flex flex-col leading-none min-w-0">
            <span className="font-black text-base sm:text-lg md:text-xl tracking-tight truncate">
            <span className="text-primary">Khelo24</span>
              <span className="text-secondary">Bet</span>
            </span>
            <span className="hidden sm:block text-[10px] text-muted-foreground">Cricket • Casino • Live</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth rounded-md hover:bg-muted"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button onClick={openWA} variant="outline" size="sm" className="hidden sm:flex">
            Login
          </Button>
          <Button onClick={openWA} size="sm" className="bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold font-bold">
            <MessageCircle className="h-4 w-4 mr-1" /> Join
          </Button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="container py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className="text-left px-3 py-2.5 rounded-md hover:bg-muted text-sm font-medium">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
