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

export function SavingsCalculator() {
  const [householdSize, setHouseholdSize] = useState<string>("family");
  const [currentPremium, setCurrentPremium] = useState<string>("500");
  const [showResult, setShowResult] = useState<boolean>(false);

  const calculateSavings = () => {
    const premium = parseFloat(currentPremium) || 500;
    const multiplier = {
      "just-me": 0.25,
      "me-spouse": 0.30,
      "me-children": 0.35,
      family: 0.40,
    }[householdSize] || 0.35;

    return Math.round(premium * multiplier);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#0ea5e9]/10 via-[#f97316]/5 to-[#14b8a6]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1917] mb-4">
            See How Much You Could <span className="text-[#0ea5e9]">Save</span>
          </h2>
          <p className="text-lg text-[#78716c] max-w-2xl mx-auto">
            Enter your details below to discover potential savings on your health insurance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#fafaf8] rounded-3xl p-6 sm:p-10 shadow-xl border border-[#f5f0eb]"
        >
          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="calcHousehold" className="mb-2 block">Household Size</Label>
                <Select value={householdSize} onValueChange={setHouseholdSize}>
                  <SelectTrigger id="calcHousehold" className="min-h-[48px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="just-me">Just Me</SelectItem>
                    <SelectItem value="me-spouse">Me + Spouse</SelectItem>
                    <SelectItem value="me-children">Me + Child(ren)</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="calcPremium" className="mb-2 block">Current Monthly Premium ($)</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78716c] font-semibold">$</span>
                  <Input
                    id="calcPremium"
                    type="number"
                    value={currentPremium}
                    onChange={(e) => setCurrentPremium(e.target.value)}
                    className="pl-8 min-h-[48px]"
                    min="0"
                    max="2000"
                    placeholder="500"
                  />
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Button type="submit" size="lg" className="w-full text-base font-bold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <rect x="4" y="2" width="16" height="20" rx="2"/>
                  <line x1="8" y1="6" x2="16" y2="6"/>
                  <line x1="8" y1="10" x2="16" y2="10"/>
                  <line x1="8" y1="14" x2="12" y2="14"/>
                </svg>
                See How Much You Could Save
              </Button>
            </motion.div>
          </form>

          {/* Results */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-8 p-6 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-2xl text-white text-center"
            >
              <p className="text-white/80 font-medium mb-2">Estimated Monthly Savings</p>
              <p className="font-['Syne'] text-5xl sm:text-6xl font-bold mb-2">
                ${calculateSavings()}
              </p>
              <p className="text-white/80 text-sm">
                That&apos;s up to ${calculateSavings() * 12} per year!
              </p>
            </motion.div>
          )}

          {/* Sample savings display */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Individual", amount: "$85/mo" },
              { label: "Couple", amount: "$150/mo" },
              { label: "Family", amount: "$200/mo" },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-white rounded-xl border border-[#e5e2de]">
                <p className="text-sm text-[#78716c] mb-1">{item.label}</p>
                <p className="font-['Syne'] font-bold text-[#1c1917]">{item.amount}</p>
                <p className="text-xs text-[#78716c]">avg. savings</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
