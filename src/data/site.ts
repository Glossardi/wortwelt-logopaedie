/**
 * site.ts — Zentrale Konfiguration für das gesamte Projekt
 *
 * Dies ist die EINZIGE Datei, die pro Kundenprojekt angepasst wird.
 * Alle Inhalte, Texte und Einstellungen fließen automatisch in die
 * Komponenten ein.
 *
 * Workflow: Repository forken → diese Datei anpassen → deployen.
 */

import type { ThemePreset } from "./themes";

// ─── Typen ──────────────────────────────────────────────────────────

export interface SiteData {
  // Grunddaten
  company: string;
  /** Pfad zum Logo-Bild (z.B. "/images/logo.svg"). Wenn leer, wird Firmenname als Text angezeigt. */
  logo?: string;
  tagline: string;
  url: string;
  lang: string;

  // Theme-Preset (siehe themes.ts für verfügbare Presets)
  theme: string;
  /**
   * Fonts anpassen: Setze themeOverrides.typography.fontBody und fontHeading.
   * Beispiel für Google Fonts:
   *   themeOverrides: {
   *     typography: {
   *       fontBody: "'Inter', sans-serif",
   *       fontHeading: "'Playfair Display', serif",
   *     }
   *   }
   * Vergiss nicht, den Font-Import in BaseLayout.astro hinzuzufügen:
   *   <link href="https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display&display=swap" rel="stylesheet" />
   */
  themeOverrides?: Partial<ThemePreset>;

  // Kontakt
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      zip: string;
      city: string;
    };
  };

  openingHours: Array<{ days: string; hours: string }>;

  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
    twitter?: string;
    xing?: string;
    github?: string;
  };

  // Navigation
  nav: Array<{ label: string; href: string }>;

  // CTAs
  cta: { label: string; href: string };
  ctaSecondary: { label: string; href: string };

  // ─── Sektions-Inhalte ──────────────────────────────────────────────

  hero: {
    headline: string;
    subline: string;
    backgroundImage?: string;
  };

  trustItems: Array<{
    icon: string;
    label: string;
  }>;

  services: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  about: {
    heading: string;
    text: string;
    image?: string;
    imageAlt?: string;
  };

  process: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  testimonials: Array<{
    quote: string;
    author: string;
    role?: string;
    rating?: number;
  }>;

  faq: Array<{
    question: string;
    answer: string;
  }>;

  // Verification Tags für Suchmaschinen
  verification?: {
    google?: string;
    bing?: string;
  };

  // Sektions-Überschriften (zentral konfigurierbar)
  sectionHeadings: {
    services: string;
    servicesIntro?: string;
    about: string;
    process: string;
    processIntro?: string;
    testimonials: string;
    testimonialsIntro?: string;
    faq: string;
    faqIntro?: string;
    contact: string;
    contactIntro?: string;
  };
}

// ─── Demo-Daten ─────────────────────────────────────────────────────

