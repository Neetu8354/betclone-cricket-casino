interface BlogSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

const SITE = "https://khelo24app.live";

export const BlogPostingSchema = ({
  title,
  description,
  slug,
  datePublished = "2026-01-15",
  dateModified = "2026-05-01",
  image,
}: BlogSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${SITE}${slug}`,
    image: image || `${SITE}/og-image.jpg`,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Khelo24Bet",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "Khelo24Bet",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/favicon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE}${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
