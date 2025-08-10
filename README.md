# OMR Reviews Frontend Challenge

## Overview
This project implements a **Nuxt 3 + Vue 3** dashboard to visualize pre-aggregated HubSpot Marketing Hub evaluation data.  
The app has two pages:
- **About page** — contains development notes and reasoning.
- **Landing page** — displays a horizontal bar chart of aggregated conversation data.

The MVP focuses on:
- **Dataset**: Question 1 (~100 data points)
- **Filter**: Industry
- **Data source**: Static JSON import (with optional future `useFetch` support)

---

## Features
- Horizontal **Chart.js** bar chart showing `responseValue` vs. number of mentions.
- **Filtering**: Industry filter with instant updates.
- **Aggregation & sorting** in vanilla TypeScript.
- Modular UI: `FilterOptions` and `BarChart` components.
- Simple **Tailwind CSS** styling for clarity.
- State managed in `index.vue` and passed to child components as props.

---

## Technical Decisions
- **Data handling**: Static import for speed.
- **No PandasJS**: Avoided due to outdated maintenance; vanilla TS is sufficient.
- **MVP scope**: Focused on one dataset and one filter for clarity and time management.
- **TypeScript**: Strong typing where possible; loosened in `FilterState` for simpler, maintainable filter handling.
- **Chart.js**: Chosen for reliability, easy integration, and small bundle size in v4.

---

## Trade-offs & Future Improvements
- **Composable separation**: Aggregation/filtering logic is in `index.vue` for MVP speed, but can be moved to a composable for reuse.
- **Responsiveness**: Currently desktop-first; filters could collapse into a drawer for mobile.
- **Accessibility**: More a11y work planned.
- **Additional datasets**: Q2 and Q3 could be added with minimal extra code.

---

## How to Run

1. Install dependencies
```bash
npm install
```
2. Run in development mode
```bash
npm run dev
```
The app will be available at http://localhost:3000 (or as shown in terminal).
