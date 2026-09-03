import React from 'react';

export const BrideVector = ({ className = "w-28 h-28 sm:w-36 sm:h-36" }) => {
  const flowerColors = ["#D81B60", "#2196F3", "#AB47BC", "#FFB300", "#D81B60", "#2196F3", "#AB47BC", "#FFB300"];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Decorative Glow & Multicoloured Floral Frame */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 via-rose-400 to-purple-500 p-1.5 shadow-rose-glow">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-ivory bg-cream shadow-inner">
          <img
            src="/assets/bride.jpg"
            alt="Nandini - The Bride"
            className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
      {/* Outer Multicoloured Floral Beaded Border Overlay */}
      <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="47" stroke="#D4AF37" strokeWidth="1.2" strokeDasharray="3 3" fill="none" opacity="0.8" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <circle
            key={i}
            cx={50 + 47 * Math.cos((deg * Math.PI) / 180)}
            cy={50 + 47 * Math.sin((deg * Math.PI) / 180)}
            r="3"
            fill={flowerColors[i]}
          />
        ))}
      </svg>
    </div>
  );
};

export const GroomVector = ({ className = "w-28 h-28 sm:w-36 sm:h-36" }) => {
  const flowerColors = ["#2196F3", "#D81B60", "#FFB300", "#AB47BC", "#2196F3", "#D81B60", "#FFB300", "#AB47BC"];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Decorative Glow & Multicoloured Floral Frame */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 via-rose-400 to-amber-400 p-1.5 shadow-rose-glow">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-ivory bg-cream shadow-inner">
          <img
            src="/assets/groom.jpg"
            alt="Meet - The Groom"
            className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
      {/* Outer Multicoloured Floral Beaded Border Overlay */}
      <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="47" stroke="#D4AF37" strokeWidth="1.2" strokeDasharray="3 3" fill="none" opacity="0.8" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <circle
            key={i}
            cx={50 + 47 * Math.cos((deg * Math.PI) / 180)}
            cy={50 + 47 * Math.sin((deg * Math.PI) / 180)}
            r="3"
            fill={flowerColors[i]}
          />
        ))}
      </svg>
    </div>
  );
};

export const CouplePhotoCard = ({ className = "" }) => {
  return (
    <div className={`relative max-w-sm sm:max-w-md w-full mx-auto my-6 p-2 rounded-3xl bg-gradient-to-br from-pink-200 via-blue-200 to-purple-300 shadow-2xl ${className}`}>
      <div className="relative rounded-2xl overflow-hidden border-2 border-ivory bg-cream shadow-inner group">
        <img
          src="/assets/couple.jpg"
          alt="Nandini & Meet"
          className="w-full h-72 sm:h-96 object-cover object-top filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
        />
        {/* Soft Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-taupe/90 via-taupe/20 to-transparent flex flex-col justify-end p-5 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-rose-200 font-sans font-bold">
            BETROTHAL COUPLE
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-ivory drop-shadow-md">
            Nandini &amp; Meet
          </h3>
        </div>
      </div>
    </div>
  );
};
