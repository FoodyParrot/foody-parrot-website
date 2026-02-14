import { Metadata } from 'next';
import { getPageContent, get, getSEOContent, getGlobalSEO, generateMetadata as genMeta } from '@/lib/content';
import FeaturesClient from './FeaturesClient';

export const revalidate = 60;

// Generate page-specific metadata
export async function generateMetadata(): Promise<Metadata> {
  const [seo, globalSeo] = await Promise.all([
    getSEOContent('features'),
    getGlobalSEO(),
  ]);
  return genMeta(seo, globalSeo, '/features');
}

export default async function FeaturesPage() {
  const content = await getPageContent(['features', 'global']);
  const featuresContent = content.features || {};

  const pageData = {
    hero: {
      badge: get(featuresContent, 'features.hero.badge', 'Features'),
      title: get(featuresContent, 'features.hero.title', 'Powerful Features for Every Food Enthusiast'),
      subtitle: get(featuresContent, 'features.hero.subtitle', "Discover the comprehensive suite of tools and features designed to enhance your food journey, whether you're a consumer, farmer, processor, or vendor."),
    },
    features: get(featuresContent, 'features.items', [
      {
        icon: '🤖',
        title: 'Gist Xtra',
        subtitle: 'AI-Powered Food Assistant',
        description: "Chat with the Foody Parrot AI and get instant answers to all your food-related questions.",
        benefits: ['Instant answers to food questions', 'Personalized recipe recommendations', 'Nutritional information and meal planning', 'Cooking tips and techniques', 'Food safety and storage advice'],
        gradient: 'from-[#5BBB69] to-[#4A9A56]',
      },
      {
        icon: '🦸',
        title: 'Food Heroes',
        subtitle: 'Make a Difference',
        description: "Donate food to orphanages and make a meaningful impact in your community.",
        benefits: ['Donate food to orphanages', 'Celebrate loved ones through giving', 'Track your contributions', "See the impact you're making", 'Join a community of food heroes'],
        gradient: 'from-[#5E5D5E] to-[#4A4A4A]',
      },
      {
        icon: '📊',
        title: 'Diary & Analytics',
        subtitle: 'Track Your Food Journey',
        description: 'Record your diet, track your food business metrics, and get AI-powered feedback.',
        benefits: ['Daily diet tracking and logging', 'Business metrics and analytics', 'AI-powered feedback and insights', 'Nutritional analysis', 'Progress visualization'],
        gradient: 'from-[#5BBB69] to-[#5E5D5E]',
      },
      {
        icon: '🏆',
        title: 'Challenge',
        subtitle: 'Compete & Win',
        description: 'Participate in food challenges and compete with other food enthusiasts.',
        benefits: ['Weekly food challenges', 'Compete with friends', 'Win prizes and badges', 'Showcase your skills', 'Build your reputation'],
        gradient: 'from-[#5E5D5E] to-[#5BBB69]',
      },
      {
        icon: '🛒',
        title: 'Market',
        subtitle: 'Global Food Marketplace',
        description: 'Buy and sell food products from all over the world.',
        benefits: ['Global food marketplace', 'Buy from farmers worldwide', 'Sell your food products', 'Discover unique ingredients', 'Secure transactions'],
        gradient: 'from-[#5E5D5E] to-[#5BBB69]',
      },
      {
        icon: '🎮',
        title: 'Game',
        subtitle: 'Food Quiz Challenge',
        description: 'Test your food knowledge with our interactive quiz game.',
        benefits: ['Interactive food quizzes', 'Solo and multiplayer modes', 'Challenge friends', 'Learn while playing', 'Earn rewards and badges'],
        gradient: 'from-[#5BBB69] to-[#4A9A56]',
      },
      {
        icon: '🪙',
        title: 'Foody Token',
        subtitle: 'In-App Currency',
        description: 'Foody Token is the official utility token used for transactions within the Foody Parrot ecosystem.',
        benefits: ['In-app currency system', 'Purchase food products', 'Unlock premium features', 'Tip content creators', 'Earn through engagement'],
        gradient: 'from-[#5E5D5E] to-[#5BBB69]',
      },
    ]),
    cta: {
      title: get(featuresContent, 'features.cta.title', 'Ready to Explore All These Features?'),
      subtitle: get(featuresContent, 'features.cta.subtitle', 'Download Foody Parrot today and start experiencing the future of food technology. Join thousands of users already enjoying these powerful features.'),
    },
  };

  return <FeaturesClient data={pageData} />;
}
