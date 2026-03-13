/**
 * site.ts — Globale Kundendaten
 *
 * Diese Datei als ERSTES anpassen wenn du ein neues Kundenprojekt erstellst.
 * Alle Inhalte hier fließen automatisch in Header, Footer, Meta-Tags und
 * Kontaktseiten ein.
 */

export interface SiteData {
  /** Firma oder Praxisname, z. B. "Elektro Mustermann GmbH" */
  company: string;
  /** Kurze Branchen-/Tätigkeitsbeschreibung für Meta-Tags */
  tagline: string;
  /** Produktionsdomäne (ohne trailing slash) */
  url: string;
  /** Standardsprache der Website */
  lang: string;
  /** Kontaktdaten */
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      zip: string;
      city: string;
    };
  };
  /** Öffnungszeiten (optional, leeres Array blendet die Sektion aus) */
  openingHours: Array<{ days: string; hours: string }>;
  /** Social-Media-Links (leer lassen = nicht anzeigen) */
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    xing?: string;
  };
  /** Primärer Call-to-Action Button */
  cta: {
    label: string;
    href: string;
  };
  /** Sekundärer CTA (z. B. "Mehr erfahren") */
  ctaSecondary: {
    label: string;
    href: string;
  };
}

const site: SiteData = {
  company: "Muster Elektrotechnik",
  tagline: "Ihr zuverlässiger Elektriker in Musterstadt",
  url: "https://example.com", // TODO: Produktionsdomäne eintragen & in astro.config.mjs spiegeln
  lang: "de",

  contact: {
    email: "info@muster-elektro.de", // TODO: Echte E-Mail eintragen
    phone: "+49 123 456789", // TODO: Echte Telefonnummer eintragen
    address: {
      street: "Musterstraße 1",
      zip: "12345",
      city: "Musterstadt",
    },
  },

  openingHours: [
    { days: "Mo–Fr", hours: "07:30–17:00 Uhr" },
    { days: "Sa", hours: "08:00–12:00 Uhr" },
  ],

  social: {
    facebook: "", // TODO: Facebook-URL eintragen oder leer lassen
    instagram: "", // TODO: Instagram-URL eintragen oder leer lassen
  },

  cta: {
    label: "Jetzt Kontakt aufnehmen",
    href: "/kontakt",
  },

  ctaSecondary: {
    label: "Unsere Leistungen",
    href: "/leistungen",
  },
};

export default site;
