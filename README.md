# Portfolio Website

Persoonlijke portfolio van Lucas de Ruijter, gebouwd met Vue 3 + Vite. Volledig frontend, te hosten op Vercel.

## Starten

```bash
npm install
npm run dev
```

## Bouwen

```bash
npm run build
npm run preview
```

## Structuur

- `public/assets/` – afbeeldingen en cv (bereikbaar via `/assets/...`)
- `src/assets/css/` – stylesheets (componenten en pagina's)
- `src/components/` – NavBar, LogoBadge, ThemeSlider, FooterBar
- `src/views/` – Home, Projects, Contact, NotFound
- `src/composables/useTheme.js` – dark/light thema, opgeslagen in localStorage
- `src/data/projects.json` – de projecten die op de projectenpagina staan
- `vercel.json` – zorgt dat alle URL's naar `index.html` gaan (vue-router)

## Projecten aanpassen

Pas `src/data/projects.json` aan. Velden: `id`, `title`, `description`, `skills` (lijst) en `image` (bijv. `/assets/images/naam.png`, of `null` voor de standaardafbeelding).

## Contactformulier

Verstuurt via EmailJS. Standaard worden de waardes uit `src/views/ContactView.vue` gebruikt. Overschrijven kan met `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID` en `VITE_EMAILJS_TEMPLATE_ID` (zie `.env.example`, of Environment Variables in Vercel).

## Deployen op Vercel

Importeer de GitHub-repo in Vercel. Framework Preset: Vite (wordt automatisch herkend), build command `npm run build`, output directory `dist`.
