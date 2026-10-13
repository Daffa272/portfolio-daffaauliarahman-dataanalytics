import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Check, Target, Workflow, LineChart, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 font-mono">
            01. Professional Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
            Bridging Raw Relational Data and High-Stakes Business Strategy
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            I help executive leaders, operations heads, and product teams replace guesswork with quantifiable statistical certainty.
          </p>
        </div>

        {/* Content Grid: Portrait & Bio + Core Philosophies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Portrait & Quick Credentials */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
              <img
                src="/src/assets/images/analyst_editorial_avatar_1791612839998.jpg"
                alt="Daffa Aulia Rahman - Data Analyst & Economic Researcher"
                className="w-full aspect-square object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Bachelor of Economics, IPB University (GPA 3.53/4.00)
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                  <span>Location</span>
                  <span className="font-medium text-slate-900 dark:text-white">Bogor & Jakarta, Indonesia</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                  <span>Primary Specialization</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">Data Analytics & Research Foresight</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Guiding Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Core Values / Commitments */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                Core Analytical Commitments
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span>Decision-First Architecture</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Every metric must tie to an explicit lever of intervention. Never deliver dashboards that simply report history without guiding what to do next.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Data Sanitization & Rigor</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Strict deduplication, null auditing, and statistical hypothesis tests to guarantee that business conclusions reflect true reality, not random variance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Problem-Solving Methodology */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 font-mono">
              The Analytical Workflow
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              How I Turn Complex Business Problems into Quantifiable Solutions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERSONAL_INFO.methodologySteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-mono text-blue-600 dark:text-blue-500 mb-3 block">
                    {step.step}
                  </span>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
