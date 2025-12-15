import React from 'react';

interface FooterProps {
  onLoginClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLoginClick }) => {
  return (
    <footer className="bg-stone-50 py-12 border-t border-stone-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-serif text-xl uppercase tracking-widest mb-2">Forever Collective</h4>
          <p className="font-sans text-xs text-stone-500">© {new Date().getFullYear()} Alle Rechte vorbehalten.</p>
        </div>
        
        <div className="flex gap-8 text-xs font-sans text-stone-500 uppercase tracking-wider">
          <a href="#" className="hover:text-stone-900 transition-colors">Impressum</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Datenschutz</a>
          <button onClick={onLoginClick} className="hover:text-stone-900 transition-colors">Staff Login</button>
        </div>
      </div>
    </footer>
  );
};