const site: SiteData = {
  company: "Wortwelt Logopädie",
  logo: "/images/logo.svg",
  tagline: "Logopädische Praxis für Kinder und Erwachsene in Berlin-Treptow",
  url: "https://wortwelt-logopaedie.de",
  lang: "de",

  theme: "professional-blue",
  themeOverrides: {
    colors: {
      primary: "#5C9EA0",
      primaryDark: "#4A8385",
      secondary: "#FFF0ED",
      accent: "#FF6F61",
      background: "#F9F9F9",
      surface: "#FFFFFF",
      text: "#2E2E2E",
      textMuted: "#6B7280",
      onPrimary: "#FFFFFF",
      border: "#E5E7EB",
    },
    typography: {
      fontBody: "'Open Sans', sans-serif",
      fontHeading: "'Montserrat', sans-serif",
    },
    border: {
      radius: "0.25rem",
      radiusLg: "0.5rem",
    },
    shadow: {
      xs: "0 1px 2px 0 rgba(0,0,0,0.04)",
      sm: "0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06)",
      md: "0 2px 4px -1px rgba(92,158,160,0.08), 0 4px 6px -1px rgba(0,0,0,0.06)",
      lg: "0 4px 6px -2px rgba(92,158,160,0.1), 0 10px 15px -3px rgba(0,0,0,0.08)",
      xl: "0 8px 10px -4px rgba(92,158,160,0.12), 0 20px 25px -5px rgba(0,0,0,0.08)",
    },
  },

  contact: {
    email: "info@wortwelt-logopaedie.de",
    phone: "+49 30 12345678",
    address: {
      street: "Kiefholzstraße 253",
      zip: "12437",
      city: "Berlin",
    },
  },

  openingHours: [
    { days: "Mo–Fr", hours: "08:00–18:00 Uhr" },
    { days: "Sa–So", hours: "Geschlossen" },
  ],

  social: {
    instagram: "https://instagram.com/wortwelt.logopaedie",
  },

  nav: [
    { label: "Leistungen", href: "#services" },
    { label: "Über uns", href: "#about" },
    { label: "Ablauf", href: "#process" },
    { label: "Bewertungen", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#contact" },
  ],

  cta: {
    label: "Termin vereinbaren",
    href: "#contact",
  },

  ctaSecondary: {
    label: "Unsere Leistungen",
    href: "#services",
  },

  hero: {
    headline: "Ihre Stimme verdient die beste Betreuung",
    subline:
      "Logopädische Therapie für Kinder und Erwachsene in Berlin-Treptow. Einfühlsam, evidenzbasiert und auf Ihre individuellen Bedürfnisse abgestimmt — auch als Hausbesuch.",
    // Note: Image imported directly in Hero.astro for build-time optimization
    backgroundImage: "/images/hero.jpg",
  },

  trustItems: [
    { icon: "award", label: "Zertifizierte Therapeuten" },
    { icon: "users", label: "Kinder & Erwachsene" },
    { icon: "home", label: "Hausbesuche möglich" },
    { icon: "shield-check", label: "Alle Kassen & Privat" },
  ],

  services: [
    {
      icon: "baby",
      title: "Sprachentwicklung",
      description:
        "Diagnostik und Therapie bei Sprachentwicklungsstörungen, Late Talker und Sprachentwicklungsverzögerungen im Kindesalter.",
    },
    {
      icon: "mic",
      title: "Stimmtherapie",
      description:
        "Behandlung von funktionellen und organischen Stimmstörungen — für Berufssprecher, Sänger und alle, die ihre Stimme brauchen.",
    },
    {
      icon: "message-circle",
      title: "Stottern & Poltern",
      description:
        "Individuelle Therapiekonzepte bei Redeflussstörungen für Kinder, Jugendliche und Erwachsene.",
    },
    {
      icon: "utensils",
      title: "Schlucktherapie",
      description:
        "Diagnostik und Behandlung von Schluckstörungen (Dysphagie) nach Schlaganfall, bei neurologischen Erkrankungen oder im Alter.",
    },
    {
      icon: "brain",
      title: "Aphasie & Neurologie",
      description:
        "Sprachtherapie nach Schlaganfall, Schädel-Hirn-Trauma oder bei neurodegenerativen Erkrankungen wie Parkinson und Demenz.",
    },
    {
      icon: "home",
      title: "Hausbesuche",
      description:
        "Therapie bei Ihnen zu Hause — für Patienten mit eingeschränkter Mobilität, nach Operationen oder auf ärztliche Verordnung.",
    },
  ],

  about: {
    heading: "Sprache verbindet — Wortwelt begleitet",
    text: "Die Wortwelt Logopädie in Berlin-Treptow steht für einfühlsame und evidenzbasierte Sprachtherapie. Unter der Leitung von Alphan Elduran bieten wir individuelle Behandlungskonzepte für Kinder und Erwachsene. In unserer modernen Praxis in der Kiefholzstraße schaffen wir eine vertrauensvolle Atmosphäre, in der sich unsere Patienten wohlfühlen und optimale Therapieerfolge erzielen. Ob Sprachentwicklung, Stimmtherapie oder Rehabilitation nach Schlaganfall — wir begleiten Sie auf Ihrem Weg zu besserer Kommunikation.",
    // Note: Image imported directly in AboutTeaser.astro for build-time optimization
    image: "/images/about.jpg",
    imageAlt: "Therapeutin notiert während einer einfühlsamen Therapiesitzung in der Wortwelt Logopädie",
  },

  process: [
    {
      icon: "phone",
      title: "Kontaktaufnahme",
      description:
        "Rufen Sie uns an oder schreiben Sie uns — wir finden zeitnah einen Termin für Ihr Erstgespräch.",
    },
    {
      icon: "clipboard-list",
      title: "Befunderhebung",
      description:
        "In einer ausführlichen Diagnostik erfassen wir den aktuellen Sprach- und Sprechstatus als Grundlage für die Therapie.",
    },
    {
      icon: "file-text",
      title: "Therapieplan",
      description:
        "Gemeinsam erstellen wir einen individuellen Behandlungsplan mit konkreten Zielen und transparentem Vorgehen.",
    },
    {
      icon: "heart",
      title: "Therapie & Begleitung",
      description:
        "Regelmäßige Sitzungen mit evidenzbasierten Methoden — wir begleiten Sie bis zum nachhaltigen Therapieerfolg.",
    },
  ],

  testimonials: [
    {
      quote:
        "Mein Sohn hat dank der einfühlsamen Therapie bei Wortwelt riesige Fortschritte gemacht. Die Therapeuten gehen individuell auf jedes Kind ein — das merkt man sofort.",
      author: "Familie Yılmaz",
      role: "Eltern eines 5-jährigen Patienten",
      rating: 5,
    },
    {
      quote:
        "Nach meinem Schlaganfall hatte ich große Angst, nie wieder richtig sprechen zu können. Die Therapie bei Wortwelt hat mir Schritt für Schritt meine Sprache zurückgegeben.",
      author: "Hannelore M.",
      role: "Patientin, Aphasie-Therapie",
      rating: 5,
    },
    {
      quote:
        "Als Lehrerin ist meine Stimme mein wichtigstes Werkzeug. Die Stimmtherapie hat mir geholfen, meinen Beruf wieder schmerzfrei ausüben zu können. Sehr kompetent und freundlich!",
      author: "Sarah K.",
      role: "Patientin, Stimmtherapie",
      rating: 5,
    },
  ],

  faq: [
    {
      question: "Brauche ich eine Überweisung für logopädische Therapie?",
      answer:
        "Ja, für eine Behandlung auf Kassenkosten benötigen Sie eine Heilmittelverordnung von Ihrem Arzt (Hausarzt, HNO-Arzt, Kinderarzt, Neurologe etc.). Privatpatienten und Selbstzahler können auch ohne Verordnung einen Termin vereinbaren.",
    },
    {
      question: "Werden die Kosten von der Krankenkasse übernommen?",
      answer:
        "Ja, logopädische Therapie ist eine anerkannte Heilmittelbehandlung. Mit einer ärztlichen Verordnung übernehmen gesetzliche und private Krankenkassen die Kosten. Gesetzlich Versicherte ab 18 Jahren tragen einen Eigenanteil von 10 % plus 10 € je Verordnung.",
    },
    {
      question: "Wie oft findet die Therapie statt?",
      answer:
        "In der Regel finden 1–2 Sitzungen pro Woche statt, je nach ärztlicher Verordnung und individuellem Bedarf. Jede Sitzung dauert zwischen 30 und 60 Minuten.",
    },
    {
      question: "Bieten Sie auch Hausbesuche an?",
      answer:
        "Ja, wir bieten Hausbesuche für Patienten mit eingeschränkter Mobilität an. Dafür muss ein entsprechender Vermerk auf der Heilmittelverordnung stehen. Sprechen Sie Ihren Arzt darauf an.",
    },
    {
      question: "Behandeln Sie auch Erwachsene?",
      answer:
        "Ja, wir behandeln Patienten jeden Alters — von Kleinkindern bis zu Senioren. Zu unseren Schwerpunkten bei Erwachsenen zählen Stimmstörungen, Aphasie nach Schlaganfall, Schluckstörungen und Redeflussstörungen.",
    },
    {
      question: "Was soll ich zum Ersttermin mitbringen?",
      answer:
        "Bitte bringen Sie die Heilmittelverordnung Ihres Arztes, Ihre Versichertenkarte sowie eventuell vorhandene Vorbefunde (z. B. von HNO, Pädaudiologe oder SPZ) mit.",
    },
  ],

  sectionHeadings: {
    services: "Unsere Leistungen",
    servicesIntro:
      "Wir bieten ein breites Spektrum logopädischer Therapien — individuell abgestimmt auf Ihr Anliegen.",
    about: "Über unsere Praxis",
    process: "Ihr Weg zur Therapie",
    processIntro:
      "In vier einfachen Schritten zu Ihrer individuellen logopädischen Behandlung.",
    testimonials: "Das sagen unsere Patienten",
    testimonialsIntro:
      "Erfahren Sie, wie unsere Therapie das Leben unserer Patienten verändert hat.",
    faq: "Häufige Fragen",
    faqIntro:
      "Antworten auf die wichtigsten Fragen rund um logopädische Therapie und unsere Praxis.",
    contact: "Kontakt & Anfahrt",
    contactIntro:
      "Vereinbaren Sie jetzt Ihren Termin — wir freuen uns auf Sie!",
  },
};

export default site;
