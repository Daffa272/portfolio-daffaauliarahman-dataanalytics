import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  TrendingUp, 
  BarChart2, 
  Database, 
  CheckCircle2,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Mini interactive toggle for the hero dashboard element
  const [activeSegment, setActiveSegment] = useState<'BRIN' | 'Garut'>('BRIN');

  const miniStats = activeSegment === 'BRIN' ? {
    metric1Label: 'Scopus Publications',
    metric1Val: '500K+',
    metric1Sub: '+24% Velocity',
    metric2Label: 'Tool Time Saved',
    metric2Val: '30%',
    metric2Sub: 'Biblioshiny / WIPO',
    ordersLabel: '850+ Quartiles Mapped',
    sparkline: [35, 42, 58, 64, 72, 85, 92, 100],
    insight: 'Classified 500k+ Scopus articles using SCImago SJR metrics in RStudio, accelerating foresight policy briefs.'
  } : {
    metric1Label: 'Waste Nodes Tracked',
    metric1Val: '100%',
    metric1Sub: 'Garut Regency',
    metric2Label: 'Reporting Latency',
    metric2Val: '-95%',
    metric2Sub: '21d to <24h',
    ordersLabel: 'KangRaling Project',
    sparkline: [20, 28, 35, 48, 62, 75, 88, 96],
    insight: 'Digitized village waste collection workflows via Looker Studio, revealing 62% organic volume for localized composting.'
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background ambient subtle gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Left Column Typography + Right Column Mini BI Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-medium text-blue-700 dark:text-blue-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{PERSONAL_INFO.availability.status}</span>
              <span className="text-slate-400 dark:text-slate-500">·</span>
              <span className="text-slate-600 dark:text-slate-400">{PERSONAL_INFO.availability.types[0]}</span>
            </div>

            {/* Name & Role Subtitle */}
            <div className="mb-3">
              <span className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 font-mono">
                {PERSONAL_INFO.name}
              </span>
              <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300">
                Economics Graduate (IPB University) · Data Analytics · Research Foresight
              </p>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1] max-w-2xl text-balance">
              {PERSONAL_INFO.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-8">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 active:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <FileText className="w-4 h-4 text-blue-500" />
                <span>Download CV</span>
              </button>

              <a
                href="#interactive-dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors"
              >
                <BarChart2 className="w-4 h-4" />
                <span>Live Analytics Demo</span>
              </a>
            </div>

            {/* Skills at a glance banner */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 w-full">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Core Stack:</span>
              <span>Google BigQuery & SQL</span>
              <span>·</span>
              <span>Python (Streamlit)</span>
              <span>·</span>
              <span>R & RStudio</span>
              <span>·</span>
              <span>Looker Studio</span>
              <span>·</span>
              <span>Financial & DuPont Modeling</span>
            </div>
          </div>

          {/* Right Column: Mini Interactive BI Dashboard Mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl dark:shadow-blue-950/30 overflow-hidden">
              {/* Mini Dashboard Header */}
              <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Research & Operational Analytics Console
                  </span>
                </div>

                {/* Segment Controls */}
                <div className="flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <button
                    onClick={() => setActiveSegment('BRIN')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                      activeSegment === 'BRIN'
                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    BRIN Foresight
                  </button>
                  <button
                    onClick={() => setActiveSegment('Garut')}
                    className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                      activeSegment === 'Garut'
                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    Garut Waste Ops
                  </button>
                </div>
              </div>

              {/* Mini Dashboard Content */}
              <div className="p-5 space-y-4">
                {/* 2x2 Mini KPI Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-xs text-slate-500 dark:text-slate-400">{miniStats.metric1Label}</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                        {miniStats.metric1Val}
                      </span>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-0.5" />
                        {miniStats.metric1Sub}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-xs text-slate-500 dark:text-slate-400">{miniStats.metric2Label}</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                        {miniStats.metric2Val}
                      </span>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        {miniStats.metric2Sub}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mini Revenue Trajectory Bar/Sparkline Visualizer */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Analytical Ingestion Velocity
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono">
                      {miniStats.ordersLabel}
                    </span>
                  </div>

                  {/* SVG Bar Sparkline */}
                  <div className="h-16 flex items-end gap-2 pt-2">
                    {miniStats.sparkline.map((val, idx) => {
                      const heightPercent = Math.max(15, (val / 100) * 100);
                      const isHigh = idx >= 5;
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                          <div
                            className={`w-full rounded-t transition-all duration-300 ${
                              isHigh
                                ? 'bg-blue-600 dark:bg-blue-500'
                                : 'bg-slate-300 dark:bg-slate-700'
                            }`}
                            style={{ height: `${heightPercent}%` }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-mono">
                    <span>Batch 1</span>
                    <span>Batch 3</span>
                    <span>Batch 5</span>
                    <span>Batch 8 (Peak)</span>
                  </div>
                </div>

                {/* Analytical Insight Bullet Card */}
                <div className="p-3 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Insight Generated:</span> {miniStats.insight}
                  </div>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-mono">Stack: RStudio · BigQuery · Looker</span>
                <a
                  href="#interactive-dashboard"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>Open Full Dashboard</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric Strip Below Split (Constitution Section 5, item 13) */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PERSONAL_INFO.metrics.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums tracking-tight">
                {item.value}
              </span>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                {item.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
