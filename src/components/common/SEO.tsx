import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const DEFAULT_TITLE = 'UPMARK | Global Digital & Creative Agency';
const DEFAULT_DESCRIPTION = 'UPMARK builds business websites, improves AI search visibility through AEO and creates distinctive brand experiences for businesses worldwide.';
const BASE_URL = 'https://www.upmarkgrowth.com';

export const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  const location = useLocation();

  useEffect(() => {
    const finalTitle = title ? `${title}` : DEFAULT_TITLE;
    const finalDescription = description || DEFAULT_DESCRIPTION;
    const finalCanonical = canonical || `${BASE_URL}${location.pathname}`;

    // Update Document Title
    document.title = finalTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', finalDescription);

    // Update Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', finalTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', finalDescription);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', finalCanonical);

    // Update Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonical);

  }, [title, description, canonical, location.pathname]);

  return null;
};
