1. Wireframe & Layout Decisions
Overall Layout Approach

The structure of the website is inspired by modern digital news platforms that prioritize quick scanning and clear hierarchy of information. The interface focuses heavily on readability and accessibility.

Top Navigation Bar: A fixed header that remains visible while scrolling. It includes a mobile-friendly hamburger toggle and uses a bold red tone (#b91c1c) to resemble the style of Indian news outlets like LiveHindustan.

Featured Article (Hero Block): A visually dominant section at the top of the homepage that highlights the most important story. The hero image spans the full width with a subtle overlay for improved text contrast.

Primary Article Feed: On larger screens, articles are arranged in a structured 2-column layout that provides high content density without overwhelming the reader. This helps users browse multiple stories at once.

Right-Side Sidebar (Desktop Only): Contains the “Trending” or “Most Viewed” section. This encourages users to interact with high-engagement stories and increases session time.

Footer Section: Placed at the bottom of every page, containing essential links and credits. Styled minimally to avoid distraction.

Responsive Behavior

On Mobile Devices:

The interface collapses into a single-column scrollable feed.

The hero story is placed at the top, followed by recent articles, with the trending section stacked underneath.

On Larger Screens:

The layout expands into a 12-column grid.

Main content spans 8 columns, while the sidebar occupies 4 columns.

This grid-based division creates visual balance and mirrors common news portal layouts.

2. Data Fetching Logic
Using Next.js App Router with Server Components

To align with the latest Next.js development patterns, the project uses the App Router instead of the older Pages Router.

Homepage Data Loading (/)

Implemented directly inside a Server Component using an asynchronous data-fetching function.

This provides behavior similar to server-side rendering with simplified logic.

Cached responses can be added later if real content is fetched from an API.

Individual Article Pages (/news/[id])

These pages are generated using Static Site Generation (SSG) through generateStaticParams.

Since article content doesn’t change often, static generation improves loading speed and SEO.

All article IDs are collected at build time, enabling Next.js to pre-render every article page.

Mock Backend Layer

The data source consists of a local module created for reliability during development.

A custom API file (lib/api.ts) provides functions for retrieving article lists and details.

A small artificial delay simulates real network conditions.

Each article contains rich fields (summary, body, author, timestamps) to properly test the UI.

3. Codebase Organization
UI Components

Navbar

Implemented as a Client Component due to the need for interactive menu toggling.

Includes responsive behavior for both mobile and desktop.

Hero Component

Displays the main headline with a large image and overlay.

Ensures the featured story stands out visually.

NewsCard

Reusable preview card for articles.

Includes logic to handle cases where no image is available.

Sidebar

Displays popular or trending posts.

Designed specifically for desktop layouts to improve navigation depth.

Article Data Model

The application uses the following interface to structure article objects:

interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;  // supports HTML formatting
  imageUrl?: string;
  category: string;
  publishedAt: string;
  author: string;
}


This ensures consistency across components and simplifies rendering.

4. Challenges Encountered & How They Were Addressed
1. Image Optimization Issues

Some images were loaded from external placeholder services, which required updating the next.config.ts with appropriate remotePatterns. This prevented build-time image errors and ensured consistent rendering.

2. Avoiding Hydration Errors

Since the navigation menu is a Client Component, mismatches between server-rendered and client-rendered output could have occurred. Careful attention to initial states and conditional rendering helped avoid hydration warnings.

3. TailwindCSS v4 Compatibility

The project uses the latest Tailwind version, which relies heavily on CSS variables rather than the older utility injection system.
To maintain a consistent light-theme design:

I cleaned up redundant styles from previous versions.

The global CSS was reorganized to better suit Tailwind’s new approach.