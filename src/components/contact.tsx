"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 font-heading">
            Start Your Investment Journey
          </h2>
          <p className="text-sm sm:text-lg text-zinc-400 mt-4 sm:mt-6 max-w-xl mx-auto">
            Ready to explore optimal property opportunities in Madinah? Our expert advisors are here to guide you through every step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 text-white rounded-2xl sm:rounded-3xl overflow-hidden border border-emerald-500/20">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 font-heading">Contact Information</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-emerald-400 text-xs sm:text-sm">Call Us</div>
                      <div className="text-base sm:text-lg font-semibold">+966 50 268 5208</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-emerald-400 text-xs sm:text-sm">Email Us</div>
                      <div className="text-base sm:text-lg font-semibold">info@thehqconsulting.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-emerald-400 text-xs sm:text-sm">Visit Us</div>
                      <div className="text-sm sm:text-lg font-semibold">2439, Ibn Shaba Street, KEC District</div>
                      <div className="text-zinc-400 text-xs sm:text-sm">42362, Madinah, Saudi Arabia</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-emerald-400 text-xs sm:text-sm">Office Hours</div>
                      <div className="text-sm sm:text-lg font-semibold">Sun - Thu: 9:00 AM - 6:00 PM</div>
                      <div className="text-zinc-500 text-xs sm:text-sm">Fri - Sat: By Appointment</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl bg-zinc-900/50 rounded-2xl sm:rounded-3xl border border-zinc-800">
              <CardContent className="p-6 sm:p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Request Submitted!</h3>
                    <p className="text-zinc-400 text-sm sm:text-base">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-zinc-300 text-sm">First Name</Label>
                        <Input id="firstName" placeholder="John" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 h-10 sm:h-12" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-zinc-300 text-sm">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 h-10 sm:h-12" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-300 text-sm">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 h-10 sm:h-12" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-zinc-300 text-sm">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+966 50 000 0000" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 h-10 sm:h-12" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-zinc-300 text-sm">Investment Interest</Label>
                      <Select>
                        <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white h-10 sm:h-12">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-800 border-zinc-700">
                          <SelectItem value="2bed" className="text-white focus:bg-zinc-700 focus:text-white">2 Bedroom Apartment</SelectItem>
                          <SelectItem value="3bed" className="text-white focus:bg-zinc-700 focus:text-white">3 Bedroom Apartment</SelectItem>
                          <SelectItem value="4bed" className="text-white focus:bg-zinc-700 focus:text-white">4 Bedroom Apartment</SelectItem>
                          <SelectItem value="penthouse" className="text-white focus:bg-zinc-700 focus:text-white">Penthouse</SelectItem>
                          <SelectItem value="multiple" className="text-white focus:bg-zinc-700 focus:text-white">Multiple Properties</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-zinc-300 text-sm">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your investment goals..." rows={3} className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 resize-none" />
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 py-3 sm:py-6 text-sm sm:text-lg glow-btn">
                      <Send className="w-4 h-4 mr-2" />
                      Request a Consultation
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}