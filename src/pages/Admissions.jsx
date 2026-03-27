import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, ChevronRight, Calendar, FileText, HelpCircle, AlertCircle, ArrowRight, GraduationCap, ClipboardCheck, CreditCard, UserCheck } from 'lucide-react';

const admissionSteps = [
  {
    step: 1,
    title: "Online Registration",
    icon: <FileText size={22} />,
    description: "Create an account on the Nexus Admissions Portal. Fill in your personal details, academic history, and upload required documents (transcripts, ID proof, passport photo).",
    tip: "Keep scanned copies of all documents ready in PDF format (< 2MB each).",
  },
  {
    step: 2,
    title: "Entrance Examination",
    icon: <ClipboardCheck size={22} />,
    description: "Appear for the Nexus Aptitude Test (NAT) conducted online. The test evaluates quantitative, verbal, and domain-specific knowledge based on the program you're applying for.",
    tip: "Prepare using our free NAT mock tests available on the portal after registration.",
  },
  {
    step: 3,
    title: "Counselling & Interview",
    icon: <UserCheck size={22} />,
    description: "Shortlisted candidates are invited for a counselling session and personal interview (online or on-campus). This evaluates motivation, communication skills, and academic readiness.",
    tip: "Be prepared to discuss your interests, projects, and career aspirations.",
  },
  {
    step: 4,
    title: "Offer & Fee Payment",
    icon: <CreditCard size={22} />,
    description: "Successful candidates receive an official offer letter via email. Accept the offer and pay the semester fee through the secure payment gateway to confirm your seat.",
    tip: "Scholarships and financial aid are auto-evaluated during this step — no separate application needed.",
  },
  {
    step: 5,
    title: "Enrollment & Orientation",
    icon: <GraduationCap size={22} />,
    description: "Complete the enrollment process by submitting original documents on campus. Attend the mandatory Freshers' Orientation Week to meet faculty, peers, and explore the campus.",
    tip: "Hostel accommodation requests can be submitted along with enrollment.",
  },
];

const eligibilityData = [
  {
    program: "B.Tech / B.Des (Undergraduate)",
    criteria: [
      "10+2 (or equivalent) with minimum 60% aggregate from a recognized board.",
      "Physics, Chemistry, Mathematics (PCM) mandatory for B.Tech; any stream for B.Des.",
      "Valid NAT score or JEE Main / SAT score accepted.",
      "Age: No upper age limit.",
    ],
  },
  {
    program: "MBA / M.Tech / M.Des / M.Sc (Postgraduate)",
    criteria: [
      "Bachelor's degree with minimum 60% aggregate from a recognized university.",
      "Relevant undergraduate degree for M.Tech (Engineering), M.Des (Design), and M.Sc (Science).",
      "Valid CAT / GMAT score for MBA; valid GATE score accepted for M.Tech.",
      "Minimum 2 years work experience preferred for Executive MBA.",
    ],
  },
  {
    program: "Ph.D. (Doctoral)",
    criteria: [
      "Master's degree with minimum 65% aggregate in the relevant discipline.",
      "Valid UGC-NET / CSIR-NET / GATE qualification preferred.",
      "A well-defined research proposal (2–3 pages) required at the time of application.",
      "Interview with the departmental research committee is mandatory.",
    ],
  },
];

const importantDates = [
  { date: "January 15, 2026", event: "Application Portal Opens", status: "completed" },
  { date: "March 31, 2026", event: "Early Bird Application Deadline (5% fee waiver)", status: "completed" },
  { date: "April 30, 2026", event: "Final Application Deadline", status: "active" },
  { date: "May 10 – 15, 2026", event: "Nexus Aptitude Test (NAT)", status: "upcoming" },
  { date: "May 25, 2026", event: "Results & Shortlist Announced", status: "upcoming" },
  { date: "June 2 – 10, 2026", event: "Counselling & Interview Sessions", status: "upcoming" },
  { date: "June 20, 2026", event: "Offer Letters Dispatched", status: "upcoming" },
  { date: "July 5, 2026", event: "Fee Payment Deadline", status: "upcoming" },
  { date: "August 4, 2026", event: "Freshers' Orientation Week", status: "upcoming" },
];

