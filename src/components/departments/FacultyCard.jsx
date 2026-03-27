import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const FacultyCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl border border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent"></div>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-bold text-white">{member.name}</h4>
        <p className="text-primary text-sm font-medium mt-0.5">{member.designation}</p>
        <p className="text-gray-400 text-xs mt-2 leading-relaxed">{member.specialization}</p>
        <a
          href={`mailto:${member.email}`}
          className="mt-4 flex items-center text-gray-400 hover:text-primary text-xs transition-colors"
        >
          <Mail size={12} className="mr-1.5" />
          {member.email}
        </a>
      </div>
    </motion.div>
  );
};

export default FacultyCard;
