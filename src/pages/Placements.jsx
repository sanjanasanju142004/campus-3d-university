import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, Legend,
} from 'recharts';
import { TrendingUp, Award, Building2, Users, Briefcase, Globe, ArrowUpRight, Quote } from 'lucide-react';
import placementData from '../data/placements.json';

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899', '#f97316', '#64748b'];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-darker/95 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 shadow-2xl">
      <p className="text-white font-semibold text-sm mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="text-xs" style={{ color: p.color }}>
          {p.name}: <span className="font-bold">{p.value}{typeof p.value === 'number' && p.name?.includes('Package') ? ' LPA' : p.name?.includes('Placed') ? '%' : ''}</span>
        </p>
      ))}
    </div>
  );
};

const StatCard = ({ icon, label, value, sub, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.4 }}
    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: color }}></div>
    <div className="relative z-10">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border" style={{ backgroundColor: `${color}15`, borderColor: `${color}30`, color }}>
        {icon}
      </div>
      <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
      <div className="text-gray-400 text-sm font-medium">{label}</div>
      {sub && <div className="text-xs text-gray-500 mt-1">{sub}</div>}
    </div>
  </motion.div>
);

const Placements = () => {
  const { stats, yearWisePlacements, departmentWise, sectorDistribution, topRecruiters, packageBrackets, testimonials } = placementData;
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Career Outcomes</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Placements</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Our graduates are recruited by the world's most sought-after companies. Here's the data.
          </p>
        </motion.div>

        {/* ── Stats Cards ── */}
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard index={0} icon={<Award size={20} />} label="Highest Package" value={stats.highestPackage} sub="Offered by Google" color="#f59e0b" />
            <StatCard index={1} icon={<TrendingUp size={20} />} label="Average Package" value={stats.averagePackage} sub="Across all departments" color="#3b82f6" />
            <StatCard index={2} icon={<Users size={20} />} label="Placement Rate" value={`${stats.placementRate}%`} sub={`${stats.totalOffers} total offers`} color="#10b981" />
            <StatCard index={3} icon={<Building2 size={20} />} label="Companies Visited" value={stats.companiesVisited} sub={`${stats.internationalOffers} international offers`} color="#8b5cf6" />
          </div>
        </section>

        {/* ── Highest Package Highlight ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative glass-card rounded-3xl border border-yellow-500/20 overflow-hidden p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5"></div>
            <div className="absolute top-4 right-4 md:top-8 md:right-8 text-yellow-500/10">
              <Award size={120} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-yellow-500/15 rounded-2xl flex items-center justify-center border border-yellow-500/30 flex-shrink-0">
                <Award size={36} className="text-yellow-500" />
              </div>
              <div>
                <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Record Breaking</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">{stats.highestPackage}</h2>
                <p className="text-gray-400 mt-2 font-light">Highest CTC offered this placement season — a testament to the caliber of our students and the trust top recruiters place in Nexus graduates.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Charts Grid ── */}
        <section className="mb-16 grid lg:grid-cols-2 gap-6">
          {/* Year-wise Trend */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 md:p-8 rounded-2xl border border-white/5">
            <h3 className="text-lg font-bold text-white mb-1">Placement Trend</h3>
            <p className="text-gray-500 text-xs mb-6">Placement rate & average package over the years</p>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={yearWisePlacements} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradPlaced" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradPkg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" stroke="#475569" tick={{ fontSize: 12 }} />
                <YAxis stroke="#475569" tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="placed" name="Placed %" stroke="#3b82f6" fill="url(#gradPlaced)" strokeWidth={2} />
                <Area type="monotone" dataKey="avgPackage" name="Avg Package" stroke="#10b981" fill="url(#gradPkg)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Package Distribution */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-6 md:p-8 rounded-2xl border border-white/5">
            <h3 className="text-lg font-bold text-white mb-1">Package Distribution</h3>
            <p className="text-gray-500 text-xs mb-6">Number of offers in each CTC bracket</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={packageBrackets} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="range" stroke="#475569" tick={{ fontSize: 11 }} />
                <YAxis stroke="#475569" tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" name="Offers" fill="#8b5cf6" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Sector-wise Pie Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-6 md:p-8 rounded-2xl border border-white/5">
            <h3 className="text-lg font-bold text-white mb-1">Sector Distribution</h3>
            <p className="text-gray-500 text-xs mb-6">Percentage of offers by industry sector</p>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={sectorDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value" stroke="none">
                  {sectorDistribution.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Department-wise Bar Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="glass-card p-6 md:p-8 rounded-2xl border border-white/5">
            <h3 className="text-lg font-bold text-white mb-1">Department-wise Placements</h3>
            <p className="text-gray-500 text-xs mb-6">Placement rate and average CTC by department</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={departmentWise} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="dept" stroke="#475569" tick={{ fontSize: 12 }} />
                <YAxis stroke="#475569" tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="placed" name="Placed %" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={30} />
                <Bar dataKey="avg" name="Avg Package (LPA)" fill="#10b981" radius={[6, 6, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </section>

        {/* ── Top Recruiters ── */}
        <section className="mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Our Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Top Recruiters</h2>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {topRecruiters.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="glass-card rounded-2xl border border-white/5 hover:border-primary/30 transition-all p-5 flex flex-col items-center justify-center gap-3 group h-28"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${r.name}`}
                  alt={r.name}
                  className="h-8 w-auto object-contain filter brightness-0 invert opacity-50 group-hover:opacity-90 transition-opacity"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors">{r.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Student Testimonials</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-7 rounded-2xl border border-white/5 hover:border-primary/20 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4 text-white/5 group-hover:text-primary/10 transition-colors">
                  <Quote size={48} />
                </div>
                <div className="relative z-10">
                  <p className="text-gray-300 text-sm leading-relaxed font-light italic mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                      <p className="text-primary text-xs font-medium">{t.role}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{t.batch}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Placements;
