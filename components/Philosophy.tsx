import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../store/ContentContext';

export const Philosophy: React.FC = () => {
  const { content } = useContent();
  const { philosophy } = content;

  return (
    <section className="min-h-screen bg-stone-50 flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-stone-900 text-center"
        >
          {philosophy.textPart1}
          <span className="italic text-stone-400">{philosophy.highlight1}</span>
          {philosophy.textPart2}
          <span className="italic text-stone-400"> {philosophy.highlight2}</span>
          {philosophy.textPart3}
        </motion.p>
      </div>
    </section>
  );
};
