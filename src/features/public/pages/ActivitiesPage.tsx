import { FlaskConical, Microscope, Telescope, Cpu, Bot } from 'lucide-react';
import { PageHeader } from '../../../shared/components/PageHeader';

export function ActivitiesPage() {
  const teams = [
    { 
      id: 'chemistry',
      icon: FlaskConical, 
      name: 'Chemistry Team', 
      label: '実験班', 
      desc: '化学反応の不思議を解明し、魅せる実験を追求します。文化祭では「象の歯磨き粉」や「炎色反応」などの実演を行い、その原理を解説します。普段の活動では、予備実験を繰り返し、安全かつ効果的な実験条件を探ります。' 
    },
    { 
      id: 'biology',
      icon: Microscope, 
      name: 'Biology Team', 
      label: '生物班', 
      desc: '校内の植物や昆虫の生態調査、微生物の培養実験などを行います。身近な自然環境に目を向け、生命の多様性と巧妙な仕組みについて学びます。透明標本の作成など、標本作りにも力を入れています。' 
    },
    { 
      id: 'astronomy',
      icon: Telescope, 
      name: 'Astronomy Team', 
      label: '天文班', 
      desc: '天体望遠鏡を用いた観測会を定期的に実施しています。月、惑星、星雲などを観測し、写真撮影やスケッチを行います。夏合宿では、光害の少ない場所で本格的な天体観測に挑戦します。' 
    },
    { 
      id: 'electronics',
      icon: Cpu, 
      name: 'Electronics Team', 
      label: '電子工学班', 
      desc: 'ArduinoやRaspberry Piを用いた電子工作、プログラミングを行います。回路設計から筐体作成まで、ものづくりの全工程を経験します。自作の計測機器を開発し、他班の研究をサポートすることもあります。' 
    },
    { 
      id: 'robotics',
      icon: Bot, 
      name: 'Robotics Team', 
      label: 'レゴロボット班', 
      desc: 'LEGO MindstormsやSpike Primeを使用し、自律型ロボットを製作します。WRO (World Robot Olympiad) などの大会に出場し、課題解決能力とプログラミング技術を競います。' 
    },
  ];

  return (
    <div className="pt-12 md:pt-20 px-6 md:px-12 max-w-7xl mx-auto">
      <PageHeader 
        title="Activities" 
        subtitle="5つの専門班に分かれ、それぞれの興味・関心を深めています。"
      />

      <div className="grid grid-cols-1 gap-12 mb-20">
        {teams.map((team) => (
          <div key={team.id} className="group grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-slate-200 pt-12">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="w-16 h-16 bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors duration-300">
                <team.icon className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">{team.name}</h2>
              <span className="inline-block bg-slate-100 text-slate-900 text-xs font-bold px-3 py-1 uppercase tracking-wider">
                {team.label}
              </span>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <p className="text-lg text-slate-600 leading-relaxed">
                {team.desc}
              </p>
              <div className="mt-8">
                <a href={`/articles?category=${team.id}`} className="inline-flex items-center font-bold text-slate-900 hover:underline decoration-2 underline-offset-4">
                  View Related Articles →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
