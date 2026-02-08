# Orbion — Smart City Dashboard (Frontend)

**A modular, production-grade React + TypeScript frontend for smart city monitoring — focused on clean architecture, explicit UI states, and long-term maintainability.**

<p align="center">
  <img src="https://placehold.co/1200x600/png?text=Orbion+Smart+City+Dashboard&font=roboto&desc=Modern+responsive+UI+with+dark+mode" alt="Orbion Dashboard Screenshot" width="800"/>
</p>

<p align="center">
  <a href="https://github.com/YOUR_USERNAME/orbion-frontend/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/YOUR_USERNAME/orbion-frontend/ci.yml?style=flat-square&logo=github&label=CI" alt="CI Status"/>
  </a>
  <a href="https://github.com/YOUR_USERNAME/orbion-frontend/releases">
    <img src="https://img.shields.io/github/v/release/YOUR_USERNAME/orbion-frontend?style=flat-square&color=purple&logo=semantic-release" alt="Release"/>
  </a>
  <a href="https://github.com/YOUR_USERNAME/orbion-frontend/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/YOUR_USERNAME/orbion-frontend?style=flat-square&color=blue" alt="License"/>
  </a>
  <a href="https://github.com/YOUR_USERNAME/orbion-frontend/stargazers">
    <img src="https://img.shields.io/github/stars/YOUR_USERNAME/orbion-frontend?style=flat-square&color=yellow" alt="Stars"/>
  </a>
</p>

## ✨ Why Orbion?

Most dashboard UIs shine on the happy path but break in real-world usage (loading, empty data, errors, slow networks).  
Orbion treats **every state as first-class UI**, uses **strong TypeScript boundaries**, follows **feature-based modular structure**, and keeps things deliberately simple — no micro-frontends, no backend coupling, no feature bloat.

**Core goals**

- Clean, scalable frontend architecture for large teams & long lifecycles
- Predictable navigation & state handling
- Calm, minimal, production-ready design language
- Full responsiveness (desktop → tablet → mobile)
- Explicit handling of loading / empty / error / success states
- Token-based dark/light mode with consistent contrast

This is **not** a design showcase or proof-of-concept — it's built like a real product frontend that can grow for years.

## 📸 Screenshots

<p align="center">
  <img src="https://placehold.co/800x500/png?text=Dashboard+View+(Dark+Mode)&font=roboto" alt="Dashboard - Dark Mode" width="45%"/>
  <img src="https://placehold.co/800x500/png?text=Explore+Section+(Filters)&font=roboto" alt="Explore Section" width="45%"/>
</p>

<p align="center">
  <img src="https://placehold.co/800x500/png?text=Mobile+Bottom+Navigation&font=roboto" alt="Mobile View" width="45%"/>
  <img src="https://placehold.co/800x500/png?text=Notifications+Panel&font=roboto" alt="Notifications" width="45%"/>
</p>

*(Replace these placeholders with real screenshots from `/public/screenshots` or a `/docs` folder — highly recommended!)*

## 🛠 Tech Stack

- **React** 18+ (functional components + hooks)
- **TypeScript** — strict mode, no `any` abuse
- **Vite** — blazing fast dev & build
- **React Router v6** — declarative, type-safe routing
- **Tailwind CSS** — design tokens + utility-first
- **Framer Motion** — subtle, intentional micro-interactions
- **clsx** / **tailwind-merge** — clean conditional classes

**No:**

- Redux / Zustand / Context bloat (local state + URL state preferred)
- External UI libraries (everything is built with Tailwind + primitives)
- Backend / API logic (pure frontend layer)

## 🚀 Quick Start

```bash
# Clone & install
git clone https://github.com/YOUR_USERNAME/orbion-frontend.git
cd orbion-frontend
npm install

# Development server (Vite)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview 
