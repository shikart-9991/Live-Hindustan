How AI Supported This Project

I leveraged AI tools throughout the development of this news portal, mainly to speed up repetitive tasks and refine certain implementation details. Specifically, I used AI in the following ways:

Template & Structure Creation

AI helped me quickly draft the initial layout for the homepage and article pages.

It generated starter components, which I later customized to match the layout style inspired by LiveHindustan.

UI & Styling Assistance

TailwindCSS utility classes were suggested to achieve the red-white theme commonly used by news platforms.

AI also provided guidance on setting up a responsive grid system and helped refine spacing, typography, and hover effects.

Sample Data Generation

Instead of manually writing placeholder articles, I used AI to produce believable headlines, summaries, and dummy text to simulate real-world news content.

Issues Identified & Improvements Made

Although AI sped up development, some of its suggestions needed correction or optimization:

Choosing the Correct Next.js Approach

The initial responses leaned toward the older Pages Router methods like getStaticProps.

I intentionally switched to the App Router and implemented generateStaticParams since it aligns with the latest Next.js best practices.

TailwindCSS v4 Adjustments

Since newer Next.js templates use Tailwind v4, I ensured my global styles matched the updated conventions.

For consistency, I removed unused dark mode configurations and kept the design strictly light-themed as expected for a news portal.

Image Rendering Fixes

AI-generated examples often miss image domain configurations.

I manually added the correct settings in next.config.ts to avoid Next.js image errors during development.

Personal Enhancements

Refined Mock Data: Rather than relying solely on AI, I curated the mock articles manually to test multiple cases—such as missing images, long titles, and different categories.

Responsive Navbar Logic: I wrote the mobile menu behavior myself using client-side state, ensuring smooth transitions between desktop and mobile layouts.

Consistent Branding: I adapted the color palette, spacing, and layout to resemble modern Hindi news sites while still keeping the design unique.