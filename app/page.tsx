import { Metadata } from 'next';
import { getPageContent, get, getSEOContent, getGlobalSEO, generateMetadata as genMeta } from '@/lib/content';
import HomeClient from './HomeClient';

export const revalidate = 60; // Revalidate every 60 seconds

// Generate page-specific metadata
export async function generateMetadata(): Promise<Metadata> {
  const [seo, globalSeo] = await Promise.all([
    getSEOContent('home'),
    getGlobalSEO(),
  ]);
  return genMeta(seo, globalSeo, '/');
}

export default async function Home() {
  // Fetch content from CMS
  const content = await getPageContent(['home', 'global']);
  
  // Extract content with fallbacks
  const homeContent = content.home || {};
  const globalContent = content.global || {};

  // Prepare props for client component
  const pageData = {
    badge: get(homeContent, 'home.hero.badge', 'Now available on iOS & Android'),
    headline: get(homeContent, 'home.hero.headline', { line1: 'Where Every', line2: 'Gist Sparks', line3: 'A Conversation' }),
    subheadline: get(homeContent, 'home.hero.subheadline', 'Built for Food Consumers, Farmers, Processors, and Food Vendors. Join Foody Parrot, the comprehensive platform where FoodyParrot drops daily gists and you react. Share your thoughts, discover trending conversations, and connect with a community that speaks your language.'),
    ctaPrimary: get(homeContent, 'home.hero.ctaPrimary', 'Download App'),
    ctaSecondary: get(homeContent, 'home.hero.ctaSecondary', 'Learn More'),
    stats: get(homeContent, 'home.stats', [
      { value: '500K+', label: 'Active Users' },
      { value: '10M+', label: 'Reactions' },
      { value: '50K+', label: 'Daily Gists' },
      { value: '4.9', label: 'App Rating' },
    ]),
    targetAudience: {
      title: get(homeContent, 'home.targetAudience.title', 'Designed for the Food Ecosystem'),
      subtitle: get(homeContent, 'home.targetAudience.subtitle', 'Foody Parrot is built to serve the entire food community - from consumers to producers, processors to vendors. Everyone has a place in our ecosystem.'),
      items: get(homeContent, 'home.targetAudience.items', [
        { icon: '🍽️', title: 'Food Consumers', description: 'Discover new recipes, share food experiences, and connect with fellow food lovers.' },
        { icon: '🌾', title: 'Farmers', description: 'Showcase your produce, connect with buyers, and share your farming journey.' },
        { icon: '🏭', title: 'Processors', description: 'Network with suppliers, showcase your products, and grow your business.' },
        { icon: '🏪', title: 'Food Vendors', description: 'Reach new customers, promote your offerings, and build your brand.' },
      ]),
    },
    features: {
      title: get(homeContent, 'home.features.title', 'Everything You Need to Engage & Connect'),
      subtitle: get(homeContent, 'home.features.subtitle', 'Foody Parrot is packed with features designed to make social interactions more meaningful and fun.'),
      items: get(homeContent, 'home.features.items', [
        { icon: '🗣️', title: 'Latest Gists', description: 'Fresh conversation starters dropped daily by Foody Parrot. Never run out of things to talk about.', gradient: 'from-[#5BBB69] to-[#4A9A56]' },
        { icon: '💬', title: 'Reactions', description: 'Express yourself with reactions. Like traditional posts, but responding to shared gists everyone sees.', gradient: 'from-[#5E5D5E] to-[#4A4A4A]' },
        { icon: '🔥', title: 'Trending Topics', description: "See what's hot in real-time. Discover trending reactions and join the conversation.", gradient: 'from-[#F97316] to-[#FBBF24]' },
        { icon: '👥', title: 'Community', description: 'Connect with like-minded foodies and social enthusiasts. Build your tribe.', gradient: 'from-[#EC4899] to-[#F472B6]' },
        { icon: '🎯', title: 'Personalized Feed', description: 'AI-powered recommendations that understand your vibe. Your feed, your way.', gradient: 'from-[#06B6D4] to-[#22D3EE]' },
        { icon: '🔔', title: 'Smart Notifications', description: 'Stay updated without the noise. Intelligent alerts that matter to you.', gradient: 'from-[#10B981] to-[#34D399]' },
      ]),
    },
    howItWorks: {
      title: get(homeContent, 'home.howItWorks.title', 'Get Started in Four Simple Steps'),
      steps: get(homeContent, 'home.howItWorks.steps', [
        { number: '01', title: 'Download the App', description: 'Get Foody Parrot from your favorite app store. Available on iOS and Android.' },
        { number: '02', title: 'Create Your Profile', description: "Set up your identity in seconds. Upload a photo, write a bio, and you're ready." },
        { number: '03', title: 'Explore Gists', description: 'Browse through daily gists curated by the Foody Parrot team. Find topics you love.' },
        { number: '04', title: 'React & Connect', description: "Share your thoughts on gists. Interact with others' reactions. Build connections." },
      ]),
    },
    testimonials: {
      title: get(homeContent, 'home.testimonials.title', 'Loved by Food Enthusiasts'),
      items: get(homeContent, 'home.testimonials.items', [
        { name: 'Sarah Chen', handle: '@sarahfoodie', avatar: '👩‍🦰', text: 'Foody Parrot changed how I discover new food conversations. The gists are always so relevant and fun!' },
        { name: 'Marcus Johnson', handle: '@marcuseats', avatar: '👨‍🦱', text: "Finally, a social app that gets it. The reaction system is genius - I love seeing what everyone thinks about the same topic." },
        { name: 'Priya Patel', handle: '@priyacooks', avatar: '👩‍🦳', text: "The community here is incredible. I've found my food tribe and the daily gists always spark great conversations." },
      ]),
    },
    cta: {
      title: get(homeContent, 'home.cta.title', 'Ready to Join the Conversation?'),
      subtitle: get(homeContent, 'home.cta.subtitle', 'Download Foody Parrot today and start reacting to daily gists. Your community is waiting for you!'),
    },
    appStoreUrl: get(globalContent, 'global.appStoreUrl', '#'),
    playStoreUrl: get(globalContent, 'global.playStoreUrl', '#'),
  };

  return <HomeClient data={pageData} />;
}
