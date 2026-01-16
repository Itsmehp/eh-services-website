# Tech Stack: EH Services Portfolio & Showcase

This document outlines the core technologies and libraries used in the EH Services portfolio and service showcase website.

## 1. Core Technologies

*   **Programming Language:** TypeScript
    *   **Rationale:** Provides strong typing, improving code quality, maintainability, and developer experience, especially in larger projects.
*   **Framework:** Next.js 15 (with App Router)
    *   **Rationale:** A React framework that enables server-side rendering (SSR), static site generation (SSG), and API routes, leading to optimized performance, improved SEO, and a robust development experience. The App Router provides modern routing and data fetching capabilities.
*   **Styling:** Tailwind CSS with PostCSS
    *   **Rationale:** A utility-first CSS framework that allows for rapid UI development and ensures consistent design without writing custom CSS. PostCSS enhances CSS processing with plugins like autoprefixer.

## 2. Key Libraries and Tools

*   **UI Libraries:** Radix UI, Lucide React (components inspired by ShadCN)
    *   **Rationale:** Provides unstyled, accessible component primitives (Radix UI) and a comprehensive icon library (Lucide React), enabling the creation of custom, high-quality UI components that are consistent with the design guidelines.
*   **Internationalization (i18n):** `next-intl`
    *   **Rationale:** Integrates seamlessly with Next.js to provide robust internationalization features, supporting multiple languages (specifically German and English) and localized routing.
*   **Animation:**
    *   **GSAP (GreenSock Animation Platform):** A professional-grade JavaScript animation library used for creating high-performance, complex, and interactive animations.
    *   **Lottie-React:** For integrating After Effects animations exported as JSON files, enabling rich, scalable motion graphics.
    *   **Motion:** A simple yet powerful animation library for React, offering declarative animations and gestures.
    *   **Rationale:** The combination of these libraries allows for creating a visually engaging and dynamic user experience, aligning with the "playful, experimental, and cutting-edge" aspect of the brand identity.
*   **Form Management:** `react-hook-form`
    *   **Rationale:** A performant, flexible, and extensible forms library for React, simplifying form validation and submission.
*   **Carousel/Slider:** `swiper`
    *   **Rationale:** A modern touch slider that is free and open-source, providing smooth and responsive carousels for showcasing portfolio items or testimonials.
*   **Parallax Effects:** `react-parallax-tilt`
    *   **Rationale:** Enables the creation of interactive parallax tilt effects, adding a subtle layer of depth and engagement to UI elements.
