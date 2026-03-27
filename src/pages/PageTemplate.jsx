import React from 'react';
import { motion } from 'framer-motion';

const PageTemplate = ({ title }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-12 rounded-3xl max-w-2xl w-full text-center border border-white/10 shadow-2xl"
      >
        <span className="inline-block p-3 bg-primary/20 rounded-full mb-6 text-primary">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-gray-400 text-lg">
          We are currently preparing amazing content for the {title} page. 
          Please check back later for updates!
        </p>
      </motion.div>
    </div>
  );
};

export default PageTemplate;
