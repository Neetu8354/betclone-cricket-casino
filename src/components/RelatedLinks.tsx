import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  to: string;
  label: string;
}

interface RelatedLinksProps {
  heading?: string;
  links: RelatedLink[];
}

export const RelatedLinks = ({ heading = "You May Also Like", links }: RelatedLinksProps) => (
  <nav aria-label="Related pages" className="container max-w-3xl mx-auto py-10">
    <h2 className="text-lg md:text-xl font-bold mb-4">{heading}</h2>
    <div className="grid sm:grid-cols-2 gap-3">
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          className="flex items-center justify-between gap-2 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all group"
        >
          <span className="text-sm font-semibold group-hover:text-primary transition-colors">{l.label}</span>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      ))}
    </div>
  </nav>
);
