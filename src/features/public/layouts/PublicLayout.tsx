import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Footer } from '../../../shared/components/Footer';

export function PublicLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

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
    <div className="min-h-screen bg-white text-[#11182c] font-sans flex flex-col">
      {/* Unified Header - MIT Style */}
      <header className="fixed top-0 left-0 right-0 bg-[#11182c] text-white z-50 h-16 md:h-20 shadow-md">
        <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black tracking-tighter leading-none text-white group-hover:opacity-90 transition-opacity">
                HSS Science
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest hover:text-slate-300 transition-colors py-2 border-b-2 ${
                  location.pathname === link.path ? 'border-white text-white' : 'border-transparent text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-white hover:bg-white/10 rounded-none transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#11182c] z-40 flex flex-col px-6 py-24 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-3xl font-black tracking-tight ${
                 location.pathname === link.path ? 'text-white' : 'text-slate-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Main Content Area */}
      <main className={`flex-1 min-h-screen flex flex-col pt-16 md:pt-20 ${isHome ? 'lg:pl-80' : ''}`}>
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
