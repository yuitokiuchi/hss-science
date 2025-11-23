import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 overflow-hidden ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  );
}
