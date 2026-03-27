import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark/80 border-t border-white/5 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <NavLink to="/" className="text-2xl font-bold text-white tracking-tighter" aria-label="Nexus University Home">
              NEXUS<span className="text-primary">.</span>
            </NavLink>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-4">
              Empowering the next generation of innovators, creators, and leaders through immersive education and forward-thinking research.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h4>
            <nav aria-label="Footer quick links">
              <ul className="space-y-2.5">
                <li><NavLink to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</NavLink></li>
                <li><NavLink to="/academics" className="text-gray-400 hover:text-primary transition-colors text-sm">Academics</NavLink></li>
                <li><NavLink to="/admissions" className="text-gray-400 hover:text-primary transition-colors text-sm">Admissions</NavLink></li>
                <li><NavLink to="/research" className="text-gray-400 hover:text-primary transition-colors text-sm">Research</NavLink></li>
                <li><NavLink to="/placements" className="text-gray-400 hover:text-primary transition-colors text-sm">Placements</NavLink></li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Connect</h4>
            <nav aria-label="Footer connect links">
              <ul className="space-y-2.5">
                <li><NavLink to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</NavLink></li>
                <li><NavLink to="/students" className="text-gray-400 hover:text-primary transition-colors text-sm">Student Portal</NavLink></li>
                <li><NavLink to="/alumni" className="text-gray-400 hover:text-primary transition-colors text-sm">Alumni Network</NavLink></li>
                <li><NavLink to="/campus-life" className="text-gray-400 hover:text-primary transition-colors text-sm">Campus Life</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nexus University. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
