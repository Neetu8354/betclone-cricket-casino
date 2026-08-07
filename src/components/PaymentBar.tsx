import { openWA } from "@/lib/wa";
import { Smartphone, IndianRupee, Building2, CreditCard, Wallet } from "lucide-react";

const METHODS = [
  { icon: Smartphone, label: "UPI", sub: "GPay, PhonePe, Paytm" },
  { icon: IndianRupee, label: "IMPS", sub: "Instant transfer" },
  { icon: Building2, label: "Net Banking", sub: "All banks" },
  { icon: CreditCard, label: "RuPay", sub: "Cards accepted" },
  { icon: Wallet, label: "Wallets", sub: "Paytm, Mobikwik" },
];

export const PaymentBar = () => (
  <section className="container py-10">
    <div className="rounded-xl border border-border bg-card/40 p-4 sm:p-5 overflow-x-auto">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-black text-lg">Deposit & Withdraw in <span className="text-gradient-gold">INR ₹</span></h3>
          <p className="text-xs text-muted-foreground">Min deposit ₹100 • Withdrawals in under 5 minutes</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {METHODS.map((m) => (
            <button key={m.label} onClick={openWA} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border hover:border-primary/50 transition-smooth">
              <m.icon className="h-4 w-4 text-primary" />
              <div className="text-left">
                <div className="text-xs font-bold leading-none">{m.label}</div>
                <div className="text-[10px] text-muted-foreground">{m.sub}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
);
