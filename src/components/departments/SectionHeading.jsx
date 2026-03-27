import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ label, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      {label && (
        <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 mt-3 max-w-2xl text-base font-light leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
