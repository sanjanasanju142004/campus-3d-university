import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, ExternalLink, Video, FileText, Globe, Trophy, Medal, Star, Users, Code, Palette, Music, Dumbbell, Zap, Lightbulb, GraduationCap, Award } from 'lucide-react';

const resources = [
  { name: "Digital Library Access", icon: <BookOpen size={20} />, description: "24/7 access to 2M+ e-books, IEEE/ACM/Springer journals, and research databases via your student ID.", link: "#", color: "#3b82f6" },
  { name: "LMS — Learning Portal", icon: <Globe size={20} />, description: "Course materials, lecture recordings, assignments, and grade tracking all in one place.", link: "#", color: "#8b5cf6" },
  { name: "Career Services Portal", icon: <FileText size={20} />, description: "Resume builder, mock interview scheduler, job/internship board, and placement preparation resources.", link: "#", color: "#10b981" },
  { name: "Video Lecture Archive", icon: <Video size={20} />, description: "Recorded lectures from all departments. Rewatch, revise, and learn at your own pace.", link: "#", color: "#f59e0b" },
  { name: "Research Paper Repository", icon: <Download size={20} />, description: "Access and download faculty and student publications, thesis papers, and conference proceedings.", link: "#", color: "#ec4899" },
  { name: "Mental Health & Wellness", icon: <Lightbulb size={20} />, description: "Confidential counseling, mindfulness workshops, peer support groups, and 24/7 helpline access.", link: "#", color: "#f97316" },
];

const achievements = [
  { title: "ICPC World Finals — Top 15", description: "Team Nexus secured a Top 15 finish at the International Collegiate Programming Contest World Finals in Astana, competing against 50,000+ teams worldwide.", student: "Aarav Singh, Priya Malhotra, Dev Kapoor", year: "2025", icon: <Code size={18} />, badge: "🥇" },
  { title: "iGEM Gold Medal — Synthetic Biology", description: "Our biotech team engineered a novel biosensor for heavy metal detection in water, earning a Gold Medal at the iGEM international competition in Paris.", student: "Team BioNexus (12 members)", year: "2025", icon: <Zap size={18} />, badge: "🥇" },
  { title: "Red Dot Design Concept Award", description: "Student-designed sustainable packaging system won the prestigious Red Dot Design Concept Award, beating 8,000+ entries from 60 countries.", student: "Rhea Mathur, Arjun Iyer", year: "2024", icon: <Palette size={18} />, badge: "🏆" },
  { title: "Formula SAE — International Top 10", description: "Nexus Racing engineered an electric Formula car that placed 8th at Formula SAE International in Michigan, USA.", student: "Team Nexus Racing (28 members)", year: "2025", icon: <Dumbbell size={18} />, badge: "🏎️" },
  { title: "Smart India Hackathon — Grand Winner", description: "Built an AI-powered sign-language-to-speech translator winning the national Smart India Hackathon among 10,000+ teams.", student: "Karan Joshi, Sneha Reddy, Manish Tiwari", year: "2024", icon: <Trophy size={18} />, badge: "🥇" },
  { title: "NASA Space Apps Challenge — Global Nominee", description: "Developed a satellite debris tracking dashboard using real-time TLE data, nominated among Top 30 globally.", student: "Team AstroNexus (5 members)", year: "2025", icon: <Star size={18} />, badge: "🚀" },
];

const clubs = [
  { name: "Nexus Coding Club", members: 450, category: "Tech", icon: <Code size={22} />, color: "#3b82f6", highlights: ["Weekly LeetCode contests", "Open-source contribution drives", "ICPC & Codeforces training camps"] },
  { name: "Robotics Society", members: 180, category: "Tech", icon: <Zap size={22} />, color: "#8b5cf6", highlights: ["Robocon preparation", "Drone building workshops", "Arduino & ROS bootcamps"] },
  { name: "Artistry — Design Club", members: 220, category: "Creative", icon: <Palette size={22} />, color: "#f97316", highlights: ["UI/UX design sprints", "Brand identity hackathons", "Gallery exhibitions & critiques"] },
  { name: "Rhythmics — Music Club", members: 300, category: "Cultural", icon: <Music size={22} />, color: "#ec4899", highlights: ["Open mic Friday nights", "Inter-college band battles", "Annual music production workshop"] },
  { name: "Fitness & Sports Club", members: 500, category: "Sports", icon: <Dumbbell size={22} />, color: "#10b981", highlights: ["Cricket, football, basketball leagues", "Annual marathon & fitness bootcamp", "Inter-university tournaments"] },
  { name: "Entrepreneurship Cell", members: 350, category: "Business", icon: <Lightbulb size={22} />, color: "#f59e0b", highlights: ["Startup weekends & pitch nights", "VC mentorship program", "15+ startups incubated"] },
];

const Students = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Student Hub</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Students</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Everything you need to thrive at Nexus — resources, recognition, and community.
          </p>
        </motion.div>

        {/* ── Resources ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Quick Access</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Student Resources</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${r.color}15`, borderColor: `${r.color}30`, color: r.color }}>
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1 group-hover:text-primary transition-colors">{r.name}</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">{r.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-primary mt-3 font-medium group-hover:translate-x-1 transition-transform">
                      Access Now <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Achievements ── */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Milestones</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Student Achievements</h2>
          </motion.div>

          <div className="space-y-5">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                    {a.icon}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">{a.badge} {a.title}</h3>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 flex-shrink-0">{a.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mt-2">{a.description}</p>
                    <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                      <GraduationCap size={12} /> {a.student}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Clubs ── */}
        <section>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Community</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Clubs & Organizations</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubs.map((club, i) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: `${club.color}15`, borderColor: `${club.color}30`, color: club.color }}>
                    {club.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base group-hover:text-primary transition-colors">{club.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Users size={11} />{club.members}</span>
                      <span className="px-2 py-0.5 rounded-full border text-[10px]" style={{ backgroundColor: `${club.color}10`, borderColor: `${club.color}25`, color: club.color }}>{club.category}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {club.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: club.color }}></div>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Students;
