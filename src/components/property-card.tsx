"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bed, Square, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-SA', {
      style: 'currency',
      currency: 'SAR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-0 shadow-xl bg-zinc-900/50 rounded-2xl sm:rounded-3xl h-full hover:bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-all group">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image}
            alt={property.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          {property.type === 'penthouse' && (
            <span className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
              PENTHOUSE
            </span>
          )}
        </div>

        <CardContent className="p-4 sm:p-6">
          <div className="text-xs text-emerald-400 font-semibold mb-1 sm:mb-2">{property.development}</div>
          <h3 className="text-base sm:text-xl font-bold text-white mb-3 sm:mb-4">{property.name}</h3>

          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-500 mb-3 sm:mb-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <Bed className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400" />
              <span className="text-zinc-400">{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Square className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400" />
              <span className="text-zinc-400">{property.sqm}</span>
            </div>
          </div>

          <div className="flex items-start gap-1 sm:gap-2 text-xs sm:text-sm text-zinc-500 mb-3 sm:mb-4">
            <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <span className="text-zinc-400 line-clamp-2">{property.location}</span>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
            {property.features.map((feature) => (
              <span
                key={feature}
                className="text-xs bg-zinc-800 text-zinc-400 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-zinc-800">
            <div>
              <div className="text-xs text-zinc-500">Starting from</div>
              <div className="text-xl sm:text-2xl font-bold text-white">
                <span className="text-emerald-400">{formatPrice(property.price)}</span>
              </div>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white glow-btn text-sm sm:text-base px-3 sm:px-4">
              Inquire
              <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-1 sm:ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface PropertyGridProps {
  properties: Property[];
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {properties.map((property, index) => (
        <PropertyCard key={property.id} property={property} index={index} />
      ))}
    </div>
  );
}