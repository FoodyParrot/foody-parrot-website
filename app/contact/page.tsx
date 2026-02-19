import { Metadata } from 'next';
import { getPageContent, get, getSEOContent, getGlobalSEO, generateMetadata as genMeta } from '@/lib/content';
import ContactClient from './ContactClient';

export const revalidate = 60;

// Generate page-specific metadata
export async function generateMetadata(): Promise<Metadata> {
  const [seo, globalSeo] = await Promise.all([
    getSEOContent('contact'),
    getGlobalSEO(),
  ]);
  return genMeta(seo, globalSeo, '/contact');
}

export default async function ContactPage() {
  const content = await getPageContent(['contact', 'global']);
  const contactContent = content.contact || {};

  const pageData = {
    hero: {
      badge: get(contactContent, 'contact.hero.badge', 'Contact Us'),
      title: get(contactContent, 'contact.hero.title', "Let's Start a Conversation"),
      subtitle: get(contactContent, 'contact.hero.subtitle', "Have a question, feedback, or just want to say hi? We'd love to hear from you. Our team is always here to help."),
    },
    contactMethods: get(contactContent, 'contact.methods', [
      { icon: '', title: 'Email Us', description: 'For general inquiries and support', contact: 'hello@foodyparrot.com', href: 'mailto:hello@foodyparrot.com' },
      { icon: '', title: 'Live Chat', description: 'Chat with us in real-time', contact: 'Available 9am-6pm EST', href: '#' },
      { icon: '', title: 'Social Media', description: 'Follow us for updates', contact: '@foodyparrot', href: '#' },
      { icon: '', title: 'Office', description: 'Visit our headquarters', contact: 'San Francisco, CA', href: '#' },
    ]),
    form: {
      title: get(contactContent, 'contact.form.title', 'Send Us a Message'),
    },
    faqs: {
      title: get(contactContent, 'contact.faqs.title', 'Frequently Asked Questions'),
      items: get(contactContent, 'contact.faqs.items', [
        { question: 'How do I download Foody Parrot?', answer: 'Foody Parrot is available on both iOS and Android. Simply search for "Foody Parrot" in the App Store or Google Play Store and download for free!' },
        { question: 'What are gists?', answer: 'Gists are daily conversation starters posted by the Foody Parrot team. Everyone sees the same gist and can react to it, creating a shared community experience.' },
        { question: 'How do reactions work?', answer: "Reactions are like posts, but they're responses to the daily gist. You can write text, add emojis, and see what others in the community think about the same topic." },
        { question: 'Is Foody Parrot free to use?', answer: 'Yes! Foody Parrot is completely free to download and use. We may offer premium features in the future, but the core experience will always be free.' },
        { question: 'How can I report inappropriate content?', answer: 'You can report any reaction by tapping the three dots menu and selecting "Report". Our moderation team reviews all reports within 24 hours.' },
      ]),
    },
  };

  return <ContactClient data={pageData} />;
}
