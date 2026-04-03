"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LeadFormProps {
  variant?: "hero" | "cta";
}

export function LeadForm({ variant = "hero" }: LeadFormProps) {
  const [isInsured, setIsInsured] = useState<string>("no");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`relative ${variant === "hero" ? "bg-white" : "bg-white/95"} rounded-3xl shadow-2xl shadow-black/10 p-6 sm:p-8 border border-[#f5f0eb]`}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0ea5e9]/5 via-transparent to-[#f97316]/5 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#1c1917] mb-2">
            {variant === "hero" ? "Get Your Free Quotes" : "Don't Wait — Get Covered Today"}
          </h3>
          <p className="text-[#78716c] font-medium">
            {variant === "hero" 
              ? "Fill out the form below and we'll find the perfect plan for you." 
              : "Open enrollment is now — secure your family's health coverage."}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="mb-1.5 block">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                required
                className="min-h-[44px]"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="mb-1.5 block">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Smith"
                required
                className="min-h-[44px]"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="mb-1.5 block">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.smith@email.com"
              required
              className="min-h-[44px]"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="mb-1.5 block">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              required
              className="min-h-[44px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="zipCode" className="mb-1.5 block">Zip Code</Label>
              <Input
                id="zipCode"
                type="text"
                placeholder="12345"
                required
                maxLength={5}
                className="min-h-[44px]"
              />
            </div>
            <div>
              <Label htmlFor="householdSize" className="mb-1.5 block">Household Size</Label>
              <Select>
                <SelectTrigger id="householdSize" className="min-h-[44px]">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="just-me">Just Me</SelectItem>
                  <SelectItem value="me-spouse">Me + Spouse</SelectItem>
                  <SelectItem value="me-children">Me + Child(ren)</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label className="mb-2 block">Currently Insured?</Label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsInsured("yes")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all min-h-[44px] ${
                  isInsured === "yes"
                    ? "bg-[#0ea5e9] text-white shadow-md"
                    : "bg-[#f5f0eb] text-[#78716c] hover:text-[#1c1917]"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setIsInsured("no")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all min-h-[44px] ${
                  isInsured === "no"
                    ? "bg-[#0ea5e9] text-white shadow-md"
                    : "bg-[#f5f0eb] text-[#78716c] hover:text-[#1c1917]"
                }`}
              >
                No
              </button>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="pt-2"
          >
            <Button type="submit" size="lg" className="w-full text-base font-bold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Get Free Quotes
            </Button>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-sm text-[#78716c] pt-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>Your information is 100% secure and never sold</span>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
