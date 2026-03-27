import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, BookOpen, Microscope, ExternalLink, Users, Calendar, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const researchProjects = [
  {
    title: "Autonomous Navigation Using Federated Learning",
    department: "CSE",
    pi: "Dr. Arjun Mehta",
    funding: "₹3.2 Cr",
    funder: "DRDO",
    status: "Active",
    year: "2024–2027",
    description: "Developing privacy-preserving machine learning algorithms for autonomous drone navigation in GPS-denied environments. The project uses federated learning to train models across distributed edge devices without sharing raw data.",
    tags: ["AI/ML", "Federated Learning", "Drones", "Defense"]
  },
  {
    title: "CRISPR-Based Biosensors for Early Cancer Detection",
    department: "Biotechnology",
    pi: "Dr. Meera Krishnan",
    funding: "₹5.8 Cr",
    funder: "DBT / ICMR",
    status: "Active",
    year: "2023–2026",
    description: "Engineering CRISPR-Cas12a based diagnostic platforms capable of detecting circulating tumor DNA at femtomolar concentrations. The biosensor is designed for point-of-care use in rural healthcare settings.",
    tags: ["CRISPR", "Diagnostics", "Oncology", "Biosensors"]
  },
  {
    title: "Next-Gen 6G Terahertz Communication Systems",
    department: "ECE",
    pi: "Dr. Sunita Reddy",
    funding: "₹2.5 Cr",
    funder: "DST / Qualcomm",
    status: "Active",
    year: "2024–2028",
    description: "Investigating terahertz frequency bands for ultra-high-speed wireless communication. The project develops novel antenna arrays and signal processing algorithms for 6G backhaul networks.",
    tags: ["6G", "Terahertz", "Wireless", "Antenna Design"]
  },
  {
    title: "Sustainable Hydrogen Fuel Cells for Heavy Transport",
    department: "Mechanical Engineering",
    pi: "Dr. Sanjay Deshmukh",
    funding: "₹4.1 Cr",
    funder: "MNRE / Tata Motors",
    status: "Active",
    year: "2023–2026",
    description: "Designing proton-exchange membrane fuel cells optimized for heavy-duty trucks and buses. The project focuses on increasing efficiency and reducing platinum catalyst loading by 60%.",
    tags: ["Green Energy", "Fuel Cells", "Hydrogen", "Automotive"]
  },
  {
    title: "AI-Driven UX Personalization for Accessibility",
    department: "Design",
    pi: "Prof. Aisha Khan",
    funding: "₹1.2 Cr",
    funder: "Google Research",
    status: "Completed",
    year: "2022–2024",
    description: "Built adaptive UI systems that use real-time eye-tracking and cognitive load estimation to dynamically adjust interface layouts for users with visual and cognitive disabilities.",
    tags: ["UX Research", "Accessibility", "Eye-Tracking", "AI"]
  },
  {
    title: "Blockchain-Based Supply Chain Transparency Platform",
    department: "BBA / CSE",
    pi: "Dr. Lakshmi Venkataraman",
    funding: "₹1.8 Cr",
    funder: "Infosys Foundation",
    status: "Active",
    year: "2024–2026",
    description: "Developing a permissioned blockchain framework to ensure end-to-end traceability in pharmaceutical supply chains, reducing counterfeit drug infiltration by over 90%.",
    tags: ["Blockchain", "Supply Chain", "Pharma", "FinTech"]
  }
];

const publications = [
  { title: "Federated Graph Neural Networks for Privacy-Preserving Drug Discovery", venue: "NeurIPS 2025", authors: "Mehta A., Gupta N., et al.", type: "Conference", impact: "Top-tier AI" },
  { title: "Sub-Terahertz Channel Modeling for Indoor 6G Networks", venue: "IEEE Trans. Wireless Communications", authors: "Reddy S., Iyer M.", type: "Journal", impact: "Q1 Journal" },
  { title: "CRISPR-Cas12a Lateral Flow Assay for SARS-CoV-3 Detection", venue: "Nature Biotechnology", authors: "Krishnan M., Saxena A., Zahra F.", type: "Journal", impact: "Nature Index" },
  { title: "Topology Optimization of PEM Fuel Cell Bipolar Plates", venue: "Energy & Fuels (ACS)", authors: "Deshmukh S., Nair K.", type: "Journal", impact: "Q1 Journal" },
  { title: "Cognitive Load-Aware Adaptive Interfaces: A Longitudinal Study", venue: "ACM CHI 2025", authors: "Khan A., Kapoor D.", type: "Conference", impact: "Top-tier HCI" },
  { title: "Zero-Knowledge Proofs for Pharmaceutical Supply Chain Verification", venue: "IEEE S&P 2025", authors: "Venkataraman L., Patel V.", type: "Conference", impact: "Top-tier Security" },
  { title: "Attention-Based Transformer for Satellite Thermal Anomaly Detection", venue: "CVPR 2025", authors: "Mehta A., Sharma P.", type: "Conference", impact: "Top-tier CV" },
  { title: "GaN-on-Diamond HEMT for mm-Wave Power Amplifiers", venue: "IEEE Electron Device Letters", authors: "Kumar R., Reddy S.", type: "Journal", impact: "Q1 Journal" },
];

