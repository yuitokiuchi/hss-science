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
      <header className="fixed top-0 left-0 right-0 bg-[#11182c] text-white z-50 h-16 md:h-24 shadow-md">
        <div className="w-full h-full flex items-center justify-between pl-4 md:pl-8 pr-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group h-full py-3">
            {/* Logo Mark */}
            <img 
              src="/black_image.png" 
              alt="Logo" 
              className="h-full w-auto invert opacity-100 group-hover:opacity-90 transition-opacity"
            />

            <div className="flex flex-col justify-center h-full">
              <span className="text-[10px] md:text-lg font-bold tracking-wide text-white leading-none uppercase mb-1">
                Hiratsuka Secondary School
              </span>
              <span className="text-[10px] md:text-sm font-light tracking-wider text-slate-300 leading-none uppercase">
                Science Club
              </span>
            </div>
          </Link>

          <div className="flex items-center h-full">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 mr-8 h-full">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest hover:text-white transition-colors h-full flex items-center border-b-4 ${
                    location.pathname === link.path ? 'border-red-600 text-white' : 'border-transparent text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center h-full">
              {/* Search Button - Red Box */}
              <button className="hidden md:flex items-center justify-center w-24 h-full bg-red-600 hover:bg-red-700 transition-colors">
                <Search className="w-6 h-6 text-white" />
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden p-4 text-white h-full flex items-center justify-center bg-red-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
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
