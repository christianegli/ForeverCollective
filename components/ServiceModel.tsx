import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useContent } from '../store/ContentContext';

interface SeasonCardProps {
  season: {
    id: string;
    name: string;
    sub: string;
    img: string;
    textColor: string;
  };
  index: number;
}

const SeasonCard: React.FC<SeasonCardProps> = ({ season, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific card container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // We adjust the offset slightly so the animation finishes just as it locks
    offset: ["start end", "start start"]
  });

  // Parallax effect: Image moves slower than the container
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  
  // Scale effect: Image zooms out slightly as it settles
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  
  // Filter effect: Stronger contrast between grayscale and color
  // We use keyframes to keep it grayscale for a bit longer (up to 20%) before blooming
  const filter = useTransform(
    scrollYProgress, 
    [0, 0.2, 1], 
    ["brightness(0.7) grayscale(100%)", "brightness(0.7) grayscale(100%)", "brightness(1) grayscale(0%)"]
  );

  // Text Reveal Animation
  const textY = useTransform(scrollYProgress, [0.4, 0.8], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

  return (
    <div 
      ref={containerRef} 
      className="sticky top-0 h-screen w-full overflow-hidden border-t border-white/10"
    >
      {/* Animated Background Image */}
      <motion.div 
        style={{ y: imageY, scale: imageScale, filter }} 
        className="absolute inset-0 z-0 will-change-transform"
      >
         <img 
           src={season.img} 
           alt={season.name} 
           className="w-full h-full object-cover"
         />
         {/* Multiply layer for text readability */}
         <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
      </motion.div>

      {/* Content Layer */}
      <div className={`relative z-10 h-full flex flex-col justify-center items-center text-center ${season.textColor} p-6`}>
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <div className="overflow-hidden mb-4">
             <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] border-b border-current pb-2">
               Kollektion {season.id}
             </span>
          </div>
          
          <h2 className="font-serif text-[15vw] leading-[0.8] tracking-tighter mix-blend-overlay opacity-90">
            {season.name}
          </h2>
          
          <div className="overflow-hidden mt-6">
            <p className="font-sans font-light text-sm md:text-lg tracking-widest uppercase opacity-80">
              {season.sub}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const ServiceModel: React.FC = () => {
  const { content } = useContent();
  const { seasons } = content;

  return (
    <section id="seasons" className="relative w-full bg-stone-900">
      {seasons.map((season, index) => (
        <SeasonCard key={season.id} season={season} index={index} />
      ))}
      
      {/* Spacer */}
      <div className="h-[25vh] w-full bg-stone-900 flex items-center justify-center relative z-20">
        <p className="text-stone-600 font-serif italic text-xl">Der Zyklus geht weiter.</p>
      </div>
    </section>
  );
};
