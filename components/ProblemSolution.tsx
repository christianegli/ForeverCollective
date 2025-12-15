import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ProblemSolution: React.FC = () => {
  // Parallax effect for the image
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="concept" className="relative w-full py-24 md:py-40 bg-stone-900 text-stone-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-20">
        
        {/* Text Side */}
        <div className="md:w-1/2 relative z-10">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6 block">Das Konzept</span>
            <h2 className="font-serif text-5xl md:text-8xl mb-8 leading-none">
              Jenseits des <br/> <span className="italic text-stone-600">Vergänglichen</span>
            </h2>
            <p className="font-sans font-light text-lg md:text-xl text-stone-400 max-w-md leading-relaxed">
              Warum den Zyklus des Verfalls akzeptieren? Unsere konservierten Botanika eliminieren die logistische Last frischer Blumen – kein Wasser, kein Abfall, kein Ersatz. Nur statische Perfektion.
            </p>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="md:w-1/2 w-full h-[60vh] md:h-[80vh] relative">
           <div className="overflow-hidden w-full h-full relative">
              <motion.img 
                style={{ y }}
                src="https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=2787&auto=format&fit=crop" 
                alt="Preserved Art" 
                className="w-full h-[120%] object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
              />
           </div>
           <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white text-black p-6 md:p-8 max-w-[200px]">
              <p className="font-serif text-3xl italic">3 Jahre</p>
              <p className="text-xs uppercase tracking-widest mt-2 border-t border-black pt-2">Garantierte Dauer</p>
           </div>
        </div>
      </div>
    </section>
  );
};
