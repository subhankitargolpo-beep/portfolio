# Cooked this Paperfolio template with V0 | Here’s the template you can use for free

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://v0.link/nikhil-shukla)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.link/paperfolio)

![Paperfolio Template Preview](https://global.discourse-cdn.com/vercel/original/2X/e/e8a5d554ecf92e4adb4a718138c60ad7e0c7510e.png)

I’ve been experimenting with **V0 - by Vercel**, and I rebuilt the popular **Paperfolio** layout originally created by **Brix Templates**.
This is a community-made clone — all ownership of the original design stays with @brixtemplatesbrixtemplates.
My goal was simply to recreate it in V0 so anyone can use or remix it.

---

## Live Demo & Template Access

**→  Template (Clone / Remix):** https://v0.link/paperfolio

**→  Live Preview:** https://v0-paperfolio.vercel.app

---

## Video Walkthrough

**→ Watch the walkthrough on X:**
[https://x.com/i/status/1994130537464910310](https://x.com/i/status/1994130537464910310)

---

## Editable Portfolio v1

This portfolio is built with Next.js (App Router) and is powered by Markdown files in the `content/` directory.

## How to Edit

### 1. Global Site Content
Edit `content/home.md` to update:
- Site name and contact email.
- Navigation labels and links.
- Hero section (title, description, metrics).
- Section headings (Services, Portfolio, Experience, etc.).
- Marquee items.
- Footer text and social links.

### 2. Case Studies (Portfolio)
Add or edit `.md` files in `content/case-studies/`.
Required frontmatter:
```yaml
title: "Project Title"
subtitle: "Short Subtitle"
description: "Brief overview"
tags: ["Tag1", "Tag2"]
role: "Your Role"
metrics: ["Metric 1", "Metric 2"]
externalUrl: "https://link-to-project.com"
featured: true
theme: "from-blue-500 to-cyan-500" # Tailwind gradient classes
```

### 3. Experience
Add or edit `.md` files in `content/experience/`.
Required frontmatter:
```yaml
company: "Company Name"
role: "Your Role"
period: "Dates"
description: "What you did"
metrics: ["Achievement 1", "Achievement 2"]
order: 1 # For sorting
```

### 4. Writings (Articles)
Add or edit `.md` files in `content/writings/`.
Required frontmatter:
```yaml
title: "Article Title"
description: "Short summary"
date: "YYYY-MM-DD"
url: "https://link-to-article.com"
category: "Category"
platform: "Medium/Substack/etc"
```

### 5. Skills & Services
- Edit `content/skills.md` to group your skills by category.
- Edit `content/services.md` to list your service cards. For icons, use Lucide icon names (e.g., `Layout`, `Cpu`, `BookOpen`, `Target`, `Settings`, `BarChart`, `GraduationCap`, `Bot`, `Code`).

### 6. Testimonials
Add or edit `.md` files in `content/testimonials/`.
Required frontmatter:
```yaml
name: "Person's Name"
role: "Their Role"
company: "Their Company"
content: "The testimonial text"
```

### 7. CV/Resume
Replace the file at `public/cv/resume.pdf` with your own PDF. The "Download CV" buttons are already linked to this path.

## Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
```

---

## How to Use It

1. Open the template → https://v0.link/paperfolio
2. Click on “Open in V0”
3. Make your styling tweaks
4. Deploy on Vercel

That’s it — you have a clean, modern portfolio site ready to ship.

---

If you end up customizing this, I’d like to see what you build.
