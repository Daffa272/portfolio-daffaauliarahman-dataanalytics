import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Database } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Database className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white text-sm">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              / Portfolio & Live BI Systems
            </span>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Case Studies
            </a>
            <a href="#interactive-dashboard" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Interactive Dashboard
            </a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#insights" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Articles
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All analytical case studies, visualizations, and code models published.
          </div>
          <div className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
            Engineered with React 19, TypeScript, Tailwind CSS & Recharts
          </div>
        </div>
      </div>
    </footer>
  );
};
