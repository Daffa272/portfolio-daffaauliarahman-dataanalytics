export interface ProjectCaseStudy {
  id: string;
  title: string;
  organization: string;
  category: string;
  categories: string[];
  summary: string;
  previewImage: string;
  tools: string[];
  duration: string;
  impactMetric: string;
  businessProblem: string;
  objectives: string[];
  datasetDescription: string;
  isSimulatedData: boolean;
  dataCleaningProcess: string[];
  analyticalApproach: string[];
  keyFindings: string[];
  businessRecommendations: string[];
  githubUrl?: string;
  demoUrl?: string;
  sqlSnippet?: string;
}

export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Proficient' | 'Working Knowledge';
  years: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  achievements: string[];
  toolsUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  focus: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export const PERSONAL_INFO = {
  name: 'Daffa Aulia Rahman',
  role: 'Data Analyst & Economic Researcher',
  headline: 'Turning Complex Data into Strategic Insights & Decisions.',
  subheadline:
    'Economics graduate from IPB University (GPA 3.53/4.00) with proven experience in data analytics, research, and digital solution development. Experienced in analyzing 500,000+ Scopus-indexed publications at BRIN, identifying research trends, and building database-driven applications.',
  location: 'Bogor & Jakarta, Indonesia',
  email: 'daffaar202@gmail.com',
  phone: '+62895374774041',
  linkedin: 'https://www.linkedin.com/in/daffaauliar',
  github: 'https://github.com/daffaauliar',
  availability: {
    status: 'Open for Opportunities',
    types: ['Data Analyst', 'Research & BI Specialist', 'Digital Solution Developer'],
  },
  metrics: [
    { label: 'Publications Analyzed', value: '500,000+', detail: 'Scopus-indexed records analyzed with SJR metrics at BRIN' },
    { label: 'Processing Time Saved', value: '30%', detail: 'Trained researchers on Biblioshiny & WIPO analytical tools' },
    { label: 'Bachelor of Economics GPA', value: '3.53 / 4.00', detail: 'IPB University (Institut Pertanian Bogor)' },
    { label: 'National 1st Place', value: 'Kemendikbud', detail: '1st Place – PPK ORMAWA REESA 2023 National Competition' },
  ],
  bioParagraphs: [
    'I am an Economics graduate from IPB University (Institut Pertanian Bogor, GPA 3.53/4.00) with a strong foundation in quantitative economics, data analytics, and digital solution engineering. At the National Research and Innovation Agency (Badan Riset dan Inovasi Nasional - BRIN), I analyzed and classified over 500,000 Scopus-indexed publications using SCImago Journal Rank (SJR) metrics in RStudio and conducted large-scale bibliometric trend analyses to support strategic decision-making and scenario-based policy briefs.',
    'My hands-on experience bridges the gap between data platforms (Google BigQuery, SQL, Python, R, Streamlit), financial analysis (DuPont decomposition, corporate finance, cost-benefit analysis), and user-facing dashboards (Looker Studio, web applications). I have led and contributed to community digitalization initiatives, such as the KangRaling waste management system for Garut Regency and AI-driven data extraction applications.',
  ],
  methodologySteps: [
    {
      step: '01',
      title: 'Problem Framing & Economic Diagnosis',
      description: 'Isolate core policy or business objectives, identify key unit metrics, and define quantitative frameworks (Cost-Benefit, SJR, DuPont).'
    },
    {
      step: '02',
      title: 'Large-Scale Extraction & Data Sanitization',
      description: 'Clean, classify, and normalize messy records at scale (500k+ publications, waste ledgers) using SQL, OpenRefine, and RStudio.'
    },
    {
      step: '03',
      title: 'Bibliometrics & Statistical Modeling',
      description: 'Perform trend projections, keyword co-occurrence analysis, scenario simulations, and variance testing to identify emerging patterns.'
    },
    {
      step: '04',
      title: 'Interactive Dashboards & Policy Translation',
      description: 'Deliver intuitive dashboards (Looker Studio, Streamlit) and executive briefs that accelerate stakeholder decision-making.'
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'analytics',
    title: 'Data Analytics & Research',
    description: 'Data cleaning, trend forecasting, bibliometrics, and research analytics.',
    skills: [
      {
        name: 'Research Analytics & Bibliometrics',
        level: 'Advanced',
        years: '2+ yrs',
        iconName: 'BarChart3',
        description: 'Large-scale bibliometric mapping, citation analysis, and SCImago Journal Rank (SJR) classification.',
        highlights: ['500,000+ Scopus records analyzed', 'Biblioshiny & WIPO tools', 'Emerging R&D trend identification']
      },
      {
        name: 'Data Cleaning & Wrangling',
        level: 'Advanced',
        years: '3+ yrs',
        iconName: 'Sparkles',
        description: 'Standardizing dirty publication, environmental, and financial datasets into structured schemas.',
        highlights: ['OpenRefine entity resolution', 'Pandas data wrangling', 'Outlier and missing data handling']
      },
      {
        name: 'Statistical Analysis & Interpretation',
        level: 'Proficient',
        years: '3+ yrs',
        iconName: 'Sigma',
        description: 'Hypothesis testing, descriptive statistics, regression models, and data-driven scenario analysis.',
        highlights: ['Econometric modeling', 'Scenario projections', 'Policy brief synthesis']
      }
    ]
  },
  {
    id: 'programming',
    title: 'Programming & Querying',
    description: 'Relational querying, automated data processing, and analytical scripting.',
    skills: [
      {
        name: 'SQL & Google BigQuery',
        level: 'Advanced',
        years: '3+ yrs',
        iconName: 'Database',
        description: 'Writing complex queries, aggregations, window functions, and managing cloud data warehouses.',
        highlights: ['Google BigQuery queries', 'Multi-table JOINs & CTEs', 'Database schema design']
      },
      {
        name: 'Python (Pandas, Streamlit)',
        level: 'Advanced',
        years: '3+ yrs',
        iconName: 'Terminal',
        description: 'Data manipulation scripts, automated analytics applications, and web-based data dashboards.',
        highlights: ['Streamlit app development', 'Pandas & NumPy data pipelines', 'API data integration']
      },
      {
        name: 'R & RStudio',
        level: 'Advanced',
        years: '2+ yrs',
        iconName: 'Code',
        description: 'Bibliometric computations, document classification, and academic publication analysis.',
        highlights: ['Bibliometrix package', 'SJR metric calculations', 'Document classification workflows']
      },
      {
        name: 'JavaScript & Web Technologies',
        level: 'Proficient',
        years: '2+ yrs',
        iconName: 'Layers',
        description: 'Building interactive client-side web tools, financial calculation interfaces, and DOM manipulation.',
        highlights: ['HTML5, CSS3, ES6 JavaScript', 'Dynamic calculation engines', 'Responsive UI development']
      }
    ]
  },
  {
    id: 'tools',
    title: 'Data Platforms & Tools',
    description: 'Interactive business intelligence, cloud workspaces, and specialized analytical software.',
    skills: [
      {
        name: 'Looker Studio & Google Sites',
        level: 'Advanced',
        years: '2+ yrs',
        iconName: 'LayoutDashboard',
        description: 'Designing accessible public dashboards and operational tracking systems (KangRaling project).',
        highlights: ['Village waste tracking dashboard', 'Automated data blending', 'Community stakeholder interfaces']
      },
      {
        name: 'JupyterLab & Google Colab',
        level: 'Advanced',
        years: '3+ yrs',
        iconName: 'TrendingUp',
        description: 'Reproducible research notebooks, EDA exploratory analysis, and cloud model development.',
        highlights: ['Cloud notebook execution', 'Reproducible research code', 'Visualization export']
      },
      {
        name: 'Microsoft Excel (Advanced)',
        level: 'Advanced',
        years: '4+ yrs',
        iconName: 'FileSpreadsheet',
        description: 'Pivot Tables, VLOOKUP, INDEX/MATCH, aggregate data formulas, and financial modeling.',
        highlights: ['Data cleansing & filtering', 'Pivot tables & slicers', 'INDEX/MATCH & nested functions']
      },
      {
        name: 'OpenRefine & Data Preparation',
        level: 'Proficient',
        years: '2+ yrs',
        iconName: 'Sparkles',
        description: 'Clustering algorithms, text facet transformations, and bulk data reconciliation.',
        highlights: ['GREL expressions', 'Clustering and deduplication', 'Reconciliation workflows']
      }
    ]
  },
  {
    id: 'business',
    title: 'Business & Financial Economics',
    description: 'Corporate financial health, cost-benefit assessments, and unit economics.',
    skills: [
      {
        name: 'Financial Statement & DuPont Analysis',
        level: 'Advanced',
        years: '3+ yrs',
        iconName: 'Compass',
        description: 'Decomposing Return on Equity (ROE), operating margins, asset turnover, and financial leverage.',
        highlights: ['3-Stage DuPont model', 'Ratio analysis (Liquidity & Solvency)', 'Cash flow diagnosis']
      },
      {
        name: 'Cost-Benefit & Feasibility Studies',
        level: 'Proficient',
        years: '3+ yrs',
        iconName: 'Presentation',
        description: 'Evaluating project viability, capital requirements, break-even thresholds, and economic impact.',
        highlights: ['Scenario projections', 'NPV & IRR modeling', 'Investment feasibility scoring']
      },
      {
        name: 'Market Research & Brand Positioning',
        level: 'Proficient',
        years: '2+ yrs',
        iconName: 'Activity',
        description: 'Competitor benchmarking, consumer pricing elasticity, and go-to-market strategy alignment.',
        highlights: ['Market trend analysis', 'Customer persona synthesis', 'Product differentiation strategy']
      }
    ]
  },
  {
    id: 'automation',
    title: 'Web Apps & AI Automation',
    description: 'Building database-driven applications and automating workflows with generative AI.',
    skills: [
      {
        name: 'AI-Powered Data Extraction',
        level: 'Proficient',
        years: '2+ yrs',
        iconName: 'Terminal',
        description: 'Transforming messy unstructured text into structured relational schemas using Gemini & LLM APIs.',
        highlights: ['LLM API integration', 'Prompt engineering for JSON schemas', 'Centralized SQL ingestion']
      },
      {
        name: 'Database-Driven Web Applications',
        level: 'Proficient',
        years: '2+ yrs',
        iconName: 'Database',
        description: 'Developing end-to-end web tools with centralized relational storage and responsive UI.',
        highlights: ['CRUD operations', 'Schema normalization', 'Full-stack prototyping']
      }
    ]
  }
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'biblio-analyzer-brin',
    title: 'Biblio Analyzer Pro – Large-Scale Research Bibliometrics Application',
    organization: 'Badan Riset dan Inovasi Nasional (BRIN)',
    category: 'Python',
    categories: ['Python', 'R', 'Research Analytics', 'Streamlit'],
    summary: 'Engineered a Python- and Streamlit-based bibliometric analytics application to process and classify 500,000+ Scopus-indexed publications using SCImago Journal Rank (SJR) metrics.',
    previewImage: '/src/assets/images/project_sales_analytics_1791612785676.jpg',
    tools: ['Python', 'Streamlit', 'RStudio', 'Biblioshiny', 'Scopus Data', 'Pandas'],
    duration: 'BRIN Research Fellowship',
    impactMetric: '500,000+ Publications Analyzed · -30% Processing Time',
    businessProblem: 'Institutional researchers and policy makers spent hundreds of manual hours querying and cross-referencing global research publications, lacking a unified tool to classify journals by impact factor and track emerging foresight domains.',
    objectives: [
      'Ingest and normalize 500,000+ Scopus-indexed publication records across multidisciplinary domains.',
      'Automate journal quartile classification using SCImago Journal Rank (SJR) algorithms.',
      'Build an intuitive Streamlit UI enabling non-technical research analysts to generate publication trend heatmaps in minutes.',
      'Train institutional staff on Biblioshiny and WIPO patent analytics tools.'
    ],
    datasetDescription: 'Over 500,000 Scopus-indexed academic publication records containing author affiliations, citation metrics, journal titles, SJR ratings, publication year, and subject category taxonomies.',
    isSimulatedData: false,
    dataCleaningProcess: [
      'Standardized author affiliation strings and institutional nomenclature across global research institutions.',
      'Resolved missing SJR quartile assignments by cross-referencing Scopus source identifiers with annual SCImago ledger datasets.',
      'Filtered duplicate record extractions from multi-query API harvest batches using unique DOI hash keys.'
    ],
    analyticalApproach: [
      'Calculated publication growth velocity and citation impact metrics across 5 strategic scientific disciplines.',
      'Constructed co-word and thematic evolution maps using bibliometric co-occurrence algorithms.',
      'Benchmarked national publication quality against ASEAN and global peer research institutions.'
    ],
    keyFindings: [
      'Applied R&D publications demonstrated a 24% annual growth rate, with top-tier Q1/Q2 journal proportion rising steadily.',
      'Identified 4 high-potential emerging innovation subfields in renewable bioenergy and agricultural technology.',
      'Training participants reduced bibliometric data processing time by 30% compared with legacy manual spreadsheet workflows.'
    ],
    businessRecommendations: [
      'Standardize institutional publication tracking using the automated Biblio Analyzer pipeline.',
      'Prioritize research grant allocations toward identified emerging technological clusters.',
      'Institutionalize periodic bibliometric workshops for BRIN researchers.'
    ],
    githubUrl: 'https://github.com/daffaauliar/biblio-analyzer-pro',
    demoUrl: '#interactive-dashboard',
    sqlSnippet: `# Streamlit & Pandas Publication Classification Workflow
import streamlit as st
import pandas as pd
import numpy as np

@st.cache_data
def process_scopus_corpus(df_publications, df_sjr_benchmarks):
    # Merge publication records with annual SJR metrics
    merged = pd.merge(
        df_publications,
        df_sjr_benchmarks[['Sourceid', 'SJR', 'SJR_Quartile', 'Country']],
        on='Sourceid',
        how='left'
    )
    
    # Calculate aggregate metric summaries
    quartile_dist = merged['SJR_Quartile'].value_counts(normalize=True) * 100
    yearly_velocity = merged.groupby(['Year', 'SJR_Quartile']).size().unstack(fill_value=0)
    
    return merged, quartile_dist, yearly_velocity`
  },
  {
    id: 'kangraling-waste-dashboard',
    title: 'KangRaling – Village Waste Management & Operational Analytics',
    organization: 'Dinas Lingkungan Hidup Kabupaten Garut & PT AGAVI',
    category: 'Business Intelligence',
    categories: ['Looker Studio', 'Google Sites', 'Data Analytics', 'Excel'],
    summary: 'Developed an integrated village waste management application and interactive Looker Studio dashboard to digitize municipal waste data collection and optimize community programs in Garut Regency.',
    previewImage: '/src/assets/images/project_customer_rfm_1791612799554.jpg',
    tools: ['Looker Studio', 'Google Sites', 'Microsoft Excel', 'Data Classification'],
    duration: 'AGAVI & Garut Regency Project',
    impactMetric: 'Digitized Municipal Waste Tracking across Village Networks',
    businessProblem: 'Waste collection data across rural villages in Garut Regency was tracked manually on paper logs, causing data delays of up to 3 weeks, misallocated transport logistics, and lack of transparency for local environmental initiatives.',
    objectives: [
      'Design a standardized digital data collection workflow for community waste operators.',
      'Build the KangRaling information website and Looker Studio dashboard for real-time village performance tracking.',
      'Provide operational recommendations to Garut Regency DLHK to improve sorting efficiency and organic waste diversion.'
    ],
    datasetDescription: 'Operational waste log records covering organic, anorganic, and recyclable collection volumes across village clusters in Garut Regency over the 2024 operating year.',
    isSimulatedData: false,
    dataCleaningProcess: [
      'Normalized inconsistent unit measurements (sacks, kilograms, cubic meters) into standardized metric kilograms.',
      'Built automated data validation rules in spreadsheets to reject anomalous daily weight inputs before warehouse sync.',
      'Created hierarchical village and sub-district geographic taxonomy keys to enable multi-level drilldown.'
    ],
    analyticalApproach: [
      'Tracked monthly waste generation per capita against municipal recycling and composting capacity.',
      'Calculated route efficiency and collection timeliness scores for community operational groups.',
      'Designed executive visual scorecards with Looker Studio displaying diversion percentages and active collection centers.'
    ],
    keyFindings: [
      'Organic waste accounted for 62.4% of total volume, identifying a massive opportunity for localized maggot and composting facilities.',
      'Active community participation villages achieved a 38% higher source-separation rate compared to unmonitored clusters.',
      'Digital daily logging reduced reporting latency from 21 days to under 24 hours for municipal officers.'
    ],
    businessRecommendations: [
      'Expand the KangRaling digital platform to all sub-districts in Garut Regency.',
      'Establish community composting centers at top-volume rural nodes to slash transport costs by 28%.',
      'Incentivize local operators through monthly public performance leaderboards.'
    ],
    githubUrl: 'https://github.com/daffaauliar/kangraling-waste-analytics',
    demoUrl: '#interactive-dashboard'
  },
  {
    id: 'financial-analysis-dupont',
    title: 'Corporate Financial Analysis & DuPont Decomposition Platform',
    organization: 'Economics & Corporate Finance Project',
    category: 'Financial Analysis',
    categories: ['Financial Analysis', 'JavaScript', 'HTML/CSS', 'Excel'],
    summary: 'Built a web-based financial analytics platform executing 3-stage DuPont analysis, scenario projections, and investment feasibility calculations to assess corporate operational health.',
    previewImage: '/src/assets/images/project_financial_kpi_1791612812605.jpg',
    tools: ['JavaScript', 'HTML5', 'CSS3', 'Financial Modeling', 'DuPont Analysis'],
    duration: 'Financial Economics Research',
    impactMetric: 'Automated 3-Stage DuPont & Feasibility Calculations',
    businessProblem: 'Investors and business analysts often view aggregate Net Profit Margin or ROE in isolation, failing to pinpoint whether profitability stems from operational excellence, efficient asset utilization, or dangerous debt leverage.',
    objectives: [
      'Decompose Return on Equity (ROE) into Net Profit Margin, Asset Turnover, and Financial Leverage components.',
      'Provide interactive sensitivity sliders for revenue growth, COGS inflation, and capital expenditure scenarios.',
      'Generate automated investment feasibility assessments based on Cost-Benefit Analysis (CBA) principles.'
    ],
    datasetDescription: 'Multi-year corporate financial statements (Income Statement, Balance Sheet, Cash Flow) across public industrial and consumer companies.',
    isSimulatedData: true,
    dataCleaningProcess: [
      'Standardized disparate chart of accounts into unified balance sheet and P&L categories.',
      'Reconciled non-operating gains and tax adjustments to compute Normalized Net Operating Profit After Tax (NOPAT).',
      'Engineered automated validation checking Balance Sheet assets equality against liabilities and equity.'
    ],
    analyticalApproach: [
      'Calculated 3-Stage DuPont Formula: ROE = (Net Income / Sales) × (Sales / Assets) × (Assets / Equity).',
      'Modeled working capital cycles (Days Sales Outstanding, Days Inventory Outstanding, Days Payable Outstanding).',
      'Constructed scenario projections for base, optimistic, and distressed economic conditions.'
    ],
    keyFindings: [
      'Demonstrated that a 15% increase in inventory turnover had a 2.3x higher positive impact on ROE than an equivalent percentage price hike.',
      'Isolated hidden leverage risks in companies displaying superficially attractive ROE driven purely by escalating debt ratios.',
      'Automated financial calculation scripts reduced manual valuation modeling time from hours to seconds.'
    ],
    businessRecommendations: [
      'Embed DuPont decomposition as standard protocol before evaluating corporate performance.',
      'Prioritize asset efficiency initiatives (optimizing cash conversion cycle) to drive sustainable shareholder value.',
      'Utilize scenario stress testing to insulate operations against interest rate and supply chain shocks.'
    ],
    githubUrl: 'https://github.com/daffaauliar/financial-dupont-analysis-web',
    demoUrl: '#interactive-dashboard'
  },
  {
    id: 'ai-data-entry-reparfume',
    title: 'AI-Powered Unstructured Data Extraction & Database Integration',
    organization: 'REPARFUME',
    category: 'SQL',
    categories: ['SQL', 'Python', 'AI Automation', 'Web Development'],
    summary: 'Developed an automated data application utilizing Gemini / LLM APIs to transform unstructured raw customer and product notes into structured relational database schemas for REPARFUME.',
    previewImage: '/src/assets/images/project_market_forecasting_1791612829111.jpg',
    tools: ['Gemini AI API', 'Python', 'SQL', 'JavaScript', 'Market Research'],
    duration: 'REPARFUME Technical Project',
    impactMetric: 'Automated Unstructured-to-SQL Pipeline & Centralized DB',
    businessProblem: 'REPARFUME received high volumes of unstructured customer feedback, product ingredient inquiries, and sales notes through chat channels, creating severe administrative bottlenecks and lost market intelligence.',
    objectives: [
      'Construct an AI-driven data extraction pipeline using Gemini / Mistral LLM endpoints.',
      'Parse conversational text into structured relational tables (customers, scent preferences, order intentions).',
      'Conduct market research and brand positioning analysis based on structured customer sentiment trends.'
    ],
    datasetDescription: 'Over 12,000 anonymized conversational customer interaction logs, fragrance attribute catalogs, and transaction records.',
    isSimulatedData: false,
    dataCleaningProcess: [
      'Sanitized customer records by stripping PII and normalizing phone/email identifiers.',
      'Engineered schema-constrained JSON output prompts to ensure deterministic AI responses.',
      'Implemented duplicate detection and foreign key validation before writing to the central database.'
    ],
    analyticalApproach: [
      'Categorized fragrance olfactory families (woody, floral, citrus) against customer age demographics.',
      'Tracked sentiment polarity and feature request frequencies to guide product development roadmaps.',
      'Mapped customer willingness-to-pay ranges against competitive benchmark pricing.'
    ],
    keyFindings: [
      'Automated extraction slashed manual customer record entry time by 85%.',
      'Identified an unserved market segment demanding long-lasting fresh aquatic profiles in the 18-24 age cohort.',
      'Structured database integration enabled direct real-time queries for inventory planning and repeat campaign targeting.'
    ],
    businessRecommendations: [
      'Deploy the automated AI ingestion pipeline directly into all incoming customer service webhooks.',
      'Prioritize new product formulation around the top 2 identified scent preference gaps.',
      'Establish automated replenishment reminders triggered by customer usage cycle models.'
    ],
    githubUrl: 'https://github.com/daffaauliar/ai-data-entry-reparfume',
    demoUrl: '#interactive-dashboard'
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Research Assistant',
    company: 'Badan Riset dan Inovasi Nasional (BRIN)',
    location: 'Jakarta, Indonesia',
    period: 'May 2025 – Sep 2025',
    type: 'Research Fellowship',
    responsibilities: [
      'Analyzed and classified 500,000+ Scopus-indexed academic publications using SCImago Journal Rank (SJR) metrics in RStudio.',
      'Processed large-scale research publication data to support document classification and institutional analytical requirements.',
      'Developed executive presentation materials and analytical summaries to communicate research findings clearly and effectively.'
    ],
    achievements: [
      'Successfully processed and categorized a corpus of 500,000+ international academic publications.',
      'Built automated RStudio classification pipelines utilizing SJR quartile metrics.',
      'Provided strategic data reports supporting national research direction and institutional assessments.'
    ],
    toolsUsed: ['RStudio', 'R', 'Scopus Data', 'SCImago Metrics', 'Excel']
  },
  {
    id: 'exp-2',
    role: 'Foresight and Innovation Trend Analysis Assistant',
    company: 'Badan Riset dan Inovasi Nasional (BRIN)',
    location: 'Jakarta, Indonesia',
    period: 'Nov 2024 – May 2025',
    type: 'Analytical Staff',
    responsibilities: [
      'Conducted large-scale bibliometric data analysis to identify emerging global research trends and support strategic decision-making.',
      'Translated complex research findings into data visualizations and interactive dashboards to communicate analytical insights.',
      'Processed global R&D datasets and contributed directly to scenario-based policy briefs and strategic innovation recommendations.',
      'Delivered training workshops on Biblioshiny and WIPO analytics tools for researchers and policy analysts.'
    ],
    achievements: [
      'Empowered workshop participants to reduce research data processing time by 30% compared with legacy alternative tools.',
      'Delivered multiple high-level scenario-based foresight briefs presented to decision makers.',
      'Designed repeatable bibliometric visualization frameworks across multiple scientific disciplines.'
    ],
    toolsUsed: ['Biblioshiny', 'WIPO Tools', 'Python', 'Looker Studio', 'RStudio', 'Bibliometrics']
  },
  {
    id: 'exp-3',
    role: 'Foresight and Innovation Trend Analysis Assistant',
    company: 'PT Agritama Sinergi Inovasi (AGAVI)',
    location: 'Kabupaten Garut, Indonesia',
    period: 'Sep 2024 – Dec 2024',
    type: 'Contract',
    responsibilities: [
      'Analyzed 2024 municipal waste management performance data and developed data-backed recommendations to improve operational and program effectiveness.',
      'Developed a village waste data management application for Garut Regency to support municipal digitalization and improve data tracking processes.',
      'Developed the Kang Raling information website to improve information accessibility and support community development programs.',
      'Monitored daily operational activities and supported community-based waste management initiatives on the ground.'
    ],
    achievements: [
      'Successfully deployed the Kang Raling digital waste tracking website and reporting dashboard.',
      'Digitized collection records across village clusters, reducing reporting latency from weeks to real-time.',
      'Formulated actionable operational recommendations adopted by Garut Regency environmental officers.'
    ],
    toolsUsed: ['Looker Studio', 'Google Sites', 'Microsoft Excel', 'Data Modeling', 'Field Analytics']
  },
  {
    id: 'exp-4',
    role: 'Software Developer & Market Researcher',
    company: 'REPARFUME',
    location: 'Tangerang, Indonesia',
    period: 'May 2024 – Jul 2024',
    type: 'Project',
    responsibilities: [
      'Conducted market research and developed REPARFUME’s brand positioning, branding strategy, marketing plan, and marketing materials aligned with market trends.',
      'Designed and developed the website’s UI/UX, front-end and back-end functionalities.',
      'Built an AI-powered data entry system using Gemini / Mistral AI APIs to automate data extraction and centralized database integration.'
    ],
    achievements: [
      'Automated unstructured customer conversation parsing directly into structured relational schemas.',
      'Delivered a comprehensive brand positioning strategy grounded in competitor pricing and consumer scent preference research.'
    ],
    toolsUsed: ['Gemini API', 'JavaScript', 'HTML/CSS', 'Python', 'SQL', 'Market Research']
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Bachelor of Economics (Sarjana Ekonomi)',
    institution: 'IPB University (Institut Pertanian Bogor)',
    period: 'Aug 2021 – Aug 2025',
    grade: 'GPA: 3.53 / 4.00',
    focus: 'Economics, Quantitative Analysis, Corporate Finance, Business Performance',
    highlights: [
      '1st Place – PPK ORMAWA REESA 2023, Organized by the Ministry of Education, Culture, Research, and Technology (Kemendikbudristek).',
      'Awardee IPB Student Entrepreneurship Program Funding (PMW IPB, 2024).',
      'Selected IPB Innovative Student Creativity Program Proposal (PKM-KI, 2024) – IoT and Web-based Maggot farming innovation.',
      'Selected IPB Student Digital Innovation Competition Proposal (2024).',
      'Awardee IPB Student Entrepreneurship Program Funding (2024).'
    ]
  }
];

