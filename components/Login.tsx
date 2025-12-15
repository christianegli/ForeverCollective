import React, { useState } from 'react';
import { useContent } from '../store/ContentContext';
import { motion } from 'framer-motion';

export const Login: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { login } = useContent();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (email && password) {
      login();
      onBack();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-stone-50 flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl mb-2">Mitarbeiter Login</h2>
          <p className="font-sans text-xs uppercase tracking-widest text-stone-400">Forever Collective CMS</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-stone-900">E-Mail</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-stone-200 p-4 font-sans text-sm outline-none focus:border-stone-900 transition-colors"
              placeholder="admin@forever.co"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-stone-900">Passwort</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border border-stone-200 p-4 font-sans text-sm outline-none focus:border-stone-900 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-stone-800 transition-colors"
          >
            Editor Öffnen
          </button>
        </form>

        <button 
          onClick={onBack}
          className="w-full text-center mt-8 text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900"
        >
          Zurück zur Website
        </button>
      </motion.div>
    </div>
  );
};
