"""Build public/Publico_Bienvinido_James_Resume.pdf.

Run:  python scripts/build-resume.py

Layout mirrors the original resume: Helvetica, US Letter, #1A1A2E accent,
16pt name, 11pt section headings, 9.5pt body, accent rule under the header.
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import Paragraph, Spacer, HRFlowable, SimpleDocTemplate

OUT = "public/Publico_Bienvinido_James_Resume.pdf"

ACCENT = colors.HexColor("#1A1A2E")
GRAY = colors.HexColor("#444444")
MARGIN = 0.64 * inch

name_style = ParagraphStyle(
    "Name", fontName="Helvetica-Bold", fontSize=16, leading=19,
    alignment=1, textColor=ACCENT, spaceAfter=3,
)
tagline_style = ParagraphStyle(
    "Tagline", fontName="Helvetica", fontSize=10, leading=13,
    alignment=1, textColor=GRAY, spaceAfter=2,
)
contact_style = ParagraphStyle(
    "Contact", fontName="Helvetica", fontSize=9.5, leading=12.5,
    alignment=1, textColor=GRAY,
)
heading_style = ParagraphStyle(
    "Heading", fontName="Helvetica-Bold", fontSize=11, leading=14,
    textColor=ACCENT, spaceBefore=11, spaceAfter=4,
)
body_style = ParagraphStyle(
    "Body", fontName="Helvetica", fontSize=9.5, leading=13,
    textColor=colors.black, spaceAfter=3,
)
bullet_style = ParagraphStyle(
    "Bullet", parent=body_style, leftIndent=13, bulletIndent=2,
    spaceAfter=2.5,
)
title_style = ParagraphStyle(
    "ProjectTitle", fontName="Helvetica-Bold", fontSize=10, leading=13,
    spaceBefore=5, spaceAfter=2,
)
cont_style = ParagraphStyle(
    "Cont", parent=bullet_style, leftIndent=15,
)


def bullet(text: str) -> Paragraph:
    return Paragraph(text, bullet_style, bulletText="\u2022")


def heading(text: str) -> Paragraph:
    return Paragraph(text, heading_style)


story = [
    Paragraph("BIENVINIDO JAMES M. PUBLICO", name_style),
    Paragraph("Full-Stack Developer | Desktop Developer | IT Tech Support", tagline_style),
    Paragraph(
        "San Pedro, Laguna, Philippines | 0992 233 6236 | publicojamesmangao25@gmail.com",
        contact_style,
    ),
    Paragraph("GitHub: github.com/JamesMangao | Portfolio: bjp-portfolio.vercel.app", contact_style),
    Spacer(1, 7),
    HRFlowable(width="100%", thickness=1, color=ACCENT, spaceAfter=2),
]

story.append(heading("PROFESSIONAL SUMMARY"))
story.append(Paragraph(
    "BS Information Technology graduate with hands-on experience in full-stack web development "
    "(Laravel, PHP, PostgreSQL), Windows desktop development (Tauri 2, Rust, React), mobile and "
    "offline-first web app development (Flutter, Supabase), and IT technical support (500-hour OJT "
    "at Milestone Computers Laguna). Built real, deployed projects — from AI-powered web platforms "
    "and artisan e-commerce systems to an offline-first point-of-sale running in production at an "
    "artisan pop-up booth. Certified by Cisco Networking Academy in IT Customer Support Basics and "
    "Computer Hardware Basics (July 2026). Open to IT Tech Support, Junior Developer, and Desktop "
    "Support roles.",
    body_style,
))

story.append(heading("SKILLS"))
skills = [
    ("<b>Web Development:</b> Laravel 12, PHP, MySQL, PostgreSQL, React 18, TypeScript, JavaScript, "
     "HTML5/CSS3, Tailwind CSS, Alpine.js, Firebase, Supabase, REST APIs"),
    ("<b>Desktop Development:</b> Tauri 2, Rust, Windows API (windows-rs), Zustand, Recharts, Framer Motion"),
    ("<b>Mobile &amp; Offline Apps:</b> Flutter, Android Studio, Flutter Web PWA, Drift (SQLite on WASM), "
     "Service Workers, Supabase sync, PDF receipts (pdf/printing)"),
    ("<b>AI Tools:</b> ChatGPT, Claude, Gemini, Perplexity, Ollama (local AI), AI provider REST API integration"),
    ("<b>IT Support:</b> Hardware Diagnostics, OS Installation, PC Assembly, Network Troubleshooting, "
     "End-User Support"),
    ("<b>Tools:</b> Git, GitHub, VS Code, Render, Cloudflare Pages, Docker, IIS Express | "
     "<b>Languages:</b> JavaScript, TypeScript, PHP, Python, Java, C++, Rust, VB.NET"),
]
for s in skills:
    story.append(bullet(s))

story.append(heading("PROFESSIONAL EXPERIENCE"))
story.append(Paragraph(
    "<b>IT Technician Intern (500 Hours) — Milestone Computers Laguna, San Pedro, Laguna</b>",
    body_style,
))
experience = [
    "Diagnosed and resolved 10+ hardware and software issues per week across desktop and laptop "
    "systems, minimizing client downtime and repeat visits.",
    "Assembled and performance-tested PC builds against quality checklists before client handoff, "
    "reducing returns due to hardware defects.",
    "Delivered end-user technical support with clear, structured troubleshooting, improving client "
    "satisfaction and repeat trust in the shop.",
    "Installed and configured operating systems, drivers, and software, ensuring consistent "
    "performance and fewer post-setup support calls.",
    "Performed preventive maintenance on client systems, cutting recurring technical failures and "
    "extending hardware lifespan.",
]
for e in experience:
    story.append(bullet(e))

story.append(heading("PROJECTS"))

story.append(Paragraph(
    "STAR:DOM POS — Offline-First Booth Point-of-Sale (Flutter Web PWA) | stardom-pos.pages.dev",
    title_style,
))
for b in [
    "Solo developer: shipped an installable PWA point-of-sale for a real artisan pop-up booth (iPad), "
    "recording sales with zero network via local SQLite (Drift on WASM) and syncing to Supabase "
    "whenever Wi-Fi returns.",
    "Built five adaptive screens (Sell, Orders, Products, Reports, Settings), 80 mm PDF receipts "
    "through the iPad share sheet, cash count and Close Day reporting, and barcode scanning.",
    "Hardened delivery with a service-worker offline shell, same-origin assets (no CDN at runtime), "
    "owner sign-in, and a release build that fails if any secret leaks; deployed on Cloudflare Pages.",
]:
    story.append(bullet(b))

story.append(Paragraph(
    "PCFixAI — Offline-First AI-Powered Windows Desktop App (v1.5.1) | github.com/JamesMangao/PCFixAI",
    title_style,
))
for b in [
    "Solo developer: shipped a Windows desktop app (Tauri 2 / Rust backend, React 18 + TypeScript) "
    "with parallel diagnostic scans (~60% faster), 40+ system tools across 10 manager tabs, and "
    "optional AI chat via Ollama with offline fallback.",
    "Built virus scanner with Windows Defender integration, event log analyzer (BSOD + system errors), "
    "power plan manager, exportable HTML system reports, and health history trend tracking.",
    "Implemented safe auto-fix agent (backs up startup entries before removal), real browser cache "
    "paths (Chrome, Edge, Brave, Firefox, Vivaldi, Opera), working hibernation toggle, and PowerShell "
    "injection prevention.",
    "Added light/dark themes, keyboard shortcuts (Ctrl+1-5, Ctrl+K), privilege detection with UAC "
    "warnings, and job history with exit codes. Deployed at v1.5.1 with 20+ stability patches.",
]:
    story.append(bullet(b))

story.append(Paragraph(
    "STAR-DOM — Artisan E-Commerce Platform (33 Pages) | github.com/JamesMangao/STAR-DOM",
    title_style,
))
story.append(bullet(
    "Full-stack developer: built a 33-page ASP.NET Web Forms e-commerce platform with PostgreSQL, "
    "GCash/GOtyme e-wallet payments with two-step verification, and J&amp;T Express shipping integration."
))
story.append(bullet(
    "Implemented commission pipeline for custom artisan work, merchant studio dashboard, BIR-style "
    "receipts with VAT breakdown, and CSRF protection."
))

story.append(Paragraph(
    "LifeVault — AI-Powered Journaling Platform | lifevault-t8jq.onrender.com",
    title_style,
))
story.append(bullet(
    "Lead Developer (team of 3): built and deployed a full-stack Laravel 12 app (Blade, Firebase) as "
    "the team's finals deliverable."
))
story.append(bullet(
    "Integrated three AI providers via REST APIs to power an AI chatbot and Resume Analyzer "
    "(Tesseract OCR/Poppler), delivering automated, personalized feedback."
))

story.append(Paragraph(
    "Parish Website — Catholic Parish Management System | sto-rosario-parish.onrender.com",
    title_style,
))
story.append(bullet(
    "Built a Laravel 12 / Supabase portal covering mass intentions, events, gallery, bulletins, and "
    "inquiries, with batch status updates and automated email notifications."
))
story.append(bullet(
    "Engineered role-based access control (Super Admin, Staff, SocCom) and deployed on Render's free "
    "tier with uptime monitoring."
))

story.append(Paragraph(
    "EcoCycle — Smart Recycling Reward System (Capstone) | Flutter, Laravel, MySQL, IoT",
    title_style,
))
story.append(bullet(
    "Full-stack and mobile developer: built a Flutter app (reward tracking, QR scanning, redemption) "
    "and a Laravel/MySQL admin dashboard, integrated with an IoT recycling bin for real-time data exchange."
))

story.append(heading("EDUCATION"))
story.append(Paragraph(
    "<b>Bachelor of Science in Information Technology</b> — Lyceum of San Pedro | Graduated May 2026 | "
    "Deportment Award Recipient",
    body_style,
))

story.append(heading("CERTIFICATIONS"))
story.append(bullet(
    "<b>freeCodeCamp</b> (July 2026): Responsive Web Design, JavaScript Algorithms and Data Structures, "
    "Front-End Development Libraries, Scientific Computing with Python"
))
story.append(bullet(
    "<b>Cisco Networking Academy</b> (July 2026): IT Customer Support Basics, Computer Hardware Basics"
))

doc = SimpleDocTemplate(
    OUT,
    pagesize=letter,
    leftMargin=MARGIN,
    rightMargin=MARGIN,
    topMargin=0.55 * inch,
    bottomMargin=0.5 * inch,
    title="Bienvinido James Publico — Resume",
    author="Bienvinido James Publico",
)
doc.build(story)
print(f"wrote {OUT}")