export const ORGANIZATIONAL_EXPERIENCE = [
  {
    role: 'Project Leader',
    organization: 'Innovation Project (PKM-KI) – IPB University',
    location: 'Bogor, Indonesia',
    period: 'Jan 2024 – Jul 2024',
    description: 'Led development of IoT- and web-based maggot farming innovation to improve productivity and automation under controlled environmental conditions. Designed prototype, implementation workflow, and funding proposal.'
  },
  {
    role: 'Project Leader',
    organization: 'Program Mahasiswa Wirausaha (PMW IPB)',
    location: 'Bogor, Indonesia',
    period: 'Jan 2024 – Feb 2025',
    description: 'Developed green marketplace concept and business strategies for green product entrepreneurs. Managed project funding proposals, stakeholder collaborations, and financial reporting.'
  },
  {
    role: 'Vice Team Leader',
    organization: 'Program Penguatan Kapasitas Ormawa REESA (PPKO REESA)',
    location: 'Bogor, Indonesia',
    period: 'Jan 2023 – Dec 2023',
    description: 'Led 15-member team executing village community development in Cibanteng Village. Led development of “Cibanteng Hijau” web application. Won 1st Place National PPK ORMAWA Kemendikbudristek.'
  },
  {
    role: 'Chief of Committee',
    organization: 'The 15th Greenbase – IPB University',
    location: 'Bogor, Indonesia',
    period: 'Apr 2023 – Nov 2023',
    description: 'Coordinated 30+ committee members across cross-divisional teams executing environmental and sustainability programs. Managed sponsors and student partnerships.'
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: 'SQL for Data Analysis',
    issuer: 'MySkill',
    issueDate: '2025',
    skills: ['SQL', 'Data Querying', 'Relational Filtering', 'Aggregations']
  },
  {
    title: 'Financial Statement Analysis',
    issuer: 'MySkill',
    issueDate: '2025',
    skills: ['DuPont Analysis', 'Financial Ratios', 'Cash Flow Analysis', 'Corporate Finance']
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    issueDate: '2024',
    skills: ['Generative AI', 'Prompt Engineering', 'AI Ethics', 'Productivity Automation']
  },
  {
    title: 'Data Cleansing, Sort & Filter in Microsoft Excel',
    issuer: 'MySkill',
    issueDate: '2022',
    skills: ['Excel Data Cleansing', 'Sorting & Filtering', 'Data Wrangling']
  },
  {
    title: 'Data Visualization & Pivot Table Mastery',
    issuer: 'MySkill',
    issueDate: '2022',
    skills: ['Pivot Tables', 'Data Visualization', 'Executive Charts']
  },
  {
    title: 'VLOOKUP and Index Match',
    issuer: 'MySkill',
    issueDate: '2022',
    skills: ['INDEX/MATCH', 'VLOOKUP', 'Nested Excel Formulas']
  },
  {
    title: 'English – Advanced (TOEFL Prediction: 547)',
    issuer: 'Certified Assessment',
    issueDate: '2025',
    skills: ['Professional English', 'Academic Writing', 'International Research']
  }
];

