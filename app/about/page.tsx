import { Metadata } from 'next';
import { getPageContent, get, getSEOContent, getGlobalSEO, generateMetadata as genMeta } from '@/lib/content';
import AboutClient from './AboutClient';

export const revalidate = 60;

// Generate page-specific metadata
export async function generateMetadata(): Promise<Metadata> {
  const [seo, globalSeo] = await Promise.all([
    getSEOContent('about'),
    getGlobalSEO(),
  ]);
  return genMeta(seo, globalSeo, '/about');
}

export default async function AboutPage() {
  const content = await getPageContent(['about', 'global']);
  const aboutContent = content.about || {};

  const pageData = {
    hero: {
      badge: get(aboutContent, 'about.hero.badge', 'About Us'),
      title: get(aboutContent, 'about.hero.title', "We're Building the Future of Social Conversations"),
      subtitle: get(aboutContent, 'about.hero.subtitle', 'Foody Parrot started with a simple idea: what if social media focused on shared experiences rather than individual posts? What if everyone reacted to the same conversation starter?'),
    },
    story: {
      title: get(aboutContent, 'about.story.title', 'Our Story'),
      paragraphs: get(aboutContent, 'about.story.paragraphs', [
        "It all started at a dinner table. Friends gathered, debating whether pineapple belongs on pizza, when we realized something: these spontaneous food debates were the best conversations we'd had in months.",
        "Traditional social media felt lonely. Everyone posting into the void, hoping for engagement. But what if the platform itself sparked the conversation? What if everyone reacted to the same daily \"gist\" — creating a shared experience?",
        "That's how Foody Parrot was born. We're not just another social app. We're a community built around shared moments, controversial opinions, and the universal love of food.",
      ]),
    },
    timeline: get(aboutContent, 'about.timeline', [
      { year: '2023', title: 'The Idea Hatches', description: 'Foody Parrot concept born from a late-night conversation about food and connection.' },
      { year: '2024', title: 'Beta Launch', description: 'First 10,000 users join. The community starts sharing their food opinions.' },
      { year: '2025', title: 'Going Viral', description: 'Reached 500K users. Gists become a daily ritual for food enthusiasts everywhere.' },
      { year: '2026', title: 'The Future', description: 'Expanding features, growing community, and revolutionizing social food conversations.' },
    ]),
    values: {
      title: get(aboutContent, 'about.values.title', 'Our Values'),
      subtitle: get(aboutContent, 'about.values.subtitle', 'These principles guide everything we do at Foody Parrot.'),
      items: get(aboutContent, 'about.values.items', [
        { icon: '', title: 'Authentic Conversations', description: 'We believe real connections happen when people share genuine thoughts and reactions.' },
        { icon: '', title: 'Global Community', description: "Food transcends borders. We're building a platform that connects foodies worldwide." },
        { icon: '', title: 'Privacy First', description: "Your data is yours. We're committed to protecting your privacy and earning your trust." },
        { icon: '', title: 'Continuous Innovation', description: "We're always pushing boundaries to create the best social experience possible." },
      ]),
    },
    team: {
      title: get(aboutContent, 'about.team.title', 'Meet the Flock'),
      subtitle: get(aboutContent, 'about.team.subtitle', "The passionate team behind Foody Parrot. We're foodies, tech enthusiasts, and community builders united by a shared vision."),
      members: get(aboutContent, 'about.team.members', [
        { name: 'Alex Rivera', role: 'Founder & CEO', image: '', bio: 'Visionary leader with 10+ years in social tech. Believes food brings people together.' },
        { name: 'Priya Sharma', role: 'CTO', image: '', bio: 'Tech wizard who built scalable platforms at top startups. Loves clean code and spicy food.' },
        { name: 'Marcus Chen', role: 'Head of Design', image: '', bio: 'Award-winning designer crafting delightful experiences. Obsessed with perfect pixels.' },
        { name: 'Sofia Laurent', role: 'Head of Community', image: '', bio: 'Community builder extraordinaire. Connects people through shared love of great food.' },
        { name: 'James Okonkwo', role: 'Lead Developer', image: '', bio: 'Full-stack expert turning ideas into reality. Coffee enthusiast and bug hunter.' },
        { name: 'Yuki Tanaka', role: 'Marketing Director', image: '', bio: 'Growth hacker with viral campaign success. Believes in authentic brand stories.' },
      ]),
    },
  };

  return <AboutClient data={pageData} />;
}
