import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
};

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-brand-orange text-white hover:opacity-90 shadow-[0_0_15px_rgba(255,107,0,0.5)]',
    secondary: 'bg-white text-black hover:bg-gray-100',
    outline: 'bg-transparent text-white border border-white/30 hover:bg-white/10'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
