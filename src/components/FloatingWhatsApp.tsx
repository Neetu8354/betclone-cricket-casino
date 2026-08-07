import { openWA } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => (
  <button
    onClick={openWA}
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-accent text-accent-foreground shadow-glow flex items-center justify-center animate-pulse-glow hover:scale-110 transition-transform"
  >
    <MessageCircle className="h-7 w-7" />
    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive border-2 border-background" />
  </button>
);
