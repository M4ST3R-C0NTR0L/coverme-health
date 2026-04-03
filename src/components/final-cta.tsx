"use client";

import { motion } from "framer-motion";
import { LeadForm } from "@/components/lead-form";
import { CountdownTimer } from "@/components/countdown-timer";

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Static gradient background (no JS animation) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 via-[#fafaf8] to-[#f97316]/10" />
      
      {/* Static decorative blobs (CSS only, no Framer loop) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#f97316]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#0ea5e9]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Urgency message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#f97316]">Limited Time Offer</span>
            </div>

            <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#1c1917] leading-tight mb-6">
              Don&apos;t Wait —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#ea580c]">
                Open Enrollment
              </span>{" "}
              is Now
            </h2>

            <p className="text-lg text-[#78716c] mb-8 max-w-xl mx-auto lg:mx-0">
              Health insurance rates are changing for 2026. Lock in your best rate today before enrollment periods close. Don&apos;t miss out on potential savings of up to 40%.
            </p>

            {/* Countdown Timer (isolated component) */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-[#78716c] uppercase tracking-wider mb-4">
                Enrollment closes in
              </p>
              <CountdownTimer />
            </div>

            {/* Urgency reasons */}
            <div className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
              {[
                "Compare 200+ plans from top carriers",
                "Save up to 40% on your premium",
                "Licensed agents available to help",
              ].map((reason, i) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[#44403c] font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LeadForm variant="cta" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
