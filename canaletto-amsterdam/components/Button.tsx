import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium uppercase tracking-wide transition-all duration-300";
  
  const variants = {
    primary: "bg-diodona-green text-white hover:bg-[#002820]",
    secondary: "bg-diodona-beige text-diodona-green border border-diodona-green hover:bg-diodona-green hover:text-white",
    outline: "border border-diodona-green text-diodona-green hover:bg-diodona-green hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};