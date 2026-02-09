import React, { useRef, useState, useEffect } from 'react';

interface RotatedImageProps {
  src: string;
  alt: string;
  rotation?: number; // degrees
  className?: string;
  parallaxSpeed?: number;
}

export const RotatedImage: React.FC<RotatedImageProps> = ({ 
  src, 
  alt, 
  rotation = 0, 
  className = "",
  parallaxSpeed = 0 
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxSpeed === 0) return;
    
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
      // Simple parallax calculation
      if (scrollProgress > 0 && scrollProgress < 2) {
        setOffset(scrollProgress * parallaxSpeed * 20);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxSpeed]);

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden shadow-xl transition-transform duration-700 ease-out hover:scale-[1.02] ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg) translateY(${offset}px)`,
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover block"
        loading="lazy"
      />
    </div>
  );
};