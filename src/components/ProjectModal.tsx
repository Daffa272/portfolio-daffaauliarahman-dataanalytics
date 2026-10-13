import React, { useState } from 'react';
import { ProjectCaseStudy } from '../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Copy, 
  Check, 
  FileCode, 
  Info, 
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.sqlSnippet) {
      navigator.clipboard.writeText(project.sqlSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono uppercase tracking-wider">
              Case Study Deep-Dive
            </span>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {project.duration}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Header Title & Impact */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
              <span className="font-semibold text-blue-600 dark:text-blue-400">{project.organization}</span>
              <span>·</span>
              <span>{project.categories.join(' · ')}</span>
              <span>·</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                {project.impactMetric}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Screenshot Preview */}
          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-950">
            <img
              src={project.previewImage}
              alt={project.title}
              className="w-full h-auto max-h-[380px] object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Data Integrity / Ethics Disclosure */}
          {project.isSimulatedData && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
              <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Dataset & Privacy Notice:</span> To comply with corporate non-disclosure agreements, this project utilizes a sanitized, statistically representative simulated dataset reflecting authentic enterprise transaction distributions and real business logic.
              </div>
            </div>
          )}

          {/* 1. Business Problem & 2. Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                <span>1. Business Problem</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>2. Core Objectives</span>
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">›</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Dataset Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              3. Dataset Specification
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              {project.datasetDescription}
            </p>
          </div>

          {/* 4. Data Cleaning & 5. Analytical Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                4. Data Cleaning & Transformation
              </h3>
              <ul className="space-y-2">
                {project.dataCleaningProcess.map((item, i) => (
                  <li key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">Step {i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                5. Analytical Approach
              </h3>
              <ul className="space-y-2">
                {project.analyticalApproach.map((item, i) => (
                  <li key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">Phase {i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Key Findings */}
          <div className="p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-3">
              6. Key Analytical Findings
            </h3>
            <ul className="space-y-2.5">
              {project.keyFindings.map((finding, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 7. Business Recommendations */}
          <div className="p-5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 mb-3">
              7. Strategic Business Recommendations
            </h3>
            <ul className="space-y-2.5">
              {project.businessRecommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 shrink-0">→</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 8. Tools Used */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              8. Tools & Stack
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Code Snippet Viewer */}
          {project.sqlSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                  <FileCode className="w-4 h-4 text-blue-500" />
                  <span>Analytical Code Excerpt</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 text-slate-100 text-xs overflow-x-auto font-mono leading-relaxed border border-slate-800">
                <code>{project.sqlSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
