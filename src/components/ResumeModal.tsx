import React from 'react';
import { 
  PERSONAL_INFO, 
  EXPERIENCE_LIST, 
  EDUCATION_LIST, 
  CERTIFICATIONS_LIST, 
  SKILL_CATEGORIES,
  FEATURED_PROJECTS,
  ORGANIZATIONAL_EXPERIENCE
} from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  Mail, 
  MapPin, 
  Linkedin, 
  Phone,
  CheckCircle2
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const textContent = `
================================================================================
${PERSONAL_INFO.name.toUpperCase()}
Phone: +62895374774041 | Email: daffaar202@gmail.com
LinkedIn: www.linkedin.com/in/daffaauliar | Location: Bogor & Jakarta, Indonesia
================================================================================

PROFILE SUMMARY
Economics graduate from IPB University (GPA 3.53/4.00) with experience in data analytics, research, and digital solution development. Experienced in analyzing 500,000+ Scopus-indexed publications, identifying research trends, and translating complex datasets into insights to support strategic decision-making. Hands-on experience developing data analysis applications, data visualizations, and database-driven solutions. Proficient in SQL, BigQuery, Python, Excel, and data visualization tools, complemented by knowledge of finance, business performance, and web development.

SKILL AND EXPERTISE
• Data Analytics: Data Cleaning, Data Classification, Trend Analysis, Research Analytics, Data Reporting, Statistical Analysis, Data Interpretation.
• Programming & Querying: SQL, Python, R, JavaScript.
• Data Platforms & Tools: Google BigQuery, JupyterLab, Google Colab, RStudio, Biblioshiny, OpenRefine.
• Business & Finance: Financial Statement Analysis, Corporate Finance, Cost-Benefit Analysis, Business Performance Analysis.
• Web Development & Automation: HTML, CSS, JavaScript, Streamlit, Database-Driven Applications, AI-Powered Data Processing.

EDUCATION
IPB University (Institut Pertanian Bogor) – Bogor, Indonesia | Aug 2021 – Aug 2025
Bachelor of Economics, GPA 3.53/4.00
• Awardee IPB Student Entrepreneurship Program Funding (2024).
• Selected IPB Innovative Student Creativity Program Proposal (2024).
• Selected IPB Student Digital Innovation Competition Proposal (2024).
• Awardee IPB Student Entrepreneurship Program Funding (2024).
• 1st Place – PPK ORMAWA REESA 2023, Organized by the Ministry of Education, Culture, Research, and Technology (Kemendikbudristek).

WORK EXPERIENCE
1. Badan Riset dan Inovasi Nasional (BRIN) – Jakarta, Indonesia | May 2025 – Sep 2025
Research Assistant
• Analyzed and classified 500,000+ Scopus-indexed publications using SCImago Journal Rank (SJR) metrics in RStudio.
• Processed research publication data to support document classification and institutional analytical requirements.
• Developed presentation materials to communicate research findings clearly and effectively.

2. Badan Riset dan Inovasi Nasional (BRIN) – Jakarta, Indonesia | Nov 2024 – May 2025
Foresight and Innovation Trend Analysis Assistant
• Conducted large-scale bibliometric data analysis to identify emerging research trends and support strategic decision-making.
• Translated research findings into data visualizations and dashboards to communicate analytical insights.
• Processed global R&D data and contributed to scenario-based policy briefs and strategic recommendations.
• Delivered training on Biblioshiny and WIPO tools, helping participants reduce data processing time by 30% compared with alternative tools.

3. PT Agritama Sinergi Inovasi (AGAVI) – Kabupaten Garut, Indonesia | Sep 2024 – Dec 2024
Foresight and Innovation Trend Analysis Assistant
• Analyzed 2024 waste management performance data and developed recommendations to improve operational and program effectiveness.
• Developed a village waste data management application for Garut Regency to support digitalization and improve data management processes.
• Developed the Kang Raling information website to improve information accessibility and support community development programs.
• Monitored operational activities and supported community-based waste management initiatives.

DATA ANALYTICS PROJECTS
• Biblio Analyzer Pro – Badan Riset dan Inovasi Nasional (2025): Python and Streamlit bibliometric application to analyze and visualize 500,000+ publications.
• KangRaling – Dinas Lingkungan Hidup dan Kehutanan Kabupaten Garut (2024): Looker Studio and Google Sites village waste dashboard.
• Financial Analysis Web Application (2024): Trend analysis, DuPont analysis, scenario projections, and investment feasibility.
• AI-Powered Data Entry Application – REPARFUME (2024): Automated unstructured-to-structured database extraction using Gemini/Mistral AI APIs.

ORGANIZATIONAL & OTHER EXPERIENCE
• REPARFUME – Software Developer (May 2024 – Jul 2024)
• Innovation Project (PKM-KI) – Project Leader (Jan 2024 – Jul 2024)
• Program Mahasiswa Wirausaha (PMW IPB) – Project Leader (Jan 2024 – Feb 2025)
• Program Penguatan Kapasitas Ormawa REESA – Vice Team Leader (Jan 2023 – Dec 2023)
• The 15th Greenbase – Chief of Committee (Apr 2023 – Nov 2023)

CERTIFICATES & TRAINING
• SQL for Data Analysis – MySkill (2025)
• Financial Statement Analysis – MySkill (2025)
• Career Essentials in Generative AI – Microsoft and LinkedIn (2024)
• Data Cleansing, Pivot Table, VLOOKUP & Data Visualization in Excel – MySkill (2022)
• English – Advanced (TOEFL Prediction Test: 547) (2025)
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Daffa_Aulia_Rahman_CV.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 sticky top-0 z-10 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Curriculum Vitae Preview (ATS-Aligned)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 font-sans print:p-0 print:text-black">
          {/* Header */}
          <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-5 print:border-neutral-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-3 text-xs text-slate-600 dark:text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>+62895374774041</span>
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>daffaar202@gmail.com</span>
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                <span>linkedin.com/in/daffaauliar</span>
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 font-mono">
              PROFILE SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              Economics graduate from IPB University (GPA 3.53/4.00) with experience in data analytics, research, and digital solution development. Experienced in analyzing 500,000+ Scopus-indexed publications, identifying research trends, and translating complex datasets into insights to support strategic decision-making. Hands-on experience developing data analysis applications, data visualizations, and database-driven solutions. Proficient in SQL, BigQuery, Python, Excel, and data visualization tools, complemented by knowledge of finance, business performance, and web development.
            </p>
          </div>

          {/* Skill and Expertise */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2.5 font-mono">
              SKILL AND EXPERTISE
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <li>
                <strong className="text-slate-900 dark:text-white">Data Analytics:</strong> Data Cleaning, Data Classification, Trend Analysis, Research Analytics, Data Reporting, Statistical Analysis, Data Interpretation.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Programming & Querying:</strong> SQL, Python, R, JavaScript.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Data Platforms & Tools:</strong> Google BigQuery, JupyterLab, Google Colab, RStudio, Biblioshiny, OpenRefine.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Business & Finance:</strong> Financial Statement Analysis, Corporate Finance, Cost-Benefit Analysis, Business Performance Analysis.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">Web Development & Automation:</strong> HTML, CSS, JavaScript, Streamlit, Database-Driven Applications, AI-Powered Data Processing.
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-3 font-mono">
              EDUCATION
            </h2>
            {EDUCATION_LIST.map((edu, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <div className="text-xs text-slate-700 dark:text-slate-300">
                      {edu.degree}, <span className="font-semibold text-blue-600 dark:text-blue-400">GPA 3.53/4.00</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 mt-2 pl-2">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-4 font-mono">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-5">
              {EXPERIENCE_LIST.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {exp.company} <span className="text-xs font-normal text-slate-500">– {exp.location}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {exp.role}
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 pl-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold shrink-0">›</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Data Analytics Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-3.5 font-mono">
              DATA ANALYTICS PROJECTS
            </h2>
            <div className="space-y-3.5">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className="font-bold text-slate-900 dark:text-white text-xs">
                      {proj.title} <span className="text-slate-500 font-normal">({proj.organization})</span>
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs pl-2">
                    {proj.summary}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 pl-2 mt-0.5">
                    Tools: {proj.tools.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizational and Other Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-3 font-mono">
              ORGANIZATIONAL AND OTHER EXPERIENCE
            </h2>
            <div className="space-y-3">
              {ORGANIZATIONAL_EXPERIENCE.map((org, i) => (
                <div key={i} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {org.organization} <span className="font-semibold text-blue-600 dark:text-blue-400">({org.role})</span>
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">{org.period}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 pl-2 mt-0.5">
                    {org.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates & Training */}
          <div className="pt-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2 font-mono">
              CERTIFICATES, TRAINING, AND LANGUAGES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">Certificates:</span>
                <ul className="space-y-1 pl-2">
                  {CERTIFICATIONS_LIST.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-blue-500 font-bold">›</span>
                      <span>{cert.title} – {cert.issuer} ({cert.issueDate})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">Languages:</span>
                <ul className="space-y-1 pl-2">
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">›</span>
                    <span>Indonesian – Native</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">›</span>
                    <span>English – Advanced (TOEFL Prediction: 547)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
