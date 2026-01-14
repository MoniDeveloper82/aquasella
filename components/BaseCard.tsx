import React from 'react';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative bg-black rounded-2xl overflow-hidden h-[400px] md:h-[500px] w-[320px] md:w-[340px] transform transition-all duration-300 hover:scale-105 border-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.4),0_0_35px_rgba(255,0,0,0.6),0_0_60px_rgba(255,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5)] card-glow ${className}`}
      style={{ borderColor: '#8B0000' }}
    >
      {children}
    </div>
  );
};

export default BaseCard;