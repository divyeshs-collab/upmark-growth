import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = 'https://www.upmarkgrowth.com';

const serializeSafeJsonLd = (data: unknown): string => {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  structuredData,
}) => {
  const location = useLocation();
  const rawPath = canonicalPath ?? location.pathname;
  const safePath = rawPath.startsWith('/') ? rawPath.replace(/[^a-zA-Z0-9/_-]/g, '') : '/';
  const canonicalUrl = `${SITE_URL}${safePath === '/' ? '/' : safePath}`;
  const fullTitle = title.includes('UPMARK') ? title : `${title} | UPMARK`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (selector: string, attrName: string, attrValue: string, content: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', 'name', 'title', fullTitle);
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="twitter:title"]', 'property', 'twitter:title', fullTitle);
    setMeta('meta[property="twitter:description"]', 'property', 'twitter:description', description);
    setMeta('meta[property="twitter:url"]', 'property', 'twitter:url', canonicalUrl);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    const existingScript = document.getElementById('upmark-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    const baseOrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'UPMARK',
      url: SITE_URL,
      email: 'hello@upmarkgrowth.com',
      description:
        'UPMARK is a digital growth and technology agency helping businesses build powerful digital experiences, improve search visibility, and streamline operations.',
    };

    const payload = structuredData
      ? Array.isArray(structuredData)
        ? [baseOrganizationSchema, ...structuredData]
        : [baseOrganizationSchema, structuredData]
      : [baseOrganizationSchema];

    const script = document.createElement('script');
    script.id = 'upmark-jsonld';
    script.type = 'application/ld+json';
    script.text = serializeSafeJsonLd(payload);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('upmark-jsonld');
      if (el) el.remove();
    };
  }, [fullTitle, description, canonicalUrl, structuredData]);

  return null;
};
