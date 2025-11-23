import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ArrowRight, Github, Twitter, Instagram } from 'lucide-react';
import { Button } from '../../../shared/components/Button';

export function PublicLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: 'Activities', path: '/activities' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col md:flex-row">
      {/* Left Sidebar (Desktop) / Header (Mobile) */}
      <header className="w-full md:w-80 md:h-screen md:fixed md:top-0 md:left-0 bg-slate-50 md:bg-white border-b md:border-b-0 md:border-r border-slate-200 z-50 flex flex-col">
        <div className="p-4 md:p-8 flex items-center justify-between md:block">
          {/* Logo */}
          <Link to="/" className="block group">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-slate-900 group-hover:text-slate-700 transition-colors">
                HSS<br/>Science
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation (Desktop) */}
        <div className="hidden md:flex flex-col flex-1 px-8 py-4 overflow-y-auto">
          {/* Search Box */}
          <div className="mb-12 relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-transparent border-b-2 border-slate-200 py-2 pr-8 text-lg font-medium focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-400"
            />
            <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>

          {/* Main Nav */}
          <nav className="space-y-6 mb-12">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Menu</div>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`block text-xl font-bold hover:underline decoration-2 underline-offset-4 decoration-slate-900 ${
                  location.pathname === link.path ? 'text-slate-900 underline' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Quick Links */}
          <div className="space-y-4 mb-auto">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Resources</div>
            <a href="#" className="block text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline decoration-1 underline-offset-2">For Students</a>
            <a href="#" className="block text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline decoration-1 underline-offset-2">Research Archive</a>
            <a href="#" className="block text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline decoration-1 underline-offset-2">Club Guidelines</a>
          </div>

          {/* Footer Info */}
          <div className="mt-12 pt-8 border-t border-slate-100 text-xs text-slate-500 space-y-4">
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-900"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-slate-900"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-slate-900"><Github className="w-4 h-4" /></a>
            </div>
            <p>
              Hiratsuka Secondary School<br/>
              Science Club
            </p>
            <p>© {new Date().getFullYear()} HSS Science</p>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col px-6 py-20 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="mb-8 relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-transparent border-b-2 border-slate-200 py-2 pr-8 text-lg font-medium focus:outline-none focus:border-slate-900"
          />
          <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        </div>
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-2xl font-bold text-slate-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 md:ml-80 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
