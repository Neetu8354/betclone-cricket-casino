import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical: string; // path like "/about"
  keywords?: string;
  ogImage?: string;
}

const SITE = "https://khelo24x07.live";
const SITE_NAME = "Khelo24x07";
const DEFAULT_OG_IMAGE = "/og-image.jpg";

export function useSeo({ title, description, canonical, keywords, ogImage }: SeoProps) {
  useEffect(() => {
    document.title = title;

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

    // Canonical
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    canon.setAttribute("href", SITE + canonical);

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
  }, [title, description, canonical, keywords, ogImage]);
}
