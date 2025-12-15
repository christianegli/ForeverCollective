import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { ProblemSolution } from './components/ProblemSolution';
import { ServiceModel } from './components/ServiceModel';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContentProvider } from './store/ContentContext';
import { Login } from './components/Login';
import { CmsSidebar } from './components/CmsSidebar';

// Inner component to access context
const AppContent = () => {
  const [view, setView] = useState<'site' | 'login'>('site');
  
  if (view === 'login') {
    return <Login onBack={() => setView('site')} />;
  }

  return (
    <div className="bg-stone-50 min-h-screen antialiased selection:bg-black selection:text-white overflow-x-hidden relative">
      <Header />
      <CmsSidebar />
      <main>
        <Hero />
        <Philosophy />
        <ProblemSolution />
        <ServiceModel />
        <Contact />
      </main>
      <Footer onLoginClick={() => setView('login')} />
    </div>
  );
};

export default function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}
