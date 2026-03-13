# AGENTS.md — Projektüberblick für Coding Agents

Dieses Dokument ist der schnelle Einstieg für KI-Assistenten und Entwickler,
die an diesem Repository arbeiten. Bitte zuerst lesen.

---

## Was ist dieses Projekt?

Ein statisches Astro-Template für lokale Dienstleister (Handwerk, Praxen, Gewerbe).
Ziel: Neue Kundenprojekte durch Datenaustausch statt Codeänderungen.

- **Framework:** Astro (statischer Output, kein Server-Rendering)
- **Styling:** Globale CSS Custom Properties (kein Tailwind, kein CSS-in-JS)
- **Sprache:** TypeScript (strikt)
- **Deployment:** Cloudflare Pages / Firebase / GitHub Pages

---

## Die 2 wichtigsten Dateien

| Datei | Was sie tut |
|---|---|
| `src/data/site.ts` | Alle Kundendaten: Firma, Kontakt, Social, CTA |
| `src/data/theme.ts` | Branding: Farben, Fonts, Logo, Abstände |

→ **Für ein neues Projekt: NUR diese beiden Dateien ändern. Alles andere ergibt sich automatisch.**

---

## Dateien, die typischerweise geändert werden

| Datei | Wann ändern |
|---|---|
| `src/data/site.ts` | Immer bei neuem Kundenprojekt |
| `src/data/theme.ts` | Immer bei neuem Kundenprojekt |
| `src/pages/index.astro` | Demo-Inhalte anpassen (Services, FAQ, Testimonials) |
| `src/pages/leistungen.astro` | Leistungen des Kunden eintragen |
| `src/pages/ueber-uns.astro` | Team und Geschichte anpassen |
| `src/pages/impressum.astro` | Pflicht: echte Kundendaten eintragen (TODO-Felder) |
| `src/pages/datenschutz.astro` | Pflicht: auf genutzte Dienste anpassen (TODO-Felder) |
| `public/images/logo.svg` | Kundenlogo ersetzen |
| `public/favicon.svg` | Kundenfavicon ersetzen |
| `astro.config.mjs` | `site`-URL auf Produktionsdomäne setzen |

---

## Dateien, die NICHT geändert werden sollten

| Datei | Warum |
|---|---|
| `src/layouts/BaseLayout.astro` | Injektion der CSS Tokens; nur ändern bei echten Layout-Anforderungen |
| `src/layouts/PageLayout.astro` | Standardlayout; selten ändern nötig |
| `src/styles/global.css` | Basis-Reset und Utility-Klassen; stabil halten |
| `node_modules/` | Nie manuell ändern |
| `dist/` | Build-Ausgabe; wird generiert |

---

## Neue Section hinzufügen

1. Neue Datei in `src/components/` anlegen (Naming: `PascalCase.astro`)
2. Props-Interface am Anfang der Datei definieren
3. Stiles direkt in der Komponente mit `<style>` (scoped)
4. In die gewünschte Seite importieren und einbinden

**Vorlage:**

```astro
---
// MySection.astro — Beschreibung der Sektion
interface Props {
  heading: string;
  items: Array<{ title: string; text: string }>;
}

const { heading, items } = Astro.props;
---

<section class="section" aria-labelledby="my-section-heading">
  <div class="container">
    <h2 id="my-section-heading">{heading}</h2>
    <!-- ... -->
  </div>
</section>

<style>
  /* Scoped styles hier */
</style>
```

---

## Branding ändern

Alle Farbwerte, Schriften und Layout-Maße sind in `src/data/theme.ts` definiert.
Sie werden per `BaseLayout.astro` als CSS Custom Properties gesetzt:

```css
--color-primary
--color-primary-dark
--color-accent
--color-background
--color-surface
--color-text
--color-text-muted
--color-on-primary
--font-body
--font-heading
--container-max
--section-spacing
--radius
--shadow-sm / --shadow-md
```

Um z. B. Primärfarbe zu ändern: nur `theme.ts` → `colors.primary` anpassen. Keine weiteren Codeänderungen nötig.

---

## Prinzipien beim Bearbeiten

1. **Statisch-first** — Kein Client-JavaScript wenn nicht zwingend nötig
2. **Simpel** — Lieber wiederholter Code als komplexe Abstraktion
3. **Wenig Dependencies** — Keine neuen npm-Pakete ohne guten Grund
4. **Selbsterklärend** — Variablennamen und Kommentare auf Deutsch oder Englisch, klar und kurz
5. **Kein Overengineering** — Jede Komponente hat einen klaren, einzigen Zweck
6. **CSS Custom Properties** — Keine Inline-Styles außer dynamischen Tokens
7. **Accessibility** — Semantic HTML, ARIA-Labels wo nötig, `focus-visible` States

---

## Build & Deployment

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Entwicklungsserver starten (localhost:4321)
npm run build      # Statischen Build in /dist erzeugen
npm run preview    # Build lokal testen
```

Cloudflare Pages: Build command `npm run build`, output `dist`.

---

## Bekannte Konventionen

- `.astro`-Dateien: PascalCase für Komponenten/Layouts, kebab-case für Seiten
- CSS-Klassen: BEM-ähnlich (`.section`, `.section--surface`, `.card`, `.btn`, `.btn--primary`)
- Deutsche Inhalte als Standard; technische Kommentare können Englisch sein
- Sektionen bekommen immer ein `aria-labelledby` mit zugehöriger Überschrift
