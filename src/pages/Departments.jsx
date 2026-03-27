import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import departmentsData from '../data/departments.json';
import DepartmentCard from '../components/departments/DepartmentCard';

const categories = ['All', ...new Set(departmentsData.map((d) => d.category))];

const Departments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return departmentsData.filter((dept) => {
      const matchesSearch =
        dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === 'All' || dept.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Explore
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Departments
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Dive into world-class programs across engineering, sciences, management, and the creative arts.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-4 mb-10"
        >
          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search departments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <SlidersHorizontal size={16} className="text-gray-500 mr-1 hidden md:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? 'bg-primary/20 border-primary/40 text-primary'
                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dept, index) => (
              <DepartmentCard key={dept.id} department={dept} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">
              No departments match your search. Try a different query.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Departments;
