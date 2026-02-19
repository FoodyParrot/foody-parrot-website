'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

interface ContactClientProps {
  data: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    contactMethods: Array<{
      icon: string;
      title: string;
      description: string;
      contact: string;
      href: string;
    }>;
    form: {
      title: string;
    };
    faqs: {
      title: string;
      items: Array<{ question: string; answer: string }>;
    };
  };
}

export default function ContactClient({ data }: ContactClientProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 rounded-full glass text-sm text-[#5BBB69] mb-6">
              {data.hero.badge}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] mb-6">
              {data.hero.title.includes('Conversation') ? (
                <>
                  {data.hero.title.replace('Conversation', '')}
                  <span className="gradient-text">Conversation</span>
                </>
              ) : (
                data.hero.title
              )}
            </h1>
            <p className="text-xl text-[#a1a1a1] leading-relaxed">
              {data.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data.contactMethods || []).map((method, index) => {
              const isValidImageUrl = method.icon && (method.icon.startsWith('http') || method.icon.startsWith('/'));
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass rounded-2xl p-6 text-center group card-hover block"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5BBB69]/20 to-[#5E5D5E]/20 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform overflow-hidden">
                    {isValidImageUrl ? (
                      <img
                        src={method.icon}
                        alt={method.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-[#5BBB69]">{method.icon || '📷'}</span>
                    )}
                  </div>
                  <h3 className="font-bold font-[family-name:var(--font-heading)] mb-1 group-hover:text-[#5BBB69] transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-sm text-[#a1a1a1] mb-2">{method.description}</p>
                  <p className="text-[#5BBB69] text-sm font-medium">{method.contact}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-8">
                {data.form.title.includes('Message') ? (
                  <>
                    Send Us a <span className="gradient-text">Message</span>
                  </>
                ) : (
                  data.form.title
                )}
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-6"
                  >
                    ✅
                  </motion.div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-[#a1a1a1] mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-[#a1a1a1] focus:outline-none focus:border-[#5BBB69] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-[#a1a1a1] focus:outline-none focus:border-[#5BBB69] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#5BBB69] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0a0a0a]">Select a subject</option>
                      <option value="general" className="bg-[#0a0a0a]">General Inquiry</option>
                      <option value="support" className="bg-[#0a0a0a]">Technical Support</option>
                      <option value="feedback" className="bg-[#0a0a0a]">Feedback</option>
                      <option value="partnership" className="bg-[#0a0a0a]">Partnership</option>
                      <option value="press" className="bg-[#0a0a0a]">Press & Media</option>
                      <option value="other" className="bg-[#0a0a0a]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-[#a1a1a1] focus:outline-none focus:border-[#5BBB69] transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-8">
                {data.faqs.title.includes('Questions') ? (
                  <>
                    Frequently Asked <span className="gradient-text">Questions</span>
                  </>
                ) : (
                  data.faqs.title
                )}
              </h2>

              <div className="space-y-4">
                {(data.faqs?.items || []).map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="font-medium pr-8">{faq.question}</span>
                      <motion.svg
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 flex-shrink-0 text-[#5BBB69]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? 'auto' : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-[#a1a1a1]">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Additional help */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 glass rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5BBB69]/20 to-[#5E5D5E]/20 flex items-center justify-center text-2xl flex-shrink-0">
                    🤔
                  </div>
                  <div>
                    <h3 className="font-bold font-[family-name:var(--font-heading)] mb-2">
                      Still have questions?
                    </h3>
                    <p className="text-[#a1a1a1] text-sm mb-4">
                      Can&apos;t find what you&apos;re looking for? Our support team is available 24/7.
                    </p>
                    <a href="#" className="text-[#5BBB69] text-sm font-medium hover:underline">
                      Visit Help Center →
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl overflow-hidden relative h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5BBB69]/5 to-[#5E5D5E]/5" />
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 50%, rgba(91, 187, 105, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 70% 30%, rgba(94, 93, 94, 0.3) 0%, transparent 50%)
                `,
              }}
            />
            
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-full bg-[#5BBB69] flex items-center justify-center text-3xl glow">
                  📍
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="glass px-4 py-2 rounded-full text-sm font-medium">
                    San Francisco, CA
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
