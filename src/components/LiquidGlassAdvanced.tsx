'use client';

import React, { useRef, useState } from 'react';

interface LiquidGlassAdvancedProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  intensity?: 'light' | 'medium' | 'heavy';
}

export default function LiquidGlassAdvanced({ 
  children, 
  className = '', 
  as = 'div',
  intensity = 'medium',
  ...rest
}: LiquidGlassAdvancedProps) {
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

  const Component = as;

  const getBlurIntensity = () => {
    switch(intensity) {
      case 'light': return 'blur(16px) saturate(140%)';
      case 'heavy': return 'blur(40px) saturate(220%)';
      default: return 'blur(28px) saturate(180%)';
    }
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group/liquid ${className}`}
      style={
        {
          '--mouse-x': position.x,
          '--mouse-y': position.y,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.15), inset 0 -1px 2px rgba(255, 255, 255, 0.05)',
          backdropFilter: getBlurIntensity(),
          WebkitBackdropFilter: getBlurIntensity(),
          borderRadius: 'inherit',
          overflow: 'hidden',
        } as React.CSSProperties
      }
      {...rest}
    >
      {/* Static Noise TV Texture for authentic frosted look */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 z-0 rounded-[inherit]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Specular Edge Rim Light */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-500 z-10"
        style={{
          padding: '1px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.05) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 1,
        }}
        aria-hidden="true"
      />
      
      {/* Dynamic Specular Hover Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
        style={{
          background: 'radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.08), transparent 70%)',
          opacity: isHovered ? 1 : 0,
          mixBlendMode: 'plus-lighter',
        }}
        aria-hidden="true"
      />

      {/* Content Stabilizer Plate (High contrast, isolates text from background distortion slightly) */}
      <div className="relative z-30 h-full w-full rounded-[inherit] bg-gradient-to-br from-white/[0.01] to-transparent">
        {children}
      </div>
    </Component>
  );
}
