# Project Overview

This is a Next.js 15 application built with TypeScript, Tailwind CSS, and `next-intl` for internationalization. The project serves as a portfolio and service showcase for a company named "EH Services". It features a modern design with animations powered by GSAP and uses a component-based architecture with ShadCN UI components.

## Key Technologies

-   **Framework:** Next.js 15 (with App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS with PostCSS
-   **UI Components:** Custom components in `components/ui` inspired by ShadCN.
-   **Internationalization (i18n):** `next-intl` is used for managing translations and localized routing. Supported locales are German (`de`) and English (`en`).
-   **Animations:** GSAP (GreenSock Animation Platform) is used for page animations and transitions.
-   **Linting:** ESLint is configured for code quality.

## Project Structure

-   `app/[locale]/`: Contains the pages for the application, organized by locale.
-   `components/`: Reusable React components, categorized into `layout`, `providers`, and `ui`.
-   `hooks/`: Custom React hooks, like `use-gsap.ts`.
-   `i18n/`: Configuration for `next-intl`, including navigation, request handling, and routing.
-   `lib/`: Utility functions.
-   `messages/`: Translation files (`de.json`, `en.json`).
-   `public/`: Static assets like images and SVGs.

## Building and Running

### Development

To run the development server:

```bash
npm run dev
```

This will start the application on `http://localhost:3000`. The site uses Turbopack for faster development.

### Building

To create a production build:

```bash
npm run build
```

This will generate an optimized build of the application in the `.next` directory.

### Production

To start the production server:

```bash
npm run start
```

### Linting

To run the linter:

```bash
npm run lint
```

## Development Conventions

-   **Component-Based Architecture:** The application is built with a strong emphasis on reusable components, located in the `components/` directory.
-   **Internationalization:** All user-facing text should be added to the `messages/de.json` and `messages/en.json` files and accessed via the `useTranslations` hook from `next-intl`.
-   **Routing:** All internal links should use the `Link` component from `@/i18n/navigation` to ensure proper locale handling.
-   **Styling:** Utility-first CSS with Tailwind CSS is the primary way to style components. Custom global styles are in `app/globals.css`.
-   **Animations:** Use the `use-gsap.ts` hook for GSAP animations to ensure proper cleanup.
-   **Images:** Use the `OptimizedImage` component for images to ensure they are properly optimized for the web.
-   **Type Safety:** The project is written in TypeScript, so all new code should be strongly typed.
