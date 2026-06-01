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

## Deploy on Netlify (GitHub)

1. Create a repo on GitHub (empty, no README), e.g. `rm-events-landing`.
2. Push this project (see commands below).
3. [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project** → GitHub → select the repo.
4. Netlify reads `netlify.toml` automatically (`npm run build`, publish `dist`).
5. After deploy, rename the site under **Domain management** (e.g. `rm-events-preview`).

### Push to GitHub (first time)

```powershell
cd C:\Users\beenyprinting\.cursor\projects\empty-window\rm-events-landing

git remote add origin https://github.com/ugwucharles/rmevents.git
git push -u origin main
```

Sign in when Git asks (browser or Personal Access Token).

### Later updates

```powershell
git add -A
git commit -m "Describe your change"
git push
```

Netlify redeploys automatically on each push to `main`.
