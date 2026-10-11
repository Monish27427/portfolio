# Monish P — Web Developer Portfolio

Personal portfolio website for **MONISH P**, Web Developer & AI-Assisted Frontend Developer. Built with React, Vite, React Router DOM, and vanilla CSS.

## 🚀 Live Demo & Showcase

- **Featured Project:** [UrbanBite — Restaurant Website](https://urbanbite-restaurant.vercel.app)
- **UrbanBite Repository:** [GitHub](https://github.com/Monish27427/urbanbite-restaurant)

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Routing:** React Router DOM 7 (SPA with client-side rewrites)
- **Styling:** Vanilla CSS (CSS Variables, Grid, Flexbox, Mobile-First)
- **Icons:** Lucide React
- **Linter:** Oxlint

## 📂 Project Structure

```text
src/
├── components/
│   ├── contact/       # Contact form with client-side validation
│   ├── home/          # Hero, Capabilities, FeaturedProject, ClosingCTA
│   ├── layout/        # Navbar, Footer, ScrollToTop, PageSEO
│   ├── projects/      # ProjectCard
│   └── ui/            # Button, SectionHeading, GithubIcon
├── data/              # projects.js (UrbanBite data, capabilities, workflow, skills)
├── pages/             # HomePage, ProjectsPage, AboutPage, ContactPage, NotFoundPage
├── styles/            # Vanilla CSS stylesheets (global, home, about, contact, projects)
├── App.jsx            # Routing and layout structure
└── main.jsx           # App entry point
```

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Run linter:
   ```bash
   npm run lint
   ```

## 🌐 Deployment

Configured for seamless deployment on Vercel:
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`
- **Routing:** `vercel.json` rewrite configuration handles client-side direct route navigation for `/projects`, `/about`, and `/contact`.
