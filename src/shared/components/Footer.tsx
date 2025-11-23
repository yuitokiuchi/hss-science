import { Twitter, Instagram, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#11182c] text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand / Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <span className="text-2xl font-black tracking-tighter leading-none">
            HSS Science
          </span>
          <span className="text-sm text-slate-400">
            © {new Date().getFullYear()} Hiratsuka Secondary School Science Club
          </span>
        </div>

        {/* Links / Social */}
        <div className="flex items-center gap-8">
          <div className="flex gap-6 text-sm font-bold text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
