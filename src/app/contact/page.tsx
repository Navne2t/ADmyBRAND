"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black text-white">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-gray-400">
            Let’s connect! You can reach me via email or phone.
          </p>
          <div className="space-y-2 text-lg">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-400" />
              <a href="mailto:navneet@example.com" className="hover:underline">navneet@example.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-400" />
              <a href="tel:+911234567890" className="hover:underline">+91 12345 67890</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/Navne2t" target="_blank">
              <Github className="w-6 h-6 hover:text-yellow-400" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank">
              <Linkedin className="w-6 h-6 hover:text-yellow-400" />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <Input id="email" type="email" placeholder="Your email" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <Textarea id="message" placeholder="Type your message..." rows={5} required />
          </div>
          <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
