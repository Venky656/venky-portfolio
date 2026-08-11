<div align="center">

# Venkaiah Swamy Kalikaya — Portfolio

**B.Tech CSE · DSA · Web Development · AI**

A premium, animated, dark-themed developer portfolio built with **React, Vite, Tailwind CSS and Framer Motion**.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&logoColor=white)](https://venky-portfolio-v1.vercel.app)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## ✨ Features

- **Cinematic hero** — elastic spring entrance animations (`appearStart` style)
- **Custom cursor** — spring-follow dot that grows on interactive elements (desktop only)
- **Projects showcase** — interactive preview card that:
  - flies in from the corner on hover
  - slides the screenshot up from the bottom of the frame
  - stays sticky and slides down as you scroll the list
- **Timeline progress bar** — scroll-linked progress along the Education timeline
- **Get in touch card** — email / phone / address with one-click **copy-to-clipboard + toast** notifications
- **Scrolling marquee footer** — animated monospace ticker
- **Reusable animation system** — `Reveal` component with `fade`, `elastic`, `slideLeft`, `slideRight` variants
- **Theme engine** — dark/light toggle + multiple accent colors
- **Film grain + spotlight** — subtle cinematic texture overlays

## 🛠 Tech Stack

| Layer        | Tech |
|--------------|------|
| Framework    | React 19 |
| Build Tool   | Vite 8 |
| Styling      | Tailwind CSS 4 |
| Animations   | Framer Motion 13 |
| Icons        | lucide-react |
| CLI/ST UI    | shadcn/ui + Radix UI |
| Linting      | Oxlint |
| Deployment   | Vercel |

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview

# 5. Lint
npm run lint
```

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui primitives (button, badge, card)
│   ├── Navbar.jsx     # theme + accent switcher
│   ├── Hero.jsx       # cinematic entrance
│   ├── About.jsx      # bio cards
│   ├── Education.jsx  # timeline + scroll progress bar
│   ├── Skills.jsx     # skill cards + hover-zoom badges
│   ├── Profiles.jsx   # DSA/coding profile cards
│   ├── Projects.jsx   # interactive preview showcase
│   ├── Contact.jsx    # form + get-in-touch copy card
│   ├── Footer.jsx     # marquee + credits
│   ├── Reveal.jsx     # reusable scroll animation wrapper
│   └── CustomCursor.jsx
├── data/
│   └── portfolioData.js   # all content lives here
└── App.jsx
```

> **Tip:** All personal content (bio, education, skills, profiles, projects, contact)
> lives in one file — `src/data/portfolioData.js`. Edit that file to update the site.

## ⚡ Performance

- **Code splitting** — vendor libs split into cached chunks (`react`, `motion`, `icons`, `radix`)
- **Lazy loading** — below-the-fold sections load only as you scroll (`React.lazy` + `Suspense`)
- **Optimized images** — screenshots compressed 4–6 MB → **25–134 KB** WebP
- **Font preload** — `dns-prefetch` + `preconnect` for Google Fonts with `display=swap`

## 🌐 Deployment

The site is deployed on **Vercel** and auto-updates on push.

**Live:** https://venky-portfolio-v1.vercel.app

```bash
# Manual deploy from CLI
npx vercel --prod
```

---

<div align="center">

Built with ❤️ by **Venkaiah Swamy Kalikaya** (aka Venky)

[GitHub](https://github.com/Venky656) · [LinkedIn](https://www.linkedin.com/in/venkaiah-swamy-kalikaya-236208295/) · [LeetCode](https://leetcode.com/u/venkaiahkalikaya123/) · [CodeChef](https://www.codechef.com/users/venkey30)

</div>