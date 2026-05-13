/**
 * Inline SVG glyphs for Contact page — crisp white shapes on pink (no icon fonts).
 */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true,
};

function Icon({ className, children }) {
  return (
    <svg {...base} className={className}>
      {children}
    </svg>
  );
}

export function ContactIconPhone({ className = 'contact-icon' }) {
  return (
    <Icon className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </Icon>
  );
}

export function ContactIconEnvelope({ className = 'contact-icon' }) {
  return (
    <Icon className={className}>
      <path d="M22 6H2v2l10 7L22 8V6zM2 9.5V20h20V9.5l-10 7-10-7z" />
    </Icon>
  );
}

export function ContactIconLocation({ className = 'contact-icon' }) {
  return (
    <Icon className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
    </Icon>
  );
}

export function ContactIconSend({ className = 'contact-icon' }) {
  return (
    <Icon className={className}>
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
    </Icon>
  );
}

export function ContactIconFacebook({ className = 'contact-icon' }) {
  return (
    <Icon className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
    </Icon>
  );
}

export function ContactIconTwitter({ className = 'contact-icon' }) {
  return (
    <Icon className={className}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 1 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </Icon>
  );
}

export function ContactIconInstagram({ className = 'contact-icon' }) {
  return (
    <Icon className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </Icon>
  );
}

const SOCIAL_ICON = {
  facebook: ContactIconFacebook,
  twitter: ContactIconTwitter,
  instagram: ContactIconInstagram,
};

export function ContactSocialIcon({ name, className = 'contact-icon' }) {
  const Cmp = SOCIAL_ICON[name];
  if (!Cmp) return null;
  return <Cmp className={className} />;
}
