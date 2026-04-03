"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const cardGradients = [
  "from-[#0ea5e9]/10 to-[#0284c7]/10",
  "from-[#f97316]/10 to-[#ea580c]/10",
  "from-[#14b8a6]/10 to-[#0d9488]/10",
  "from-[#8b5cf6]/10 to-[#7c3aed]/10",
];

export function WhyCoverMe() {
  return (
    <section id="why-coverme" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 warm-gradient-mesh opacity-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1917] mb-4">
            Why Choose <span className="text-[#0ea5e9]">CoverMe</span>?
          </h2>
          <p className="text-lg text-[#78716c] max-w-2xl mx-auto">
            We make finding health insurance simple, fast, and affordable. Here&apos;s what sets us apart.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.whyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-gradient-to-br ${cardGradients[index]} rounded-3xl p-6 sm:p-8 shadow-lg border border-white/80`}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-6xl mb-4"
              >
                {card.icon}
              </motion.div>
              <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#1c1917] mb-3">
                {card.title}
              </h3>
              <p className="text-[#78716c] leading-relaxed">
                {card.description}
              </p>
              
              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/50 rounded-full blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
