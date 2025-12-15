import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useContent } from '../store/ContentContext';
import { ArrowRight, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  const { content } = useContent();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    amount: '<10'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Mock network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form Data Sent:", formData);
      setStatus('success');
      
      // Reset after showing success message
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', company: '', email: '', amount: '<10' });
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-stone-900 pt-32 pb-20">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={content.hero.bgImage}
          alt="Abstract Floral" 
          className="w-full h-full object-cover opacity-60 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      <div className="relative z-10 w-full px-6 md:px-12 flex flex-col items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center w-full"
        >
          {/* Main Headline (Formerly Subtitle) */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white mix-blend-overlay tracking-wide text-center mb-16 max-w-5xl mx-auto">
             {content.hero.subtitle}
          </h1>
        </motion.div>

        {/* Lead Gen Form - Minimal / High Fashion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full max-w-5xl"
        >
          {status === 'success' ? (
            <div className="h-full min-h-[100px] flex flex-col items-center justify-center text-white">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-4"
              >
                <div className="rounded-full border border-white/30 p-2">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif text-2xl italic">Anfrage erhalten</p>
                  <p className="text-[10px] uppercase tracking-widest mt-1 text-stone-400">Wir melden uns in Kürze.</p>
                </div>
              </motion.div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-end">
                <div className="group md:col-span-1 relative">
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="NAME" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-white transition-all duration-500 text-xs uppercase tracking-widest font-sans"
                  />
                </div>
                <div className="group md:col-span-1 relative">
                  <input 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="FIRMA" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-white transition-all duration-500 text-xs uppercase tracking-widest font-sans"
                  />
                </div>
                <div className="group md:col-span-1 relative">
                  <div className="relative w-full">
                     <select 
                       name="amount"
                       value={formData.amount}
                       onChange={handleChange}
                       className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-all duration-500 text-xs uppercase tracking-widest font-sans appearance-none cursor-pointer rounded-none"
                     >
                       <option value="<10" className="bg-stone-900 text-stone-400">{'< 10 Arrangements'}</option>
                       <option value="10-30" className="bg-stone-900 text-stone-400">10-30 Arrangements</option>
                       <option value=">30" className="bg-stone-900 text-stone-400">{'> 30 Arrangements'}</option>
                     </select>
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                       <svg width="8" height="4" viewBox="0 0 10 6" fill="none">
                         <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="0.5"/>
                       </svg>
                     </div>
                  </div>
                </div>
                <div className="group md:col-span-1 relative">
                  <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-MAIL ADRESSE" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-stone-500 focus:outline-none focus:border-white transition-all duration-500 text-xs uppercase tracking-widest font-sans"
                  />
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="group relative px-12 py-4 overflow-hidden border border-white/30 hover:border-white transition-colors duration-500 disabled:opacity-50"
                >
                   <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors duration-500 font-bold flex items-center gap-3">
                     {status === 'submitting' ? 'Sende...' : 'Angebot anfordern'}
                     <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-500" />
                   </span>
                   <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
