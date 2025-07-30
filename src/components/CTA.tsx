// CTA.tsx - Final action prompt for users

import { Button } from "@/components/ui/button"; 


export default function CTA() {
  return (
    <section className="py-20 px-6 bg-[#111] text-white border-t border-[#222] text-center">
      {/* Main message */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Elevate Your Brand with AI?
      </h2>
      <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
        Unlock powerful tools, automation, and analytics to scale your brand like never before.
      </p>

      {/* CTA Button */}
      <Button className="bg-[#d4af37] text-black hover:bg-[#c9a435] text-lg px-8 py-4 rounded-full">
        Get Started Now
      </Button>
    </section>
  );
}
