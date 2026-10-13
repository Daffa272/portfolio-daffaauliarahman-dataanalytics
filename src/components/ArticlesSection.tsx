import React, { useState } from 'react';
import { ARTICLES_LIST, ArticleItem } from '../data/portfolioData';
import { 
  BookOpen, 
  Clock, 
  ArrowUpRight, 
  X, 
  Calendar, 
  CheckCircle2, 
  Share2 
} from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="insights" className="py-20 sm:py-28 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 font-mono">
            06. Analytical Writing & Storytelling
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-3">
            Data Insights & Methodological Essays
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Essays on translating metric noise into clarity, avoiding cognitive traps in dashboard visual hierarchies, and engineering production SQL pipelines.
          </p>
        </div>

        {/* 4-Card Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES_LIST.map((article) => (
            <article
              key={article.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                {/* Metadata Header (Zero-Pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {article.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                  <span>·</span>
                  <span>{article.publishedDate}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {article.summary}
                </p>

                {/* Key takeaways bullet preview */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {article.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="text-blue-500 font-bold shrink-0">›</span>
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Read Article Trigger */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded py-1"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono text-slate-400">
                  Demo Article
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 sticky top-0 z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>{activeArticle.category}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Close article modal"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Article Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                  <span>Published {activeArticle.publishedDate}</span>
                  <span>·</span>
                  <span>By Rian Ardaffa</span>
                </div>
              </div>

              {/* Takeaways Callout */}
              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 block">
                  Executive Takeaways
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {activeArticle.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Written for Data Analyst Portfolio & Business Intelligence Showcase
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
