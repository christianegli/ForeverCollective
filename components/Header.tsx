import React, { useState, useEffect } from 'react';
import { Menu, X, Edit3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../store/ContentContext';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAdmin, toggleEditor } = useContent();

  const navLinks = [
    { name: 'Konzept', href: '#concept' },
    { name: 'Kollektionen', href: '#seasons' },
    { name: 'Kontakt', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 px-8 md:px-12 flex justify-between items-center transition-all duration-700 ${
          isScrolled ? 'py-6' : 'py-8'
        }`}
      >
        {/* Soft Fade Blur Background */}
        {/* This layer sits behind the content and fades out towards the bottom */}
        <div 
          className={`absolute inset-0 -z-10 w-full h-full pointer-events-none transition-opacity duration-1000 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-full backdrop-blur-xl bg-stone-50/5 [mask-image:linear-gradient(to_bottom,black_70%,transparent)]" />
        </div>

        <a href="#" className="z-50 block w-48 md:w-64 mix-blend-difference">
           <Logo color="#ffffff" />
        </a>

        <div className="flex items-center gap-6 mix-blend-difference text-white">
          {isAdmin && (
            <button 
              onClick={toggleEditor}
              className="px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 transition-all bg-white/20 hover:bg-white/30 backdrop-blur-md text-white"
            >
              <Edit3 size={12} /> Editor
            </button>
          )}

          <button 
            onClick={() => setIsMenuOpen(true)}
            className="uppercase tracking-widest text-xs font-bold hover:opacity-70 transition-all duration-500 flex items-center gap-2 text-white"
          >
            Menü
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-stone-950 z-[60] flex flex-col justify-center items-center text-stone-50"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 md:right-12 p-2 hover:rotate-90 transition-transform duration-500"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="font-serif text-5xl md:text-7xl hover:italic transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            
            <div className="absolute bottom-12 text-xs uppercase tracking-widest opacity-50">
              Est. 2025 — Berlin
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
