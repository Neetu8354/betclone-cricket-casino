import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useSeo } from "@/hooks/use-seo";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BlogPostingSchema } from "@/components/BlogPostingSchema";
import blogImg from "@/assets/card-fantasy.jpg";

const Blog = () => {
  useSeo({
    title: "How to Login Khelo24x07 Step by Step Guide 2026",
    description: "Complete step by step guide on how to login khelo24x07 with username.",
    canonical: "/blog/how-to-login-khelo24x07",
    keywords: "khelo24x07 login, how to login khelo24x07, khelo24x07 guide",
  });

  return (
    <main>
      <Header />
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Login" }]} />
      <BlogPostingSchema title="How to Login Khelo24x07 Step by Step Guide 2026" description="Complete step by step guide on how to login khelo24x07 with username." slug="/blog/how-to-login-khelo24x07" />
      <article className="container py-12 md:py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          How to Login Khelo24x07 <span className="text-gradient-gold">Step by Step Guide 2026</span>
        </h1>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Easy Login Process</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you're new and searching <strong className="text-foreground">how to login khelo24x07 with username</strong>, this <strong className="text-foreground">khelo24x07 login guide step by step</strong> makes it very simple to access the <strong className="text-foreground">online sports gaming platform</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Step-by-Step Instructions</h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">1</span>
              <div>
                <h3 className="font-bold mb-1">Visit the website and enter your credentials</h3>
                <p className="text-sm text-muted-foreground">Go to Khelo24x07 and enter your username and password in the login form.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">2</span>
              <div>
                <h3 className="font-bold mb-1">Complete verification and start playing</h3>
                <p className="text-sm text-muted-foreground">Verify your account via WhatsApp and you're ready to play all games instantly.</p>
              </div>
            </div>
          </div>
        </section>

        <img src={blogImg} alt="how to login khelo24x07 step by step guide khelo24x07.live" className="rounded-xl border border-border w-full aspect-video object-cover mt-8" loading="lazy" />
      </article>

      <RelatedLinks links={[{ to: "/blog/how-to-use-khelo24x07-online", label: "How to Use Khelo24x07 Online" }, { to: "/blog/how-to-join-online-sports-gaming-website", label: "How to Join & Get Free ID" }, { to: "/cricket", label: "Live Cricket Betting" }, { to: "/about", label: "About Khelo24x07" }]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Blog;
