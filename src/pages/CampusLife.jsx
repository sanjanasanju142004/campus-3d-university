import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Zap, Calendar, MapPin, Trophy, Music, Code, Palette, Dumbbell, BookOpen, Coffee, Wifi, BedDouble, Utensils, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SceneSkeleton } from '../components/LoadingSkeletons';

// Lazy load the heavy 3D Scene
const Scene = lazy(() => import('../components/Scene'));

const clubs = [
  { name: "Nexus Coding Club", icon: <Code size={22} />, members: 450, description: "Weekly competitive programming contests, open-source contribution drives, and hackathon prep sessions.", category: "Tech", color: "#3b82f6" },
  { name: "Robotics Society", icon: <Zap size={22} />, members: 180, description: "Build autonomous robots, participate in Robocon, and tinker with drones, 3D printers, and embedded systems.", category: "Tech", color: "#8b5cf6" },
  { name: "Artistry — Design Club", icon: <Palette size={22} />, members: 220, description: "UI/UX design challenges, typography workshops, brand identity hackathons, and gallery exhibitions.", category: "Creative", color: "#f97316" },
  { name: "Rhythmics — Music Club", icon: <Music size={22} />, members: 300, description: "Open mic nights, band jams, beatboxing workshops, and performances at college fests.", category: "Cultural", color: "#ec4899" },
  { name: "Fitness & Sports Club", icon: <Dumbbell size={22} />, members: 500, description: "Inter-college tournaments in cricket, basketball, football, athletics, and fitness boot camps.", category: "Sports", color: "#10b981" },
  { name: "Entrepreneurship Cell", icon: <Trophy size={22} />, members: 350, description: "Startup weekends, pitch competitions, VC networking sessions, and incubation support for student ventures.", category: "Business", color: "#f59e0b" },
];