export const ARTICLES_LIST: ArticleItem[] = [
  {
    id: 'scopus-bibliometrics-insights',
    title: 'Analyzing 500,000+ Scopus Publications: What Bibliometrics Reveals About Global R&D Trends',
    category: 'Research Analytics',
    readTime: '6 min read',
    publishedDate: '2025',
    summary: 'Key methodology and foresight insights gained from classifying half a million academic records using SCImago Journal Rank (SJR) and Biblioshiny at BRIN.',
    content: [
      'Managing and deriving foresight from massive research corpora requires moving beyond individual paper abstracts to large-scale bibliometric mapping. During my analytical fellowship at Badan Riset dan Inovasi Nasional (BRIN), I worked with over 500,000 Scopus-indexed publications.',
      'By applying SCImago Journal Rank (SJR) metrics in RStudio alongside Biblioshiny, we mapped the evolutionary trajectory of scientific topics over multi-year windows. What becomes immediately apparent is that scientific breakthroughs rarely emerge in isolation; they appear as rapid clustering around interdisciplinary intersection nodes.',
      'Automating this pipeline not only reduced analysis time by 30% for institutional researchers, but provided empirical grounding for scenario-based policy briefs and national research grant prioritization.'
    ],
    keyTakeaways: [
      'Large-scale bibliometrics (SJR metrics + RStudio) transforms academic archives into strategic foresight.',
      'Keyword co-occurrence maps reveal emerging R&D clusters 12-24 months before mainstream adoption.',
      'Automated analytical tools like Biblioshiny save researchers over 30% of manual processing overhead.'
    ]
  },
  {
    id: 'dupont-financial-decomposition',
    title: 'DuPont Analysis Demystified: How Financial Decomposition Drives Corporate Strategy',
    category: 'Financial Economics',
    readTime: '5 min read',
    publishedDate: '2025',
    summary: 'Why single-metric evaluation like ROE or Net Margin is misleading, and how 3-stage DuPont decomposition isolates true operational versus leverage drivers.',
    content: [
      'In economics and corporate finance, evaluating a firm purely on top-line margin or unadjusted Return on Equity (ROE) masks critical structural vulnerabilities. A high ROE can be achieved either through stellar operational execution or through dangerous financial over-leveraging.',
      'The classic 3-stage DuPont model decomposes ROE into: Net Profit Margin (Operating Efficiency) × Asset Turnover (Asset Utilization Efficiency) × Financial Leverage (Capital Structure Risk).',
      'When building financial analysis tools, embedding dynamic sensitivity sliders for each DuPont leg allows leadership and investors to isolate whether growth is sustainable or dangerously debt-fueled.'
    ],
    keyTakeaways: [
      'ROE must be disaggregated into efficiency, turnover, and leverage to evaluate corporate health.',
      'Asset turnover improvements frequently yield higher risk-adjusted return gains than pure price increases.',
      'Scenario projection modeling provides defensible decision support in volatile economic climates.'
    ]
  },
  {
    id: 'village-waste-data-digitization',
    title: 'Digitizing Village Waste Systems: Translating Environmental Metrics into Looker Studio Insights',
    category: 'Operational Analytics',
    readTime: '5 min read',
    publishedDate: '2024',
    summary: 'Lessons from designing the KangRaling data platform for Garut Regency: bridging grassroot operational collection with executive municipal reporting.',
    content: [
      'Environmental programs in developing regions frequently suffer from data latency. In Garut Regency, waste collection logs were historically kept on physical paper slips, creating a 3-week lag before municipal coordinators could spot collection bottlenecks.',
      'With the KangRaling project, we developed an accessible web portal and interactive Looker Studio dashboard that digitized daily village collection by waste typology (organic vs anorganic).',
      'Having near-instant visibility revealed that organic waste accounted for over 62% of volume, directly informing the establishment of community-level bio-waste processing hubs and saving thousands of dollars in transport logistics.'
    ],
    keyTakeaways: [
      'Operational dashboards must be designed for simplicity at the input layer to ensure reliable field compliance.',
      'Looker Studio dashboards provide immediate transparency for cross-sector stakeholders.',
      'Data-driven waste allocation can slash municipal transport overhead by over 25%.'
    ]
  },
  {
    id: 'ai-data-extraction-pipelines',
    title: 'Automating Data Ingestion: Transforming Unstructured Notes into Structured SQL via Gemini API',
    category: 'AI & Data Engineering',
    readTime: '5 min read',
    publishedDate: '2024',
    summary: 'How to build schema-constrained AI extraction workflows that turn raw customer conversation notes into queryable relational database records.',
    content: [
      'Unstructured data—from customer service chat messages to handwritten notes—contains rich business intelligence that traditional ETL pipelines cannot parse easily without expensive manual entry.',
      'During the REPARFUME project, we implemented an automated pipeline leveraging Gemini AI endpoints with strict JSON schema constraints. The API parsed natural conversational Indonesian and English into normalized relational fields: customer identity, scent notes, price tolerance, and purchase intent.',
      'Writing the resulting structured records into a central SQL database allowed immediate cohort querying and automated customer replenishment triggers, slashing manual data entry hours by 85%.'
    ],
    keyTakeaways: [
      'Schema-constrained LLM prompting ensures deterministic structured output from chaotic human text.',
      'Automating unstructured-to-relational ingestion cuts clerical administration costs by up to 85%.',
      'Structured conversational data feeds directly into customer segmentation and predictive inventory planning.'
    ]
  }
];

