'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

interface AboutClientProps {
  data: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    story: {
      title: string;
      paragraphs: string[];
    };
    timeline: Array<{ year: string; title: string; description: string }>;
    values: {
      title: string;
      subtitle: string;
      items: Array<{ icon: string; title: string; description: string }>;
    };
    team: {
      title: string;
      subtitle: string;
      members: Array<{ name: string; role: string; emoji: string; bio: string }>;
    };
  };
}

export default function AboutClient({ data }: AboutClientProps) {
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
              {data.hero.title.includes('Social') ? (
                <>
                  {data.hero.title.split('Social')[0]}
                  <span className="gradient-text">Social Conversations</span>
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

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
                {data.story.title.split(' ')[0]} <span className="gradient-text">{data.story.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <div className="space-y-6 text-[#a1a1a1] leading-relaxed">
                {data.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5BBB69]/20 to-[#5E5D5E]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <Image
                        src="/logo.png"
                        alt="Foody Parrot"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 glass rounded-2xl p-4"
                >
                  <div className="text-2xl font-bold gradient-text">500K+</div>
                  <div className="text-sm text-[#a1a1a1]">Happy Users</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 glass rounded-2xl p-4"
                >
                  <div className="text-2xl font-bold gradient-text">10M+</div>
                  <div className="text-sm text-[#a1a1a1]">Reactions Daily</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#5BBB69]/50 via-[#5E5D5E]/50 to-transparent hidden lg:block" />

            <div className="space-y-12">
              {data.timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="glass rounded-2xl p-8">
                      <span className="text-sm text-[#5BBB69] font-medium">{item.year}</span>
                      <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mt-2 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#a1a1a1]">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-[#5BBB69] glow" />
                  </div>
                  
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto">
              {data.values.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.values.items.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-8 flex gap-6"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5BBB69]/20 to-[#5E5D5E]/20 flex items-center justify-center text-3xl flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#a1a1a1]">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
              Meet the <span className="gradient-text">Flock</span>
            </h2>
            <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto">
              {data.team.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.team.members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 text-center card-hover group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#5BBB69]/20 to-[#5E5D5E]/20 flex items-center justify-center text-5xl mx-auto mb-6"
                >
                  {member.emoji}
                </motion.div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] group-hover:text-[#5BBB69] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#5BBB69] text-sm mb-4">{member.role}</p>
                <p className="text-[#a1a1a1] text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5BBB69]/5 to-[#5E5D5E]/5" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
                Want to Join Our <span className="gradient-text">Mission?</span>
              </h2>
              <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto mb-10">
                We&apos;re always looking for passionate individuals to join our flock. 
                Check out our open positions or just say hello!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary"
                >
                  View Careers
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
