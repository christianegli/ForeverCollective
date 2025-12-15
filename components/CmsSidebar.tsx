import React from 'react';
import { useContent } from '../store/ContentContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Image as ImageIcon, Type } from 'lucide-react';

export const CmsSidebar: React.FC = () => {
  const { content, updateContent, isEditorOpen, toggleEditor, logout } = useContent();

  if (!isEditorOpen) return null;

  return (
    <motion.div 
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-white/90 backdrop-blur-xl border-l border-stone-200 z-[60] shadow-2xl overflow-y-auto"
    >
      <div className="sticky top-0 bg-white/95 border-b border-stone-100 p-6 flex justify-between items-center z-10">
        <div>
          <h3 className="font-serif text-xl">Website Editor</h3>
          <p className="text-[10px] uppercase tracking-widest text-stone-400">Live-Vorschau Aktiv</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleEditor} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-12 pb-24">
        
        {/* HERO SECTION */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Type size={16} className="text-stone-400" />
            <h4 className="text-xs font-bold uppercase tracking-widest">Hero Bereich</h4>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] text-stone-500 mb-2">Haupt-Headline</label>
              <input 
                type="text"
                value={content.hero.subtitle}
                onChange={(e) => updateContent('hero', { subtitle: e.target.value })}
                className="w-full p-3 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-stone-900"
              />
            </div>
            <div>
              <label className="block text-[10px] text-stone-500 mb-2">Hintergrundbild URL</label>
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={content.hero.bgImage}
                  onChange={(e) => updateContent('hero', { bgImage: e.target.value })}
                  className="w-full p-3 bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-stone-900 font-mono"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-stone-100" />

        {/* PHILOSOPHY SECTION */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Type size={16} className="text-stone-400" />
            <h4 className="text-xs font-bold uppercase tracking-widest">Philosophie Text</h4>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] text-stone-500 mb-2">Intro Text</label>
              <input 
                value={content.philosophy.textPart1}
                onChange={(e) => updateContent('philosophy', { textPart1: e.target.value })}
                className="w-full p-3 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-stone-900"
              />
            </div>
            <div>
              <label className="block text-[10px] text-stone-500 mb-2">Hervorhebung 1 (Kursiv)</label>
              <input 
                value={content.philosophy.highlight1}
                onChange={(e) => updateContent('philosophy', { highlight1: e.target.value })}
                className="w-full p-3 bg-stone-50 border border-stone-200 text-sm italic focus:outline-none focus:border-stone-900"
              />
            </div>
             <div>
              <label className="block text-[10px] text-stone-500 mb-2">Mitteltext</label>
              <textarea
                value={content.philosophy.textPart2}
                onChange={(e) => updateContent('philosophy', { textPart2: e.target.value })}
                className="w-full p-3 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-stone-900 h-20"
              />
            </div>
            <div>
              <label className="block text-[10px] text-stone-500 mb-2">Hervorhebung 2 (Kursiv)</label>
              <input 
                value={content.philosophy.highlight2}
                onChange={(e) => updateContent('philosophy', { highlight2: e.target.value })}
                className="w-full p-3 bg-stone-50 border border-stone-200 text-sm italic focus:outline-none focus:border-stone-900"
              />
            </div>
          </div>
        </section>

         <hr className="border-stone-100" />

         {/* ACTIONS */}
         <section>
           <button 
             onClick={logout} 
             className="w-full border border-red-200 text-red-800 py-3 text-xs uppercase tracking-widest hover:bg-red-50 transition-colors"
            >
              Abmelden
           </button>
         </section>

      </div>

      <div className="absolute bottom-0 w-full p-6 bg-white border-t border-stone-100">
         <button className="w-full bg-stone-900 text-white py-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest hover:bg-stone-800">
           <Save size={16} /> Änderungen Speichern
         </button>
      </div>
    </motion.div>
  );
};
