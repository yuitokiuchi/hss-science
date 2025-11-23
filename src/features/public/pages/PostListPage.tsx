import { useState } from 'react';
import { PageHeader } from '../../../shared/components/PageHeader';
import { ArticleListItem } from '../../../shared/components/ArticleListItem';

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
    <div className="pt-12 md:pt-20 px-6 md:px-12 max-w-7xl mx-auto">
      <PageHeader 
        title="Articles" 
        subtitle="日々の活動記録、実験レポート、研究成果のアーカイブ。私たちの探求の軌跡をご覧いただけます。"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-200 pb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`text-sm font-bold uppercase tracking-wider px-4 py-2 border-2 transition-all ${
            selectedCategory === null 
              ? 'bg-slate-900 text-white border-slate-900' 
              : 'bg-transparent text-slate-500 border-transparent hover:border-slate-200'
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
                ? 'bg-slate-900 text-white border-slate-900' 
                : 'bg-transparent text-slate-500 border-transparent hover:border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Post List */}
      <div className="mb-20">
        {posts.map((post) => (
          <ArticleListItem
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            category={post.category}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
