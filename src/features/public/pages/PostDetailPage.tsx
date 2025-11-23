import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StandardPageLayout } from '../layouts/StandardPageLayout';

export function PostDetailPage() {
  return (
    <StandardPageLayout pageTitle="Article">
      <article className="max-w-5xl pb-20">
        {/* Back Link */}
        <div className="mb-8">
          <Link to="/articles" className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-[#11182c] uppercase tracking-wider transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-t-[6px] border-red-600 pt-8 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
              Experiment
            </span>
            <span className="border border-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
              Chemistry
            </span>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-[#11182c] leading-tight mb-8 tracking-tight">
            文化祭での展示実験「象の歯磨き粉」の反応速度に関する考察
          </h1>

          <div className="flex flex-wrap items-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-600" />
              <time className="font-mono">2025.11.20</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-600" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-red-600" />
              <span>実験班</span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="lead text-xl font-light text-slate-600 leading-relaxed mb-8 border-l-4 border-red-600 pl-6">
                過酸化水素水の分解反応は、触媒の存在下で劇的に加速します。本実験では、一般に「象の歯磨き粉」として知られるこの反応について、触媒の種類と量が反応速度に与える影響を定量的に測定しました。
              </p>

              <h2 className="text-xl font-bold text-[#11182c] mt-12 mb-6 uppercase tracking-tight border-b border-red-200 pb-2 inline-block">1. Introduction</h2>
              <p className="mb-6 text-slate-700 leading-relaxed">
                過酸化水素（H₂O₂）は不安定な物質であり、常温でも徐々に水と酸素に分解します。しかし、ヨウ化カリウム（KI）などの触媒を加えることで、この反応は爆発的に加速し、洗剤を含ませておくことで大量の泡が発生します。この現象は視覚的にインパクトがあり、科学実験ショーなどで頻繁に用いられますが、その反応速度論的な解析は十分に行われていないと考え、本研究に着手しました。
              </p>

              <h2 className="text-xl font-bold text-[#11182c] mt-12 mb-6 uppercase tracking-tight border-b border-red-200 pb-2 inline-block">2. Methodology</h2>
              <p className="mb-6 text-slate-700 leading-relaxed">
                以下の条件で実験を行いました。
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700 marker:text-red-600">
                <li>過酸化水素水濃度: 3%, 6%, 30%</li>
                <li>触媒: ヨウ化カリウム飽和水溶液, 二酸化マンガン粉末, 酵母菌</li>
                <li>測定項目: 発生した泡の体積, 反応終了までの時間, 最高到達温度</li>
              </ul>

              <div className="bg-slate-50 border-l-4 border-[#11182c] p-6 my-8">
                <h3 className="font-bold text-[#11182c] mb-2 uppercase tracking-wider text-xs">Observation Note</h3>
                <p className="text-slate-600 italic text-sm">
                  30%過酸化水素水を使用する際は、激しい発熱を伴うため、耐熱容器を使用し、保護メガネ・手袋を着用して安全に十分配慮しました。
                </p>
              </div>

              <h2 className="text-xl font-bold text-[#11182c] mt-12 mb-6 uppercase tracking-tight border-b border-red-200 pb-2 inline-block">3. Results & Discussion</h2>
              <p className="mb-6 text-slate-700 leading-relaxed">
                実験の結果、ヨウ化カリウムを用いた場合が最も反応速度が速く、かつ泡のキメが細かいことが判明しました。これは、ヨウ化物イオンが中間体を形成し、活性化エネルギーを著しく低下させたためと考えられます。一方、酵母菌（カタラーゼ）を用いた場合は、反応は穏やかであり、持続時間が長い傾向にありました。
              </p>
            </div>
          </div>

          {/* Sidebar / Share */}
          <div className="lg:col-span-3">
            <div className="sticky top-32">
              <div className="border-t-[6px] border-red-600 pt-6 bg-slate-50 p-6">
                <h3 className="text-xs font-bold text-[#11182c] uppercase tracking-wider mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <button className="w-10 h-10 flex items-center justify-center border border-slate-200 hover:bg-[#11182c] hover:text-white hover:border-[#11182c] transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                  {/* Add more social buttons if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </StandardPageLayout>
  );
}

