import { StandardPageLayout } from '../layouts/StandardPageLayout';

export function AboutPage() {
  return (
    <StandardPageLayout pageTitle="About Us">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-bold text-[#11182c] leading-tight mb-12 tracking-tight">
          平塚中等教育学校科学部は、<br/>
          生徒の自主性を重んじ、<br/>
          自由な発想で科学を探求するコミュニティです。
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-16">
            <section className="border-t border-slate-200 pt-8">
              <h3 className="text-sm font-bold text-red-600 mb-4 uppercase tracking-widest">Mission</h3>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                私たちは「なぜ？」という純粋な問いを大切にします。教科書に書かれていることを覚えるだけでなく、実際に手を動かし、観察し、データを取ることで、自然現象の裏にある法則を自らの手で解き明かすことを目指しています。
              </p>
            </section>

            <section className="border-t border-slate-200 pt-8">
              <h3 className="text-sm font-bold text-red-600 mb-4 uppercase tracking-widest">History</h3>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                創部以来、多くの生徒がここで科学の楽しさに触れてきました。文化祭での展示発表、外部コンテストへの出場、そして日々の地道な研究活動を通じて、論理的思考力と探求心を育んでいます。
              </p>
            </section>

            <section className="border-t border-slate-200 pt-8">
              <h3 className="text-sm font-bold text-red-600 mb-4 uppercase tracking-widest">Location</h3>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                主に物理室・化学室・生物室を使用し、放課後に活動しています。恵まれた実験設備を活用し、本格的な実験に取り組むことができます。
              </p>
            </section>
          </div>

          {/* Sidebar Data Grid */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="bg-slate-50 p-8 border-t-[6px] border-red-600">
                <h4 className="text-xl font-bold text-[#11182c] uppercase tracking-tight mb-8">Club Data</h4>
                
                <div className="space-y-0">
                  <div className="flex items-center justify-between py-3 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Members</span>
                    <span className="text-base font-bold text-[#11182c] font-mono">45</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Established</span>
                    <span className="text-base font-bold text-[#11182c] font-mono">2009</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Activity Days</span>
                    <span className="text-base font-bold text-[#11182c] font-mono">Mon, Wed, Fri</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Location</span>
                    <span className="text-base font-bold text-[#11182c] font-mono">Science Labs</span>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t-4 border-red-600">
                  <h5 className="text-xs font-bold text-[#11182c] uppercase tracking-wider mb-4">Advisors</h5>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-red-100 flex items-center justify-center font-bold text-red-600 text-xs">T</div>
                      <div>
                        <div className="font-bold text-[#11182c] text-sm">Tanaka Sensei</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase">Physics</div>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-red-100 flex items-center justify-center font-bold text-red-600 text-xs">S</div>
                      <div>
                        <div className="font-bold text-[#11182c] text-sm">Suzuki Sensei</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase">Chemistry</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StandardPageLayout>
  );
}


