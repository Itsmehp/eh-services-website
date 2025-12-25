import { cn } from '@/lib/utils';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  className?: string;
  description: string;
  category?: string;
}

/**
 * Placeholder Image Component
 * 
 * Displays a placeholder with description text for AI image generation.
 * Use the 'description' prop to specify what image should be generated.
 * 
 * Example descriptions:
 * - "Modern web development team collaborating in a bright office with purple accent lighting"
 * - "Hero banner showing laptop with code editor, purple gradient background, professional"
 * - "Abstract 3D shapes floating with purple and violet colors, technology theme"
 */
export function PlaceholderImage({
  width = 800,
  height = 600,
  className,
  description,
  category = 'placeholder',
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border))]',
        className
      )}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id={`grid-${category}`}
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-[hsl(var(--primary)/0.3)]"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#grid-${category})`} />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.1)] via-transparent to-[hsl(var(--accent)/0.1)]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mb-4 rounded-2xl bg-[hsl(var(--primary)/0.2)] flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[hsl(var(--primary))]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Dimensions */}
        <p className="text-sm font-medium text-[hsl(var(--primary))] mb-2">
          {width} × {height}
        </p>

        {/* Description */}
        <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-xs leading-relaxed">
          {description}
        </p>

        {/* Category badge */}
        <span className="mt-4 px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))]">
          {category}
        </span>
      </div>
    </div>
  );
}

/**
 * Image descriptions for AI generation
 * 
 * Use these descriptions to generate images with AI tools like Midjourney, DALL-E, or Stable Diffusion.
 * Or use them as search terms for finding license-free images on sites like Unsplash, Pexels, or Pixabay.
 */
export const imageDescriptions = {
  hero: {
    main: "Modern web development agency hero image: Clean laptop showing code editor with purple syntax highlighting, floating 3D geometric shapes in violet and purple gradients, professional tech atmosphere, soft lighting, 16:9 aspect ratio, high quality render",
    background: "Abstract technology background with purple and violet gradient, subtle geometric patterns, flowing lines, modern and clean, suitable for website hero section",
  },
  services: {
    wordpress: "WordPress logo creatively integrated with modern web elements, purple color scheme, abstract 3D blocks representing content management, professional and clean design",
    react: "React.js development concept: 3D react logo with orbiting components, purple and blue neon glow, modern tech aesthetic, code snippets floating in background",
    design: "UI/UX design process illustration: wireframe sketches transforming into polished interface, purple accent colors, design tools and color palettes, creative workspace",
    maintenance: "Web maintenance concept: digital shield with gear icons, server racks in background, purple security theme, professional IT support visualization",
    seo: "SEO optimization concept: magnifying glass over search results, rising graph charts, keyword bubbles, purple and green accent colors, data analytics theme",
    hosting: "Cloud hosting visualization: modern data center with glowing servers, cloud infrastructure icons, purple and blue lighting, fast and secure hosting concept",
  },
  portfolio: {
    project1: "E-commerce website screenshot mockup: Modern online store with product grid, shopping cart, purple accent buttons, displayed on laptop and mobile devices",
    project2: "Corporate website mockup: Clean professional design with hero section, team photos placeholder, service cards, displayed on desktop monitor",
    project3: "Restaurant website design: Elegant food photography placeholder, menu section, reservation form, warm purple and gold accents, mobile responsive view",
    project4: "Tech startup landing page: Bold hero with product showcase, feature cards with icons, testimonial section, purple gradient background",
    project5: "Real estate platform mockup: Property listing grid, search filters, map integration placeholder, professional purple and white color scheme",
    project6: "Healthcare website design: Clean medical website with appointment booking, doctor profiles placeholder, trust badges, calming purple and white theme",
  },
  team: {
    member1: "Professional headshot placeholder: Silhouette with purple gradient background, modern geometric frame, space for team member photo",
    member2: "Professional headshot placeholder: Silhouette with violet gradient background, circular frame with subtle glow effect",
    member3: "Professional headshot placeholder: Silhouette with purple-blue gradient, square frame with rounded corners, professional setting",
    member4: "Professional headshot placeholder: Silhouette with lavender gradient, hexagonal frame, tech company aesthetic",
  },
  about: {
    office: "Modern web development agency office: Open workspace with multiple monitors showing code, team collaboration areas, purple accent lighting, plants and modern furniture, bright and inspiring atmosphere",
    mission: "Abstract visualization of digital transformation: Ascending path made of code and design elements, reaching toward glowing goal, purple and gold colors, inspirational business concept",
    values: "Core values illustration: Four interconnected puzzle pieces glowing with different purple shades, representing quality, innovation, transparency, and results",
  },
  testimonials: {
    avatar1: "Generic business person avatar: Professional silhouette with subtle purple border, suitable for testimonial sections",
    avatar2: "Entrepreneur avatar placeholder: Confident pose silhouette, purple gradient background, gender-neutral",
    avatar3: "Corporate client avatar: Professional outline with company badge placeholder, purple accent",
  },
  blog: {
    webDev: "Web development trends article thumbnail: Code editor with modern features, floating tech icons, purple gradient overlay, 16:9 ratio",
    design: "Web design article thumbnail: Color palette with purple focus, typography samples, layout wireframes, creative composition",
    business: "Business growth article thumbnail: Rising chart with digital elements, laptop showing analytics, purple and green accents",
  },
  icons: {
    feature1: "3D icon: Rocket launching with purple trail, symbolizing fast performance and growth",
    feature2: "3D icon: Shield with checkmark, purple glow, representing security and reliability",
    feature3: "3D icon: Puzzle pieces connecting, purple and violet colors, symbolizing custom solutions",
    feature4: "3D icon: Clock with lightning bolt, purple accent, representing quick turnaround",
  },
};
