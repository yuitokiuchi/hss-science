import type { ReactNode } from 'react';

interface StandardPageLayoutProps {
  pageTitle: string;
  children: ReactNode;
}

export function StandardPageLayout({ pageTitle, children }: StandardPageLayoutProps) {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 max-w-[1400px]">
      <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-12 lg:gap-24">
        {/* Left Sidebar: Vertical Text */}
        <div className="hidden lg:block relative">
          <div className="sticky top-32 border-l border-slate-300 pl-6 py-2">
            <h1 className="text-xl font-medium text-slate-400 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 whitespace-nowrap select-none">
              {pageTitle}
            </h1>
          </div>
        </div>

        {/* Mobile Header (Visible only on mobile) */}
        <div className="lg:hidden mb-8 border-l-4 border-red-600 pl-4">
          <h1 className="text-3xl font-bold text-[#11182c] tracking-tight uppercase">
            {pageTitle}
          </h1>
        </div>

        {/* Main Content */}
        <div className="min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}
