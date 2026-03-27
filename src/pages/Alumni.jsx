import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Quote, Linkedin, Globe, Users, ArrowUpRight, GraduationCap, TrendingUp, Building2, Award } from 'lucide-react';

const successStories = [
  {
    name: "Ananya Sharma",
    batch: "CSE, Class of 2015",
    role: "VP of Engineering",
    company: "Google",
    location: "Mountain View, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    story: "Starting as a software intern at Google through Nexus's placement cell, Ananya rose through the ranks to lead a 200-person engineering team building core search infrastructure. She credits the AI research lab at Nexus for sparking her passion for machine learning, and has since funded two scholarships for incoming CSE students.",
    highlight: "Led the development of Google's next-gen search ranking system serving 8B+ queries/day."
  },
  {
    name: "Vikram Patel",
    batch: "ME, Class of 2012",
    role: "Co-Founder & CEO",
    company: "GreenDrive Motors",
    location: "Bengaluru, India",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    story: "Vikram's journey from the Nexus Formula SAE team to building India's fastest-growing EV startup is legendary on campus. GreenDrive Motors, incubated at the Nexus Entrepreneurship Cell, has raised $120M in funding and delivered 50,000+ electric two-wheelers across India. He returns every year to mentor junior entrepreneurs.",
    highlight: "GreenDrive Motors valued at $500M – India's Top 10 EV startup."
  },
  {
    name: "Dr. Meera Rao",
    batch: "Biotechnology, Class of 2010",
    role: "Chief Science Officer",
    company: "Genentech (Roche)",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    story: "Meera's PhD work at Nexus on CRISPR-based gene therapies caught the attention of Genentech during an international research conference hosted on campus. She now oversees clinical trials for gene therapies targeting rare pediatric diseases. Her lab has published 40+ papers in Nature and Science journals.",
    highlight: "3 gene therapies in clinical trials – potential to treat 15 rare diseases."
  },
];

const testimonials = [
  {
    name: "Riya Kapoor",
    role: "SDE II at Microsoft",
    batch: "CSE 2020",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    quote: "Nexus gave me the perfect blend of theory and practice. The coding club, hackathons, and industry mentors shaped me into a confident engineer. Four years later, I still lean on the problem-solving frameworks I learned here."
  },
  {
    name: "Arjun Deshmukh",
    role: "Product Designer at Apple",
    batch: "Design 2019",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote: "The Design department at Nexus isn't just a school — it's a launchpad. Working on real client projects in my second year gave me a portfolio strong enough to land internships at IDEO and eventually a full-time role at Apple."
  },
  {
    name: "Sneha Venkataraman",
    role: "Consultant at McKinsey",
    batch: "MBA 2021",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    quote: "The case-study methodology and the caliber of classmates at Nexus Business School rival the best B-schools globally. The alumni network opened doors I didn't even know existed."
  },
  {
    name: "Karthik Iyer",
    role: "Chip Design Engineer at Intel",
    batch: "ECE 2022",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote: "Taping out an actual chip in the VLSI lab during final year was a game-changer. That hands-on experience is exactly what Intel was looking for, and it set me apart from candidates from much bigger universities."
  },
  {
    name: "Fathima Zahra",
    role: "Research Scientist at DeepMind",
    batch: "CSE 2018",
    image: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=300&q=80",
    quote: "Publishing my first NeurIPS paper as an undergrad at Nexus set the trajectory for my entire career. The AI lab and Dr. Mehta's mentorship were instrumental in getting me to DeepMind."
  },
  {
    name: "Rohan Chatterjee",
    role: "Founder at HealthStack",
    batch: "BBA 2017",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=300&q=80",
    quote: "The Entrepreneurship Cell taught me more about building a company than any textbook ever could. Our healthtech startup, born in the Nexus incubator, now serves 2M+ patients across tier-2 cities."
  },
];

