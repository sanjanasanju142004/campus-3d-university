import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const routeLabels = {
  '/academics': 'Academics',
  '/departments': 'Departments',
  '/campus-life': 'Campus Life',
  '/admissions': 'Admissions',
};

const InfoPanel = ({ selectedBuilding, onClose, onNavigate }) => {
  const handleNavigate = () => {
    if (selectedBuilding?.route && onNavigate) {
      onNavigate(selectedBuilding.route);
    }
  };

  return (
    <AnimatePresence>
      {selectedBuilding && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-md"
        >
          <div className="glass-card p-6 rounded-2xl border border-white/10 shadow-2xl relative bg-darker/80 backdrop-blur-xl">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1.5 bg-white/5 rounded-full hover:bg-white/10"
            >
              <X size={18} />
            </button>
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 border border-primary/30">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{selectedBuilding.name}</h3>
            <p className="text-gray-300 leading-relaxed font-light text-sm">
              {selectedBuilding.description}
            </p>
            
            {selectedBuilding.route && (
              <button 
                onClick={handleNavigate}
                className="mt-6 w-full py-3 bg-primary hover:bg-blue-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Go to {routeLabels[selectedBuilding.route] || selectedBuilding.name}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoPanel;
