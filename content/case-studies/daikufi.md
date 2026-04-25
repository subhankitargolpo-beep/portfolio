---
title: "DaikuFi"
subtitle: "AI-Powered Personal Finance PWA"
description: "A comprehensive Progressive Web App designed to simplify budgeting by integrating modern payment logging (QR scanning) and AI-driven financial insights."
tags: ["PWA", "AI", "Firebase", "ml5.js"]
role: "Full Product Owner"
metrics: ["AI Assistant (Daiko)", "QR Payment Scanning", "Dual-mode Data Sync"]
externalUrl: "https://daikufi.netlify.app/"
featured: true
theme: "from-emerald-500 to-teal-700"
prdUrl: "/docs/case-studies/daikufi/prd.pdf"
researchUrl: "/docs/case-studies/daikufi/research.pdf"
uatUrl: "/docs/case-studies/daikufi/uat.pdf"
architectureUrl: "/docs/case-studies/daikufi/architecture.pdf"
---

### The Product Requirements (PRD)

**Objective**: To create a low-friction financial management tool that bridges the psychological gap between spending and logging.

#### User Stories & Features
- **As a user**, I want to scan a UPI QR code and automatically trigger a transaction log so I don't forget to track my expenses.
- **As a user**, I want to speak to my app to ask for budget advice (e.g., "Can I afford dinner tonight?") and get a data-driven answer.
- **As a product owner**, I want to ensure the app works in low-connectivity areas (Offline-First approach).

---

### Market Research & User Empathy

Through user interviews with college students and young professionals, we identified a recurring "Friction Loop":
1. User spends money.
2. User intends to log it later.
3. User forgets.
4. User loses visibility of finances.

**DaikuFi** solves this by inserting the logging step *into* the payment process via the integrated scanner.

---

### Technical Deep-Dive & UAT

The application was built as a PWA to ensure cross-platform accessibility without the overhead of App Store deployments.

- **Frontend**: Next.js with Tailwind CSS for a responsive, mobile-first UI.
- **Intelligence**: Integrated **ml5.js** for client-side NLP, ensuring privacy and speed.
- **Testing (UAT)**: Conducted 3 rounds of internal testing focusing on "Time to Log" (reduced by 40% vs traditional apps) and "Accuracy of AI Insights."
---
