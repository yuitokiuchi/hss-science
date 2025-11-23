export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          科学の力で、<br/>
          <span className="text-blue-600">未来</span>を切り拓く。
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          平塚中等教育学校科学部の公式サイトへようこそ。<br/>
          日々の実験、研究、そして発見をここから発信します。
        </p>
        <div className="pt-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors cursor-pointer">
            最新の記事を読む
          </button>
        </div>
      </div>
    </div>
  );
}
