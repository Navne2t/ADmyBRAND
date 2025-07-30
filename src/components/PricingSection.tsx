// src/components/PricingSection.tsx
"use client";

import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Simple Pricing</h2>
        <p className="text-lg text-gray-400 mb-12">
          Choose a plan that works best for you and your team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price={99}
            features={["Basic analytics", "100MB storage", "Email support", "Single Domain"]}
          />
          <PricingCard
            title="Pro"
            price={299}
            features={[
              "Advanced analytics",
              "1GB storage",
              "Priority email support",
              "Custom domain",
            ]}
          />
          <PricingCard
            title="Enterprise"
            price={999}
            features={[
              "All Pro features",
              "Unlimited storage",
              "24/7 support",
              "Dedicated manager",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
