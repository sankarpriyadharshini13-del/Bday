'use client';

import { useEffect } from 'react';
import { trackEvent } from '../lib/analytics';

const locationOf = (el: Element) => {
  const section = el.closest('nav, footer, section[id], main');
  if (!section) return 'page';
  return section.id || section.tagName.toLowerCase();
};

// Tracks plain <a> links site-wide so server-rendered pages need no handlers.
const ClickTracker = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const link_location = locationOf(link);

      if (href.startsWith('tel:')) {
        trackEvent('click_call', { link_location });
      } else if (href.startsWith('mailto:')) {
        trackEvent('click_email', { link_location });
      } else if (href === '#contact') {
        trackEvent('click_quote_cta', {
          link_location,
          cta_text: (link.textContent || '').trim().slice(0, 60),
        });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
};

export default ClickTracker;
