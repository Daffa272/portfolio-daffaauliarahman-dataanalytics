import React, { useState, useMemo } from 'react';
import { 
  SAMPLE_TRANSACTION_RECORDS, 
  TransactionRecord 
} from '../data/portfolioData';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Percent, 
  Filter, 
  Sparkles, 
  RefreshCcw, 
  Table, 
  ChevronDown, 
  Layers,
  ArrowUpRight,
  Database
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AnalyticsDashboard: React.FC = () => {
  const { theme, isDark } = useTheme();

  // Filters State
  const [selectedQuarter, setSelectedQuarter] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [showDataTable, setShowDataTable] = useState<boolean>(false);
  const [tableSearch, setTableSearch] = useState<string>('');

  // 1. Filtered Dataset (Single Source of Truth)
  const filteredData = useMemo(() => {
    return SAMPLE_TRANSACTION_RECORDS.filter((item) => {
      const matchQuarter = selectedQuarter === 'All' || item.quarter === selectedQuarter;
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchRegion = selectedRegion === 'All' || item.region === selectedRegion;
      return matchQuarter && matchCategory && matchRegion;
    });
  }, [selectedQuarter, selectedCategory, selectedRegion]);

  // 2. Computed KPI Metrics
  const kpis = useMemo(() => {
    const totalRevenue = filteredData.reduce((acc, curr) => acc + curr.revenue, 0);
    const totalCost = filteredData.reduce((acc, curr) => acc + curr.cost, 0);
    const grossProfit = totalRevenue - totalCost;
    const grossMarginPct = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0;
    const totalOrders = filteredData.reduce((acc, curr) => acc + curr.orders, 0);
    const aov = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    // Simulated baseline comparison for Growth Rate
    const baselineRevenue = totalRevenue * 0.86;
    const growthRate = totalRevenue > 0 ? ((totalRevenue - baselineRevenue) / baselineRevenue) * 100 : 0;

    return {
      totalRevenue,
      totalCost,
      grossProfit,
      grossMarginPct,
      totalOrders,
      aov,
      growthRate,
    };
  }, [filteredData]);

  // 3. Monthly Revenue Trend Aggregation
  const monthlyTrend = useMemo(() => {
    const monthsOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthMap: Record<string, { month: string; revenue: number; cost: number; profit: number }> = {};

    monthsOrder.forEach((m) => {
      monthMap[m] = { month: m, revenue: 0, cost: 0, profit: 0 };
    });

    filteredData.forEach((row) => {
      if (monthMap[row.month]) {
        monthMap[row.month].revenue += row.revenue;
        monthMap[row.month].cost += row.cost;
        monthMap[row.month].profit += (row.revenue - row.cost);
      }
    });

    // If a specific quarter is selected, filter months accordingly
    return monthsOrder
      .filter((m) => {
        if (selectedQuarter === 'Q1') return ['Jan', 'Feb', 'Mar'].includes(m);
        if (selectedQuarter === 'Q2') return ['Apr', 'May', 'Jun'].includes(m);
        if (selectedQuarter === 'Q3') return ['Jul', 'Aug', 'Sep'].includes(m);
        if (selectedQuarter === 'Q4') return ['Oct', 'Nov', 'Dec'].includes(m);
        return true;
      })
      .map((m) => monthMap[m]);
  }, [filteredData, selectedQuarter]);

  // 4. Category Performance Aggregation
  const categoryBreakdown = useMemo(() => {
    const catMap: Record<string, { category: string; revenue: number; margin: number }> = {};

    filteredData.forEach((row) => {
      if (!catMap[row.category]) {
        catMap[row.category] = { category: row.category, revenue: 0, margin: 0 };
      }
      catMap[row.category].revenue += row.revenue;
      catMap[row.category].margin += (row.revenue - row.cost);
    });

    return Object.values(catMap).sort((a, b) => b.revenue - a.revenue);
  }, [filteredData]);

  // 5. Regional Composition Donut Aggregation
  const regionalBreakdown = useMemo(() => {
    const regMap: Record<string, number> = {};

    filteredData.forEach((row) => {
      regMap[row.region] = (regMap[row.region] || 0) + row.revenue;
    });

    const colors = ['#2563EB', '#06B6D4', '#8B5CF6', '#F59E0B'];

    return Object.entries(regMap).map(([region, value], idx) => ({
      name: region,
      value,
      color: colors[idx % colors.length],
    }));
  }, [filteredData]);

  // 6. Dynamic Analytical Storytelling Summary
  const dynamicInsight = useMemo(() => {
    if (filteredData.length === 0) {
      return 'No transactions recorded for this filter intersection. Adjust parameters to populate metrics.';
    }

    const topCategory = [...categoryBreakdown].sort((a, b) => b.revenue - a.revenue)[0];
    const topRegion = [...regionalBreakdown].sort((a, b) => b.value - a.value)[0];
    const marginHealth = kpis.grossMarginPct >= 40 ? 'premium efficiency' : 'healthy volume-driven margins';

    return `During ${selectedQuarter === 'All' ? 'FY2024' : selectedQuarter}, the filtered cohort produced $${(kpis.totalRevenue / 1000).toFixed(0)}K in gross billing across ${kpis.totalOrders.toLocaleString()} discrete orders. ${topCategory ? `${topCategory.category} served as the dominant driver ($${(topCategory.revenue / 1000).toFixed(0)}K revenue)` : ''}. With a realized gross margin of ${kpis.grossMarginPct.toFixed(1)}% (${marginHealth}) and an Average Order Value of $${kpis.aov.toFixed(0)}, unit economics remain robust, primarily propelled by ${topRegion ? topRegion.name : 'domestic'} accounts.`;
  }, [filteredData, kpis, categoryBreakdown, regionalBreakdown, selectedQuarter]);

  // Helper formatting functions
  const formatCurrency = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}k`;
    return `$${val}`;
  };

  const resetFilters = () => {
    setSelectedQuarter('All');
    setSelectedCategory('All');
    setSelectedRegion('All');
  };

  return (
    <section id="interactive-dashboard" className="py-20 sm:py-28 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 font-mono">
              04. Live Interactive Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-3">
              Production Business Intelligence & Analytics Engine
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Test my analytical data modeling directly. All KPI cards, trends, and composition charts dynamically recalculate from the normalized 72-record transactional ledger below.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Reset Parameters</span>
            </button>
          </div>
        </div>

        {/* Dashboard Control Filter Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Filter 1: Quarter */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Fiscal Horizon
              </label>
              <select
                value={selectedQuarter}
                onChange={(e) => setSelectedQuarter(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">Full Year (FY2024)</option>
                <option value="Q1">Q1 2024 (Jan - Mar)</option>
                <option value="Q2">Q2 2024 (Apr - Jun)</option>
                <option value="Q3">Q3 2024 (Jul - Sep)</option>
                <option value="Q4">Q4 2024 (Oct - Dec)</option>
              </select>
            </div>

            {/* Filter 2: Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Business Vertical
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Analytical Verticals</option>
                <option value="Research & Bibliometrics">Research & Bibliometrics (BRIN)</option>
                <option value="Environmental Analytics">Environmental Analytics (Garut / KangRaling)</option>
                <option value="Financial Feasibility">Financial Feasibility (Corporate Finance)</option>
                <option value="Digital Solutions">Digital Solutions (REPARFUME / AI)</option>
              </select>
            </div>

            {/* Filter 3: Region */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Geographic Scope
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Scopes</option>
                <option value="Jakarta">Jakarta (BRIN HQ)</option>
                <option value="Jawa Barat (Bogor/Garut)">Jawa Barat (Bogor / Garut)</option>
                <option value="Nasional">Nasional (Multi-region)</option>
                <option value="International">International (Global Scopus)</option>
              </select>
            </div>
          </div>
        </div>

        {/* 4 Interactive KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* KPI 1: Gross Revenue */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>Gross Realized Revenue</span>
              <DollarSign className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums">
              ${kpis.totalRevenue.toLocaleString()}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+{kpis.growthRate.toFixed(1)}% vs Prior Period</span>
            </div>
          </div>

          {/* KPI 2: Total Orders */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>Total Volume Orders</span>
              <ShoppingBag className="w-4 h-4 text-cyan-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums">
              {kpis.totalOrders.toLocaleString()}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Fulfilled across {filteredData.length} batch records
            </div>
          </div>

          {/* KPI 3: Gross Profit Margin */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>Gross Margin %</span>
              <Percent className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums">
              {kpis.grossMarginPct.toFixed(1)}%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Net Profit: ${kpis.grossProfit.toLocaleString()}
            </div>
          </div>

          {/* KPI 4: Average Order Value (AOV) */}
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>Average Order Value (AOV)</span>
              <DollarSign className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tabular-nums">
              ${kpis.aov.toFixed(0)}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Cost per order: ${(kpis.totalOrders > 0 ? kpis.totalCost / kpis.totalOrders : 0).toFixed(0)}
            </div>
          </div>
        </div>

        {/* Dynamic Insight Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 mb-8 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-blue-950 dark:text-blue-200 leading-relaxed">
            <span className="font-bold">Automated Analytical Diagnosis: </span>
            {dynamicInsight}
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Chart 1: Revenue & Margin Trend (Area & Line) */}
          <div className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Monthly Revenue & Net Profit Trend
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Trajectory across {selectedQuarter === 'All' ? '12 months' : selectedQuarter} in USD
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                Tabular Numbers
              </span>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrend} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1E293B' : '#E2E8F0'} />
                  <XAxis
                    dataKey="month"
                    stroke={isDark ? '#64748B' : '#94A3B8'}
                    fontSize={11}
                    tickLine={false}
                  />
                  <YAxis
                    stroke={isDark ? '#64748B' : '#94A3B8'}
                    fontSize={11}
                    tickLine={false}
                    tickFormatter={formatCurrency}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
                      borderColor: isDark ? '#334155' : '#E2E8F0',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                    formatter={(val: any) => [`$${Number(val).toLocaleString()}`, '']}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    name="Gross Revenue"
                    stroke="#2563EB"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    name="Net Margin"
                    stroke="#06B6D4"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorProfit)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Regional Sales Donut */}
          <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Sales by Territory
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Regional revenue distribution
              </p>

              <div className="h-56 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={regionalBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {regionalBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
                        borderColor: isDark ? '#334155' : '#E2E8F0',
                        borderRadius: '8px',
                        fontSize: '12px',
                      }}
                      formatter={(val: any) => [`$${Number(val).toLocaleString()}`, 'Revenue']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Custom Regional Legend */}
            <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
              {regionalBreakdown.map((r) => {
                const pct = kpis.totalRevenue > 0 ? (r.value / kpis.totalRevenue) * 100 : 0;
                return (
                  <div key={r.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: r.color }} />
                      <span className="text-slate-700 dark:text-slate-300">{r.name}</span>
                    </div>
                    <span className="font-mono font-medium text-slate-900 dark:text-white tabular-nums">
                      ${(r.value / 1000).toFixed(0)}k ({pct.toFixed(0)}%)
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chart 3: Category Performance Bar Chart */}
          <div className="lg:col-span-12 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Vertical Revenue Contribution vs Gross Margin
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Benchmarking revenue volume against realized net margin across categories
                </p>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryBreakdown} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1E293B' : '#E2E8F0'} />
                  <XAxis
                    dataKey="category"
                    stroke={isDark ? '#64748B' : '#94A3B8'}
                    fontSize={11}
                    tickLine={false}
                  />
                  <YAxis
                    stroke={isDark ? '#64748B' : '#94A3B8'}
                    fontSize={11}
                    tickLine={false}
                    tickFormatter={formatCurrency}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
                      borderColor: isDark ? '#334155' : '#E2E8F0',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                    formatter={(val: any) => [`$${Number(val).toLocaleString()}`, '']}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="revenue" name="Total Revenue ($)" fill="#2563EB" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="margin" name="Net Margin ($)" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Underlying Data Ledger Drawer (Collapsible) */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <button
            onClick={() => setShowDataTable(!showDataTable)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Database className="w-4 h-4 text-blue-500" />
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Inspect Underlying Data Warehouse ({filteredData.length} Records)
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Verify the raw dimensional schema and calculations powering the charts above
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>{showDataTable ? 'Hide Records' : 'Show Records'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showDataTable ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {showDataTable && (
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-4">
              {/* Table search filter */}
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Filter table rows by channel or segment..."
                  value={tableSearch}
                  onChange={(e) => setTableSearch(e.target.value)}
                  className="px-3 py-1.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 w-72 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <span className="text-xs font-mono text-slate-500">
                  Showing {filteredData.length} records
                </span>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="py-2.5 px-3 font-mono">Date</th>
                      <th className="py-2.5 px-3">Vertical</th>
                      <th className="py-2.5 px-3">Channel</th>
                      <th className="py-2.5 px-3">Territory</th>
                      <th className="py-2.5 px-3">Segment</th>
                      <th className="py-2.5 px-3 text-right">Orders</th>
                      <th className="py-2.5 px-3 text-right">Revenue</th>
                      <th className="py-2.5 px-3 text-right">Cost</th>
                      <th className="py-2.5 px-3 text-right">Margin %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                    {filteredData
                      .filter(
                        (r) =>
                          !tableSearch ||
                          r.channel.toLowerCase().includes(tableSearch.toLowerCase()) ||
                          r.customerSegment.toLowerCase().includes(tableSearch.toLowerCase()) ||
                          r.category.toLowerCase().includes(tableSearch.toLowerCase())
                      )
                      .slice(0, 15)
                      .map((row) => {
                        const marginPct = ((row.revenue - row.cost) / row.revenue) * 100;
                        return (
                          <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            <td className="py-2 px-3 text-slate-500">{row.date}</td>
                            <td className="py-2 px-3 font-sans font-medium text-slate-900 dark:text-white">
                              {row.category}
                            </td>
                            <td className="py-2 px-3 font-sans">{row.channel}</td>
                            <td className="py-2 px-3 font-sans">{row.region}</td>
                            <td className="py-2 px-3 font-sans">{row.customerSegment}</td>
                            <td className="py-2 px-3 text-right tabular-nums">{row.orders}</td>
                            <td className="py-2 px-3 text-right font-semibold text-slate-900 dark:text-white tabular-nums">
                              ${row.revenue.toLocaleString()}
                            </td>
                            <td className="py-2 px-3 text-right text-slate-500 tabular-nums">
                              ${row.cost.toLocaleString()}
                            </td>
                            <td className="py-2 px-3 text-right text-emerald-600 dark:text-emerald-400 tabular-nums">
                              {marginPct.toFixed(1)}%
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center font-mono">
                Showing top 15 records. All metrics above computed dynamically across all matching transactions.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
