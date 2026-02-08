import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import { getPageContent, get } from "@/lib/content";
import { SiteContentProvider } from "@/lib/site-content-context";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Foody Parrot | The Social Gist Platform",
  description: "Join Foody Parrot - the revolutionary social media app where you react to gists. Discover trending conversations, share your reactions, and connect with a community that speaks your language.",
  keywords: ["social media", "gists", "reactions", "community", "foody parrot", "social app"],
  authors: [{ name: "Foody Parrot Team" }],
  openGraph: {
    title: "Foody Parrot | The Social Gist Platform",
    description: "Join Foody Parrot - the revolutionary social media app where you react to gists.",
    type: "website",
  },
};

export const revalidate = 60;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch global navbar and footer content from CMS
  const content = await getPageContent(['navbar', 'footer', 'global']);
  
  const navbarContent = content.navbar || {};
  const footerContent = content.footer || {};
  const globalContent = content.global || {};

  const siteContent = {
    navbar: {
      logo: get(globalContent, 'global.logo', '/logo.png'),
      brandName: get(globalContent, 'global.siteName', 'FoodyParrot'),
      links: get(navbarContent, 'navbar.links', [
        { href: '/', label: 'Home' },
        { href: '/features', label: 'Features' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy' },
      ]),
      ctaText: get(navbarContent, 'navbar.ctaText', 'Download App'),
      ctaLink: '#download',
    },
    footer: {
      brandDescription: get(footerContent, 'footer.tagline', 'The social platform where conversations come alive through gists and reactions. Join the flock today!'),
      newsletterTitle: get(footerContent, 'footer.newsletter.title', 'Stay in the loop'),
      newsletterSubtitle: get(footerContent, 'footer.newsletter.subtitle', 'Get the latest updates, features, and gists delivered to your inbox.'),
      links: {
        product: get(footerContent, 'footer.links.product', [
          { label: 'Features', href: '/features' },
          { label: 'How It Works', href: '/#how-it-works' },
          { label: 'Download', href: '#download' },
        ]),
        company: get(footerContent, 'footer.links.company', [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Careers', href: '/contact' },
        ]),
        legal: get(footerContent, 'footer.links.legal', [
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/privacy' },
          { label: 'Cookie Policy', href: '/privacy' },
        ]),
      },
      socialLinks: get(globalContent, 'global.socialLinks', [
        { label: 'Twitter', href: '#' },
        { label: 'Instagram', href: '#' },
        { label: 'TikTok', href: '#' },
        { label: 'LinkedIn', href: '#' },
      ]).map((s: { platform?: string; url?: string; label?: string; href?: string }) => ({
        label: s.label || s.platform || '',
        href: s.href || s.url || '#',
      })),
      bottomText: get(footerContent, 'footer.madeWith', 'Made with 💚 for food lovers everywhere'),
    },
    global: {
      siteName: get(globalContent, 'global.siteName', 'Foody Parrot'),
      siteDescription: get(globalContent, 'global.siteTagline', 'The social platform where conversations come alive'),
      primaryColor: '#5BBB69',
    },
  };

  return (
    <html lang="en">
      <body className={`${syne.variable} ${outfit.variable} antialiased noise-overlay`}>
        <SiteContentProvider content={siteContent}>
          {children}
        </SiteContentProvider>
      </body>
    </html>
  );
}
