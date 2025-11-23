import { ArrowRight, FlaskConical, Microscope, Telescope, Cpu, Bot } from 'lucide-react';
import { Button } from '../../../shared/components/Button';
import { Section } from '../../../shared/components/Section';

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-slate-900 text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
          {/* Replace with actual image */}
          <div className="w-full h-full opacity-50 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>

        <div className="container mx-auto px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-block border-b-2 border-white mb-6 pb-1">
              <span className="text-sm font-bold tracking-widest uppercase">Hiratsuka Secondary School</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              SCIENCE<br/>
              FOR<br/>
              FUTURE.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-xl mb-12">
              「問い」を大切にし、実験と観察を通じて<br/>
              世界の仕組みを探求する。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-slate-900 hover:bg-slate-200 rounded-none px-8 py-4 text-lg font-bold">
                Explore Research
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-none px-8 py-4 text-lg font-bold">
                About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates (MIT Style List) */}
      <Section className="bg-white py-20">
        <div className="flex items-end justify-between mb-12 border-b-4 border-slate-900 pb-4">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Latest Updates</h2>
          <a href="/articles" className="hidden md:flex items-center font-bold text-slate-900 hover:underline decoration-2 underline-offset-4">
            View All <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Featured Post */}
          <div className="group cursor-pointer">
            <div className="aspect-video bg-slate-100 mb-6 overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-200 transition-transform duration-500 group-hover:scale-105"></div>
               <div className="absolute top-0 left-0 bg-slate-900 text-white px-4 py-2 font-bold text-sm uppercase tracking-wider">
                 Featured
               </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 text-sm font-bold text-slate-500 uppercase tracking-wider">
                <span>Experiment</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>2025.11.20</span>
              </div>
              <h3 className="text-3xl font-bold leading-tight group-hover:underline decoration-4 underline-offset-4 decoration-slate-900 transition-all">
                文化祭での展示実験「象の歯磨き粉」の反応速度に関する考察
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                過酸化水素水の濃度と触媒の量を変化させ、泡の発生量と反応時間を計測しました。予想外の結果が得られたため、その要因について考察します。
              </p>
            </div>
          </div>

          {/* List Posts */}
          <div className="flex flex-col gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer flex gap-6 items-start border-b border-slate-100 pb-8 last:border-0">
                <div className="w-32 h-24 bg-slate-100 flex-shrink-0 hidden sm:block"></div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Robotics • 2025.11.{19 - i}
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-slate-900">
                    自律型ロボットの制御アルゴリズムにおけるPID制御の最適化に関する研究
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Teams (Grid Layout) */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-12">Our Teams</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: FlaskConical, name: 'Chemistry', label: '実験班' },
              { icon: Microscope, name: 'Biology', label: '生物班' },
              { icon: Telescope, name: 'Astronomy', label: '天文班' },
              { icon: Cpu, name: 'Electronics', label: '電子工学班' },
              { icon: Bot, name: 'Robotics', label: 'レゴロボット班' },
            ].map((team) => (
              <div key={team.name} className="bg-white p-8 border-b-4 border-transparent hover:border-slate-900 transition-all group cursor-pointer shadow-sm hover:shadow-md">
                <team.icon className="w-8 h-8 text-slate-400 group-hover:text-slate-900 mb-4 transition-colors" />
                <h3 className="text-xl font-bold text-slate-900 mb-1">{team.name}</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{team.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
