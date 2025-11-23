import { FlaskConical, Microscope, Telescope, Cpu, Bot } from 'lucide-react';
import { StandardPageLayout } from '../layouts/StandardPageLayout';

export function ActivitiesPage() {
  const teams = [
    { 
      id: 'chemistry',
      icon: FlaskConical, 
      name: 'Chemistry Team', 
      label: '実験班', 
      members: 12,
      desc: '化学反応の不思議を解明し、魅せる実験を追求します。文化祭では「象の歯磨き粉」や「炎色反応」などの実演を行い、その原理を解説します。普段の活動では、予備実験を繰り返し、安全かつ効果的な実験条件を探ります。' 
    },
    { 
      id: 'biology',
      icon: Microscope, 
      name: 'Biology Team', 
      label: '生物班', 
      members: 15,
      desc: '校内の植物や昆虫の生態調査、微生物の培養実験などを行います。身近な自然環境に目を向け、生命の多様性と巧妙な仕組みについて学びます。透明標本の作成など、標本作りにも力を入れています。' 
    },
    { 
      id: 'astronomy',
      icon: Telescope, 
      name: 'Astronomy Team', 
      label: '天文班', 
      members: 8,
      desc: '天体望遠鏡を用いた観測会を定期的に実施しています。月、惑星、星雲などを観測し、写真撮影やスケッチを行います。夏合宿では、光害の少ない場所で本格的な天体観測に挑戦します。' 
    },
    { 
      id: 'electronics',
      icon: Cpu, 
      name: 'Electronics Team', 
      label: '電子工学班', 
      members: 10,
      desc: 'ArduinoやRaspberry Piを用いた電子工作、プログラミングを行います。回路設計から筐体作成まで、ものづくりの全工程を経験します。自作の計測機器を開発し、他班の研究をサポートすることもあります。' 
    },
    { 
      id: 'robotics',
      icon: Bot, 
      name: 'Robotics Team', 
      label: 'レゴロボット班', 
      members: 14,
      desc: 'LEGO MindstormsやSpike Primeを使用し、自律型ロボットを製作します。WRO (World Robot Olympiad) などの大会に出場し、課題解決能力とプログラミング技術を競います。' 
    },
  ];

  return (
    <StandardPageLayout pageTitle="Activities">
      <div className="max-w-6xl">
        <h2 className="text-2xl md:text-4xl font-bold text-[#11182c] leading-tight mb-20 tracking-tight">
          5つの専門班に分かれ、<br/>
          それぞれの興味・関心を深めています。
        </h2>

        {/* MIT Style Data Grid */}
        <div className="mb-24">
          <div className="border-t-[6px] border-red-600 pt-2 mb-12">
            <h2 className="text-2xl font-bold text-[#11182c] tracking-tight uppercase">Teams Overview</h2>
            <p className="text-red-600 font-bold font-mono mt-2 text-sm">DATA AS OF 2025</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Data List */}
            <div className="lg:col-span-7">
              <div className="border-t border-red-600">
                {teams.map((team) => (
                  <div key={team.id} className="grid grid-cols-12 py-4 border-b border-red-200 items-center group hover:bg-red-50 transition-colors cursor-pointer">
                    <div className="col-span-8 pl-2">
                      <span className="text-lg font-bold text-[#11182c] block group-hover:text-red-700 transition-colors">{team.name}</span>
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{team.label}</span>
                    </div>
                    <div className="col-span-4 text-right pr-2">
                      <span className="text-xl font-bold text-[#11182c] font-mono">{team.members}</span>
                      <span className="text-[10px] font-bold text-slate-400 ml-2 uppercase">Members</span>
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-12 py-4 border-b-4 border-red-600 items-center bg-slate-50">
                  <div className="col-span-8 pl-2">
                    <span className="text-lg font-black text-[#11182c] uppercase tracking-tight">Total Members</span>
                  </div>
                  <div className="col-span-4 text-right pr-2">
                    <span className="text-2xl font-black text-red-600 font-mono">59</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Images / Context */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="border-t border-red-600 pt-4">
                <div className="aspect-video bg-slate-100 relative mb-2 group overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105"></div>
                  <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-xs font-bold font-mono">FIG. A</div>
                </div>
                <p className="text-xs font-medium text-slate-600 leading-tight">
                  <strong className="text-[#11182c]">Figure A.</strong> Students conducting chemical experiments during the annual culture festival.
                </p>
              </div>
              
              <div className="border-t border-red-600 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="aspect-square bg-slate-100 relative mb-2 group overflow-hidden">
                      <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105"></div>
                      <div className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 text-[10px] font-bold font-mono">FIG. B</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                     <p className="text-xs font-medium text-slate-600 leading-tight">
                      <strong className="text-[#11182c]">Figure B.</strong> Robotics team members adjusting their autonomous vehicle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-32">
          {teams.map((team, index) => (
            <section key={team.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Left Column: Content */}
              <div className="order-2 lg:order-1">
                <div className="w-full h-[2px] bg-red-600 mb-8"></div>
                <h3 className="text-3xl font-bold text-[#11182c] mb-6 tracking-tight">{team.name}</h3>
                <p className="text-base text-slate-700 leading-relaxed mb-10">
                  {team.desc}
                </p>
                <a 
                  href={`/articles?category=${team.id}`} 
                  className="inline-block border border-red-600 text-[#11182c] px-8 py-4 font-bold hover:bg-red-50 transition-colors text-sm uppercase tracking-wider"
                >
                  View {team.name} Articles
                </a>
              </div>

              {/* Right Column: Image */}
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-slate-100 relative mb-4 group overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105"></div>
                  {/* Placeholder Icon as Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <team.icon className="w-24 h-24 opacity-20" />
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-600 leading-tight">
                  <strong className="text-[#11182c]">Figure {index + 1}.</strong> Students from the {team.name} working on their projects.
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </StandardPageLayout>
  );
}


