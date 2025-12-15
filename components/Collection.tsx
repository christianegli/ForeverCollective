import React from 'react';
import { motion } from 'framer-motion';

const lookbook = [
  { 
    name: "The Concord", 
    img: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=2776&auto=format&fit=crop",
    desc: "Sculptural elegance."
  },
  { 
    name: "Velvet Void", 
    img: "https://images.unsplash.com/photo-1563241527-4747b7dd87eb?q=80&w=2787&auto=format&fit=crop",
    desc: "Deep tones for serious spaces."
  },
  { 
    name: "Raw Earth", 
    img: "https://images.unsplash.com/photo-1592500475936-a576d10c8c97?q=80&w=2787&auto=format&fit=crop",
    desc: "Unrefined naturalism."
  }
];

export const Collection: React.FC = () => {
  return (
    <section id="collection" className="bg-stone-50 pt-24 pb-40">
      <div className="container mx-auto px-6 mb-24 md:mb-40 text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-stone-900">The Edit</h2>
      </div>

      <div className="flex flex-col gap-24 md:gap-40 px-4 md:px-0">
        {lookbook.map((item, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 max-w-7xl mx-auto w-full`}>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-3/5 h-[60vh] md:h-[90vh]"
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full md:w-2/5 px-6 md:px-12 text-center md:text-left"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 block">No. 0{index + 1}</span>
              <h3 className="font-serif text-5xl md:text-7xl mb-6">{item.name}</h3>
              <p className="font-sans font-light text-stone-600 text-sm md:text-base">{item.desc}</p>
              <button className="mt-8 text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-stone-500 transition-colors">
                Enquire Now
              </button>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
};