'use client';

import { createContext, useContext, ReactNode } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface SocialLink {
  label: string;
  href: string;
}

interface FooterLinks {
  product: Array<{ label: string; href: string }>;
  company: Array<{ label: string; href: string }>;
  legal: Array<{ label: string; href: string }>;
}

interface SiteContentContextType {
  navbar: {
    logo: string;
    brandName: string;
    links: NavLink[];
    ctaText: string;
    ctaLink: string;
  };
  footer: {
    brandDescription: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    links: FooterLinks;
    socialLinks: SocialLink[];
    bottomText: string;
  };
  global: {
    siteName: string;
    siteDescription: string;
    primaryColor: string;
  };
}

const defaultContent: SiteContentContextType = {
  navbar: {
    logo: '/logo.png',
    brandName: 'FoodyParrot',
    links: [
      { href: '/', label: 'Home' },
      { href: '/features', label: 'Features' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy' },
    ],
    ctaText: 'Download App',
    ctaLink: '#download',
  },
  footer: {
    brandDescription: 'The social platform where conversations come alive through gists and reactions. Join the flock today!',
    newsletterTitle: 'Stay in the loop',
    newsletterSubtitle: 'Get the latest updates, features, and gists delivered to your inbox.',
    links: {
      product: [
        { label: 'Features', href: '/features' },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Download', href: '#download' },
      ],
      company: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/contact' },
      ],
      legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/privacy' },
        { label: 'Cookie Policy', href: '/privacy' },
      ],
    },
    socialLinks: [
      { label: 'Twitter', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'TikTok', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
    bottomText: 'Made with 💚 for food lovers everywhere',
  },
  global: {
    siteName: 'Foody Parrot',
    siteDescription: 'The social platform where conversations come alive',
    primaryColor: '#5BBB69',
  },
};

const SiteContentContext = createContext<SiteContentContextType>(defaultContent);

export function useSiteContent() {
  return useContext(SiteContentContext);
}

interface SiteContentProviderProps {
  children: ReactNode;
  content?: Partial<SiteContentContextType>;
}

export function SiteContentProvider({ children, content }: SiteContentProviderProps) {
  const mergedContent: SiteContentContextType = {
    navbar: { ...defaultContent.navbar, ...content?.navbar },
    footer: { 
      ...defaultContent.footer, 
      ...content?.footer,
      links: {
        ...defaultContent.footer.links,
        ...content?.footer?.links,
      },
    },
    global: { ...defaultContent.global, ...content?.global },
  };

  return (
    <SiteContentContext.Provider value={mergedContent}>
      {children}
    </SiteContentContext.Provider>
  );
}
