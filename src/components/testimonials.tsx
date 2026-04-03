"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < rating ? "#f97316" : "none"}
          stroke="#f97316"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#f97316]/5 rounded-full blur-3xl" />
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
            What Our Customers <span className="text-[#0ea5e9]">Say</span>
          </h2>
          <p className="text-lg text-[#78716c] max-w-2xl mx-auto">
            Real stories from real people who found their perfect health coverage with CoverMe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-[#fafaf8] rounded-3xl p-6 sm:p-8 shadow-lg border border-[#f5f0eb]"
            >
              {/* Quote icon */}
              <div className="text-5xl text-[#0ea5e9]/20 mb-4 font-serif">&quot;</div>
              
              <p className="text-[#44403c] leading-relaxed mb-6 text-base">
                {testimonial.quote}
              </p>
              
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#1c1917]">{testimonial.name}</p>
                  <p className="text-sm text-[#78716c]">{testimonial.plan} · {testimonial.state}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
