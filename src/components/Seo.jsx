import { useEffect } from 'react';

export default function Seo({ title, description, canonical, jsonLd }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const metaDescription = document.querySelector('meta[name="description"]');

    if (description && metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');

    if (canonical) {
      if (!canonicalLink) {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      } else {
        canonicalLink.setAttribute('href', canonical);
      }
    }

    let ldNode = document.getElementById('structured-data');

    if (jsonLd) {
      if (!ldNode) {
        ldNode = document.createElement('script');
        ldNode.id = 'structured-data';
        ldNode.type = 'application/ld+json';
        document.head.appendChild(ldNode);
      }

      ldNode.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      if (ldNode) {
        ldNode.textContent = '';
      }
    };
  }, [canonical, description, jsonLd, title]);

  return null;
}