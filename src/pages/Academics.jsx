import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, GraduationCap, Calendar, ChevronDown, ChevronUp, Star, Users, Award } from 'lucide-react';

const coursesData = {
  Undergraduate: [
    { name: "B.Tech Computer Science & Engineering", duration: "4 Years", seats: 120, highlights: ["AI & ML Specialization", "Industry Internship in Year 3", "Capstone Project with Startups"] },
    { name: "B.Tech Electronics & Communication", duration: "4 Years", seats: 90, highlights: ["VLSI Design Track", "5G Lab Access", "IEEE Student Chapter"] },
    { name: "B.Tech Mechanical Engineering", duration: "4 Years", seats: 90, highlights: ["Automotive Engineering Elective", "Formula SAE Team", "ISRO Collaboration"] },
    { name: "B.Tech Biotechnology", duration: "4 Years", seats: 60, highlights: ["Genomics Lab", "Pharma Internships", "iGEM Competition Team"] },
    { name: "BBA (Hons.)", duration: "3 Years", seats: 80, highlights: ["Case-Study Pedagogy", "Live Industry Projects", "Bloomberg Terminal Access"] },
    { name: "B.Des UX/UI Design", duration: "4 Years", seats: 40, highlights: ["Figma & Sketch Certified", "Design Thinking Workshops", "Milan Design Week Exposure"] },
  ],
  Postgraduate: [
    { name: "M.Tech Data Science", duration: "2 Years", seats: 30, highlights: ["NVIDIA GPU Cluster Access", "Research Assistantship", "Industry Mentor Program"] },
    { name: "M.Tech Embedded Systems", duration: "2 Years", seats: 30, highlights: ["ARM & RISC-V Labs", "Chip Design Tapeout", "Qualcomm Fellowship"] },
    { name: "MBA General Management", duration: "2 Years", seats: 60, highlights: ["Dual Specialization", "International Exchange", "100% Placement Record"] },
    { name: "M.Des Interaction Design", duration: "2 Years", seats: 20, highlights: ["UX Research Lab", "Portfolio Mentorship", "Google Design Sprint"] },
    { name: "M.Sc Bioinformatics", duration: "2 Years", seats: 25, highlights: ["HPC Computing Cluster", "Galaxy Pipeline Training", "DBT Funded Projects"] },
  ],
  Doctoral: [
    { name: "Ph.D. in Computer Science", duration: "3-5 Years", seats: 15, highlights: ["Full Fellowship", "Conference Travel Grant", "NeurIPS / CVPR Publications"] },
    { name: "Ph.D. in Electronics Engineering", duration: "3-5 Years", seats: 10, highlights: ["Semiconductor Research", "IEEE Transactions Target", "Industry Co-Supervision"] },
    { name: "Ph.D. in Mechanical Engineering", duration: "3-5 Years", seats: 10, highlights: ["ISRO & DRDO Projects", "Advanced Manufacturing", "Patent Support Program"] },
    { name: "Ph.D. in Biotechnology", duration: "3-5 Years", seats: 10, highlights: ["BSL-2 Lab Access", "Nature/Science Publication Track", "₹10Cr Grant Portfolio"] },
  ],
};

const curriculumFeatures = [
  { icon: <Star size={20} />, title: "Outcome-Based Education", description: "Every course maps to defined learning outcomes aligned with NBA and NAAC accreditation standards." },
  { icon: <Users size={20} />, title: "Industry Co-Designed", description: "Curriculum reviewed annually by an Industry Advisory Board featuring leaders from Google, Microsoft, Tata, and Infosys." },
  { icon: <Award size={20} />, title: "Choice-Based Credit System", description: "Students can tailor their degree with electives across departments, earning credits at their own pace." },
  { icon: <BookOpen size={20} />, title: "Experiential Learning", description: "Mandatory internships, live projects, hackathons, and capstone experiences embedded in every program." },
];

