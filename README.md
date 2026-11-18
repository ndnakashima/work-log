# Work Log · Naomi D. Nakashima

A running record of my work in marketing operations, CRM and lifecycle marketing: **what I did, why it mattered, and what came of it**, organized by project.

**[View the log →](https://YOUR-USERNAME.github.io/work-log/)**

## What's in it

My 2026 work: CRM architecture and consent design, a full CRM audit, governance and naming standards, SMS safeguards, attribution, dashboards, lifecycle journeys, quiz funnels, AI in marketing ops, and my side project, Yazzah.

Entries are real but de-identified. My employer is described as "a healthcare company," colleagues and agencies aren't named, and internal figures are rounded or left out.

## How it works

- **Public view:** browse by project or see everything in order, and search across every entry. The site is read-only.
- **Edit mode (for me):** opening the site with `?edit` shows the editing tools. Changes save as a draft in that browser only. Publishing means downloading `data.js` and committing it to this repo, so only the repo owner can change what the public sees.
- **Excel export** in edit mode: one sheet for all activity, then one per project.

## Built with

- A single HTML file with vanilla JavaScript and CSS, no build step and no framework
- Data in `data.js`, so updates are one file
- [SheetJS](https://sheetjs.com/) for the Excel export
- Fraunces and Work Sans from Google Fonts
- Responsive layout and automatic dark mode

## Data model

```json
{
  "projects": [
    { "id": "crm-audit", "name": "CRM Audit & Data Quality", "codes": "audit, data quality", "status": "Active", "summary": "..." }
  ],
  "entries": [
    {
      "id": "a1", "projectId": "crm-audit", "date": "2026-10-08",
      "title": "...", "what": "...", "why": "...", "facts": "...",
      "outcome": "...", "skills": "...", "angle": "..."
    }
  ]
}
```

## License

The code is MIT licensed (see [LICENSE](LICENSE)). The work log content in `data.js` is © Naomi D. Nakashima.
