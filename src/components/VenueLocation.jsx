import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Phone } from 'lucide-react';
import { INVITATION_CONTENT } from '../config/invitationContent';
import { PalaceArch } from './DecorativeMotifs/PalaceArch';

export const VenueLocation = () => {
  const isTokenPlaceholder = INVITATION_CONTENT.googleMapLink === '[GOOGLE MAP LINK]';

  return (
    <section className="relative w-full py-20 px-4 bg-sand-radial text-taupe flex flex-col items-center justify-center">
      <div className="relative z-10 max-w-4xl w-full">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 space-y-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-olive font-sans font-semibold">
            Venue &amp; Interactive Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-taupe tracking-wide">
            Celebration Venue
          </h2>
        </motion.div>

        <PalaceArch borderColor="#D48C95" className="glass-nude-card rounded-3xl shadow-card-nude p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">
            
            {/* Left: Venue Info & Directions */}
            <div className="space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 text-rose-800 text-xs font-sans uppercase tracking-widest font-bold bg-rose-100/90 px-3.5 py-1.5 rounded-full border border-rose-300/60 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>Jasons Nagar</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-taupe tracking-wide">
                  {INVITATION_CONTENT.venueName}
                </h3>
              </div>

              {/* Contact Phone Numbers */}
              <div className="pt-1 space-y-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-rose-900 font-sans font-bold block">
                  Contact Mobile Numbers:
                </span>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {INVITATION_CONTENT.contactNumbers.map((c, i) => (
                    <a
                      key={i}
                      href={`tel:${c.raw}`}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-ivory/95 border border-rose-300/80 text-rose-900 font-sans text-xs font-semibold shadow-sm hover:bg-rose-100 hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>m.no: {c.raw}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href={isTokenPlaceholder ? "#" : INVITATION_CONTENT.googleMapLink}
                  onClick={(e) => {
                    if (isTokenPlaceholder) {
                      e.preventDefault();
                      alert("Google Map Link placeholder ([GOOGLE MAP LINK]) will be updated once final location link is provided.");
                    }
                  }}
                  target={isTokenPlaceholder ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 text-white font-sans font-semibold text-sm shadow-rose-glow hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Map Frame with Safe Inner Margin */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-rose-300/70 shadow-md group bg-ivory p-1">
              <iframe
                title="Ceremony Location Map"
                src={INVITATION_CONTENT.googleMapEmbedUrl}
                className="w-full h-full border-0 rounded-xl filter contrast-105 brightness-95 hover:brightness-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-ivory/95 border border-rose-300 text-rose-900 text-xs px-3 py-1 rounded-full font-sans font-semibold pointer-events-none flex items-center gap-1.5 shadow-md">
                <Compass className="w-3.5 h-3.5 text-rose-500 animate-spin" /> Mayur Restaurant
              </div>
            </div>

          </div>
        </PalaceArch>

      </div>
    </section>
  );
};


