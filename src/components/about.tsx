"use client";

import { motion } from "framer-motion";
import { Shield, Users, Target, TrendingUp, Train, Plane, Building2 } from "lucide-react";
import { FadeIn, Stagger, StaggerItem, SlideIn } from "./animations";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 font-heading">
            Your Gateway to Optimal Property Investment
          </h2>
          <p className="text-sm sm:text-lg text-zinc-400 mt-4 sm:mt-6 max-w-2xl md:max-w-3xl mx-auto">
            Discover flagship investment opportunities in Madinah's most strategic development — Knowledge Economic City (KEC).
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:md:12">
          <SlideIn direction="right" className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-emerald-500/20">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 font-heading">Knowledge Economic City (KEC)</h3>
              <p className="text-zinc-300 text-sm sm:text-lg mb-4 sm:mb-6">
                KEC is a government-backed, publicly listed master development, ideally located just 5 minutes from the Prophet's Mosque, moments from the Haramain High-Speed Railway, and 8 minutes from the airport.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-zinc-300 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                  <Building2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>5 minutes from Al-Masjid an-Nabawi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                  <Train className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Connected to Haramain High-Speed Railway</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                  <Plane className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>8 minutes from Prince Mohammed bin Abdulaziz International Airport</span>
                </li>
              </ul>
            </div>
          </SlideIn>

          <SlideIn direction="left" className="space-y-6">
            <div className="bg-zinc-900/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-zinc-800">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 font-heading">Premium Smart City</h3>
              <p className="text-zinc-400 text-sm sm:text-lg mb-4 sm:mb-6">
                Designed as a premium mixed-use 7 Million square metre smart city, KEC brings together residential communities, business hubs, technology, hospitality, retail, health, and wellness in one high-growth environment.
              </p>
              <p className="text-emerald-400 font-semibold text-sm sm:text-base">
                Bookings are now open for a limited selection of properties at current pricing, ahead of the next phase.
              </p>
            </div>
          </SlideIn>
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:md:12">
          {[
            { icon: Shield, title: "Trusted Expertise", desc: "Deep knowledge of Madinah's real estate market and regulatory landscape" },
            { icon: Users, title: "Personalized Service", desc: "Tailored advisory to match your investment goals and preferences" },
            { icon: Target, title: "Optimal Properties", desc: "Access to exclusive off-plan and ready properties from top developers" },
            { icon: TrendingUp, title: "Strategic Guidance", desc: "Data-driven insights aligned with Saudi Vision 2030 growth" },
          ].map((item) => (
            <StaggerItem key={item.title} className="group bg-zinc-900/50 hover:bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-800 hover:border-emerald-500/30 transition-all">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-emerald-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{item.title}</h4>
              <p className="text-zinc-500 text-xs sm:text-sm">{item.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}