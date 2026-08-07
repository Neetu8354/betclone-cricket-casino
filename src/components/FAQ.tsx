import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "How do I get my free Cricket ID?", a: "Click any 'Get ID on WhatsApp' button. Our agent will share your ID and password within 60 seconds." },
  { q: "What is the minimum deposit?", a: "₹100 via UPI, IMPS or Net Banking. All transactions are in Indian Rupees (INR)." },
  { q: "How fast are withdrawals?", a: "Withdrawals are processed in under 5 minutes directly to your bank account or UPI ID." },
  { q: "Which cricket events are covered?", a: "IPL, T20 World Cup, ODI World Cup, BBL, PSL, CPL, Test matches and all major domestic tournaments." },
  { q: "How to play Aviator?", a: "Place your bet, watch the multiplier rise, and cash out before the plane crashes. Simple and exciting!" },
  { q: "Is customer support available 24/7?", a: "Yes, our WhatsApp chat support runs 24x7 in Hindi, English, Telugu and Tamil." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export const FAQ = () => (
  <section className="container py-10 md:py-14">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-4xl font-black">Frequently Asked <span className="text-gradient-gold">Questions</span></h2>
    </div>
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-2">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-card/50 border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
