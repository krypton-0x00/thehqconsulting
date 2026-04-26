"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, TrendingUp, Building, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const springY = useSpring(y1, { stiffness: 100, damping: 30 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-black"
        style={{ y: springY }}
      >
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.15),transparent_50%)]"
          style={{ y: y2 }}
        />
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.1),transparent_50%)]"
          style={{ y: y1 }}
        />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 sm:w-80 md:w-[500px] h-48 sm:h-80 md:h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"
          style={{ y: y2 }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-64 md:w-[400px] h-40 sm:h-64 md:h-[400px] bg-cyan-500/5 rounded-full blur-[100px]"
          style={{ y: y1 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_rgba(16,185,129,0.03)_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,_black_40%,_transparent_100%)]" />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 md:py-32"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-8"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-medium text-xs sm:text-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            <span className="hidden sm:inline">Property Advisory in Madinah</span>
            <span className="sm:hidden">Madinah Property</span>
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight font-heading"
        >
          Your Gateway to
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Property Investment
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm sm:text-lg md:text-xl text-zinc-400 max-w-2xl md:max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          Independent, expert-led guidance for optimal property investment in the blessed city of Madinah. 
          We help investors navigate opportunities shaped by over <span className="text-emerald-400 font-semibold">SAR 200 billion</span> of development projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-0"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg glow-btn font-medium">
              Explore Properties
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg">
              Speak to Advisor
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {[
            { icon: TrendingUp, value: "200+", label: "Billion SAR in Projects", color: "text-emerald-400" },
            { icon: Building, value: "30M+", label: "Sqm Development", color: "text-cyan-400" },
            { icon: MapPin, value: "224", label: "Active Initiatives", color: "text-violet-400" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <stat.icon className={`w-6 sm:w-8 h-6 sm:h-8 ${stat.color} mx-auto mb-2 sm:mb-3`} />
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading">{stat.value}</div>
              <div className="text-zinc-500 mt-1 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5 
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}