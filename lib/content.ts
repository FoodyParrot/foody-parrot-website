// Content fetching and fallback system
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// SEO fallback content
export const fallbackSEO = {
  global: {
    siteName: 'Foody Parrot',
    siteUrl: 'https://foodyparrot.com',
    defaultTitle: 'Foody Parrot | The Social Gist Platform',
    titleTemplate: '%s | Foody Parrot',
    defaultDescription: 'Join Foody Parrot - the revolutionary social media app where you react to gists. Discover trending conversations, share your reactions, and connect with a community that speaks your language.',
    defaultKeywords: 'social media, gists, reactions, community, foody parrot, social app, food lovers, food community',
    defaultOgImage: '/og-image.png',
    twitterHandle: '@foodyparrot',
    twitterCardType: 'summary_large_image',
    locale: 'en_US',
    themeColor: '#5BBB69',
  },
  home: {
    title: 'Foody Parrot | The Social Gist Platform',
    description: 'Join Foody Parrot - the revolutionary social media app where you react to gists. Discover trending conversations, share your reactions, and connect with a community that speaks your language.',
    keywords: 'social media, gists, reactions, community, foody parrot, social app, food lovers, trending conversations',
    ogTitle: 'Foody Parrot | The Social Gist Platform',
    ogDescription: 'Join the revolutionary social platform where conversations come alive through gists and reactions.',
    ogImage: '/og-home.png',
    ogType: 'website',
    twitterTitle: 'Foody Parrot | The Social Gist Platform',
    twitterDescription: 'Join the revolutionary social platform where conversations come alive.',
    twitterImage: '/twitter-home.png',
    canonicalUrl: '/',
  },
  about: {
    title: 'About Us',
    description: "Learn about Foody Parrot's story, mission, and the passionate team building the future of social food conversations.",
    keywords: 'about foody parrot, our story, team, mission, food social platform',
    ogTitle: 'About Foody Parrot | Our Story & Mission',
    ogDescription: "Discover the story behind Foody Parrot and our mission to revolutionize food conversations.",
    ogImage: '/og-about.png',
    ogType: 'website',
    twitterTitle: 'About Foody Parrot',
    twitterDescription: 'Learn about the team and mission behind Foody Parrot.',
    twitterImage: '/twitter-about.png',
    canonicalUrl: '/about',
  },
  features: {
    title: 'Features',
    description: "Discover Foody Parrot's powerful features: Gist Xtra AI assistant, Food Heroes donations, Diary & Analytics, Market, Games, and more.",
    keywords: 'foody parrot features, gist xtra, food heroes, marketplace, food quiz, foody token, social features',
    ogTitle: 'Foody Parrot Features | Everything You Need',
    ogDescription: 'Explore all the powerful features that make Foody Parrot the ultimate food social platform.',
    ogImage: '/og-features.png',
    ogType: 'website',
    twitterTitle: 'Foody Parrot Features',
    twitterDescription: 'Explore the powerful features of Foody Parrot.',
    twitterImage: '/twitter-features.png',
    canonicalUrl: '/features',
  },
  contact: {
    title: 'Contact Us',
    description: "Get in touch with the Foody Parrot team. We'd love to hear from you - questions, feedback, or just to say hi!",
    keywords: 'contact foody parrot, support, help, feedback, customer service',
    ogTitle: 'Contact Foody Parrot | Get In Touch',
    ogDescription: "Have questions? We'd love to hear from you. Contact our team today.",
    ogImage: '/og-contact.png',
    ogType: 'website',
    twitterTitle: 'Contact Foody Parrot',
    twitterDescription: 'Get in touch with the Foody Parrot team.',
    twitterImage: '/twitter-contact.png',
    canonicalUrl: '/contact',
  },
  privacy: {
    title: 'Privacy Policy',
    description: "Your privacy matters to us. Read Foody Parrot's privacy policy to understand how we collect, use, and protect your data.",
    keywords: 'privacy policy, data protection, foody parrot privacy, terms, legal',
    ogTitle: 'Privacy Policy | Foody Parrot',
    ogDescription: 'Your privacy matters. Learn how we protect your data at Foody Parrot.',
    ogImage: '/og-privacy.png',
    ogType: 'website',
    twitterTitle: 'Privacy Policy | Foody Parrot',
    twitterDescription: 'Learn how Foody Parrot protects your privacy.',
    twitterImage: '/twitter-privacy.png',
    canonicalUrl: '/privacy',
  },
};

