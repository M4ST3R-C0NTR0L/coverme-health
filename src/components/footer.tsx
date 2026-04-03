"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#1c1917] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] flex items-center justify-center shadow-lg shadow-sky-500/20">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-['Syne'] font-bold text-xl">
                {siteConfig.brand.name}
              </span>
            </motion.div>
            <p className="text-[#a8a29e] text-sm leading-relaxed mb-4">
              {siteConfig.brand.tagline}
            </p>
            <p className="text-[#78716c] text-xs leading-relaxed">
              {siteConfig.disclaimer}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[#a8a29e] hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#a8a29e] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-[#a8a29e] hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-sm">{siteConfig.phone}</span>
              </a>
              <div className="flex gap-4 pt-2">
                {/* Facebook */}
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-full bg-[#292524] flex items-center justify-center text-[#a8a29e] hover:bg-[#0ea5e9] hover:text-white transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                {/* Twitter/X */}
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-full bg-[#292524] flex items-center justify-center text-[#a8a29e] hover:bg-[#0ea5e9] hover:text-white transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
                {/* Instagram */}
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-full bg-[#292524] flex items-center justify-center text-[#a8a29e] hover:bg-[#0ea5e9] hover:text-white transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </motion.a>
                {/* LinkedIn */}
                <motion.a
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-full bg-[#292524] flex items-center justify-center text-[#a8a29e] hover:bg-[#0ea5e9] hover:text-white transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#292524] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#78716c] text-sm">
              © {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-[#78716c]">State Lic #: 12345678</span>
              <span className="text-xs text-[#78716c]">NAIC #: 12345</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
