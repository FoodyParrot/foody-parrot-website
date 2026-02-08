'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

interface HomeClientProps {
  data: {
    badge: string;
    headline: { line1: string; line2: string; line3: string };
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Array<{ value: string; label: string }>;
    targetAudience: {
      title: string;
      subtitle: string;
      items: Array<{ icon: string; title: string; description: string }>;
    };
    features: {
      title: string;
      subtitle: string;
      items: Array<{ icon: string; title: string; description: string; gradient: string }>;
    };
    howItWorks: {
      title: string;
      steps: Array<{ number: string; title: string; description: string }>;
    };
    testimonials: {
      title: string;
      items: Array<{ name: string; handle: string; avatar: string; text: string }>;
    };
    cta: {
      title: string;
      subtitle: string;
    };
    appStoreUrl: string;
    playStoreUrl: string;
  };
}

export default function HomeClient({ data }: HomeClientProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5BBB69] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5BBB69]"></span>
            </span>
            <span className="text-sm text-[#a1a1a1]">{data.badge}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] mb-6 leading-[1.1]"
          >
            {data.headline.line1}
            <br />
            <span className="gradient-text">{data.headline.line2}</span>
            <br />
            {data.headline.line3}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-10"
          >
            {data.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center gap-3 text-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 12.5c0-1.58-.79-2.97-2-3.81V7c0-1.1-.9-2-2-2H10c-1.1 0-2 .9-2 2v1.69c-1.21.84-2 2.23-2 3.81 0 1.64.89 3.06 2.2 3.84l.8-.73V18c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2.39l.8.73c1.31-.78 2.2-2.2 2.2-3.84z"/>
              </svg>
              {data.ctaPrimary}
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center gap-2"
            >
              {data.ctaSecondary}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Hero Image / App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5BBB69]/20 to-[#5E5D5E]/20 blur-[100px] scale-150" />
            
            {/* Phone mockup */}
            <div className="relative">
              <div className="relative mx-auto w-72 md:w-80">
                {/* Phone frame */}
                <div className="relative rounded-[3rem] overflow-hidden glass-strong p-3">
                  <div className="rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] aspect-[9/19]">
                    {/* App screen content */}
                    <div className="p-4 h-full flex flex-col">
                      {/* Status bar */}
                      <div className="flex justify-between items-center text-xs text-[#a1a1a1] mb-4">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <span>📶</span>
                          <span>🔋</span>
                        </div>
                      </div>
                      
                      {/* App header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center p-1">
                            <Image
                              src="/logo.png"
                              alt="Foody Parrot"
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                          <span className="font-bold text-sm">Foody Parrot</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          🔔
                        </div>
                      </div>
                      
                      {/* Today's Gist */}
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="glass rounded-2xl p-4 mb-4"
                      >
                        <div className="text-xs text-[#5BBB69] mb-2 font-medium">TODAY&apos;S GIST</div>
                        <p className="text-sm leading-relaxed">What&apos;s your controversial food opinion that you&apos;ll defend to the end? 🔥</p>
                        <div className="flex items-center gap-4 mt-3 text-xs text-[#a1a1a1]">
                          <span>💬 2.4k reactions</span>
                          <span>🔥 Trending</span>
                        </div>
                      </motion.div>
                      
                      {/* Sample reactions */}
                      <div className="space-y-3 flex-1 overflow-hidden">
                        <motion.div 
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                          className="bg-white/5 rounded-xl p-3"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-xs flex items-center justify-center">A</div>
                            <span className="text-xs">@alexfoodie</span>
                          </div>
                          <p className="text-xs text-[#a1a1a1]">Pineapple absolutely belongs on pizza! 🍍</p>
                        </motion.div>
                        <motion.div 
                          animate={{ x: [0, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                          className="bg-white/5 rounded-xl p-3"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-xs flex items-center justify-center">M</div>
                            <span className="text-xs">@mikeeats</span>
                          </div>
                          <p className="text-xs text-[#a1a1a1]">Ketchup on eggs is elite ✨</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements around phone */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-16 top-20 glass rounded-xl p-3 hidden md:block"
                >
                  <span className="text-2xl">🔥</span>
                  <span className="text-xs block mt-1">Trending</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -left-16 top-40 glass rounded-xl p-3 hidden md:block"
                >
                  <span className="text-2xl">💬</span>
                  <span className="text-xs block mt-1">React</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -right-8 bottom-32 glass rounded-xl p-3 hidden md:block"
                >
                  <span className="text-2xl">✨</span>
                  <span className="text-xs block mt-1">New Gist</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-[#5BBB69]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#a1a1a1]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full glass text-sm text-[#5BBB69] mb-4">
              Built For Everyone
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
              {data.targetAudience.title.split(' ').slice(0, 3).join(' ')}
              <br />
              <span className="gradient-text">{data.targetAudience.title.split(' ').slice(3).join(' ')}</span>
            </h2>
            <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto mb-12">
              {data.targetAudience.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.targetAudience.items.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5BBB69]/20 to-[#5E5D5E]/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3">
                  {audience.title}
                </h3>
                <p className="text-[#a1a1a1] text-sm leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full glass text-sm text-[#5BBB69] mb-4">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
              {data.features.title.split(' ').slice(0, 4).join(' ')}
              <br />
              <span className="gradient-text">{data.features.title.split(' ').slice(4).join(' ')}</span>
            </h2>
            <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto">
              {data.features.subtitle}
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.items.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group glass rounded-2xl p-8 relative overflow-hidden card-hover"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3 group-hover:text-[#5BBB69] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#a1a1a1] leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Arrow icon */}
                <div className="mt-6 flex items-center gap-2 text-sm text-[#5BBB69] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full glass text-sm text-[#5BBB69] mb-4">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
              Get Started in
              <br />
              <span className="gradient-text">Four Simple Steps</span>
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.howItWorks.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Connector line */}
                {index < data.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[#5BBB69]/50 to-transparent" />
                )}
                
                {/* Step number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full glass flex items-center justify-center mb-6 relative"
                >
                  <span className="text-3xl font-bold font-[family-name:var(--font-heading)] gradient-text">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 rounded-full border border-[#5BBB69]/20 animate-pulse-glow" />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#a1a1a1]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full glass text-sm text-[#5BBB69] mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
              Loved by
              <span className="gradient-text"> Food Enthusiasts</span>
            </h2>
          </motion.div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {data.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={testimonial.handle}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 card-hover"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#5BBB69]">★</span>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-lg mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5BBB69]/20 to-[#5E5D5E]/20 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-[#a1a1a1]">{testimonial.handle}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5BBB69]/10 to-[#5E5D5E]/10" />
            <div className="absolute inset-0 glass" />
            
            {/* Content */}
            <div className="relative p-12 md:p-20 text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-8"
              >
                <Image
                  src="/logo.png"
                  alt="Foody Parrot"
                  width={60}
                  height={60}
                  className="object-contain mx-auto"
                />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6">
                {data.cta.title.split(' ').slice(0, 4).join(' ')}
                <br />
                <span className="gradient-text">{data.cta.title.split(' ').slice(4).join(' ')}</span>
              </h2>
              
              <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto mb-10">
                {data.cta.subtitle}
              </p>
              
              {/* App store buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href={data.appStoreUrl}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-strong rounded-xl px-6 py-3 flex items-center gap-3 hover:border-[#5BBB69]/50 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-[#a1a1a1]">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href={data.playStoreUrl}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-strong rounded-xl px-6 py-3 flex items-center gap-3 hover:border-[#5BBB69]/50 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-[#a1a1a1]">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
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
