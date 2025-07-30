// src/components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-[#0f0f0f]/60 backdrop-blur-md text-[#e5e5e5] border-b border-[#1f1f1f] shadow-md">
      <h1 className="text-2xl font-semibold">ADmyBRAND</h1>

      <div className="space-x-6 hidden md:flex">
        <Link href="/" className="hover:text-[#d4af37] transition-colors duration-200">
          Home
        </Link>
        <Link href="#features" className="hover:text-[#d4af37] transition-colors duration-200">
          Features
        </Link>
        <Link href="#pricing" className="hover:text-[#d4af37] transition-colors duration-200">
          Pricing
        </Link>
        <Link href="#contact" className="hover:text-[#d4af37] transition-colors duration-200">
          Contact
        </Link>
      </div>
    </nav>
  );
}
