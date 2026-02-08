'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

interface PrivacyClientProps {
  data: {
    hero: {
      badge: string;
      title: string;
      lastUpdated: string;
    };
    sections: Array<{
      title: string;
      content: string;
      subsections: Array<{ title: string; content: string }>;
    }>;
    contact: {
      email: string;
      address: string;
    };
  };
}

export default function PrivacyClient({ data }: PrivacyClientProps) {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full glass text-sm text-[#5BBB69] mb-6">
              {data.hero.badge}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] mb-4">
              <span className="gradient-text">{data.hero.title}</span>
            </h1>
            <p className="text-[#a1a1a1]">
              Last Updated: {data.hero.lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-[#a1a1a1] leading-relaxed">
                At Foody Parrot, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our mobile application and website. 
                Please read this privacy policy carefully. By using Foody Parrot, you agree to the collection 
                and use of information in accordance with this policy.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 p-6 bg-white/5 rounded-2xl">
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-4">
                Table of Contents
              </h2>
              <ul className="space-y-2">
                {(data.sections || []).map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index + 1}`}
                      className="text-[#a1a1a1] hover:text-[#5BBB69] transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {(data.sections || []).map((section, index) => (
                <motion.div
                  key={index}
                  id={`section-${index + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4 text-white">
                    {section.title}
                  </h2>
                  <p className="text-[#a1a1a1] leading-relaxed mb-6">
                    {section.content}
                  </p>
                  
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="ml-6 space-y-4">
                      {section.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="border-l-2 border-[#5BBB69]/30 pl-4">
                          <h3 className="font-semibold text-white mb-2">{sub.title}</h3>
                          <p className="text-[#a1a1a1] text-sm leading-relaxed">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 pt-12 border-t border-white/10"
            >
              <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-6">
                Questions or Concerns?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">📧</span>
                    <h3 className="font-semibold">Email Us</h3>
                  </div>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="text-[#5BBB69] hover:underline"
                  >
                    {data.contact.email}
                  </a>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">📍</span>
                    <h3 className="font-semibold">Address</h3>
                  </div>
                  <p className="text-[#a1a1a1] text-sm whitespace-pre-line">
                    {data.contact.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
