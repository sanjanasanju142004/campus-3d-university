import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Building2, TrendingUp } from 'lucide-react';

const Highlights = () => {
  const stats = [
    { label: "Global Ranking", value: "Top 50", icon: <Trophy className="w-8 h-8" /> },
    { label: "Placement Rate", value: "98%", icon: <TrendingUp className="w-8 h-8" /> },
    { label: "Students", value: "15,000+", icon: <Users className="w-8 h-8" /> },
    { label: "Research Centers", value: "45", icon: <Building2 className="w-8 h-8" /> },
  ];

  const achievements = [
    "Awarded 'University of the Year' by Global Education Summit 2025.",
    "Over $50M in research grants secured this academic year.",
    "Partnered with Fortune 500 companies for exclusive internship programs."
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Achievements Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Excellence in <br />
              <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Every Measure</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
              At Nexus, we don't just educate; we transform. Our commitment to academic and professional excellence is reflected in our consistent track record of success worldwide.
            </p>
            
            <ul className="space-y-5">
              {achievements.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start bg-white/5 p-4 rounded-xl border border-white/5"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4 border border-primary/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all text-primary">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 relative z-10">{stat.value}</div>
                <div className="text-gray-400 font-medium text-sm uppercase tracking-wider relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
