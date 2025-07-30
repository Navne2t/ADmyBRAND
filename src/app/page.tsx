// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5]">
      <Navbar />
      <Hero />
      <Features />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <CTA />
      <section id="contact" className="py-20 px-4 bg-[#111111]">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}

