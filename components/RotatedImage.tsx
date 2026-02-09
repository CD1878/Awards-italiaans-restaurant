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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current); // Only trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative shadow-xl transition-all duration-700 ease-out hover:scale-105 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover block"
        loading="lazy"
      />
      {/* Light overlay for depth */}
      <div
        className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
    </div>
  );
};