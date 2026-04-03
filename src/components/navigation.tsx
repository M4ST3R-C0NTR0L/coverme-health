"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-[#f5f0eb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] flex items-center justify-center shadow-lg shadow-sky-500/20">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-['Syne'] font-bold text-xl text-[#1c1917]">
              {siteConfig.brand.name}
            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[#78716c] hover:text-[#1c1917] font-medium transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="hidden sm:flex items-center gap-2 text-[#78716c] hover:text-[#0ea5e9] font-medium transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="font-medium">{siteConfig.phone}</span>
            </a>
            <Button size="sm" className="hidden sm:flex">
              {siteConfig.brand.cta}
            </Button>
            <Button size="sm" className="md:hidden">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
