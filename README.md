# Animus Genetic Archive | Assassin's Creed Cinematic Timeline

An interactive, scroll-driven cinematic storytelling showcase and dossier database tracking 14 genetic memory sequences across the *Assassin's Creed* timeline, built in the style of the premium Game of Thrones interactive showcase.

> [!NOTE]  
> **Status: Work in Progress (WIP)**  
> This archive is currently undergoing asset refinements and timeline calibration. New memory sequences and dossier portfolios are actively being synchronized.

---

## 🎬 Core Features

1. **Scroll-Driven Cinematic Timeline**
   * Pinned sticky theater viewport utilizing GSAP and ScrollTrigger.
   * Split-screen layout: high-contrast transparent character showcases on the right, bold story and historical descriptors on the left.
   * Responsive layout support: transitions character portraits into watermarks behind the text on mobile viewports for optimal readability.
2. **Foreground Gold Game Logos**
   * Centered-left foreground gold logos that fade and transition dynamically on scroll.
   * Programmatic themed glows (dynamic drop-shadow filter glow) matched to each game's individual theme colors.
   * Auto-exclusion logic that shifts to subtle dark shadows for characters with white/grey clothing to prevent visual clashing.
3. **Genetic Dossier Archive Grid**
   * Dynamic directory card grid built below the main timeline for direct queries.
   * Immersive modal dossiers detailing location briefs, eras, historical timelines, and transparent profile portraits.
4. **Solid Dark Aesthetics**
   * Premium cool-dark Abstergo UI styling.
   * Deep pitch black background layout for maximum text legibility and high-contrast visuals.

---

## 📂 Project Structure

```
assassins-timeline/
├── assests/
│   └── Images/
│       ├── characters_images/  ← Transparent character renders & portraits
│       └── logos/              ← Gold game logos & sigils
├── index.html                  ← Core document layout (GSAP integration)
├── app.js                      ← Timeline logic, card populator, and scroll animations
├── LICENSE                     ← MIT License details
└── README.md                   ← Documentation
```

---

## 🛠️ Local Setup

Simply serve the project folder using any local static web server.

### Option A: Python HTTP Server (Simple)
If you have Python installed, navigate to the folder and run:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

### Option B: VS Code Live Server Extension
Right-click on `index.html` and select **"Open with Live Server"**.

---

## 📄 License & Copyright

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  
Copyright © 2026 Haris. All rights reserved.
