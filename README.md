# 🚀 Personal Portfolio

A clean, modern personal portfolio website built with **React.js**, featuring a **Dark / Light theme toggle**, deployable in minutes on Vercel.

**Live Demo:** [portfolio-henna-five-nzctsu4t67.vercel.app](https://portfolio-henna-five-nzctsu4t67.vercel.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Dark & Light Theme](#dark--light-theme)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Fork & Use](#fork--use)
- [Credits](#credits)

---

## Overview

This is a personal portfolio template you can fork, customize with your own details, and deploy for free. It's designed to showcase your skills, projects, and contact information in a polished, responsive layout.

---

## Tech Stack

- **Framework:** React.js (App Router)
- **Styling:** CSS
- **Deployment:** Vercel

---

## 🌗 Dark & Light Theme

This portfolio comes with a built-in **dark and light mode toggle**, so visitors can switch to whichever theme they prefer.

### How it works

- A toggle button (🌙 / ☀️) is accessible in the navbar/header
- The selected theme preference is saved to `localStorage`, so it persists across page visits and refreshes
- CSS custom properties (variables) defined in `globals.css` handle all the color switching — no extra libraries needed:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

- The theme also **respects the user's OS-level preference** by default via the `prefers-color-scheme` media query — so dark-mode users will see the dark theme on first load automatically

### Customizing the theme colors

To change the colors for either theme, edit the CSS variables in `app/globals.css`:

| Variable | Purpose |
|---|---|
| `--background` | Page background color |
| `--foreground` | Primary text color |

Add any additional variables you need for buttons, cards, borders, etc., and reference them throughout your components.

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# 1. Clone the repo (or your fork)
git clone https://github.com/YOUR_USERNAME/Portfolio.git

# 2. Navigate into the project
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## Customization Guide

All the key content lives inside the `app/` directory. Here's what to update to make it yours:

| What to change | Where to look |
|---|---|
| Your name & bio | `app/page.js` (or equivalent component) |
| Projects section | Update project titles, descriptions, and links |
| Skills / tech stack | Update the skills list |
| Social links | Replace GitHub, LinkedIn, email, etc. |
| Catalog photos | Swap out the image file |
| Color theme (dark/light) | Edit CSS variables in `app/globals.css` |
| Favicon / metadata | `app/layout.js` — update `metadata` object |

---

## Deployment

The easiest way to deploy is via **Vercel**:

1. Push your fork to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Next.js — just click **Deploy**
4. Your portfolio is live! 🎉

Alternatively, you can deploy to **Netlify**, **GitHub Pages** (with static export), or any Node.js-compatible host.

---

## Fork & Use

Feel free to fork this repository and use it as your own portfolio.

**Steps to fork:**

1. Click the **Fork** button at the top right of this repository
2. Clone your fork locally
3. Customize it with your own content (see [README])
4. Deploy it!
---

## Credits

This portfolio template was originally built by **[Kartik Sharma](https://github.com/kartik10sharma)**.


**In your README:**
```markdown
This portfolio is based on a template by [Kartik Sharma](https://github.com/kartik10sharma/Portfolio).
```

---

## License

This project is open for personal use. Fork it, customize it, and make it your own — just give a mention where it's due. ⭐

If you found this helpful, consider **starring the repo** — it means a lot!
