"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Why Madinah", href: "#why-madinah" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <motion.a
            href="#"
            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            The HQ Consulting
          </motion.a>

          <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+966502685208"
              className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+966 50 268 5208</span>
            </a>
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white glow-btn text-sm py-2">
              Book Consultation
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-zinc-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-white/10"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base text-zinc-300 hover:text-white font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white mt-2">
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}