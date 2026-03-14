'use client';

import React, { useRef, useState } from 'react';

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function LiquidGlass({ children, className = '', as: Component = 'div' }: LiquidGlassProps) {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x: `${x}px`, y: `${y}px` });
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden group/glass ${className}`}
      style={
        {
          '--mouse-x': position.x,
          '--mouse-y': position.y,
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.02) 100%)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(30px) saturate(150%)',
          WebkitBackdropFilter: 'blur(30px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        } as React.CSSProperties
      }
    >
      {/* Specular Highlight Hover Effect (Dynamic Torch) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          background: 'radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.12), transparent 80%)',
          opacity: isHovered ? 1 : 0,
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />

      {/* Gentle Edge Glow on Hover */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300"
        style={{
          boxShadow: 'inset 0 0 20px rgba(166, 225, 250, 0.1)',
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </Component>
  );
}