const labs = [
  { name: "AI & Deep Learning Research Center", dept: "CSE", head: "Dr. Arjun Mehta", equipment: "4× NVIDIA DGX A100, 256-GPU cluster, 2 PB storage", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80", focus: "Neural architecture search, reinforcement learning, LLM fine-tuning" },
  { name: "Nanofabrication & VLSI Lab", dept: "ECE", head: "Dr. Rajesh Kumar", equipment: "Electron-beam lithography, PECVD, Cadence/Synopsys EDA suite", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80", focus: "Sub-7nm transistor design, GaN power devices, MEMS sensors" },
  { name: "Genomics & Molecular Biology Lab", dept: "Biotechnology", head: "Dr. Meera Krishnan", equipment: "Illumina NovaSeq 6000, Oxford Nanopore, CRISPR workstations", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80", focus: "Gene editing, single-cell RNA sequencing, synthetic biology" },
  { name: "Green Energy & Propulsion Lab", dept: "Mechanical", head: "Dr. Sanjay Deshmukh", equipment: "PEM fuel cell test stations, hydrogen storage units, wind tunnel", image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80", focus: "Hydrogen fuel cells, solar thermal systems, EV drivetrain" },
  { name: "Human-Computer Interaction Lab", dept: "Design", head: "Prof. Aisha Khan", equipment: "Tobii Pro eye trackers, EEG headsets, usability testing booths", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", focus: "Adaptive UIs, accessibility research, AR/VR prototyping" },
  { name: "Cybersecurity & Cryptography Lab", dept: "CSE", head: "Dr. Priya Sharma", equipment: "Isolated pentest network, FPGA boards, blockchain nodes", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80", focus: "Zero-knowledge proofs, post-quantum cryptography, threat intel" },
];

const impactBadge = {
  "Top-tier AI": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Q1 Journal": "bg-green-500/15 text-green-400 border-green-500/30",
  "Nature Index": "bg-purple-500/15 text-purple-400 border-purple-500/30",
  "Top-tier HCI": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Top-tier Security": "bg-red-500/15 text-red-400 border-red-500/30",
  "Top-tier CV": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
};

const Research = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showAllPubs, setShowAllPubs] = useState(false);

  const visiblePubs = showAllPubs ? publications : publications.slice(0, 4);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Innovation Hub</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Research</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Pushing the boundaries of knowledge across disciplines. ₹15 Cr+ in active research funding. 350+ publications in top-tier venues.
          </p>
        </motion.div>

        {/* ── Research Projects ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Funded Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Active Projects</h2>
          </motion.div>

          <div className="space-y-4">
            {researchProjects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card rounded-2xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all"
              >
                <button
                  onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                  className="w-full flex items-start justify-between p-6 text-left gap-4"
                >
                  <div className="flex items-start gap-4 flex-grow min-w-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 flex-shrink-0 mt-0.5">
                      <FlaskConical size={18} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-base md:text-lg leading-snug">{proj.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                        <span>{proj.department}</span>
                        <span>PI: {proj.pi}</span>
                        <span>{proj.funding} — {proj.funder}</span>
                        <span className={`px-2 py-0.5 rounded-full border text-[10px] font-semibold ${proj.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-gray-500/10 text-gray-400 border-gray-500/30'}`}>{proj.status}</span>
                      </div>
                    </div>
                  </div>
                  {expandedProject === i ? <ChevronUp size={20} className="text-gray-400 flex-shrink-0" /> : <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />}
                </button>

                {expandedProject === i && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-6 pb-6">
                    <div className="border-t border-white/5 pt-5 pl-14">
                      <p className="text-gray-300 text-sm leading-relaxed font-light mb-4">{proj.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map((tag) => (
                          <span key={tag} className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Publications ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Scholarly Output</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Recent Publications</h2>
          </motion.div>

          <div className="space-y-4">
            {visiblePubs.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-5 rounded-xl border border-white/5 hover:border-primary/20 transition-all group flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BookOpen size={14} className="text-primary" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-white font-semibold text-sm leading-snug group-hover:text-primary transition-colors">{pub.title}</h4>
                  <p className="text-gray-500 text-xs mt-1">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-xs text-gray-400 italic">{pub.venue}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${impactBadge[pub.impact] || 'bg-white/5 text-gray-400 border-white/10'}`}>{pub.impact}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500">{pub.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {publications.length > 4 && (
            <button
              onClick={() => setShowAllPubs(!showAllPubs)}
              className="mt-6 mx-auto flex items-center gap-2 text-sm text-primary hover:text-blue-400 transition-colors font-medium"
            >
              {showAllPubs ? 'Show Less' : `View All ${publications.length} Publications`}
              <ArrowRight size={14} className={showAllPubs ? 'rotate-90' : ''} />
            </button>
          )}
        </section>

        {/* ── Labs ── */}
        <section>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Research Laboratories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {labs.map((lab, i) => (
              <motion.div
                key={lab.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl border border-white/5 overflow-hidden group hover:border-primary/30 transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={lab.image} alt={lab.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/50 to-transparent"></div>
                  <span className="absolute top-4 left-4 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary backdrop-blur-sm">{lab.dept}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{lab.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">Head: {lab.head}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Focus Areas</span>
                      <p className="text-gray-400 text-sm font-light">{lab.focus}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Key Equipment</span>
                      <p className="text-gray-400 text-sm font-light">{lab.equipment}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;
