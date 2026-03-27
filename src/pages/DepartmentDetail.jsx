import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Trophy, Mail, Phone, Clock, GraduationCap } from 'lucide-react';
import departmentsData from '../data/departments.json';
import FacultyCard from '../components/departments/FacultyCard';
import SectionHeading from '../components/departments/SectionHeading';

const DepartmentDetail = () => {
  const { id } = useParams();
  const dept = departmentsData.find((d) => d.id === id);

  if (!dept) return <Navigate to="/departments" replace />;

  const programTypes = [...new Set(dept.programs.map((p) => p.type))];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/departments"
            className="inline-flex items-center text-gray-400 hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            All Departments
          </Link>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-16 h-72 md:h-96"
        >
          <img
            src={dept.image}
            alt={dept.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm mb-4"
              style={{
                backgroundColor: `${dept.color}20`,
                borderColor: `${dept.color}40`,
                color: dept.color,
              }}
            >
              {dept.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
              {dept.name}
            </h1>
            <p className="text-gray-300 text-base md:text-lg font-light max-w-xl">
              {dept.tagline}
            </p>
          </div>
        </motion.div>

        {/* ── About / Overview ── */}
        <section className="mb-20">
          <SectionHeading label="About the Department" title="Overview" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed text-base font-light max-w-4xl"
          >
            {dept.overview}
          </motion.p>
        </section>

        {/* ── Vision & Mission ── */}
        <section className="mb-20">
          <SectionHeading label="Our Purpose" title="Vision & Mission" />
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border border-white/5"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-5 border border-primary/30">
                <span className="text-primary text-lg font-bold">V</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Vision</h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm">{dept.vision}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border border-white/5"
            >
              <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center mb-5 border border-secondary/30">
                <span className="text-secondary text-lg font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mission</h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm">{dept.mission}</p>
            </motion.div>
          </div>
        </section>

        {/* ── Programs & Curriculum ── */}
        <section className="mb-20">
          <SectionHeading
            label="Academics"
            title="Programs & Curriculum"
            description="Explore our carefully curated programs designed to build domain expertise and professional readiness."
          />
          {programTypes.map((type) => (
            <div key={type} className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center">
                <GraduationCap size={16} className="mr-2" />
                {type}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dept.programs
                  .filter((p) => p.type === type)
                  .map((program, i) => (
                    <motion.div
                      key={program.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="glass-card p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <h4 className="text-white font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                          {program.name}
                        </h4>
                        <BookOpen size={14} className="text-gray-500 flex-shrink-0 ml-2 mt-0.5" />
                      </div>
                      <div className="flex items-center text-gray-500 text-xs mt-3">
                        <Clock size={12} className="mr-1" />
                        {program.duration}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Faculty ── */}
        <section className="mb-20">
          <SectionHeading
            label="Our Team"
            title="Faculty"
            description="Meet the brilliant minds who guide our students toward excellence."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dept.faculty.map((member, idx) => (
              <FacultyCard key={member.email} member={member} index={idx} />
            ))}
          </div>
        </section>

        {/* ── Labs & Research ── */}
        <section className="mb-20">
          <SectionHeading
            label="Infrastructure"
            title="Labs & Research Facilities"
            description="State-of-the-art facilities that power cutting-edge research and hands-on learning."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {dept.labs.map((lab, i) => (
              <motion.div
                key={lab.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {lab.name}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{lab.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Achievements ── */}
        <section className="mb-20">
          <SectionHeading label="Milestones" title="Achievements" />
          <div className="space-y-4">
            {dept.achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start bg-white/5 p-5 rounded-xl border border-white/5 group hover:border-primary/30 transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-4 border border-primary/30 group-hover:scale-110 transition-transform">
                  <Trophy size={14} className="text-primary" />
                </div>
                <span className="text-gray-300 font-medium text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── HOD Contact ── */}
        <section className="mb-10">
          <SectionHeading label="Leadership" title="Head of Department" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-white/5 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-64 h-64 md:h-auto flex-shrink-0">
                <img
                  src={dept.hod.image}
                  alt={dept.hod.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white">{dept.hod.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{dept.hod.designation}</p>
                <p className="text-gray-400 text-sm leading-relaxed mt-4 italic max-w-xl">
                  "{dept.hod.message}"
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a
                    href={`mailto:${dept.hod.email}`}
                    className="inline-flex items-center text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    <Mail size={14} className="mr-2" />
                    {dept.hod.email}
                  </a>
                  <a
                    href={`tel:${dept.hod.phone}`}
                    className="inline-flex items-center text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    <Phone size={14} className="mr-2" />
                    {dept.hod.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default DepartmentDetail;