const Admissions = () => {
  const [activeStep, setActiveStep] = useState(0);

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
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Join Nexus</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Admissions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Your journey to becoming a Nexus scholar starts here. Follow the simple steps below to apply.
          </p>
        </motion.div>

        {/* ── Step-by-Step Process ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">How to Apply</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Admission Process</h2>
          </motion.div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Steps Navigation */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {admissionSteps.map((s, i) => (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all border whitespace-nowrap lg:whitespace-normal min-w-max lg:min-w-0 ${
                    activeStep === i
                      ? 'bg-primary/15 border-primary/40 text-white shadow-lg shadow-primary/10'
                      : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    activeStep === i ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'
                  }`}>
                    {s.step}
                  </div>
                  <span className="text-sm font-medium">{s.title}</span>
                </button>
              ))}
            </div>

            {/* Step Detail Card */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-10 rounded-2xl border border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/15 rounded-2xl flex items-center justify-center text-primary border border-primary/25">
                  {admissionSteps[activeStep].icon}
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Step {admissionSteps[activeStep].step} of {admissionSteps.length}</span>
                  <h3 className="text-2xl font-bold text-white">{admissionSteps[activeStep].title}</h3>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed font-light mb-6">
                {admissionSteps[activeStep].description}
              </p>
              <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 flex items-start gap-3">
                <HelpCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">Pro Tip</span>
                  <p className="text-gray-400 text-sm mt-1">{admissionSteps[activeStep].tip}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {activeStep < admissionSteps.length - 1 ? (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 transition-all flex items-center gap-2"
                  >
                    Next Step <ChevronRight size={16} />
                  </button>
                ) : (
                  <button className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                    Apply Now <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Eligibility Criteria ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Who Can Apply</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Eligibility Criteria</h2>
          </motion.div>

          <div className="space-y-6">
            {eligibilityData.map((item, i) => (
              <motion.div
                key={item.program}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-7 rounded-2xl border border-white/5 hover:border-primary/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <GraduationCap size={18} className="text-primary" />
                  {item.program}
                </h3>
                <ul className="space-y-3">
                  {item.criteria.map((c, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Important Dates Timeline ── */}
        <section className="mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Key Deadlines</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Important Dates</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px bg-white/10"></div>

            <div className="space-y-5">
              {importantDates.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-start gap-5 relative"
                >
                  {/* Dot / Icon */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    {item.status === 'completed' ? (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                        <CheckCircle size={18} className="text-secondary" />
                      </div>
                    ) : item.status === 'active' ? (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center animate-pulse">
                        <Circle size={10} className="text-primary fill-primary" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Circle size={10} className="text-gray-500" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`glass-card flex-grow p-5 rounded-xl border transition-all ${
                    item.status === 'active' ? 'border-primary/40 shadow-lg shadow-primary/10' :
                    item.status === 'completed' ? 'border-secondary/20' : 'border-white/5'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className={`font-semibold text-base ${
                        item.status === 'completed' ? 'text-gray-400 line-through' :
                        item.status === 'active' ? 'text-white' : 'text-gray-300'
                      }`}>
                        {item.event}
                      </h3>
                      {item.status === 'active' && (
                        <span className="text-xs bg-primary/20 text-primary px-2.5 py-1 rounded-full font-semibold border border-primary/30 w-fit flex items-center gap-1">
                          <AlertCircle size={12} /> Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-500 text-xs mt-2">
                      <Calendar size={12} className="mr-1.5" />
                      {item.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass-card p-10 md:p-14 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Begin?</h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto mb-8 font-light">
              Take the first step toward an extraordinary education. Applications for Fall 2026 are now open.
            </p>
            <button className="px-10 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center gap-2 mx-auto">
              Apply Now <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admissions;
