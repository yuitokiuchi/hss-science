import { Outlet } from 'react-router-dom';
import { Beaker } from 'lucide-react';

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <header className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Beaker className="w-6 h-6" />
            <span>HSS Science</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">活動紹介</a>
            <a href="#" className="hover:text-blue-600 transition-colors">記事一覧</a>
            <a href="#" className="hover:text-blue-600 transition-colors">部員紹介</a>
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Hiratsuka Secondary School Science Club.
        </div>
      </footer>
    </div>
  );
}
