"use client";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { PropertyGrid } from "@/components/property-card";
import { WhyMadinah } from "@/components/why-madinah";
import { Contact } from "@/components/contact";
import { properties } from "@/data/properties";
import { ScrollProgress } from "@/components/animations";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <ScrollProgress>
        <Navigation />
        <Hero />
        <About />

        <section id="properties" className="py-16 sm:py-20 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Featured Properties</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 font-heading">
                Exclusive Opportunities in Madinah
              </h2>
              <p className="text-sm sm:text-lg text-zinc-400 mt-4 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto">
                Discover optimal residential properties in prime locations, carefully selected for exceptional investment potential.
              </p>
            </div>

            <PropertyGrid properties={properties} />
          </div>
        </section>

        <WhyMadinah />
        <Contact />

        <footer className="bg-zinc-950 text-white py-10 sm:py-12 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3 sm:mb-4 font-heading">The HQ Consulting</h3>
                <p className="text-zinc-500 text-sm sm:text-base">Your trusted partner for optimal property investments in Madinah.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 sm:mb-4 font-heading">Quick Links</h4>
                <ul className="space-y-2 text-zinc-500 text-sm sm:text-base">
                  <li><a href="#about" className="hover:text-emerald-400 transition-colors">About</a></li>
                  <li><a href="#properties" className="hover:text-emerald-400 transition-colors">Properties</a></li>
                  <li><a href="#why-madinah" className="hover:text-emerald-400 transition-colors">Why Madinah</a></li>
                  <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <h4 className="font-semibold text-white mb-3 sm:mb-4 font-heading">Contact</h4>
                <ul className="space-y-2 text-zinc-500 text-sm sm:text-base">
                  <li>+966 50 268 5208</li>
                  <li>info@thehqconsulting.com</li>
                  <li>Madinah, Saudi Arabia</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-zinc-900 mt-8 pt-6 sm:pt-8 text-center text-zinc-600 text-xs sm:text-sm">
              <p>&copy; 2026 The HQ Consulting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </ScrollProgress>
    </main>
  );
}