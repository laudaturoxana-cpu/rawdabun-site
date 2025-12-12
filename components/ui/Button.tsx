'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  fullWidth = false
}: ButtonProps) {
  const baseClasses = "px-8 py-4 rounded-lg font-medium transition-all duration-300 text-center inline-block";
  const widthClass = fullWidth ? "w-full" : "";

  const variantClasses = {
    primary: "bg-olive text-white hover:bg-olive-dark hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-transparent border-2 border-olive text-olive hover:bg-olive hover:text-white"
  };

  const buttonClass = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
