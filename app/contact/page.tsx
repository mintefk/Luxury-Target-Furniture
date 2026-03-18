"use client";

import { BackButton } from "@/components/back-button";
import { Instagram, Facebook, Send, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="luxury-container space-y-10 py-10">
      <BackButton />

      <div className="h-px w-full bg-border/70" />

      {/* Header */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Contact
        </p>
        <h1 className="text-2xl font-medium tracking-tight">
          Visit the Target studio.
        </h1>
        <p className="max-w-xl text-sm text-muted-foreground">
          Share project details, request material samples, or schedule a private
          appointment with our studio team.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-[1.3fr,1fr]">

        {/* FORM */}
        <motion.section
          className="space-y-6 rounded-[2.2rem] border border-border bg-card/80 p-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form
            className="space-y-4 text-sm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — we will be in touch shortly.");
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-full border border-border bg-background px-4 py-2 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-full border border-border bg-background px-4 py-2 outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Project / enquiry
              </label>
              <textarea
                required
                rows={4}
                className="w-full rounded-3xl border border-border bg-background px-4 py-3 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Budget (optional)
              </label>
              <input
                type="text"
                placeholder="e.g. $15,000"
                className="w-full rounded-full border border-border bg-background px-4 py-2 outline-none"
              />
            </div>

            <button className="w-full rounded-full bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-background">
              Send message
            </button>
          </form>
        </motion.section>

        {/* ASIDE */}
        <motion.aside
          className="space-y-8 rounded-[2.2rem] border border-border bg-[#f3e7da]/80 backdrop-blur-sm p-7 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >

          {/* Studio */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em]">
              Studio
            </p>
            <p >
            Wollo Sefer, Garad Mall <br />
              Addis Ababa, Ethiopia <br />
              Target Woodworks Studio
            </p>
            <p className="text-xs opacity-70">
              Open during working hours
            </p>

           
           
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em]">
              Contact
            </p>

            <div className="space-y-3">
              <a
                href="mailto:info@targetwoodworks.com"
                className="group flex items-center justify-between rounded-full border px-4 py-2 transition hover:border-[#ac5e23] hover:bg-[#ac5e23]/5"
              >
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <span>info@targetwoodworks.com</span>
                </div>
                <span className="opacity-0 group-hover:opacity-100">→</span>
              </a>

              <a
                href="tel:+251946733333"
                className="group flex items-center justify-between rounded-full border px-4 py-2 transition hover:border-[#ac5e23] hover:bg-[#ac5e23]/5"
              >
                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  <span>+251 946 733 333</span>
                </div>
                <span className="opacity-0 group-hover:opacity-100">→</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em]">
              Social
            </p>

            <div className="space-y-3">
              <a
                href="https://www.instagram.com/target_woodworks"
                target="_blank"
                className="group flex items-center justify-between rounded-full border px-4 py-2 transition hover:border-[#ac5e23] hover:bg-[#ac5e23]/5"
              >
                <div className="flex items-center gap-3">
                  <Instagram size={16} />
                  <span>Instagram</span>
                </div>
                <span className="opacity-0 group-hover:opacity-100">→</span>
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                className="group flex items-center justify-between rounded-full border px-4 py-2 transition hover:border-[#ac5e23] hover:bg-[#ac5e23]/5"
              >
                <div className="flex items-center gap-3">
                  <Facebook size={16} />
                  <span>Facebook</span>
                </div>
                <span className="opacity-0 group-hover:opacity-100">→</span>
              </a>

              <a
                href="https://t.me/targetwoodworkssales"
                target="_blank"
                className="group flex items-center justify-between rounded-full border px-4 py-2 transition hover:border-[#ac5e23] hover:bg-[#ac5e23]/5"
              >
                <div className="flex items-center gap-3">
                  <Send size={16} />
                  <span>Telegram</span>
                </div>
                <span className="opacity-0 group-hover:opacity-100">→</span>
              </a>
            </div>
          </div>

        </motion.aside>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://t.me/targetwoodworkssales"
          target="_blank"
          className="flex items-center gap-2 rounded-full bg-[#ac5e23] px-4 py-3 text-white shadow-lg hover:scale-105 transition"
        >
          <Send size={18} />
          <span className="hidden sm:inline">Chat</span>
        </a>

        <a
          href="tel:+251946733333"
          className="flex items-center gap-2 rounded-full bg-black px-4 py-3 text-white shadow-lg hover:scale-105 transition"
        >
          <Phone size={18} />
          <span className="hidden sm:inline">Call</span>
        </a>
      </div>
    </div>
  );
}