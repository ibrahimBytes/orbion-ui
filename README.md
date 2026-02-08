
# Orbion — Smart City Dashboard (Frontend)

**A modular, production-grade React + TypeScript frontend for smart city monitoring — focused on clean architecture, explicit UI states, and long-term maintainability.**

<p align="center">
  <img src="/orbion-screenshot.png" width="800"/>
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

(Replace placeholders below with real screenshots of your dashboard, explore view, mobile navigation, etc. — store them in `/public/screenshots/` or a docs folder.)

Here are some inspirational modern dashboard styles (dark mode, cards, responsive grids) that align with Orbion's calm & modular aesthetic:
















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
git clone https://github.com/ibrahimBytes/orbion-ui.git
cd orbion-frontend
npm install

# Development server (Vite)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173)

## 🗂 Folder Structure

```
src/
├── app/                  # Global setup
│   ├── providers/        # ThemeProvider, etc.
│   ├── router.tsx        # Centralized routing
│   └── layout/           # Root layout + nav shell
│
├── features/             # Domain/feature slices (colocated)
│   ├── dashboard/
│   ├── explore/
│   ├── notifications/
│   └── settings/
│
├── shared/               # Reusable across features
│   ├── ui/               # Atomic + composite components
│   ├── hooks/            # Shared logic hooks
│   ├── theme/            # Tokens, tailwind config extensions
│   └── utils/
│
├── styles/
│   └── globals.css
│
└── main.tsx
```

Feature-based structure keeps the codebase navigable even at 50+ features.

## 🎯 Key Implementation Highlights

- Every major view implements loading / empty / error / success states with stable layout (CLS = 0)
- Responsive grid — changes from 4-col desktop → 2-col tablet → 1-col mobile
- Dark mode — fully token-based, system preference + manual toggle
- Navigation — top bar (desktop) + bottom bar (mobile), persistent notifications & profile
- Quick Actions — interactive cards with hover/press/transition feedback
- Explore — filter chips + search-driven card results

## ✅ Status Board

| Area                           | Status       | Notes                                      |
|--------------------------------|--------------|--------------------------------------------|
| Core architecture              | ✅ Complete  | Modular monolith, strict TS                |
| Responsive design              | ✅ Complete  | All breakpoints tested                     |
| Dark / Light mode              | ✅ Complete  | Token-based, no layout duplication         |
| UI states (loading/empty/error)| ✅ Strong    | Explicit in every major screen             |
| Accessibility (ARIA, keyboard) | 🏗️ In Progress | Planned full audit                      |
| Visual regression tests        | ❌ Planned   | Looking at Chromatic / Percy               |
| Form validation UX             | ❌ Planned   | Inline errors, progressive disclosure      |

## 🤝 Contributing

Contributions welcome — especially around:

- Accessibility improvements
- More realistic mock states & interactions
- Performance optimizations
- Better skeleton loader variants

Standard process:

1. Fork → branch 
2. Follow existing code style & TypeScript strictness
3. Add/update tests when touching logic
4. Open PR with clear description

## 📄 License

MIT License — see [LICENSE](./LICENSE)

Built with focus and calm in Tirupati, India 🇮🇳

Star ⭐ if this architecture resonates with you!
