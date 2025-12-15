import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, color = 'currentColor' }) => {
  return (
    <svg 
      viewBox="0 0 400 30" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
    >
      <g fill={color} style={{ transition: 'fill 0.5s ease' }}>
        {/* F */}
        <text x="0" y="22" fontFamily="'Montserrat', sans-serif" fontSize="24" fontWeight="300">F</text>
        
        {/* Stylized O - Top Arc */}
        <path d="M22 12 C 22 12, 27 5, 32 12" stroke={color} strokeWidth="1" fill="none" />
        {/* Stylized O - Bottom Arc */}
        <path d="M22 18 C 22 18, 27 25, 32 18" stroke={color} strokeWidth="1" fill="none" />

        {/* REVER */}
        <text x="42" y="22" fontFamily="'Montserrat', sans-serif" fontSize="24" fontWeight="300" letterSpacing="0.2em">REVER</text>
        
        {/* COLLECTIVE */}
        <text x="160" y="22" fontFamily="'Montserrat', sans-serif" fontSize="24" fontWeight="300" letterSpacing="0.2em">COLLECTIVE</text>
      </g>
    </svg>
  );
};
