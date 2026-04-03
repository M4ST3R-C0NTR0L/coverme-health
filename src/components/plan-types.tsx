"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function PlanTypes() {
  return (
    <section id="plans" className="py-16 sm:py-24 bg-[#fafaf8] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-1/4 w-48 h-48 bg-[#0ea5e9]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-1/4 w-64 h-64 bg-[#f97316]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1917] mb-4">
            Find Your Perfect <span className="text-[#f97316]">Plan Type</span>
          </h2>
          <p className="text-lg text-[#78716c] max-w-2xl mx-auto">
            Whether you&apos;re an individual, a family, or a business owner, we have coverage options tailored to your needs.
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {siteConfig.planTypes.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="flex-shrink-0 w-72 snap-center bg-white rounded-3xl p-6 shadow-lg border border-[#f5f0eb] hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="font-['Syne'] text-xl font-bold text-[#1c1917] mb-2">
                  {plan.title}
                </h3>
                <p className="text-[#78716c] text-sm mb-4 leading-relaxed">
                  {plan.description}
                </p>
                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-[#0ea5e9] font-semibold text-sm hover:text-[#0284c7] transition-colors"
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 text-[#78716c]">
            <span className="text-sm font-medium">Scroll for more</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
