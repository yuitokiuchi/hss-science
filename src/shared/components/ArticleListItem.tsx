import { Link } from 'react-router-dom';

interface ArticleListItemProps {
  id: string | number;
  title: string;
  date: string;
  category: string;
  excerpt?: string;
}

export function ArticleListItem({ id, title, date, category, excerpt }: ArticleListItemProps) {
  return (
    <Link to={`/articles/${id}`} className="group block border-b border-slate-200 py-8 last:border-0">
      <div className="flex flex-col md:flex-row gap-6 md:items-start">
        <div className="md:w-48 flex-shrink-0">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
            {category}
          </div>
          <div className="text-sm font-bold text-slate-900">
            {date}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-3 group-hover:underline decoration-4 underline-offset-4 decoration-slate-900 transition-all">
            {title}
          </h3>
          {excerpt && (
            <p className="text-slate-600 leading-relaxed line-clamp-2">
              {excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