const hackathons = [
  { name: "NexusHack 2026", date: "March 14–16, 2026", participants: "2,500+", prize: "₹10 Lakh", description: "Nexus University's flagship 48-hour hackathon. Build AI, blockchain, or IoT solutions for real-world problems.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80" },
  { name: "BioHack — Genomics Sprint", date: "July 20–21, 2026", participants: "400+", prize: "₹3 Lakh", description: "A bioinformatics hackathon focused on CRISPR design tools, genomic data pipelines, and drug target prediction.", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=700&q=80" },
  { name: "DesignJam", date: "October 5, 2026", participants: "600+", prize: "₹2 Lakh", description: "A 12-hour UX/UI design sprint. Redesign real products for accessibility, sustainability, or delight.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80" },
];

const events = [
  { name: "Aurora — Annual Cultural Fest", date: "October 10–12, 2026", type: "Cultural", description: "3-day extravaganza with live music, dance battles, stand-up comedy, and a star-studded pro-night concert." },
  { name: "TechVista — Annual Tech Symposium", date: "February 20–22, 2026", type: "Technical", description: "Keynotes from industry leaders, paper presentations, coding competitions, and robotics showcase." },
  { name: "Convocation 2026", date: "December 15, 2026", type: "Academic", description: "Graduation ceremony celebrating the achievements of the Class of 2026." },
  { name: "International Research Conference", date: "September 5–7, 2026", type: "Research", description: "A peer-reviewed conference attracting researchers from 30+ countries." },
  { name: "Freshers' Week", date: "August 4–9, 2026", type: "Orientation", description: "Welcome events, campus tours, mentorship pairing, and ice-breaker activities." },
  { name: "Alumni Homecoming", date: "November 20, 2026", type: "Alumni", description: "Annual reunion bringing graduates back to campus for networking and mentorship." },
];

const facilities = [
  { name: "Central Library", icon: <BookOpen size={20} />, description: "2M+ volumes, 24/7 study zones, digital archives, and collaborative workspaces." },
  { name: "Sports Complex", icon: <Dumbbell size={20} />, description: "Olympic-sized pool, indoor courts, gym, cricket ground, and athletics track." },
  { name: "Student Residences", icon: <BedDouble size={20} />, description: "AC rooms, high-speed Wi-Fi, laundry services, and common recreation areas." },
  { name: "Food Court & Cafés", icon: <Utensils size={20} />, description: "Multi-cuisine food court, specialty coffee shop, and 24/7 vending stations." },
  { name: "High-Speed Campus Wi-Fi", icon: <Wifi size={20} />, description: "10 Gbps backbone, eduroam-compatible, campus-wide coverage." },
  { name: "Student Lounge & Co-Working", icon: <Coffee size={20} />, description: "Bean bags, whiteboards, projectors, and quiet focus rooms on-demand." },
];

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", caption: "Graduation Day Celebrations" },
  { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80", caption: "Campus Aerial View" },
  { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", caption: "Student Collaboration Hub" },
  { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", caption: "Hackathon in Progress" },
  { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80", caption: "Cultural Fest Performance" },
  { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80", caption: "Research Laboratory" },
  { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80", caption: "Library Study Zone" },
  { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80", caption: "Sports Championship" },
];

const eventTypeColors = {
  Cultural: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  Technical: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Academic: "bg-green-500/15 text-green-400 border-green-500/30",
  Research: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Orientation: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Alumni: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
};

const CampusLife = () => {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Experience Nexus</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Campus Life</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">More than academics — a vibrant community of creators, athletes, artists, and innovators.</p>
        </motion.div>

        {/* 3D Campus — Lazy Loaded */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Explore</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Virtual Campus Tour</h2>
            <p className="text-gray-400 mt-2 text-base font-light">Click on buildings to navigate to their departments.</p>
          </motion.div>
          <Suspense fallback={<SceneSkeleton />}>
            <Scene onNavigate={(route) => navigate(route)} />
          </Suspense>
        </section>

        {/* Clubs */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Get Involved</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Clubs & Societies</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubs.map((club, i) => (
              <motion.div key={club.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: `${club.color}15`, borderColor: `${club.color}30`, color: club.color }}>{club.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold text-base group-hover:text-primary transition-colors">{club.name}</h3>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Users size={11} />{club.members} members</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{club.description}</p>
                <span className="inline-block mt-4 text-[10px] px-2.5 py-1 rounded-full border" style={{ backgroundColor: `${club.color}10`, borderColor: `${club.color}25`, color: club.color }}>{club.category}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hackathons */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Build & Compete</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Hackathons</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {hackathons.map((hack, i) => (
              <motion.div key={hack.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl border border-white/5 overflow-hidden group hover:border-primary/30 transition-all">
                <div className="relative h-44 overflow-hidden">
                  <img src={hack.image} alt={hack.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/50 to-transparent"></div>
                  <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 backdrop-blur-sm">🏆 {hack.prize}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{hack.name}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={11} />{hack.date}</span>
                    <span className="flex items-center gap-1"><Users size={11} />{hack.participants}</span>
                  </div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{hack.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Events */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">What's Happening</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Upcoming Events</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event, i) => (
              <motion.div key={event.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                <span className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full border mb-4 ${eventTypeColors[event.type] || 'bg-white/5 text-gray-400 border-white/10'}`}>{event.type}</span>
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-primary transition-colors">{event.name}</h3>
                <div className="flex items-center text-xs text-gray-500 mb-3 gap-1"><Calendar size={12} />{event.date}</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">World-Class</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Campus Facilities</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f, i) => (
              <motion.div key={f.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 border border-primary/20 text-primary group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-primary transition-colors">{f.name}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Moments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Campus Gallery</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3" role="list" aria-label="Campus photo gallery">
            {galleryImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }} onClick={() => setLightboxIndex(i)} className={`relative rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:border-primary/40 transition-all ${i === 0 ? 'md:col-span-2 md:row-span-2 h-64 md:h-auto' : 'h-44'}`} role="listitem">
                <img src={img.url} alt={img.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-darker/90 via-darker/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-semibold text-sm drop-shadow-lg">{img.caption}</h4>
                  <div className="w-8 h-0.5 bg-primary mt-2 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)} role="dialog" aria-label="Image lightbox" aria-modal="true">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setLightboxIndex(null)} className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors p-2" aria-label="Close lightbox"><X size={24} /></button>
                <img src={galleryImages[lightboxIndex].url} alt={galleryImages[lightboxIndex].caption} className="w-full rounded-2xl shadow-2xl max-h-[80vh] object-contain" />
                <p className="text-center text-white font-medium mt-4">{galleryImages[lightboxIndex].caption}</p>
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14">
                  <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length); }} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" aria-label="Previous image">←</button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14">
                  <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryImages.length); }} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" aria-label="Next image">→</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CampusLife;
