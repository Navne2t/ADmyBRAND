//hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-center px-6">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto py-24 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Power Your <span className="text-[#d4af37]">Brand</span>
          <br className="hidden md:block" />
          with AI-Driven <span className="text-[#d4af37]">Innovation</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#dddddd] mb-10">
          From automation to design — ADmyBRAND delivers a full-stack AI suite
          to scale your vision with style and speed.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-[#d4af37] hover:bg-[#c2a52e] text-black font-semibold px-6 py-3 rounded-full transition duration-300">
            Get Started
          </button>
          <button className="border border-[#d4af37] text-[#d4af37] font-semibold px-6 py-3 rounded-full hover:bg-[#d4af37] hover:text-black transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
