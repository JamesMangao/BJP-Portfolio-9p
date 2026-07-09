# BJP Portfolio — Full Documentation

**Live URL:** https://bjp-portfolio.vercel.app  
**Repository:** https://github.com/JamesMangao/BJP-Portfolio-9p  
**Scaffolded by:** [v0.dev](https://v0.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16.2.6 (App Router) |
| **Language** | TypeScript 5.7.3 (strict mode) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 4.2.0 (via `@tailwindcss/postcss`) |
| **Animation** | Framer Motion 12.40.0 |
| **Component Library** | `@base-ui/react` 1.5.0 (shadcn/ui "base-nova") |
| **Icons** | Lucide React 1.16.0 + custom inline SVGs |
| **Utilities** | `clsx`, `tailwind-merge`, `class-variance-authority` |
| **Analytics** | `@vercel/analytics` 1.6.1 (production only) |
| **Fonts** | Geist Sans + Geist Mono (via `next/font/google`) |
| **Package Manager** | pnpm |
| **Deployment** | Vercel |

---

## Theme & Colors

Exclusive **dark theme** using OKLCH color space.

| Token | Value | Visual |
|---|---|---|
| `--background` | `oklch(0.21 0.04 265.75)` | Very dark slate (~#0f172a) |
| `--foreground` | `oklch(0.95 0.01 250)` | Near-white |
| `--brand-blue` / `--primary` | `oklch(0.62 0.19 256)` | Vibrant blue (~#3b82f6) |
| `--brand-purple` / `--accent` | `oklch(0.58 0.2 290)` | Vibrant purple (~#a855f7) |

**Key visual patterns:**
- **Gradient text** — name, headings, footer monogram use `linear-gradient(100deg, var(--brand-blue), var(--brand-purple))`
- **Glass morphism** — `.glass` class with `backdrop-filter: blur(14px)` on cards, navbar, contact section
- **Glow effects** — `.glow-blue` with `box-shadow: 0 0 40px -12px var(--brand-blue)` on CTAs and timeline
- **Background** — dark solid base with ambient blur orbs and floating particle animation

---

## Sections (Single-Page Layout)

### 1. Hero (`#hero`)
- Full-screen intro with gradient name "Bienvinido James Publico"
- Subtitle: "IT Graduate | Full-Stack Developer | IT Tech Support | Flutter | Open to Work"
- Animated PHP Artisan terminal window (`php artisan serve`)
- "Available for opportunities" badge with pulsing dot
- CTA buttons: "View Projects" and "Contact Me"
- Social links: GitHub, LinkedIn, Email

### 2. About (`#about`)
- Recent BS IT graduate from Lyceum of San Pedro with hands-on experience in full-stack web development, IT technical support (500-hour OJT), and mobile app development (Flutter/Android Studio)
- Certified by Cisco Networking Academy in IT Customer Support Basics and Computer Hardware Basics (July 2026)
- Open to IT Tech Support, Junior Developer, and Desktop Support roles
- Four highlight cards: **Laravel Expertise**, **Backend Systems**, **AI-Powered Apps**, **Desktop Development**

### 3. Skills (`#skills`)
8 skill-group cards in a responsive grid:

| Group | Skills |
|---|---|
| Frontend | HTML5, CSS3, JavaScript, TypeScript, Alpine.js, Tailwind CSS |
| Backend | PHP, Laravel 12 |
| Database | MySQL, Firebase |
| Desktop | Tauri 2, Rust, React 18, TypeScript, windows-rs (Win32 API), Vite, Zustand, Framer Motion |
| Programming | Python, Java, C++ |
| Tools | GitHub, Railway, VS Code, Vite |
| Technologies | REST APIs, AJAX, JSON, Tesseract OCR, Poppler, Flutter, Android Studio |
| IT Support | Hardware Diagnostics, OS Installation & Reformatting, PC Assembly & Testing, Printer & Peripheral Configuration, Basic Network Troubleshooting, Remote Support Tools (AnyDesk, TeamViewer), End-User Technical Support, Windows 7/8/10 |

### 4. Projects (`#projects`)
Three project tiers:

**a) LifeVault (Flagship)** — AI-powered journaling platform
- Stack: Laravel 12, PHP, MySQL, Firebase, JavaScript, Tailwind CSS, Alpine.js
- Role: Lead Developer (Team of 3)
- Clickable 5-card grid → opens browser-mockup lightbox modal with screenshot preview
- Features: Resume Analyzer, LifeStory Generator, Shadow Self Analyzer, Holistic Career Advisor, AI Chatbot, Authentication System, Dashboard Analytics
- Links: [GitHub](https://github.com/JamesMangao/LifeVault), [Live](https://lifevault-182e.onrender.com)

**b) Parish Website** — Parish management & information system
- Stack: Laravel, PHP, MySQL, JavaScript
- Role: Full-Stack Developer
- 11 features: Home Page, Mass Schedules, Mass Intentions, Inquiry System, Inquiry Tracking, Gallery, Events, Donations, About Page, Admin Dashboard, Role-Based Access Control
- Roles: Super Admin, Parish Staff, SocCom

**c) EcoCycle: Smart Recycling Reward System** — Full-stack capstone project
- Stack: Flutter, Android Studio, Laravel, PHP, MySQL, IoT
- Role: Full-Stack & Mobile Developer
- Flutter mobile app for end users with reward tracking, Laravel/PHP web admin dashboard, and IoT integration with a smart recycling bin

**d) PCFixAI** — Offline AI-powered Windows desktop app
- Stack: Tauri 2, Rust, React 18, TypeScript, Windows API
- Role: Solo Developer
- Features: One-Click Scan, Auto-Fix Agent, Rust + Win32 API Backend, Live System Metrics, AI via Ollama, Chat Assistant, System Restore, Job History, Toolkit (30+ Tools)
- Deployed at v1.2.0, June 2026
- Link: [GitHub](https://github.com/JamesMangao/PCFixAI)

### 5. Experience (`#experience`)
- **IT Technician Intern** @ Milestone Computers Laguna (500-hour OJT)
- Hardware/software diagnostics, OS deployment, PC builds, end-user support
- Accompanied senior technicians on client site visits for CCTV installation projects
- Vertical timeline layout with gradient bar and glowing node

### 6. Certifications (`#certifications`)
- **IT Customer Support Basics** — Cisco Networking Academy (July 2026)
  - Credential ID: 7580b32f-3d2e-436e-8235-c840a1ac8819
- **Computer Hardware Basics** — Cisco Networking Academy (July 2026)
  - Credential ID: 74ce47a8-9757-450b-ab61-bf2c6dbc695a

### 7. Education (`#education`)
- **BS Information Technology** @ Lyceum of San Pedro (Graduated May 2026)
- Deportment Award

### 8. Contact (`#contact`)
- 2x2 grid of contact cards: Email, Phone (+639922336236), LinkedIn, GitHub
- Prominent "Send me an email" button
- Open to junior dev roles, IT tech support, and freelance opportunities

---

## Notable Interactions

| Feature | Details |
|---|---|
| **Scroll reveals** | All sections animate in via `<Reveal>` (Framer Motion `whileInView`, once, -80px margin) |
| **Floating particles** | 26 blue/purple circles float upward continuously in the background |
| **Blur orbs** | 3 large ambient glow orbs positioned in background layers |
| **Glass navbar** | Transparent → blurred glass transition on scroll past 16px |
| **Mobile menu** | Slide-down hamburger menu with glass links |
| **Lightbox modal** | Full-screen browser mockup for LifeVault screenshots; Escape key dismiss |
| **FAB button** | Floating "Hire Me" button appears after 600px scroll |
| **Nav highlighting** | Intersection Observer tracks active section (state ready, visual wiring pending) |
| **Terminal cursor** | Blinking purple block cursor on hero terminal animation |
| **Status pulse** | "Available" badge has `animate-ping` ring effect |
| **Hover lifts** | Skills cards, contact cards lift with spring physics on hover |

---

## File Structure

```
app/
├── globals.css
├── layout.tsx
└── page.tsx
components/
├── animated-background.tsx
├── brand-icons.tsx
├── hire-me-button.tsx
├── navbar.tsx
├── reveal.tsx
├── site-footer.tsx
├── sections/
│   ├── about.tsx
│   ├── certifications.tsx
│   ├── contact.tsx
│   ├── education.tsx
│   ├── experience.tsx
│   ├── hero.tsx
│   ├── itsupport.tsx
│   ├── projects.tsx
│   └── skills.tsx
└── ui/
    ├── badge.tsx
    ├── button.tsx
    └── card.tsx
lib/
└── utils.ts
public/
└── projects/
    ├── lifevault-*.png (5 screenshots)
    ├── parish-website.png
    ├── android-app.png
    └── pcfixai.png
```
