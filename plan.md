# EH Services Data Fetch and Integration Plan

## Overview
This plan outlines the phased implementation to fetch content from https://ehservices.ddns.net/ and integrate it into the Next.js app, updating messages files (de.json, en.json) and components for German and English support. Each phase is designed to be executed one prompt at a time, with stops for user confirmation.

## Phases

### Phase 1: Create Plan File
- Create this plan.md file with all phases, tasks, and tracking sections.
- Status: Completed

### Phase 2: Fetch and Integrate Home Page Content
- Use Playwright to scrape home page content (hero section, services overview, stats, CTA).
- Update de.json with German content from the site.
- Translate to English and update en.json.
- Update page.tsx component if needed to match new content structure.
- Status: Completed

### Phase 3: Fetch and Integrate Portfolio Page Content
- Scrape portfolio page (project descriptions, links, images if available).
- Update messages for portfolio section in both languages.
- Modify portfolio/page.tsx to display fetched projects.
- Status: Completed

### Phase 4: Fetch and Integrate Contact Page Content
- Scrape contact page (form fields, contact details, info cards).
- Update contact messages and component.
- Ensure form integration if backend needed.
- Status: Completed

### Phase 5: Fetch and Integrate Legal Pages
- Scrape impressum, datenschutz, agb pages.
- Move content to messages or keep in dynamic rendering.
- Update legal page components.
- Status: Completed

### Phase 6: Handle Missing Pages
- Check for updates on about, services, pricing, faq, agb pages.
- If content available, fetch and integrate; else use app placeholders.
- Status: Completed (redone with packages page, FAQs from home, datenschutz update)

### Phase 7: Translate and Update English Content
- Review all new German content and ensure accurate English translations in en.json.
- Validate consistency across languages.
- Status: Completed

### Phase 8: Test and Validate Integrations
- Test i18n routing, content loading, SEO metadata.
- Run builds and checks for errors.
- Status: Completed

## Tracking Notes
- Current Phase: 8
- Notes: Phase 8 completed. Build successful with no errors. Fixed Link issue in portfolio and unused variable in theme-toggle. All pages generated for en/de locales. i18n routing validated. All phases completed successfully.