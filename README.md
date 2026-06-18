# Iris Musshoff – Website

Website für Iris Musshoff, Energie für Räume und Orte.

## Stack

- [Astro](https://astro.build) v6
- [Tailwind CSS](https://tailwindcss.com) v4
- [Fontsource](https://fontsource.org) — Cormorant Garamond + Inter (selbst gehostet, DSGVO-konform)
- [Formspree](https://formspree.io) — Kontaktformular
- Hosting: [Vercel](https://vercel.com)
- DNS: Cloudflare

## Setup

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Deployment (Vercel)

```bash
vercel --prod
```

## Checkliste vor Go-live

- [ ] **Formspree-ID** in `src/components/Contact.astro` eintragen — `YOUR_FORM_ID` ersetzen
- [ ] **E-Mail-Adresse** in `Contact.astro` und `impressum.astro` aktualisieren
- [ ] **Telefonnummer** in `Contact.astro` und `impressum.astro` ergänzen
- [ ] **Adresse** in `impressum.astro` und `datenschutz.astro` eintragen
- [ ] **Logo** als `public/logo.svg` einbinden und in `BaseLayout.astro` ersetzen
- [ ] **Portraitfoto** als `public/images/portrait.jpg` ablegen und `About.astro` anpassen
- [ ] **Hero-Bild** als `public/images/hero.jpg` ablegen und `Hero.astro` anpassen
- [ ] **OG-Image** als `public/og-image.png` erstellen (1200 × 630 px)
- [ ] Datenschutzerklärung von Rechtsanwalt prüfen und vervollständigen
- [ ] Impressum vervollständigen
- [ ] Formspree: DSGVO Data Processing Agreement abschließen

## Projektstruktur

```
src/
  components/
    Hero.astro        — Erster Abschnitt, Hero-Bereich
    About.astro       — Über mich
    Services.astro    — Leistungen (3 Pakete)
    Business.astro    — Business & Arbeitsräume
    Contact.astro     — Kontaktformular (Formspree)
    Footer.astro      — Footer mit Impressum/Datenschutz-Links
  layouts/
    BaseLayout.astro  — HTML-Grundstruktur, Navigation, SEO-Meta
  pages/
    index.astro       — Startseite (Single Page)
    impressum.astro   — Impressum (Platzhalter, bitte ergänzen)
    datenschutz.astro — Datenschutz (Platzhalter, bitte ergänzen)
  styles/
    global.css        — Fonts (@fontsource), Tailwind-Import
    custom.css        — Buttons, Formular-Inputs, Hilfklassen
```

## Farben

| Variable     | Hex       | Verwendung              |
|--------------|-----------|-------------------------|
| `im-taupe`   | `#B7A08A` | Akzente, Borders, CTAs  |
| `im-beige`   | `#EFE8E1` | Sektionshintergründe    |
| `im-creme`   | `#F7F4F0` | Seitenhintergrund       |
| `im-text`    | `#4A423B` | Fließtext, Hauptfarbe   |
| `im-dark`    | `#6A5D52` | Dunkler Akzent          |
| `im-sage`    | `#A7B0A0` | Optional, Salbeigrün    |

## Briefing

Vollständiges Projektbriefing: [docs/briefing.md](docs/briefing.md)
