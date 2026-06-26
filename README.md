# Hari Balaji V. — Portfolio

A standalone, production-ready portfolio site built with **Vite + React + TypeScript + Tailwind CSS**, animated with **Framer Motion** and iconography from **Lucide React**.

## Tech Stack

- ⚡️ **Vite 6** – lightning-fast dev server and build
- ⚛️ **React 18 + TypeScript**
- 🎨 **Tailwind CSS 3** – utility-first styling
- 🎬 **Framer Motion** – fluid scroll/entry animations
- 🧩 **Lucide React** – consistent open-source icons

## Getting Started

```bash
# 1. Install dependencies
yarn        # or: npm install / pnpm install

# 2. Start the dev server
yarn dev    # http://localhost:5173

# 3. Build for production
yarn build  # output: ./dist

# 4. Preview the production build locally
yarn preview
```

## Project Structure

```
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── favicon.svg
└── src/
    ├── App.tsx              # Page composition
    ├── main.tsx             # React root
    ├── index.css            # Tailwind layers + global styles
    ├── lib/
    │   └── data.ts          # All editable portfolio content
    └── components/
        ├── Section.tsx      # Reusable Section / Reveal / Label helpers
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── TechStack.tsx
        ├── Projects.tsx
        ├── Experience.tsx
        ├── Certifications.tsx
        ├── Learning.tsx
        ├── Education.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

## Customizing Content

All copy, links, and lists live in **`src/lib/data.ts`** — change the name, bio, projects, skills, contact info, education, etc. in one place and the entire site updates.

## Deploy

### Vercel
```bash
# from project root
vercel
```
Or import the repo on https://vercel.com — Vercel auto-detects Vite.

### Netlify
```bash
# Build command:    yarn build
# Publish directory: dist
```

### GitHub Pages
```bash
yarn build
# push the contents of ./dist to the gh-pages branch
```

### Static host
Any static host (Cloudflare Pages, Render, S3 + CloudFront, etc.) — just upload the `dist/` folder.

## License

MIT — feel free to fork and adapt for your own portfolio.
