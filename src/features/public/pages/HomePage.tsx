import { ArrowRight, FlaskConical, Microscope, Telescope, Cpu, Bot, Search, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '../../../shared/components/Button';

export function HomePage() {
  return (
        <div className="container mx-auto px-4 md:px-6 py-8">
      {/* Left Sidebar - MIT Style Navigation (Home Only) */}
      <aside className="fixed top-16 md:top-20 left-0 w-80 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] bg-slate-50 border-r border-slate-200 z-40 hidden lg:block overflow-y-auto scrollbar-hide p-8">
        <div className="space-y-12">
          {/* Search Widget */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[#11182c] uppercase tracking-widest">Search</h3>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white border border-slate-300 p-4 pr-10 text-[#11182c] font-bold focus:outline-none focus:border-[#11182c] focus:ring-1 focus:ring-[#11182c] transition-all placeholder:text-slate-400 placeholder:font-normal rounded-none"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#11182c]" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-[#11182c] uppercase tracking-widest border-b-2 border-[#11182c] pb-2">Quick Access</h3>
            <ul className="space-y-3">
              {[
                { label: 'Club Schedule', href: '#' },
                { label: 'Join Us', href: '#' },
                { label: 'Contact', href: '#' },
                { label: 'Access', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="group flex items-center text-lg font-bold text-[#11182c] hover:text-red-600 transition-colors">
                    <span className="w-1.5 h-1.5 bg-red-600 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:underline decoration-2 underline-offset-4">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mini Footer Info */}
          <div className="pt-8 text-xs text-slate-500 space-y-6 border-t border-slate-300">
            <p className="font-bold text-[#11182c] leading-relaxed text-sm">
              Hiratsuka Secondary School<br/>
              Science Club<br/>
              <span className="font-normal text-slate-500">Kanagawa, Japan</span>
            </p>
            <div className="flex gap-6">
               <Twitter className="w-5 h-5 text-[#11182c] hover:text-slate-600 cursor-pointer transition-colors" />
               <Instagram className="w-5 h-5 text-[#11182c] hover:text-slate-600 cursor-pointer transition-colors" />
               <Youtube className="w-5 h-5 text-[#11182c] hover:text-slate-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] flex items-center bg-[#11182c] text-white overflow-hidden mb-16 group">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[#11182c]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#11182c] via-[#11182c]/60 to-transparent z-10"></div>
            <div className="w-full h-full opacity-60 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
          </div>

          <div className="relative z-20 px-8 md:px-12 max-w-3xl">
            <div className="inline-block border-b-2 border-white mb-6 pb-1">
              <span className="text-sm font-bold tracking-widest uppercase">Hiratsuka Secondary School</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              SCIENCE<br/>
              FOR<br/>
              FUTURE.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-lg mb-10">
              「問い」を大切にし、実験と観察を通じて<br/>
              世界の仕組みを探求する。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-[#11182c] hover:bg-slate-200 rounded-none px-8 py-3 text-lg font-bold">
                Explore Research
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-3xl font-black text-[#11182c] tracking-tighter uppercase">
              Latest News
            </h2>
            <a href="/articles" className="hidden md:flex items-center font-bold text-[#11182c] hover:underline decoration-2 underline-offset-4">
              View All <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-24 h-24 bg-slate-100 flex-shrink-0 overflow-hidden relative rounded-none">
                    <div className="absolute inset-0 bg-slate-200 transition-transform duration-500 group-hover:scale-105"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-[#11182c] mb-2">
                      {i === 1 ? 'Scientists get a first look at the innermost region of a white dwarf system' : 
                       i === 2 ? 'A new take on carbon capture' :
                       i === 3 ? 'New AI agent learns to use CAD to create 3D objects from sketches' :
                       'MIT researchers use CT scans to unravel mysteries of early metal production'}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {i === 1 ? 'X-ray observations reveal surprising features of the dying star\'s most energetic environment.' :
                       i === 2 ? 'Mantel, founded by MIT alumni, developed a system that captures CO2 from factories and power plants while delivering steam to customers.' :
                       'The virtual VideoCAD tool could boost designers\' productivity and help train engineers learning computer-aided design.'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teams Grid */}
        <section>
          <h2 className="text-3xl font-black text-[#11182c] tracking-tighter uppercase mb-8 border-b border-slate-200 pb-4">Our Teams</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: FlaskConical, name: 'Chemistry', label: '実験班' },
              { icon: Microscope, name: 'Biology', label: '生物班' },
              { icon: Telescope, name: 'Astronomy', label: '天文班' },
              { icon: Cpu, name: 'Electronics', label: '電子工学班' },
              { icon: Bot, name: 'Robotics', label: 'レゴロボット班' },
            ].map((team) => (
              <div key={team.name} className="bg-slate-50 p-6 hover:bg-[#11182c] group cursor-pointer transition-all duration-300 rounded-none">
                <team.icon className="w-8 h-8 text-[#11182c] group-hover:text-white mb-4 transition-colors" />
                <h3 className="text-lg font-bold text-[#11182c] group-hover:text-white mb-1 transition-colors">{team.name}</h3>
                <p className="text-xs font-bold text-slate-500 group-hover:text-slate-400 uppercase tracking-wider transition-colors">{team.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
