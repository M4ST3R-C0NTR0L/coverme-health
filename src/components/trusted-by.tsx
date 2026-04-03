"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function TrustedBy() {
  return (
    <section className="py-12 sm:py-16 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-[#78716c] uppercase tracking-wider mb-8"
        >
          Trusted by Leading Insurance Carriers
        </motion.p>
        
        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-8 sm:gap-12"
            animate={{
              x: [0, -400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...siteConfig.carriers, ...siteConfig.carriers].map((carrier, i) => (
              <motion.div
                key={`${carrier.name}-${i}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-32 h-16 sm:w-40 sm:h-20 rounded-xl flex items-center justify-center shadow-md"
                style={{ backgroundColor: carrier.color }}
              >
                <span className="text-white font-bold text-sm sm:text-base">{carrier.name}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f5f0eb] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f5f0eb] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
