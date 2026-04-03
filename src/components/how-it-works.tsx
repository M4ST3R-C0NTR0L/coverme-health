"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#f5f0eb] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-48 h-48 bg-[#f97316]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1917] mb-4">
            How It <span className="text-[#f97316]">Works</span>
          </h2>
          <p className="text-lg text-[#78716c] max-w-2xl mx-auto">
            Getting covered is easier than you think. Follow these simple steps to find your perfect plan.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1">
            <div className="absolute inset-0 bg-[#e5e2de] rounded-full" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] via-[#14b8a6] to-[#f97316] rounded-full origin-left"
            />
            {/* Dotted overlay */}
            <div className="absolute inset-0 bg-[length:20px_1px] bg-[image:repeating-linear-gradient(90deg,transparent,transparent_8px,#f5f0eb_8px,#f5f0eb_12px)]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {siteConfig.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step number circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-xl border-4 border-[#0ea5e9] flex items-center justify-center mb-6"
                >
                  <span className="font-['Syne'] font-bold text-xl sm:text-2xl text-[#0ea5e9]">
                    {step.number}
                  </span>
                </motion.div>

                {/* Connector dot - desktop */}
                <div className="hidden lg:block absolute top-[42px] left-1/2 w-4 h-4 rounded-full bg-[#f97316] shadow-lg z-20 -translate-x-1/2" />

                <h3 className="font-['Syne'] text-lg sm:text-xl font-bold text-[#1c1917] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#78716c] text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
