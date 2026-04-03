"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center warm-gradient-mesh overflow-hidden">
      {/* Decorative elements — CSS-only, no JS animation loops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }} />
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-[#14b8a6]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '7s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#f5f0eb] rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#78716c]">Open Enrollment is Now</span>
            </motion.div>

            <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1c1917] leading-[1.1] mb-6">
              Health Insurance Shouldn&apos;t{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#0284c7]">
                Be Complicated
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#78716c] mb-8 max-w-xl mx-auto lg:mx-0">
              {siteConfig.brand.tagline} We compare 200+ plans to find the perfect coverage at the perfect price for you and your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button size="lg" className="text-base font-bold">
                {siteConfig.brand.cta}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Button>
              <Button variant="outline" size="lg" className="text-base font-semibold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[#78716c]">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span className="font-medium">50,000+ Happy Customers</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <LeadForm variant="hero" />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f5f0eb"/>
        </svg>
      </div>
    </section>
  );
}
