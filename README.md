# Work Log

A simple, private work log for tracking **what you did, why it mattered, and what came of it**, organized by project. I built it so I'd never again have to reconstruct a year of work from memory when it's time to update a resume, write a case study, prepare for a review, or draft a LinkedIn post.

**[Live demo →](https://ndnakashima.github.io/work-log/)** (loads with my real 2026 work log, de-identified)

## Why it exists

When you work across a dozen projects at once, the details blur fast: what shipped when, which number moved, why a decision was made. Each entry captures the same structured fields, so the log turns directly into resume bullets, interview stories and case studies.

## Features

- **One timeline per project**, plus an "All activity" view that shows everything in the order it happened
- **Structured entries:** what I did, why it mattered, supporting facts and sources, outcome, skills and tools, and a one-line story angle
- **Search** across every entry, project name and project code
- **Project status** (Active, Paused, Done) and codes/nicknames, so short names find the right project
- **Export to Excel:** one sheet for all activity, then one sheet per project
- **Back up and restore** the whole log as a JSON file
- **Private by default:** everything is stored in your own browser (localStorage). No account, no server, no tracking
- Responsive layout and automatic dark mode

## Use it

1. Open `index.html` in any modern browser, or use the live demo.
2. Explore the sample data, then create your own project and add entries.
3. Click **Back up (JSON)** regularly. Browser storage can be cleared, and a backup is the only copy that leaves your browser.

The log opens with my own entries. To use it for yourself, delete those projects in the app (your copy saves in your browser), or fork the repo and replace the arrays in `sample-data.js` with empty ones (`projects: []`, `entries: []`).

## How it's built

- A single HTML file with vanilla JavaScript and CSS, no build step and no framework
- [SheetJS](https://sheetjs.com/) for the Excel export
- Fraunces and Work Sans from Google Fonts

## Data model

```json
{
  "projects": [
    { "id": "welcome-series", "name": "Welcome Series Rebuild", "codes": "WELC, onboarding", "status": "Active", "summary": "..." }
  ],
  "entries": [
    {
      "id": "abc123", "projectId": "welcome-series", "date": "2026-05-20",
      "title": "...", "what": "...", "why": "...", "facts": "...",
      "outcome": "...", "skills": "...", "angle": "...", "source": "Added by hand"
    }
  ]
}
```

## About

Built by **Naomi D. Nakashima**, marketing operations and lifecycle leader. The entries in `sample-data.js` are my real work from 2026, de-identified: my employer is described generically, colleagues and agencies aren't named, and internal figures are rounded or left out.

## License

MIT. See [LICENSE](LICENSE).
