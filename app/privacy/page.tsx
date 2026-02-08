import { getPageContent, get } from '@/lib/content';
import PrivacyClient from './PrivacyClient';

export const revalidate = 60;

export default async function PrivacyPage() {
  const content = await getPageContent(['privacy', 'global']);
  const privacyContent = content.privacy || {};

  const pageData = {
    hero: {
      badge: get(privacyContent, 'privacy.hero.badge', 'Legal'),
      title: get(privacyContent, 'privacy.hero.title', 'Privacy Policy'),
      lastUpdated: get(privacyContent, 'privacy.lastUpdated', 'January 1, 2026'),
    },
    sections: get(privacyContent, 'privacy.sections', [
      {
        title: '1. Information We Collect',
        content: 'We collect information you provide directly to us, such as when you create an account, submit a reaction, or contact us for support. This includes your name, email address, profile information, and the content you post.',
        subsections: [
          { title: 'Personal Information', content: 'Name, email address, phone number, and profile picture you provide when creating an account.' },
          { title: 'Content', content: 'Reactions, comments, and other content you post on Foody Parrot.' },
          { title: 'Usage Information', content: 'Information about how you use our service, including interactions with gists and other users.' },
        ],
      },
      {
        title: '2. How We Use Your Information',
        content: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience.',
        subsections: [
          { title: 'Service Provision', content: 'To create and manage your account, display your reactions, and enable social features.' },
          { title: 'Communication', content: 'To send you updates, notifications, and respond to your inquiries.' },
          { title: 'Improvements', content: 'To analyze usage patterns and improve our service.' },
        ],
      },
      {
        title: '3. Information Sharing',
        content: 'We do not sell your personal information. We may share information with third parties only in the following circumstances:',
        subsections: [
          { title: 'With Your Consent', content: 'When you give us permission to share your information.' },
          { title: 'Service Providers', content: 'With vendors who help us provide our services, under strict confidentiality agreements.' },
          { title: 'Legal Requirements', content: 'When required by law or to protect our rights and the safety of users.' },
        ],
      },
      {
        title: '4. Data Security',
        content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        subsections: [],
      },
      {
        title: '5. Your Rights',
        content: 'You have the right to access, correct, or delete your personal information. You can manage your data through your account settings or by contacting us.',
        subsections: [
          { title: 'Access', content: 'Request a copy of your personal data we hold.' },
          { title: 'Correction', content: 'Request correction of inaccurate data.' },
          { title: 'Deletion', content: 'Request deletion of your account and associated data.' },
          { title: 'Portability', content: 'Request a copy of your data in a portable format.' },
        ],
      },
      {
        title: '6. Cookies and Tracking',
        content: 'We use cookies and similar technologies to provide, protect, and improve our services. You can manage your cookie preferences through your browser settings.',
        subsections: [],
      },
      {
        title: '7. Children\'s Privacy',
        content: 'Foody Parrot is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.',
        subsections: [],
      },
      {
        title: '8. Changes to This Policy',
        content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.',
        subsections: [],
      },
      {
        title: '9. Contact Us',
        content: 'If you have any questions about this Privacy Policy, please contact us at privacy@foodyparrot.com.',
        subsections: [],
      },
    ]),
    contact: {
      email: get(privacyContent, 'privacy.contact.email', 'privacy@foodyparrot.com'),
      address: get(privacyContent, 'privacy.contact.address', 'Foody Parrot Inc.\n123 Food Street\nSan Francisco, CA 94102'),
    },
  };

  return <PrivacyClient data={pageData} />;
}
