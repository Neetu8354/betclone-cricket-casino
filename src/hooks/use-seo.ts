import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical: string; // path like "/about"
  keywords?: string;
  ogImage?: string;
}

const SITE = "https://khelo24bets.live";
const SITE_NAME = "Khelo24Bets";
const DEFAULT_OG_IMAGE = "https://khelo24bets.live/og-image.jpg";

export function useSeo({ title, description, canonical, keywords, ogImage }: SeoProps) {
  useEffect(() => {
    document.title = title;

    // Set html lang to en-IN
    document.documentElement.setAttribute("lang", "en-IN");

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Basic meta
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Canonical
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    canon.setAttribute("href", SITE + canonical);

    // Hreflang tags
    const setLink = (rel: string, href: string, hreflang?: string) => {
      let el = document.querySelector(`link[rel="${rel}"][href="${href}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        if (hreflang) el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };
    setLink("alternate", SITE + canonical, "en-IN");
    setLink("alternate", SITE + canonical, "x-default");

    // Sitemap
    let sitemap = document.querySelector('link[rel="sitemap"]') as HTMLLinkElement | null;
    if (!sitemap) {
      sitemap = document.createElement("link");
      sitemap.setAttribute("rel", "sitemap");
      sitemap.setAttribute("type", "application/xml");
      sitemap.setAttribute("title", "Sitemap");
      document.head.appendChild(sitemap);
    }
    sitemap.setAttribute("href", SITE + "/sitemap.xml");

    // OG tags
    const img = ogImage || DEFAULT_OG_IMAGE;
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", SITE + canonical);
    setMeta("property", "og:image", img);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_IN");

    // Twitter tags
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);

    // Organization schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE + "/",
      "logo": SITE + "/favicon.png",
      "description": "Best online sports gaming platform in India. Get free cricket ID instantly, play live cricket betting, Aviator, Teen Patti with fast withdrawals and 24x7 support.",
      "sameAs": [SITE + "/"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    };

    let orgScript = document.querySelector('script[type="application/ld+json"][data-schema="organization"]');
    if (!orgScript) {
      orgScript = document.createElement("script");
      orgScript.setAttribute("type", "application/ld+json");
      orgScript.setAttribute("data-schema", "organization");
      document.head.appendChild(orgScript);
    }
    orgScript.textContent = JSON.stringify(orgSchema);

    // BreadcrumbList schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE + "/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": SITE + canonical
        }
      ]
    };

    let breadcrumbScript = document.querySelector('script[type="application/ld+json"][data-schema="breadcrumb"]');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement("script");
      breadcrumbScript.setAttribute("type", "application/ld+json");
      breadcrumbScript.setAttribute("data-schema", "breadcrumb");
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  }, [title, description, canonical, keywords, ogImage]);
}
