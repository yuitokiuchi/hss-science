import { PageHeader } from '../../../shared/components/PageHeader';

export function AboutPage() {
  return (
    <div className="pt-12 md:pt-20 px-6 md:px-12 max-w-7xl mx-auto">
      <PageHeader 
        title="About Us" 
        subtitle="平塚中等教育学校科学部は、生徒の自主性を重んじ、自由な発想で科学を探求するコミュニティです。"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Mission</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              私たちは「なぜ？」という純粋な問いを大切にします。教科書に書かれていることを覚えるだけでなく、実際に手を動かし、観察し、データを取ることで、自然現象の裏にある法則を自らの手で解き明かすことを目指しています。
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">History</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              創部以来、多くの生徒がここで科学の楽しさに触れてきました。文化祭での展示発表、外部コンテストへの出場、そして日々の地道な研究活動を通じて、論理的思考力と探求心を育んでいます。
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Location</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              主に物理室・化学室・生物室を使用し、放課後に活動しています。恵まれた実験設備を活用し、本格的な実験に取り組むことができます。
            </p>
          </section>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-slate-50 p-8 border-t-4 border-slate-900">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-6">Club Data</h4>
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-bold text-slate-500 uppercase">Members</dt>
                <dd className="text-xl font-bold text-slate-900">45 Students</dd>
              </div>
              <div>
                <dt className="text-xs font-bold text-slate-500 uppercase">Established</dt>
                <dd className="text-xl font-bold text-slate-900">2009</dd>
              </div>
              <div>
                <dt className="text-xs font-bold text-slate-500 uppercase">Activity Days</dt>
                <dd className="text-xl font-bold text-slate-900">Mon, Wed, Fri</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