const networkStats = [
  { label: "Alumni Worldwide", value: "50,000+", icon: <Users size={22} />, color: "#3b82f6" },
  { label: "Countries Represented", value: "45+", icon: <Globe size={22} />, color: "#10b981" },
  { label: "Alumni-Led Startups", value: "200+", icon: <TrendingUp size={22} />, color: "#f59e0b" },
  { label: "Industry Partners", value: "320+", icon: <Building2 size={22} />, color: "#8b5cf6" },
];

const networkFeatures = [
  { title: "Alumni Mentorship Program", description: "Get paired with a senior alumni mentor in your field. Monthly 1-on-1 sessions, career guidance, and portfolio reviews.", icon: <GraduationCap size={20} /> },
  { title: "Global Chapter Network", description: "Active alumni chapters in Silicon Valley, London, Singapore, Bengaluru, and Dubai. Regular meetups, job referrals, and networking events.", icon: <Globe size={20} /> },
  { title: "Nexus Alumni Fund", description: "A ₹50 Cr+ fund that provides scholarships, research grants, and startup seed capital — entirely funded by alumni donations.", icon: <Award size={20} /> },
  { title: "Annual Homecoming", description: "Every November, 2,000+ alumni return to campus for a weekend of reconnecting, guest lectures, and celebrating new milestones.", icon: <Users size={20} /> },
];

const Alumni = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Legacy</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Alumni</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            50,000+ graduates shaping industries across the globe. Once a Nexus scholar, always part of the family.
          </p>
        </motion.div>

        {/* ── Network Stats ── */}
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {networkStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" style={{ background: stat.color }}></div>
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border" style={{ backgroundColor: `${stat.color}15`, borderColor: `${stat.color}30`, color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Success Stories ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Spotlight</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Success Stories</h2>
          </motion.div>

          <div className="space-y-8">
            {successStories.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-3xl border border-white/5 overflow-hidden hover:border-primary/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Photo */}
                  <div className="md:w-72 h-64 md:h-auto flex-shrink-0 relative overflow-hidden">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-darker/30 md:bg-gradient-to-l md:from-darker/50 md:to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary">{person.batch}</span>
                      <span className="text-[10px] text-gray-500 flex items-center gap-1"><MapPin size={10} />{person.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{person.name}</h3>
                    <p className="text-primary font-medium text-sm mb-1">{person.role}</p>
                    <p className="text-gray-500 text-xs flex items-center gap-1 mb-4"><Briefcase size={12} />{person.company}</p>
                    <p className="text-gray-300 text-sm font-light leading-relaxed mb-4">{person.story}</p>
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
                      <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Key Impact</span>
                      <p className="text-gray-300 text-sm mt-1 font-medium">{person.highlight}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Voices</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Alumni Testimonials</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all relative overflow-hidden group flex flex-col"
              >
                <div className="absolute top-4 right-4 text-white/5 group-hover:text-primary/10 transition-colors">
                  <Quote size={40} />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed font-light italic flex-grow relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5 relative z-10">
                  <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-white/10" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                    <p className="text-primary text-xs font-medium">{t.role}</p>
                    <p className="text-gray-500 text-[10px] mt-0.5">{t.batch}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Alumni Network ── */}
        <section>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Stay Connected</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Alumni Network</h2>
            <p className="text-gray-400 mt-2 text-base font-light max-w-2xl">
              Our global network ensures that the Nexus bond extends far beyond graduation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {networkFeatures.map((feat, i) => (
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center glass-card p-10 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Are You a Nexus Alumnus?</h3>
              <p className="text-gray-400 text-base max-w-lg mx-auto mb-6 font-light">
                Update your profile, join your regional chapter, and stay connected with your alma mater.
              </p>
              <button className="px-8 py-3.5 bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-[0_0_25px_rgba(59,130,246,0.3)] inline-flex items-center gap-2">
                Join the Alumni Network <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Alumni;
