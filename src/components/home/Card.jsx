import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ title, description, icon, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link to={link || "#"} className="block group h-full">
        <div className="glass-card h-full p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] relative overflow-hidden flex flex-col">
          {/* Subtle gradient background effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10 flex-grow flex flex-col">
            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-white/5">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed font-light flex-grow">
              {description}
            </p>
            
            <div className="mt-8 flex items-center text-primary font-medium text-sm">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
