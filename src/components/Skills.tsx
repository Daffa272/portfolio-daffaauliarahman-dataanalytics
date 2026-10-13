import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  BarChart3, 
  Sparkles, 
  Sigma, 
  Database, 
  Terminal, 
  Code, 
  PieChart, 
  LayoutDashboard, 
  TrendingUp, 
  Activity, 
  FileSpreadsheet, 
  Layers, 
  Compass, 
  Presentation,
  CheckCircle2
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="w-5 h-5 text-blue-500" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
  Sigma: <Sigma className="w-5 h-5 text-purple-500" />,
  Database: <Database className="w-5 h-5 text-cyan-500" />,
  Terminal: <Terminal className="w-5 h-5 text-emerald-500" />,
  Code: <Code className="w-5 h-5 text-indigo-500" />,
  PieChart: <PieChart className="w-5 h-5 text-amber-500" />,
  LayoutDashboard: <LayoutDashboard className="w-5 h-5 text-blue-500" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-500" />,
  Activity: <Activity className="w-5 h-5 text-rose-500" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-emerald-500" />,
  Layers: <Layers className="w-5 h-5 text-indigo-500" />,
  Compass: <Compass className="w-5 h-5 text-blue-500" />,
  Presentation: <Presentation className="w-5 h-5 text-cyan-500" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 font-mono">
              02. Technical Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-3">
              Tools & Methodologies for End-to-End Analysis
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Categorized technical skills evaluated by concrete enterprise applications and practical modeling experience.
            </p>
          </div>

          {/* Interactive Category Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200/60 dark:border-slate-800/80">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid Grouped by Category */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  {category.skills.length} core capabilities
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all flex flex-col justify-between group shadow-2xs"
                  >
                    <div>
                      {/* Card Header: Icon + Name & Level */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60">
                            {iconMap[skill.iconName] || <Database className="w-5 h-5 text-blue-500" />}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                              {skill.name}
                            </h4>
                            <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                              <span className="font-medium text-blue-600 dark:text-blue-400">
                                {skill.level}
                              </span>
                              <span>·</span>
                              <span>{skill.years}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {skill.description}
                      </p>
                    </div>

                    {/* Unboxed Highlights (Zero-Pill discipline: unboxed clean text items) */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                      <div className="space-y-1">
                        {skill.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400"
                          >
                            <span className="text-blue-500 font-bold shrink-0">›</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
