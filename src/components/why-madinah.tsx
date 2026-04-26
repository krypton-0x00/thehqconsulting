"use client";

import { motion } from "framer-motion";
import { Landmark, Users, TrendingUp, Building, Globe, DollarSign, Plane, Home } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "./animations";

export function WhyMadinah() {
  const highlights = [
    { icon: Landmark, title: "Spiritual Significance", desc: "Home to Al-Masjid an-Nabawi, attracting millions of visitors annually creating constant demand" },
    { icon: TrendingUp, title: "Vision 2030 Investment", desc: "Over SAR 200 billion committed to 224 development initiatives transforming the city" },
    { icon: Users, title: "Growing Population", desc: "Strategic urban expansion plans to accommodate increasing residents and visitors" },
    { icon: Plane, title: "Enhanced Connectivity", desc: "Expanded airport and new rail connections boosting accessibility" },
    { icon: Building, title: "Real Estate Boom", desc: "30 million+ sqm of development underway including residential and commercial" },
    { icon: DollarSign, title: "Optimal Returns", desc: "High rental yields and capital appreciation potential driven by strong demand" },
  ];

  const stats = [
    { value: "15M+", label: "Annual Visitors" },
    { value: "30M", label: "Sqm Development" },
    { value: "200B", label: "SAR Investment" },
    { value: "224", label: "Projects Active" },
  ];

  return (
    <section id="why-madinah" className="py-16 sm:py-20 md:py-32 bg-zinc-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Why Invest in Madinah?</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 font-heading">
            Saudi Arabia's Most Promising Investment Destination
          </h2>
          <p className="text-sm sm:text-lg text-zinc-400 mt-4 sm:mt-6 max-w-2xl md:max-w-3xl mx-auto">
            Backed by unprecedented government commitment and strategic development.
          </p>
        </FadeIn>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:md:16">
          {highlights.map((item) => (
            <StaggerItem key={item.title} className="group bg-zinc-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-800 hover:border-emerald-500/30 transition-all">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-emerald-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{item.title}</h4>
              <p className="text-zinc-500 text-xs sm:text-sm">{item.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-zinc-800 text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400">{stat.value}</div>
              <div className="text-zinc-500 mt-1 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}