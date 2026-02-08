// Content fetching and fallback system
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

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
