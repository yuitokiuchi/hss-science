import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium font-mono tracking-wider uppercase";
  
  const variants = {
    default: "bg-slate-100 text-slate-700",
    outline: "border border-slate-200 text-slate-600",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
