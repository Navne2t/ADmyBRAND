"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageSent(true);

    // Reset the message after 3 seconds (optional)
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <section className="w-full flex items-center justify-center px-6 py-12 bg-zinc-790 text-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Panel */}
        <div className="flex flex-col gap-6 justify-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-zinc-400">
            We`d love to connect! Reach out through any platform below.
          </p>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-[#1877F2]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-[#1DA1F2]" />
            </a>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <form
          className="flex flex-col gap-4 bg-zinc-950 p-8 rounded-xl shadow-xl"
          onSubmit={handleSubmit}
        >
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" rows={5} required />
          <Button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            Send Message
          </Button>
          {messageSent && (
            <p className="text-green-400 text-sm font-medium mt-2">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
