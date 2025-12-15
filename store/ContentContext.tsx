import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our content
interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    bgImage: string;
  };
  philosophy: {
    textPart1: string;
    highlight1: string;
    textPart2: string;
    highlight2: string;
    textPart3: string;
  };
  seasons: Array<{
    id: string;
    name: string;
    sub: string;
    img: string;
    textColor: string;
  }>;
}

interface ContentContextType {
  content: SiteContent;
  updateContent: (section: keyof SiteContent, data: any) => void;
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
  isEditorOpen: boolean;
  toggleEditor: () => void;
}

const defaultContent: SiteContent = {
  hero: {
    title: "FOREVER COLLECTIVE",
    subtitle: "Botanical Architecture for Modern Spaces",
    bgImage: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2970&auto=format&fit=crop"
  },
  philosophy: {
    textPart1: "Wir fordern die ",
    highlight1: "vergängliche",
    textPart2: " Natur der Schönheit heraus. Indem wir die Blüte auf ihrem Höhepunkt bewahren, schaffen wir ",
    highlight2: "zeitlose",
    textPart3: " Statements für Räume, die Perfektion verlangen."
  },
  seasons: [
    { 
      id: "01",
      name: "Frühling", 
      sub: "Wiedergeburt / Pastell",
      img: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=2787&auto=format&fit=crop",
      textColor: "text-stone-800"
    },
    { 
      id: "02",
      name: "Sommer", 
      sub: "Lebendigkeit / Hitze",
      img: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=2187&auto=format&fit=crop",
      textColor: "text-white"
    },
    { 
      id: "03",
      name: "Herbst", 
      sub: "Verfall / Gold",
      img: "https://images.unsplash.com/photo-1508189860359-777d945909bf?q=80&w=2940&auto=format&fit=crop",
      textColor: "text-white"
    },
    { 
      id: "04",
      name: "Winter", 
      sub: "Stille / Eis",
      img: "https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?q=80&w=2969&auto=format&fit=crop",
      textColor: "text-stone-800"
    },
  ]
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const updateContent = (section: keyof SiteContent, data: any) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data
      }
    }));
  };

  const login = () => {
    setIsAdmin(true);
    setIsEditorOpen(true);
  };
  
  const logout = () => {
    setIsAdmin(false);
    setIsEditorOpen(false);
  };

  const toggleEditor = () => setIsEditorOpen(prev => !prev);

  return (
    <ContentContext.Provider value={{ content, updateContent, isAdmin, login, logout, isEditorOpen, toggleEditor }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within a ContentProvider");
  return context;
};
