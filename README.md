# RM Events Experience — Landing Page

## Logo

Place your logo at:

`C:\Users\beenyprinting\Downloads\base_logo_transparent_background.png`

Run this to copy it into `src/assets/logo.png` (bundled by Vite — reliable in dev & build). Or run:

```powershell
.\scripts\copy-logo.ps1
```

## Client photos (Google Drive)

The agent **cannot** open private Google Drive folders. Download images to:

`rm-events-landing/public/media/gallery/`

Then update paths in `src/data/content.ts`.

## Important: how to view the site

**Do not open `index.html` directly in the browser.** Styles are bundled by Vite.

```powershell
cd rm-events-landing
npm install
npm run dev
```

Then open the URL Vite prints (e.g. `http://localhost:5173`).

## Contact (from live site footer)

| | |
|---|---|
| **Email** | hello@rmeventsexperience.com |
| **Phone** | (214) 814-4851 |
| **Location** | Dallas, Texas, United States |

Social profile URLs: copy from Wix editor (footer icons) into `src/data/content.ts`.

## Build

```powershell
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, etc.
