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
        
        {/* CSS-driven scrolling logos (GPU-accelerated) */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-8 sm:gap-12 animate-scroll-x">
            {[...siteConfig.carriers, ...siteConfig.carriers].map((carrier, i) => (
              <div
                key={`${carrier.name}-${i}`}
                className="flex-shrink-0 w-32 h-16 sm:w-40 sm:h-20 rounded-xl flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105"
                style={{ backgroundColor: carrier.color }}
              >
                <span className="text-white font-bold text-sm sm:text-base">{carrier.name}</span>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f5f0eb] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f5f0eb] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
