import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-[50vh] flex flex-col items-center justify-center bg-stone-50 px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-serif text-5xl md:text-8xl text-stone-900 mb-8 leading-none">
          JOIN THE <br/> <span className="italic text-stone-400">FLOWER MOVEMENT.</span>
        </h2>
        <a 
          href="#" 
          className="inline-block text-[10px] font-sans font-bold uppercase tracking-[0.3em] border-b border-stone-900 pb-2 hover:text-stone-500 hover:border-stone-500 transition-all duration-300"
        >
          @forever.collective
        </a>
      </motion.div>
    </section>
  );
};
