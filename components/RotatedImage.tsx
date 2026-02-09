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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxSpeed === 0) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
      if (scrollProgress > 0 && scrollProgress < 2) {
        setOffset(scrollProgress * parallaxSpeed * 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxSpeed]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = x / rect.width;
    const yPct = y / rect.height;

    const xRot = (yPct - 0.5) * 20; // Max rotation X (up/down)
    const yRot = (xPct - 0.5) * -20; // Max rotation Y (left/right)

    setTilt({ x: xRot, y: yRot });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative shadow-xl transition-all duration-200 ease-out hover:scale-[1.02] ${className}`}
      style={{
        transform: `perspective(1000px) rotate(${rotation}deg) translateY(${offset}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover block"
        loading="lazy"
        style={{ transform: 'translateZ(20px)' }} // Pop out effect
      />
      {/* Glossy overlay for realism */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ transform: 'translateZ(30px)' }}
      />
    </div>
  );
};