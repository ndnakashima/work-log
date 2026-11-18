/*
  Sample data for the Work Log. Everything here is fictional.
  It loads only the first time the page opens in a browser (or whenever no saved log exists).
  Once you add or edit anything, your own log is saved in the browser and this file is ignored.
*/
window.SAMPLE_DATA = {
  projects: [
    {
      id: "crm-migration",
      name: "CRM Migration",
      codes: "CRMX, platform move",
      status: "Done",
      summary: "Moving marketing and sales from a legacy CRM to a new platform without losing consent history or reporting."
    },
    {
      id: "welcome-series",
      name: "Welcome Series Rebuild",
      codes: "WELC, onboarding",
      status: "Active",
      summary: "Replacing a single receipt email with a short welcome journey for first-time buyers."
    },
    {
      id: "lead-dashboard",
      name: "Daily Lead Dashboard",
      codes: "DASH, morning numbers",
      status: "Active",
      summary: "One page leadership opens every morning to see lead volume, speed to lead and booking rate."
    }
  ],
  entries: [
    {
      id: "s1",
      projectId: "crm-migration",
      date: "2026-03-14",
      createdAt: "2026-03-14T15:00:00Z",
      title: "Mapped consent before moving a single record",
      what: "Built a field map for every opt-in and opt-out field in the old CRM, including which channel each one controls.",
      why: "Records are easy to move. Consent history is what gets lost, and it is the part that protects customers.",
      facts: "Fictional example: 14 consent fields consolidated into 1 opt-in plus 3 channel opt-outs.",
      outcome: "Cutover kept every opt-out intact; no re-permission campaign needed.",
      skills: "Data mapping, consent design, CRM migration",
      angle: "Migrating records is the easy part.",
      source: "Sample entry"
    },
    {
      id: "s2",
      projectId: "crm-migration",
      date: "2026-04-02",
      createdAt: "2026-04-02T15:00:00Z",
      title: "Cut lead response time after go-live",
      what: "Rebuilt lead routing so new leads reach a rep's queue the moment they submit a form.",
      why: "Leads were waiting days because routing depended on a nightly sync.",
      facts: "Fictional example: average response time went from 3 days to under 12 hours.",
      outcome: "Faster first contact and a cleaner handoff between marketing and sales.",
      skills: "Lead routing, workflow design, sales ops",
      angle: "Speed to lead is a systems problem, not a rep problem.",
      source: "Sample entry"
    },
    {
      id: "s3",
      projectId: "welcome-series",
      date: "2026-05-20",
      createdAt: "2026-05-20T15:00:00Z",
      title: "Scoped a two-email welcome between receipt and first sales call",
      what: "Wrote the brief: one product-led email, then one brand-led email, before outreach starts.",
      why: "First-time buyers heard from sales before they heard from the brand.",
      facts: "",
      outcome: "Brief approved; build scheduled.",
      skills: "Lifecycle strategy, briefs, stakeholder alignment",
      angle: "The receipt is not a retention strategy.",
      source: "Sample entry"
    },
    {
      id: "s4",
      projectId: "lead-dashboard",
      date: "2026-06-03",
      createdAt: "2026-06-03T15:00:00Z",
      title: "Defined the five numbers leadership checks every morning",
      what: "Agreed definitions for new leads, speed to lead, connect rate, meetings booked and booking rate.",
      why: "Three teams were reporting three different lead counts.",
      facts: "Booking rate = meetings booked / new leads created.",
      outcome: "One shared definition sheet adopted across teams.",
      skills: "Metric design, reporting, cross-team alignment",
      angle: "Three definitions of a lead means three competing realities.",
      source: "Sample entry"
    },
    {
      id: "s5",
      projectId: "lead-dashboard",
      date: "2026-06-24",
      createdAt: "2026-06-24T15:00:00Z",
      title: "Replaced a manual morning pull with a live dashboard",
      what: "Connected the dashboard to aggregate CRM counts so it refreshes on its own.",
      why: "The manual pull took over an hour every morning.",
      facts: "Fictional example: about 6 hours a week saved.",
      outcome: "Leadership and ops now look at the same numbers each day.",
      skills: "Dashboards, CRM reporting, automation",
      angle: "I stopped pulling my morning report by hand.",
      source: "Sample entry"
    }
  ]
};
