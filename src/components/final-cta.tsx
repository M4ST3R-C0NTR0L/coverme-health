"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LeadForm } from "@/components/lead-form";

export function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section id="final-cta" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 via-[#fafaf8] to-[#f97316]/10" />
      <div className="absolute inset-0 warm-gradient-mesh" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 left-1/4 w-64 h-64 bg-[#f97316]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#0ea5e9]/20 rounded-full blur-3xl"
        />
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
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#f97316]/10 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#f97316]">Limited Time Offer</span>
            </motion.div>

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

            {/* Countdown Timer */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-[#78716c] uppercase tracking-wider mb-4">
                Enrollment closes in
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                {timeUnits.map((unit, index) => (
                  <div key={unit.label} className="flex flex-col items-center">
                    <motion.div
                      key={unit.value}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-xl border border-[#f5f0eb] flex items-center justify-center"
                    >
                      <span className="font-['Syne'] font-bold text-2xl sm:text-3xl text-[#1c1917]">
                        {String(unit.value).padStart(2, "0")}
                      </span>
                    </motion.div>
                    <span className="text-xs sm:text-sm text-[#78716c] mt-2 font-medium">
                      {unit.label}
                    </span>
                    {index < timeUnits.length - 1 && (
                      <span className="hidden sm:block absolute text-[#78716c] font-bold text-xl ml-[72px] sm:ml-[88px] -mt-8">
                        :
                      </span>
                    )}
                  </div>
                ))}
              </div>
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
