'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

interface FeaturesClientProps {
  data: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    features: Array<{
      icon: string;
      title: string;
      subtitle: string;
      description: string;
      benefits: string[];
      gradient: string;
    }>;
    cta: {
      title: string;
      subtitle: string;
    };
  };
}

export default function FeaturesClient({ data }: FeaturesClientProps) {
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
              {data.hero.title.includes('Every') ? (
                <>
                  {data.hero.title.split('Every')[0]}
                  <span className="gradient-text">Every Food Enthusiast</span>
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

      {/* Features Grid */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {(data.features || []).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl overflow-hidden`}>
                      {feature.icon && (feature.icon.startsWith('http') || feature.icon.startsWith('/')) ? (
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white">{feature.icon || '📷'}</span>
                      )}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full glass text-xs text-[#5BBB69] mb-2">
                        {feature.subtitle}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
                        {feature.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-lg text-[#a1a1a1] mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {(feature.benefits || []).map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#5BBB69]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-[#5BBB69]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#a1a1a1]">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual/Illustration */}
                <div className="flex-1 relative">
                  {(() => {
                    const isValidImageUrl = feature.icon && (feature.icon.startsWith('http') || feature.icon.startsWith('/'));
                    return (
                      <div className={`relative aspect-square rounded-3xl overflow-hidden glass ${isValidImageUrl ? 'p-0' : 'p-8'}`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10`} />
                        <div className="relative h-full flex items-center justify-center">
                          {isValidImageUrl ? (
                            <Image
                              src={feature.icon}
                              alt={feature.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <motion.div
                              animate={{ 
                                scale: [1, 1.05, 1],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ duration: 5, repeat: Infinity }}
                              className="text-9xl"
                            >
                              {feature.icon || '📷'}
                            </motion.div>
                          )}
                        </div>
                        
                        {/* Decorative elements */}
                        {!isValidImageUrl && (
                          <>
                            <motion.div
                              animate={{ y: [0, -10, 0] }}
                              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#5BBB69]/20 flex items-center justify-center"
                            >
                              <span className="text-xl">✨</span>
                            </motion.div>
                            <motion.div
                              animate={{ y: [0, 10, 0] }}
                              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                              className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#5E5D5E]/20 flex items-center justify-center"
                            >
                              <span className="text-xl">💫</span>
                            </motion.div>
                          </>
                        )}
                      </div>
                    );
                  })()}
                </div>
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
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5BBB69]/20 to-[#5E5D5E]/20 flex items-center justify-center text-4xl mx-auto mb-8"
              >
                <Image
                  src="/logo.png"
                  alt="Foody Parrot"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
                {data.cta.title.includes('These') ? (
                  <>
                    {data.cta.title.split('These')[0]}
                    <br />
                    <span className="gradient-text">These Features?</span>
                  </>
                ) : (
                  data.cta.title
                )}
              </h2>
              
              <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto mb-10">
                {data.cta.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Download App
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary"
                >
                  Learn More
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