const calendarEvents = [
  { month: "JAN", title: "Winter Semester Begins", date: "January 6, 2026", type: "academic" },
  { month: "FEB", title: "Mid-Semester Examinations", date: "February 17 – 22, 2026", type: "exam" },
  { month: "MAR", title: "Annual Tech Fest — NexusHack", date: "March 14 – 16, 2026", type: "event" },
  { month: "APR", title: "End-Semester Examinations", date: "April 21 – May 3, 2026", type: "exam" },
  { month: "MAY", title: "Summer Internship Period", date: "May 5 – July 5, 2026", type: "academic" },
  { month: "JUL", title: "Monsoon Semester Begins", date: "July 14, 2026", type: "academic" },
  { month: "AUG", title: "Freshers' Orientation Week", date: "August 4 – 9, 2026", type: "event" },
  { month: "SEP", title: "Mid-Semester Examinations", date: "September 15 – 20, 2026", type: "exam" },
  { month: "OCT", title: "Cultural Fest — Aurora", date: "October 10 – 12, 2026", type: "event" },
  { month: "NOV", title: "End-Semester Examinations", date: "November 17 – 29, 2026", type: "exam" },
  { month: "DEC", title: "Winter Break & Convocation", date: "December 15, 2026", type: "academic" },
];

const typeColors = { academic: "primary", exam: "red-400", event: "secondary" };
const tabKeys = Object.keys(coursesData);

const Academics = () => {
  const [activeTab, setActiveTab] = useState('Undergraduate');
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourse = (name) => {
    setExpandedCourse(expandedCourse === name ? null : name);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Learning at Nexus</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Academics</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            World-class programs designed to build deep expertise, critical thinking, and professional readiness.
          </p>
        </motion.div>

        {/* ── Courses Section ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Programs Offered</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Courses</h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {tabKeys.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setExpandedCourse(null); }}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                  activeTab === tab
                    ? 'bg-primary/20 border-primary/40 text-primary shadow-lg shadow-primary/10'
                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Course Cards */}
          <div className="space-y-4">
            {coursesData[activeTab].map((course, i) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-card rounded-2xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all"
              >
                <button
                  onClick={() => toggleCourse(course.name)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 flex-shrink-0">
                      <GraduationCap size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base md:text-lg">{course.name}</h3>
                      <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                        <span className="flex items-center"><Clock size={12} className="mr-1" />{course.duration}</span>
                        <span className="flex items-center"><Users size={12} className="mr-1" />{course.seats} Seats</span>
                      </div>
                    </div>
                  </div>
                  {expandedCourse === course.name ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>

                {expandedCourse === course.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-white/5 pt-5">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Highlights</h4>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {course.highlights.map((h, j) => (
                          <div key={j} className="flex items-center bg-white/5 rounded-lg px-4 py-3 border border-white/5">
                            <Star size={14} className="text-primary mr-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Curriculum Section ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Framework</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Curriculum Philosophy</h2>
            <p className="text-gray-400 mt-3 max-w-2xl text-base font-light">Our curriculum is built on four pillars that ensure every graduate is industry-ready and research-capable.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {curriculumFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-7 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Academic Calendar ── */}
        <section>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">2026</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Academic Calendar</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px bg-white/10"></div>

            <div className="space-y-6">
              {calendarEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-start gap-5 relative"
                >
                  {/* Dot */}
                  <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 border text-xs font-bold tracking-wider
                    ${event.type === 'exam' ? 'bg-red-500/10 border-red-500/30 text-red-400' :
                      event.type === 'event' ? 'bg-secondary/10 border-secondary/30 text-secondary' :
                      'bg-primary/10 border-primary/30 text-primary'}`}
                  >
                    {event.month}
                  </div>

                  {/* Card */}
                  <div className="glass-card p-5 rounded-xl border border-white/5 flex-grow hover:border-white/10 transition-all">
                    <h3 className="text-white font-semibold text-base">{event.title}</h3>
                    <div className="flex items-center text-gray-500 text-xs mt-2">
                      <Calendar size={12} className="mr-1.5" />
                      {event.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
