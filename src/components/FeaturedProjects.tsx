import React, { useState } from 'react';
import { FEATURED_PROJECTS, ProjectCaseStudy } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  Search, 
  ArrowUpRight, 
  Github, 
  BarChart2, 
  Clock, 
  CheckCircle2,
  FileText
} from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Projects');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const filterTabs = [
    'All Projects',
    'Python',
    'R',
    'Looker Studio',
    'Financial Analysis',
    'SQL',
    'Research Analytics'
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    // Category match
    const matchesCategory =
      selectedFilter === 'All Projects' ||
      project.categories.includes(selectedFilter) ||
      project.category === selectedFilter;

    // Search query match
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.summary.toLowerCase().includes(q) ||
      project.tools.some((t) => t.toLowerCase().includes(q)) ||
      project.businessProblem.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 font-mono">
            03. Featured Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-3">
            Real Business Problems Solved with Rigorous Analytics
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            End-to-end data analytics engagements detailing the business friction, exploratory modeling, metric validation, and verified economic outcomes.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedFilter === tab
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, SQL, churn, margins..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              No projects matched your criteria: "{searchQuery || selectedFilter}"
            </p>
            <button
              onClick={() => {
                setSelectedFilter('All Projects');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div>
                  {/* Visual Screenshot Banner */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Impact Tag Overlay */}
                    <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-semibold text-emerald-400 border border-slate-800/80">
                      {project.impactMetric}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Metadata Header (Zero-Pill: clean text with typographic separator) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">{project.organization}</span>
                      <span>·</span>
                      <span>{project.categories.slice(0, 2).join(' · ')}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" />
                        {project.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    {/* Key Insight Preview */}
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 mb-4">
                      <span className="font-semibold text-slate-900 dark:text-white">Core Insight: </span>
                      {project.keyFindings[0]}
                    </div>

                    {/* Tools Row (Clean subtle tags) */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded py-1"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href="#interactive-dashboard"
                      className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
