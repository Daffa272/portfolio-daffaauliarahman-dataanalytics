import React from 'react';
import { 
  EXPERIENCE_LIST, 
  EDUCATION_LIST, 
  CERTIFICATIONS_LIST,
  ORGANIZATIONAL_EXPERIENCE
} from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Users
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 font-mono">
            05. Career & Academic Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-3">
            Track Record in Research, Analytics & Digital Solutions
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            A chronological timeline of analytical roles, institutional research at BRIN, academic achievements at IPB University, and leadership initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Work Experience & Leadership (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Work Experience */}
            <div className="space-y-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                <Briefcase className="w-5 h-5 text-blue-500" />
                <span>Professional Experience</span>
              </h3>

              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                {EXPERIENCE_LIST.map((exp) => (
                  <div key={exp.id} className="relative pl-9 group">
                    {/* Timeline dot */}
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 bg-blue-600" />

                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs group-hover:border-blue-500/50 transition-colors">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {exp.company}
                        </span>
                        <span>·</span>
                        <span>{exp.location}</span>
                        <span>·</span>
                        <span>{exp.type}</span>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-4 space-y-1.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 block mb-1">
                          Core Responsibilities:
                        </span>
                        {exp.responsibilities.map((resp, i) => (
                          <p key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2">
                            <span className="text-blue-500 font-bold shrink-0">›</span>
                            <span>{resp}</span>
                          </p>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="mb-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 block">
                          Measurable Impact:
                        </span>
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tools Used (Clean unboxed tags) */}
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {exp.toolsUsed.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizational Experience & Leadership */}
            <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                <Users className="w-5 h-5 text-emerald-500" />
                <span>Organizational Leadership & Innovation Projects</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ORGANIZATIONAL_EXPERIENCE.map((org, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                        {org.period}
                      </span>
                      <span className="text-[11px] text-slate-500">{org.location}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {org.role}
                    </h4>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {org.organization}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certifications (4 cols) */}
          <div className="lg:col-span-4 space-y-10">
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                <span>Education</span>
              </h3>

              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs"
                >
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold block mb-1">
                    {edu.period}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-2">
                    {edu.grade}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1">
                      Honors & Selected Programs:
                    </span>
                    {edu.highlights.map((h, i) => (
                      <p key={i} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0">›</span>
                        <span>{h}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Certificates & Languages</span>
              </h3>

              <div className="space-y-3">
                {CERTIFICATIONS_LIST.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                        {cert.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      <span>{cert.issuer}</span>
                      <span>·</span>
                      <span className="font-mono">{cert.issueDate}</span>
                    </div>
                    {cert.skills && (
                      <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                        {cert.skills.join(' · ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