// Transaction and Project Performance Dataset for the Live Analytics Showcase
export interface TransactionRecord {
  id: string;
  date: string;
  month: string;
  quarter: string;
  category: 'Research & Bibliometrics' | 'Environmental Analytics' | 'Financial Feasibility' | 'Digital Solutions';
  channel: 'BRIN Research Fellowship' | 'Garut Regency & DLHK' | 'Corporate Finance' | 'REPARFUME & PMW';
  region: 'Jakarta' | 'Jawa Barat (Bogor/Garut)' | 'Nasional' | 'International';
  revenue: number;
  cost: number;
  orders: number;
  customerSegment: 'Enterprise' | 'Government / BRIN' | 'Community / SME';
}

export const SAMPLE_TRANSACTION_RECORDS: TransactionRecord[] = [
  // 2024 Q1 - Research & Bibliometrics
  { id: 'tx-01', date: '2024-01-15', month: 'Jan', quarter: 'Q1', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 64000, cost: 22000, orders: 120, customerSegment: 'Government / BRIN' },
  { id: 'tx-02', date: '2024-01-20', month: 'Jan', quarter: 'Q1', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Nasional', revenue: 42000, cost: 14000, orders: 85, customerSegment: 'Government / BRIN' },
  { id: 'tx-03', date: '2024-02-10', month: 'Feb', quarter: 'Q1', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'International', revenue: 71000, cost: 24000, orders: 145, customerSegment: 'Government / BRIN' },
  { id: 'tx-04', date: '2024-02-18', month: 'Feb', quarter: 'Q1', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 38000, cost: 12000, orders: 75, customerSegment: 'Government / BRIN' },
  { id: 'tx-05', date: '2024-03-05', month: 'Mar', quarter: 'Q1', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'International', revenue: 82000, cost: 27000, orders: 160, customerSegment: 'Government / BRIN' },
  { id: 'tx-06', date: '2024-03-22', month: 'Mar', quarter: 'Q1', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 29000, cost: 16000, orders: 55, customerSegment: 'Government / BRIN' },

  // 2024 Q1 - Environmental Analytics (KangRaling)
  { id: 'tx-07', date: '2024-01-12', month: 'Jan', quarter: 'Q1', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 52000, cost: 36000, orders: 210, customerSegment: 'Community / SME' },
  { id: 'tx-08', date: '2024-01-28', month: 'Jan', quarter: 'Q1', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 48000, cost: 32000, orders: 180, customerSegment: 'Community / SME' },
  { id: 'tx-09', date: '2024-02-14', month: 'Feb', quarter: 'Q1', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 58000, cost: 39000, orders: 240, customerSegment: 'Community / SME' },
  { id: 'tx-10', date: '2024-02-24', month: 'Feb', quarter: 'Q1', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 22000, cost: 15000, orders: 90, customerSegment: 'Community / SME' },
  { id: 'tx-11', date: '2024-03-10', month: 'Mar', quarter: 'Q1', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 64000, cost: 43000, orders: 260, customerSegment: 'Community / SME' },
  { id: 'tx-12', date: '2024-03-25', month: 'Mar', quarter: 'Q1', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 53000, cost: 35000, orders: 205, customerSegment: 'Community / SME' },

  // 2024 Q1 - Financial Feasibility
  { id: 'tx-13', date: '2024-01-18', month: 'Jan', quarter: 'Q1', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Jakarta', revenue: 45000, cost: 28000, orders: 35, customerSegment: 'Enterprise' },
  { id: 'tx-14', date: '2024-02-12', month: 'Feb', quarter: 'Q1', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Nasional', revenue: 51000, cost: 31000, orders: 42, customerSegment: 'Enterprise' },
  { id: 'tx-15', date: '2024-03-15', month: 'Mar', quarter: 'Q1', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Jakarta', revenue: 49000, cost: 30000, orders: 38, customerSegment: 'Enterprise' },

  // 2024 Q1 - Digital Solutions (REPARFUME / AI)
  { id: 'tx-16', date: '2024-01-22', month: 'Jan', quarter: 'Q1', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Jawa Barat (Bogor/Garut)', revenue: 39000, cost: 18000, orders: 140, customerSegment: 'Community / SME' },
  { id: 'tx-17', date: '2024-02-20', month: 'Feb', quarter: 'Q1', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Jakarta', revenue: 46000, cost: 21000, orders: 170, customerSegment: 'Community / SME' },
  { id: 'tx-18', date: '2024-03-18', month: 'Mar', quarter: 'Q1', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Nasional', revenue: 54000, cost: 23000, orders: 200, customerSegment: 'Community / SME' },

  // 2024 Q2
  { id: 'tx-19', date: '2024-04-12', month: 'Apr', quarter: 'Q2', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 78000, cost: 25000, orders: 150, customerSegment: 'Government / BRIN' },
  { id: 'tx-20', date: '2024-04-25', month: 'Apr', quarter: 'Q2', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'International', revenue: 52000, cost: 17000, orders: 110, customerSegment: 'Government / BRIN' },
  { id: 'tx-21', date: '2024-05-14', month: 'May', quarter: 'Q2', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Nasional', revenue: 86000, cost: 28000, orders: 175, customerSegment: 'Government / BRIN' },
  { id: 'tx-22', date: '2024-05-28', month: 'May', quarter: 'Q2', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 44000, cost: 14000, orders: 90, customerSegment: 'Government / BRIN' },
  { id: 'tx-23', date: '2024-06-10', month: 'Jun', quarter: 'Q2', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'International', revenue: 94000, cost: 30000, orders: 190, customerSegment: 'Government / BRIN' },
  { id: 'tx-24', date: '2024-06-24', month: 'Jun', quarter: 'Q2', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 36000, cost: 19000, orders: 80, customerSegment: 'Government / BRIN' },

  // 2024 Q2 - Environmental & Waste
  { id: 'tx-25', date: '2024-04-08', month: 'Apr', quarter: 'Q2', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 61000, cost: 41000, orders: 250, customerSegment: 'Community / SME' },
  { id: 'tx-26', date: '2024-04-20', month: 'Apr', quarter: 'Q2', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 56000, cost: 37000, orders: 215, customerSegment: 'Community / SME' },
  { id: 'tx-27', date: '2024-05-12', month: 'May', quarter: 'Q2', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 67000, cost: 45000, orders: 275, customerSegment: 'Community / SME' },
  { id: 'tx-28', date: '2024-05-24', month: 'May', quarter: 'Q2', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 26000, cost: 18000, orders: 105, customerSegment: 'Community / SME' },
  { id: 'tx-29', date: '2024-06-15', month: 'Jun', quarter: 'Q2', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 73000, cost: 49000, orders: 295, customerSegment: 'Community / SME' },
  { id: 'tx-30', date: '2024-06-28', month: 'Jun', quarter: 'Q2', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 60000, cost: 40000, orders: 230, customerSegment: 'Community / SME' },

  // 2024 Q2 - Financial Feasibility & Digital
  { id: 'tx-31', date: '2024-04-16', month: 'Apr', quarter: 'Q2', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Jakarta', revenue: 53000, cost: 33000, orders: 40, customerSegment: 'Enterprise' },
  { id: 'tx-32', date: '2024-05-18', month: 'May', quarter: 'Q2', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Nasional', revenue: 59000, cost: 36000, orders: 47, customerSegment: 'Enterprise' },
  { id: 'tx-33', date: '2024-06-20', month: 'Jun', quarter: 'Q2', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Jakarta', revenue: 56000, cost: 34000, orders: 43, customerSegment: 'Enterprise' },
  { id: 'tx-34', date: '2024-04-22', month: 'Apr', quarter: 'Q2', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Jawa Barat (Bogor/Garut)', revenue: 47000, cost: 20000, orders: 160, customerSegment: 'Community / SME' },
  { id: 'tx-35', date: '2024-05-22', month: 'May', quarter: 'Q2', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Jakarta', revenue: 53000, cost: 23000, orders: 190, customerSegment: 'Community / SME' },
  { id: 'tx-36', date: '2024-06-25', month: 'Jun', quarter: 'Q2', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Nasional', revenue: 62000, cost: 26000, orders: 230, customerSegment: 'Community / SME' },

  // 2024 Q3 - Peak Research & Analytics
  { id: 'tx-37', date: '2024-07-10', month: 'Jul', quarter: 'Q3', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 89000, cost: 28000, orders: 180, customerSegment: 'Government / BRIN' },
  { id: 'tx-38', date: '2024-07-22', month: 'Jul', quarter: 'Q3', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'International', revenue: 59000, cost: 19000, orders: 130, customerSegment: 'Government / BRIN' },
  { id: 'tx-39', date: '2024-08-11', month: 'Aug', quarter: 'Q3', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 98000, cost: 31000, orders: 200, customerSegment: 'Government / BRIN' },
  { id: 'tx-40', date: '2024-08-26', month: 'Aug', quarter: 'Q3', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Nasional', revenue: 51000, cost: 16000, orders: 110, customerSegment: 'Government / BRIN' },
  { id: 'tx-41', date: '2024-09-08', month: 'Sep', quarter: 'Q3', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'International', revenue: 108000, cost: 34000, orders: 220, customerSegment: 'Government / BRIN' },
  { id: 'tx-42', date: '2024-09-24', month: 'Sep', quarter: 'Q3', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 42000, cost: 22000, orders: 90, customerSegment: 'Government / BRIN' },

  // 2024 Q3 - Waste & Feasibility
  { id: 'tx-43', date: '2024-07-06', month: 'Jul', quarter: 'Q3', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 70000, cost: 47000, orders: 285, customerSegment: 'Community / SME' },
  { id: 'tx-44', date: '2024-07-19', month: 'Jul', quarter: 'Q3', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 64000, cost: 42000, orders: 245, customerSegment: 'Community / SME' },
  { id: 'tx-45', date: '2024-08-15', month: 'Aug', quarter: 'Q3', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 76000, cost: 51000, orders: 310, customerSegment: 'Community / SME' },
  { id: 'tx-46', date: '2024-08-28', month: 'Aug', quarter: 'Q3', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 31000, cost: 21000, orders: 125, customerSegment: 'Community / SME' },
  { id: 'tx-47', date: '2024-09-12', month: 'Sep', quarter: 'Q3', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 84000, cost: 56000, orders: 335, customerSegment: 'Community / SME' },
  { id: 'tx-48', date: '2024-09-28', month: 'Sep', quarter: 'Q3', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 69000, cost: 46000, orders: 265, customerSegment: 'Community / SME' },

  { id: 'tx-49', date: '2024-07-14', month: 'Jul', quarter: 'Q3', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Jakarta', revenue: 61000, cost: 37000, orders: 46, customerSegment: 'Enterprise' },
  { id: 'tx-50', date: '2024-08-18', month: 'Aug', quarter: 'Q3', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Nasional', revenue: 68000, cost: 41000, orders: 52, customerSegment: 'Enterprise' },
  { id: 'tx-51', date: '2024-09-16', month: 'Sep', quarter: 'Q3', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Jakarta', revenue: 64000, cost: 39000, orders: 49, customerSegment: 'Enterprise' },

  { id: 'tx-52', date: '2024-07-25', month: 'Jul', quarter: 'Q3', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Jawa Barat (Bogor/Garut)', revenue: 55000, cost: 23000, orders: 180, customerSegment: 'Community / SME' },
  { id: 'tx-53', date: '2024-08-22', month: 'Aug', quarter: 'Q3', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Jakarta', revenue: 61000, cost: 26000, orders: 210, customerSegment: 'Community / SME' },
  { id: 'tx-54', date: '2024-09-20', month: 'Sep', quarter: 'Q3', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Nasional', revenue: 71000, cost: 29000, orders: 260, customerSegment: 'Community / SME' },

  // 2024 Q4
  { id: 'tx-55', date: '2024-10-12', month: 'Oct', quarter: 'Q4', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 104000, cost: 32000, orders: 210, customerSegment: 'Government / BRIN' },
  { id: 'tx-56', date: '2024-10-25', month: 'Oct', quarter: 'Q4', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'International', revenue: 68000, cost: 21000, orders: 150, customerSegment: 'Government / BRIN' },
  { id: 'tx-57', date: '2024-11-15', month: 'Nov', quarter: 'Q4', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 116000, cost: 36000, orders: 240, customerSegment: 'Government / BRIN' },
  { id: 'tx-58', date: '2024-11-28', month: 'Nov', quarter: 'Q4', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Nasional', revenue: 60000, cost: 18000, orders: 125, customerSegment: 'Government / BRIN' },
  { id: 'tx-59', date: '2024-12-10', month: 'Dec', quarter: 'Q4', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'International', revenue: 128000, cost: 39000, orders: 270, customerSegment: 'Government / BRIN' },
  { id: 'tx-60', date: '2024-12-22', month: 'Dec', quarter: 'Q4', category: 'Research & Bibliometrics', channel: 'BRIN Research Fellowship', region: 'Jakarta', revenue: 49000, cost: 25000, orders: 105, customerSegment: 'Government / BRIN' },

  { id: 'tx-61', date: '2024-10-10', month: 'Oct', quarter: 'Q4', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 88000, cost: 58000, orders: 340, customerSegment: 'Community / SME' },
  { id: 'tx-62', date: '2024-10-24', month: 'Oct', quarter: 'Q4', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 78000, cost: 51000, orders: 290, customerSegment: 'Community / SME' },
  { id: 'tx-63', date: '2024-11-18', month: 'Nov', quarter: 'Q4', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 110000, cost: 73000, orders: 430, customerSegment: 'Community / SME' },
  { id: 'tx-64', date: '2024-11-29', month: 'Nov', quarter: 'Q4', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 135000, cost: 89000, orders: 520, customerSegment: 'Community / SME' },
  { id: 'tx-65', date: '2024-12-14', month: 'Dec', quarter: 'Q4', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 142000, cost: 94000, orders: 550, customerSegment: 'Community / SME' },
  { id: 'tx-66', date: '2024-12-26', month: 'Dec', quarter: 'Q4', category: 'Environmental Analytics', channel: 'Garut Regency & DLHK', region: 'Jawa Barat (Bogor/Garut)', revenue: 95000, cost: 63000, orders: 360, customerSegment: 'Community / SME' },

  { id: 'tx-67', date: '2024-10-18', month: 'Oct', quarter: 'Q4', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Jakarta', revenue: 72000, cost: 44000, orders: 54, customerSegment: 'Enterprise' },
  { id: 'tx-68', date: '2024-11-20', month: 'Nov', quarter: 'Q4', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Nasional', revenue: 81000, cost: 49000, orders: 61, customerSegment: 'Enterprise' },
  { id: 'tx-69', date: '2024-12-18', month: 'Dec', quarter: 'Q4', category: 'Financial Feasibility', channel: 'Corporate Finance', region: 'Jakarta', revenue: 76000, cost: 46000, orders: 57, customerSegment: 'Enterprise' },

  { id: 'tx-70', date: '2024-10-22', month: 'Oct', quarter: 'Q4', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Jawa Barat (Bogor/Garut)', revenue: 64000, cost: 26000, orders: 200, customerSegment: 'Community / SME' },
  { id: 'tx-71', date: '2024-11-25', month: 'Nov', quarter: 'Q4', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Jakarta', revenue: 73000, cost: 30000, orders: 240, customerSegment: 'Community / SME' },
  { id: 'tx-72', date: '2024-12-20', month: 'Dec', quarter: 'Q4', category: 'Digital Solutions', channel: 'REPARFUME & PMW', region: 'Nasional', revenue: 84000, cost: 34000, orders: 300, customerSegment: 'Community / SME' },
];
