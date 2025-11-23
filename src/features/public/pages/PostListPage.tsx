import { useState } from 'react';
import { StandardPageLayout } from '../layouts/StandardPageLayout';

export function PostListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'experiment', label: 'Experiment' },
    { id: 'research', label: 'Research' },
    { id: 'activity', label: 'Activity' },
    { id: 'news', label: 'News' },
  ];

  // Mock data
  const posts = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    title: i % 2 === 0 
      ? '文化祭での展示実験「象の歯磨き粉」の反応速度に関する考察' 
      : '自律型ロボットの制御アルゴリズムにおけるPID制御の最適化',
    excerpt: '過酸化水素水の濃度と触媒の量を変化させ、泡の発生量と反応時間を計測しました。予想外の結果が得られたため、その要因について考察します。',
    date: `2025.11.${20 - i}`,
    category: i % 2 === 0 ? 'Experiment' : 'Robotics',
    tags: ['Chemistry', 'Reaction', 'Catalyst'],
  }));

  return (
    <StandardPageLayout pageTitle="Articles & Research">
      <div className="max-w-6xl">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 border-b-4 border-[#11182c] pb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`text-sm font-bold uppercase tracking-wider px-4 py-2 border-2 transition-all ${
              selectedCategory === null 
                ? 'bg-red-600 text-white border-red-600' 
                : 'bg-transparent text-slate-500 border-slate-200 hover:border-red-600 hover:text-red-600'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-sm font-bold uppercase tracking-wider px-4 py-2 border-2 transition-all ${
                selectedCategory === cat.id 
                  ? 'bg-red-600 text-white border-red-600' 
                  : 'bg-transparent text-slate-500 border-slate-200 hover:border-red-600 hover:text-red-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Post Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex flex-col gap-4 border-t border-red-200 pt-6 hover:bg-slate-50 transition-colors p-4 -mx-4">
              <div className="flex gap-6 items-start">
                {/* Thumbnail */}
                <div className="w-32 h-24 bg-slate-100 flex-shrink-0 overflow-hidden relative border border-slate-200">
                  <div className="absolute inset-0 bg-slate-200 transition-transform duration-500 group-hover:scale-105"></div>
                  <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-1 py-0.5 uppercase">
                    {post.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-red-700 transition-colors mb-2 text-[#11182c]">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StandardPageLayout>
  );
}

