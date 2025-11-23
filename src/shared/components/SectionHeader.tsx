import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({ title, action, className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex items-end justify-between mb-12 border-b-2 border-slate-200 pb-4 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">
        {title}
      </h2>
      {action}
    </div>
  );
}
