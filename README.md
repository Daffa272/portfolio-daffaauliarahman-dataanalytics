# Interactive Data Analyst & Business Intelligence Portfolio

A modern, high-performance, and responsive personal portfolio website engineered specifically for a **Data Analyst & Business Intelligence Specialist**. Built with React 19, TypeScript, Tailwind CSS, Recharts, and Lucide Icons.

---

## 🌟 Key Features

1. **Top Bar Contract Navigation**:
   - Sticky navbar with brand wordmark, smooth section scrolling, mobile drawer, instant Dark/Light mode toggle, and direct ATS CV download modal.

2. **Impactful Hero Section**:
   - Executive headline: *"Turning Data Into Decisions."*
   - Interactive mini analytics console with sparklines, real KPI toggles, and quantified achievement metrics (`28+ Dashboards`, `140+ Pipelines`, `18M+ Rows`, `$340K+ Cost Savings`).

3. **Domain-Grounded About Section**:
   - 4-step problem-solving framework (*Problem Framing -> Data Extraction & Cleaning -> Exploratory & Statistical Rigor -> Action-Driven Visual Storytelling*).
   - High-fidelity studio portrait asset and core analytical commitments.

4. **Categorized Skills Matrix**:
   - Interactive segmented category filters (Data Analysis, Programming, Visualization, Data Management, Business Acumen).
   - Real enterprise tool highlights without ungrounded progress bars.

5. **Featured Case Studies (Portfolio Centerpiece)**:
   - 4 in-depth project case studies:
     - *Enterprise Omnichannel Sales Performance & Margin Optimization* (SQL, Power BI)
     - *E-Commerce Customer RFM Segmentation & Cohort Retention Analysis* (Python, Stats)
     - *SaaS Financial Performance & Unit Economics Executive Dashboard* (Power BI, Excel)
     - *Multi-Region Retail Demand Forecasting & Stockout Mitigation* (ARIMA, Python)
   - Real dashboard screenshots, search filter, category tabs, and comprehensive case study deep-dive modal (Business Problem, Objectives, Dataset, Data Cleaning, Analytical Approach, Key Findings, Business Recommendations, and copyable SQL/Python code snippet).

6. **Live Interactive Business Intelligence Dashboard**:
   - Direct proof of analytical capabilities!
   - Dynamic calculations driven by a normalized 72-record transactional ledger:
     - Gross Realized Revenue, Volume Orders, Gross Margin %, Average Order Value (AOV).
     - Monthly Revenue & Net Profit Trend area chart with tooltip.
     - Sales by Geographic Territory interactive donut chart.
     - Vertical Revenue Contribution vs Gross Margin bar chart.
     - Automated dynamic analytical diagnosis updated on every filter change.
     - Collapsible raw data warehouse ledger with real-time text search.

7. **Career Experience, Education & Verified Certifications**:
   - Structured career timeline, academic degree details, and verified industry credentials (Google Data Analytics, Microsoft Power BI PL-300, DataCamp).

8. **Analytical Insights & Blog**:
   - 4 articles on data strategy, cognitive visualization traps, SQL window functions, and actionable KPIs.

9. **Contact & ATS Resume Modal**:
   - Validated contact form with direct mailto fallback.
   - Built-in ATS-optimized resume modal with instant browser printing (`window.print()`) and `.txt` export.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (version 18 or newer)
- npm or yarn or pnpm

### 2. Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install
```

### 3. Development Server
Run the local development server:
```bash
npm run dev
```
Open `http://localhost:3000` (or `http://localhost:5173`) in your browser.

### 4. Production Build & Preview
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ How to Customize Your Portfolio Data

All portfolio content is separated cleanly from UI components inside `src/data/portfolioData.ts`. You can update all your information without touching layout code:

1. **Personal Information & Contacts**:
   - Open `src/data/portfolioData.ts` and modify `PERSONAL_INFO`:
     - Name, title, headline, location, email, LinkedIn, and GitHub links.
     - Achievement metrics and biography paragraphs.

2. **Adding or Modifying Projects**:
   - Edit `FEATURED_PROJECTS` in `src/data/portfolioData.ts`.
   - Each project supports custom screenshots, tags, business problems, cleaning steps, findings, and code snippets.
   - Replace screenshots by placing your image in `src/assets/images/` and updating `previewImage`.

3. **Updating Skills**:
   - Edit `SKILL_CATEGORIES` in `src/data/portfolioData.ts` to adjust your tools, experience level, and highlights.

4. **Updating Career, Education & Certifications**:
   - Edit `EXPERIENCE_LIST`, `EDUCATION_LIST`, and `CERTIFICATIONS_LIST`.

5. **Updating Live Dashboard Dataset**:
   - Edit `SAMPLE_TRANSACTION_RECORDS` in `src/data/portfolioData.ts`. All charts, totals, and automated insight summaries will calculate automatically from your data!

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub.
2. In Vercel, click **New Project** and import your repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `_redirects` file in `public/` with `/* /index.html 200` for SPA routing if needed.
5. Click **Deploy Site**.
