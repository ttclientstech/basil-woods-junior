import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export const useSEO = ({
  title,
  description,
  keywords = "preschool Chennai, daycare Chennai, best preschool, Basil Woods Juniors",
  ogImage = "https://www.basilwoodschennai.in/og-image.jpg",
  canonical
}: SEOProps) => {
  useEffect(() => {
    // Set page title
    document.title = `${title} | Basil Woods Juniors Chennai`;

    // Set meta description
    const metaDescription = document.querySelector("meta[name=\"description\"]");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector("meta[name=\"keywords\"]");
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Set OG tags
    const ogTitle = document.querySelector("meta[property=\"og:title\"]");
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector("meta[property=\"og:description\"]");
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogImageTag = document.querySelector("meta[property=\"og:image\"]");
    if (ogImageTag) {
      ogImageTag.setAttribute("content", ogImage);
    }

    // Set Twitter Card tags
    const twitterTitle = document.querySelector("meta[name=\"twitter:title\"]");
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    const twitterDescription = document.querySelector("meta[name=\"twitter:description\"]");
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    const twitterImage = document.querySelector("meta[name=\"twitter:image\"]");
    if (twitterImage) {
      twitterImage.setAttribute("content", ogImage);
    }

    // Set canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector("link[rel=\"canonical\"]");
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }
  }, [title, description, keywords, ogImage, canonical]);
};