// Fallback content when API is not available
export const fallbackContent = {
  global: {
    'global.siteName': 'Foody Parrot',
    'global.siteTagline': 'Where Every Gist Sparks A Conversation',
    'global.logo': '/logo.png',
    'global.contactEmail': 'hello@foodyparrot.com',
    'global.contactAddress': 'San Francisco, CA',
    'global.socialLinks': [
      { platform: 'twitter', url: '#', label: 'Twitter' },
      { platform: 'instagram', url: '#', label: 'Instagram' },
      { platform: 'tiktok', url: '#', label: 'TikTok' },
      { platform: 'linkedin', url: '#', label: 'LinkedIn' },
    ],
    'global.appStoreUrl': '#',
    'global.playStoreUrl': '#',
  },
  navbar: {
    'navbar.links': [
      { href: '/', label: 'Home' },
      { href: '/features', label: 'Features' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy' },
    ],
    'navbar.ctaText': 'Download App',
  },
  home: {
    'home.hero.badge': 'Now available on iOS & Android',
    'home.hero.headline': { line1: 'Where Every', line2: 'Gist Sparks', line3: 'A Conversation' },
    'home.hero.subheadline': 'Built for Food Consumers, Farmers, Processors, and Food Vendors. Join Foody Parrot, the comprehensive platform where FoodyParrot drops daily gists and you react. Share your thoughts, discover trending conversations, and connect with a community that speaks your language.',
    'home.hero.ctaPrimary': 'Download App',
    'home.hero.ctaSecondary': 'Learn More',
    'home.stats': [
      { value: '500K+', label: 'Active Users' },
      { value: '10M+', label: 'Reactions' },
      { value: '50K+', label: 'Daily Gists' },
      { value: '4.9', label: 'App Rating' },
    ],
    'home.targetAudience.title': 'Designed for the Food Ecosystem',
    'home.targetAudience.subtitle': 'Foody Parrot is built to serve the entire food community - from consumers to producers, processors to vendors. Everyone has a place in our ecosystem.',
    'home.targetAudience.items': [
      { icon: '🍽️', title: 'Food Consumers', description: 'Discover new recipes, share food experiences, and connect with fellow food lovers.' },
      { icon: '🌾', title: 'Farmers', description: 'Showcase your produce, connect with buyers, and share your farming journey.' },
      { icon: '🏭', title: 'Processors', description: 'Network with suppliers, showcase your products, and grow your business.' },
      { icon: '🏪', title: 'Food Vendors', description: 'Reach new customers, promote your offerings, and build your brand.' },
    ],
    'home.features.title': 'Everything You Need to Engage & Connect',
    'home.features.subtitle': 'Foody Parrot is packed with features designed to make social interactions more meaningful and fun.',
    'home.features.items': [
      { icon: '🗣️', title: 'Latest Gists', description: 'Fresh conversation starters dropped daily by Foody Parrot. Never run out of things to talk about.', gradient: 'from-[#5BBB69] to-[#4A9A56]' },
      { icon: '💬', title: 'Reactions', description: 'Express yourself with reactions. Like traditional posts, but responding to shared gists everyone sees.', gradient: 'from-[#5E5D5E] to-[#4A4A4A]' },
      { icon: '🔥', title: 'Trending Topics', description: "See what's hot in real-time. Discover trending reactions and join the conversation.", gradient: 'from-[#F97316] to-[#FBBF24]' },
      { icon: '👥', title: 'Community', description: 'Connect with like-minded foodies and social enthusiasts. Build your tribe.', gradient: 'from-[#EC4899] to-[#F472B6]' },
      { icon: '🎯', title: 'Personalized Feed', description: 'AI-powered recommendations that understand your vibe. Your feed, your way.', gradient: 'from-[#06B6D4] to-[#22D3EE]' },
      { icon: '🔔', title: 'Smart Notifications', description: 'Stay updated without the noise. Intelligent alerts that matter to you.', gradient: 'from-[#10B981] to-[#34D399]' },
    ],
    'home.howItWorks.title': 'Get Started in Four Simple Steps',
    'home.howItWorks.steps': [
      { number: '01', title: 'Download the App', description: 'Get Foody Parrot from your favorite app store. Available on iOS and Android.' },
      { number: '02', title: 'Create Your Profile', description: "Set up your identity in seconds. Upload a photo, write a bio, and you're ready." },
      { number: '03', title: 'Explore Gists', description: 'Browse through daily gists curated by the Foody Parrot team. Find topics you love.' },
      { number: '04', title: 'React & Connect', description: "Share your thoughts on gists. Interact with others' reactions. Build connections." },
    ],
    'home.testimonials.title': 'Loved by Food Enthusiasts',
    'home.testimonials.items': [
      { name: 'Sarah Chen', handle: '@sarahfoodie', avatar: '👩‍🦰', text: 'Foody Parrot changed how I discover new food conversations. The gists are always so relevant and fun!' },
      { name: 'Marcus Johnson', handle: '@marcuseats', avatar: '👨‍🦱', text: "Finally, a social app that gets it. The reaction system is genius - I love seeing what everyone thinks about the same topic." },
      { name: 'Priya Patel', handle: '@priyacooks', avatar: '👩‍🦳', text: "The community here is incredible. I've found my food tribe and the daily gists always spark great conversations." },
    ],
    'home.cta.title': 'Ready to Join the Conversation?',
    'home.cta.subtitle': 'Download Foody Parrot today and start reacting to daily gists. Your community is waiting for you!',
  },
  footer: {
    'footer.newsletter.title': 'Stay in the loop',
    'footer.newsletter.subtitle': 'Get the latest updates, features, and gists delivered to your inbox.',
    'footer.tagline': 'The social platform where conversations come alive through gists and reactions. Join the flock today!',
    'footer.links.product': [
      { label: 'Features', href: '/features' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Download', href: '#download' },
    ],
    'footer.links.company': [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/contact' },
    ],
    'footer.links.legal': [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/privacy' },
      { label: 'Cookie Policy', href: '/privacy' },
    ],
    'footer.copyright': '© {year} Foody Parrot. All rights reserved.',
    'footer.madeWith': 'Made with 💚 for food lovers everywhere',
  },
  about: {
    'about.hero.badge': 'Our Story',
    'about.hero.title': 'About Foody Parrot',
    'about.hero.subtitle': 'We\'re on a mission to revolutionize how people connect through food conversations.',
    'about.story.title': 'Our Story',
    'about.story.content': 'Foody Parrot was born from a simple idea: what if there was a social platform dedicated entirely to food lovers? A place where daily conversations spark meaningful connections.',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To create the most engaging social platform for food enthusiasts, connecting consumers, farmers, processors, and vendors in one vibrant community.',
    'about.values.title': 'Our Values',
    'about.values.items': [
      { icon: '💚', title: 'Community First', description: 'Everything we build is for our community of food lovers.' },
      { icon: '🌱', title: 'Sustainability', description: 'We promote sustainable food practices and local producers.' },
      { icon: '🤝', title: 'Inclusivity', description: 'Everyone has a seat at our table, from home cooks to professional chefs.' },
    ],
    'about.team.title': 'Meet Our Team',
    'about.team.subtitle': 'The passionate people behind Foody Parrot',
  },
  features: {
    'features.hero.badge': 'Features',
    'features.hero.title': 'Everything You Need',
    'features.hero.subtitle': 'Discover all the powerful features that make Foody Parrot the ultimate food social platform.',
    'features.main.title': 'Core Features',
    'features.main.items': [
      { icon: '🗣️', title: 'Daily Gists', description: 'Fresh conversation starters dropped daily by Foody Parrot.' },
      { icon: '💬', title: 'Reactions', description: 'Express yourself with reactions to shared gists.' },
      { icon: '🔥', title: 'Trending Topics', description: 'See what\'s hot in real-time.' },
      { icon: '👥', title: 'Community', description: 'Connect with like-minded foodies.' },
    ],
    'features.additional.title': 'And Much More',
    'features.additional.items': [
      { icon: '🎯', title: 'Personalized Feed', description: 'AI-powered recommendations.' },
      { icon: '🔔', title: 'Smart Notifications', description: 'Intelligent alerts that matter.' },
      { icon: '🏪', title: 'Marketplace', description: 'Buy and sell food products.' },
      { icon: '📊', title: 'Analytics', description: 'Track your engagement.' },
    ],
  },
  contact: {
    'contact.hero.badge': 'Get in Touch',
    'contact.hero.title': 'Contact Us',
    'contact.hero.subtitle': 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.form.title': 'Send us a message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'Your email',
    'contact.form.messagePlaceholder': 'Your message',
    'contact.form.submitText': 'Send Message',
    'contact.info.title': 'Other ways to reach us',
    'contact.info.email': 'hello@foodyparrot.com',
    'contact.info.address': 'San Francisco, CA',
    'contact.info.social': 'Follow us on social media',
  },
  privacy: {
    'privacy.hero.badge': 'Legal',
    'privacy.hero.title': 'Privacy Policy',
    'privacy.hero.subtitle': 'Your privacy is important to us. Learn how we collect, use, and protect your information.',
    'privacy.lastUpdated': 'Last updated: January 2026',
    'privacy.sections': [
      { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as when you create an account, post content, or contact us.', subsections: [] },
      { title: '2. How We Use Your Information', content: 'We use the information we collect to provide, maintain, and improve our services.', subsections: [] },
      { title: '3. Information Sharing', content: 'We do not share your personal information with third parties except as described in this policy.', subsections: [] },
      { title: '4. Data Security', content: 'We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.', subsections: [] },
      { title: '5. Your Rights', content: 'You have the right to access, update, or delete your personal information at any time.', subsections: [] },
    ],
    'privacy.contact.email': 'privacy@foodyparrot.com',
    'privacy.contact.address': 'Foody Parrot Inc.\nSan Francisco, CA',
  },
};

// Fetch content for a specific section with fallback
export async function getSectionContent(section: keyof typeof fallbackContent): Promise<Record<string, any>> {
  try {
    const response = await fetch(`${API_URL}/site-content/section/${section}`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
      cache: 'force-cache',
    });

    if (!response.ok) {
      console.warn(`Failed to fetch ${section} content, using fallback`);
      return fallbackContent[section] || {};
    }

    const data = await response.json();
    
    // Merge fetched content with fallback (fetched takes priority)
    return { ...fallbackContent[section], ...data.content };
  } catch (error) {
    console.warn(`Error fetching ${section} content, using fallback:`, error);
    return fallbackContent[section] || {};
  }
}

// Fetch all content for a page
export async function getPageContent(sections: (keyof typeof fallbackContent)[]): Promise<Record<string, Record<string, any>>> {
  const contentPromises = sections.map(async (section) => {
    const content = await getSectionContent(section);
    return [section, content] as const;
  });

  const results = await Promise.all(contentPromises);
  return Object.fromEntries(results);
}

// Helper to get a specific content value
export function get<T>(content: Record<string, any>, key: string, fallback: T): T {
  return content[key] !== undefined ? content[key] : fallback;
}

// Fetch SEO content for a specific page
export async function getSEOContent(page: keyof typeof fallbackSEO): Promise<Record<string, any>> {
  try {
    const response = await fetch(`${API_URL}/site-content/key/seo.${page}`, {
      next: { revalidate: 60 },
      cache: 'force-cache',
    });

    if (!response.ok) {
      console.warn(`Failed to fetch SEO for ${page}, using fallback`);
      return fallbackSEO[page] || {};
    }

    const data = await response.json();
    return { ...fallbackSEO[page], ...data.content };
  } catch (error) {
    console.warn(`Error fetching SEO for ${page}, using fallback:`, error);
    return fallbackSEO[page] || {};
  }
}

// Get global SEO settings
export async function getGlobalSEO(): Promise<Record<string, any>> {
  return getSEOContent('global');
}

// Helper to safely parse keywords
function parseKeywords(keywords: string | undefined): string[] | undefined {
  if (!keywords || typeof keywords !== 'string') return undefined;
  return keywords.split(',').map((k: string) => k.trim()).filter(Boolean);
}

// Generate metadata object from SEO content
export function generateMetadata(
  seo: Record<string, any>,
  globalSeo: Record<string, any>,
  pathname: string = '/'
) {
  const siteUrl = globalSeo?.siteUrl || 'https://foodyparrot.com';
  const fullUrl = `${siteUrl}${pathname}`;
  
  // Apply title template if not the home page
  let title = seo?.title || globalSeo?.defaultTitle || 'Foody Parrot';
  if (pathname !== '/' && globalSeo?.titleTemplate && seo?.title) {
    title = globalSeo.titleTemplate.replace('%s', seo.title);
  }

  const description = seo?.description || globalSeo?.defaultDescription || '';
  const keywords = parseKeywords(seo?.keywords) || parseKeywords(globalSeo?.defaultKeywords);

  return {
    title,
    description,
    keywords,
    authors: [{ name: globalSeo?.siteName || 'Foody Parrot Team' }],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: seo?.canonicalUrl || pathname,
    },
    openGraph: {
      title: seo?.ogTitle || title,
      description: seo?.ogDescription || description,
      type: (seo?.ogType || 'website') as 'website',
      url: fullUrl,
      siteName: globalSeo?.siteName || 'Foody Parrot',
      images: seo?.ogImage ? [{ url: seo.ogImage, width: 1200, height: 630 }] : 
              globalSeo?.defaultOgImage ? [{ url: globalSeo.defaultOgImage, width: 1200, height: 630 }] : undefined,
      locale: globalSeo?.locale || 'en_US',
    },
    twitter: {
      card: (globalSeo?.twitterCardType || 'summary_large_image') as 'summary_large_image' | 'summary',
      title: seo?.twitterTitle || seo?.ogTitle || title,
      description: seo?.twitterDescription || seo?.ogDescription || description,
      images: seo?.twitterImage ? [seo.twitterImage] : 
              seo?.ogImage ? [seo.ogImage] : 
              globalSeo?.defaultOgImage ? [globalSeo.defaultOgImage] : undefined,
      site: globalSeo?.twitterHandle,
      creator: globalSeo?.twitterHandle,
    },
    robots: seo?.noIndex ? { index: false, follow: false } : undefined,
    other: {
      'theme-color': globalSeo?.themeColor || '#5BBB69',
    },
  };
}
