import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';

const DepartmentCard = ({ department, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link to={`/departments/${department.id}`} className="block group h-full">
        <div className="glass-card h-full rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(59,130,246,0.12)]">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={department.image}
              alt={department.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/40 to-transparent"></div>
            <span
              className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm"
              style={{
                backgroundColor: `${department.color}20`,
                borderColor: `${department.color}40`,
                color: department.color,
              }}
            >
              {department.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                  {department.name}
                </h3>
                <span className="text-xs text-gray-500 font-medium tracking-wider mt-1 block">
                  Est. {department.established}
                </span>
              </div>
              <span
                className="text-sm font-bold px-2 py-0.5 rounded"
                style={{ color: department.color }}
              >
                {department.shortName}
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed font-light mb-4 line-clamp-2">
              {department.tagline}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <div className="flex items-center text-gray-400 text-sm">
                <Users size={14} className="mr-1.5" />
                <span>{department.studentCount.toLocaleString()} students</span>
              </div>
              <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                <span>Explore</span>
                <ArrowRight size={14} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DepartmentCard;
