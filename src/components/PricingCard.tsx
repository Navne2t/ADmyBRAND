//PricingCard.tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: number; // base price per user per month in INR
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  features,
  highlighted,
}: PricingCardProps) {
  const [showCalculator, setShowCalculator] = useState(false);
  const [userCount, setUserCount] = useState(1);

  const totalPrice = price * userCount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "rounded-2xl border p-6 shadow-xl backdrop-blur-md bg-white/5 transition-transform hover:scale-105",
        highlighted
          ? "bg-gradient-to-br from-yellow-500/10 to-yellow-800/10 border-yellow-500"
          : "border-gray-700"
      )}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">₹{price.toLocaleString()} / user</p>

      <ul className="space-y-2 text-sm mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            ✅ <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setShowCalculator(!showCalculator)}
        className="w-full rounded-lg bg-yellow-500 text-black py-2 font-semibold hover:bg-yellow-400 transition mb-3"
      >
        {showCalculator ? "Hide" : "Calculate Pricing"}
      </button>

      {showCalculator && (
        <div className="mt-4 p-4 bg-[#111] border border-gray-700 rounded-lg text-sm">
          <label className="block mb-2 font-medium">
            Number of Users:
            <input
              type="number"
              min="1"
              value={userCount}
              onChange={(e) => setUserCount(parseInt(e.target.value) || 1)}
              className="w-full mt-1 px-2 py-1 bg-[#1a1a1a] border border-gray-600 rounded text-white"
            />
          </label>
          <p className="mt-3 font-semibold">
            Total Monthly Cost: ₹{totalPrice.toLocaleString()}
          </p>
        </div>
      )}

      <button className="w-full rounded-lg bg-yellow-500 text-black py-2 font-semibold hover:bg-yellow-400 transition mt-4">
        Choose Plan
      </button>
    </motion.div>
  );
}
