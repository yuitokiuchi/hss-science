interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className = '' }: PageHeaderProps) {
  return (
    <div className={`mb-12 md:mb-20 ${className}`}>
      <div className="inline-block border-b-4 border-[#11182c] pb-2 mb-6">
        <h1 className="text-5xl md:text-7xl font-black text-[#11182c] tracking-tighter uppercase leading-[0.9]">
          {title}
        </h1>
      </div>
      {subtitle && (
        <p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
