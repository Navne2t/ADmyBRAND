//Testimonials.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Alicia Johnson",
    role: "Marketing Director, GoWave",
    text: "ADmyBRAND AI Suite transformed our campaigns — boosted conversions by 38%.",
    image: "/testimonials/alicia.jpg",
  },
  {
    name: "Rohan Malhotra",
    role: "Founder, AdFlick",
    text: "The automation and insights are a game-changer. We cut ad waste by half!",
    image: "/testimonials/rohan.jpg",
  },
  {
    name: "Sophie Lin",
    role: "Growth Lead, BrandGrid",
    text: "We scaled 4x faster using their predictive AI content strategy.",
    image: "/testimonials/sophie.jpg",
  },
  {
    name: "John Doe",
    role: "CEO, BrightTech",
    text: "The AI insights helped us double our user engagement.",
    image: "/testimonials/john.jpg",
  },
  {
    name: "Maria Smith",
    role: "Product Manager, InnovateX",
    text: "Our content creation process is now 3x faster thanks to ADmyBRAND.",
    image: "/testimonials/maria.jpg",
  },
  {
    name: "Liam Wong",
    role: "Marketing Lead, NextGen",
    text: "Highly recommend for automating brand marketing efforts.",
    image: "/testimonials/liam.jpg",
  },
];

export default function Testimonials() {
  // current index of left-most visible testimonial in carousel
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // get visible testimonials based on startIndex and visibleCount, wrap around with modulo
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(testimonials[(startIndex + i) % testimonials.length]);
  }

  return (
    <section id="testimonials" className="py-20 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16">What Our Users Say</h2>

        <div className="overflow-hidden">
          <div className="flex gap-8 transition-transform duration-700 ease-in-out"
               style={{ transform: `translateX(-${(startIndex * (100 / visibleCount))}%)` }}>
            {testimonials.concat(testimonials.slice(0, visibleCount)).map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[calc((100%/3)-2rem)] bg-[#1f1f1f] p-8 rounded-2xl shadow-lg flex flex-col items-center"
              >
                <p className="text-lg italic mb-6">`{t.text}`</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="rounded-full border border-gray-500 object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
