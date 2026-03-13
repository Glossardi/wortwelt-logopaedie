/**
 * theme.ts — Branding & Design Tokens
 *
 * Diese Datei als ZWEITES anpassen für das Kunden-Branding.
 * Alle Werte werden als CSS Custom Properties in das globale Stylesheet
 * injiziert. Keine Codeänderungen in Komponenten nötig.
 */

export interface ThemeData {
  colors: {
    /** Primärfarbe (Buttons, Links, Akzente) */
    primary: string;
    /** Primärfarbe hover/dunkel */
    primaryDark: string;
    /** Sekundärfarbe (z. B. für Badges, Hintergründe) */
    secondary: string;
    /** Akzentfarbe (z. B. Highlights, Icons) */
    accent: string;
    /** Haupthintergrundfarbe */
    background: string;
    /** Leicht abgehobener Hintergrund für Sections */
    surface: string;
    /** Primäre Textfarbe */
    text: string;
    /** Gedämpfte Textfarbe (Untertitel, Labels) */
    textMuted: string;
    /** Farbe für Text auf Primärhintergrund */
    onPrimary: string;
  };
  typography: {
    /** Schriftart für Fließtext */
    fontBody: string;
    /** Schriftart für Überschriften */
    fontHeading: string;
    /** Basis-Schriftgröße */
    sizeBase: string;
  };
  layout: {
    /** Maximale Breite des Content-Bereichs */
    containerMax: string;
    /** Innenabstand (Padding) des Containers */
    containerPadding: string;
    /** Standardmäßiger Außenabstand zwischen Sektionen */
    sectionSpacing: string;
  };
  border: {
    /** Standard-Abrundungsradius */
    radius: string;
    /** Radius für Pills/Tags */
    radiusLg: string;
  };
  shadow: {
    /** Kleiner Schatten (Cards, Inputs) */
    sm: string;
    /** Mittlerer Schatten (modals, dropdowns) */
    md: string;
  };
  logo: {
    /** Pfad zum Logo (relativ zu /public) */
    src: string;
    /** Alt-Text für das Logo */
    alt: string;
    /** Breite des Logos im Header in Pixeln */
    width: number;
  };
}

const theme: ThemeData = {
  colors: {
    primary: "#1d4ed8", // Professionelles Blau — TODO: Kundenfarbe anpassen
    primaryDark: "#1e3a8a",
    secondary: "#f8fafc",
    accent: "#f59e0b", // Amber-Akzent
    background: "#ffffff",
    surface: "#f8fafc",
    text: "#0f172a",
    textMuted: "#64748b",
    onPrimary: "#ffffff",
  },
  typography: {
    // Systemfont-Stack: kein Webfont-Overhead, schnell, neutral
    fontBody:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    fontHeading:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    sizeBase: "16px",
  },
  layout: {
    containerMax: "1200px",
    containerPadding: "1.25rem",
    sectionSpacing: "5rem",
  },
  border: {
    radius: "0.5rem",
    radiusLg: "1rem",
  },
  shadow: {
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  logo: {
    src: "/images/logo.svg", // TODO: Kundenlogo hinterlegen
    alt: "Muster Elektrotechnik Logo",
    width: 160,
  },
};

export default theme;
