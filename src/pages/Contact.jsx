import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, Globe, Building2, GraduationCap, FlaskConical, Briefcase, CheckCircle } from 'lucide-react';

const departmentContacts = [
  { name: "Admissions Office", icon: <GraduationCap size={18} />, email: "admissions@nexus.edu", phone: "+91-80-2654-1001", hours: "Mon–Sat, 9 AM – 5 PM" },
  { name: "Examination Cell", icon: <Building2 size={18} />, email: "exams@nexus.edu", phone: "+91-80-2654-1002", hours: "Mon–Fri, 10 AM – 4 PM" },
  { name: "Placement Cell", icon: <Briefcase size={18} />, email: "placements@nexus.edu", phone: "+91-80-2654-1003", hours: "Mon–Fri, 9 AM – 6 PM" },
  { name: "Research Office", icon: <FlaskConical size={18} />, email: "research@nexus.edu", phone: "+91-80-2654-1004", hours: "Mon–Fri, 10 AM – 5 PM" },
  { name: "Student Affairs", icon: <GraduationCap size={18} />, email: "studentaffairs@nexus.edu", phone: "+91-80-2654-1005", hours: "Mon–Sat, 8 AM – 8 PM" },
  { name: "International Relations", icon: <Globe size={18} />, email: "international@nexus.edu", phone: "+91-80-2654-1006", hours: "Mon–Fri, 10 AM – 4 PM" },
];

const socials = [
  { name: "LinkedIn", href: "#", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { name: "Twitter / X", href: "#", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { name: "Instagram", href: "#", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
  { name: "YouTube", href: "#", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  )},
  { name: "Facebook", href: "#", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', department: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', department: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Reach Out</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Contact Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </motion.div>

        {/* ── Form + Info Grid ── */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 glass-card p-8 rounded-2xl border border-white/5"
            >
              <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-green-400" />
                  <span className="text-green-300 text-sm font-medium">Message sent successfully! We'll get back to you shortly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text" name="name" required value={formData.name} onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">Subject</label>
                    <input
                      type="text" name="subject" required value={formData.subject} onChange={handleChange}
                      placeholder="Admission Inquiry"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">Department</label>
                    <select
                      name="department" value={formData.department} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-darker">Select department...</option>
                      <option value="admissions" className="bg-darker">Admissions</option>
                      <option value="academics" className="bg-darker">Academics</option>
                      <option value="placements" className="bg-darker">Placements</option>
                      <option value="research" className="bg-darker">Research</option>
                      <option value="student-affairs" className="bg-darker">Student Affairs</option>
                      <option value="other" className="bg-darker">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message" required rows={5} value={formData.message} onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-5"
            >
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-5">Get in Touch</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 text-primary flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Address</p>
                      <p className="text-gray-400 text-sm font-light mt-0.5">Nexus University Campus, Innovation Drive, Bengaluru 560100, Karnataka, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 text-primary flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Phone</p>
                      <p className="text-gray-400 text-sm font-light mt-0.5">+91-80-2654-1000</p>
                      <p className="text-gray-500 text-xs mt-1">Toll-free: 1800-123-NEXUS</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 text-primary flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Email</p>
                      <p className="text-gray-400 text-sm font-light mt-0.5">info@nexus.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 text-primary flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Office Hours</p>
                      <p className="text-gray-400 text-sm font-light mt-0.5">Mon – Sat: 9:00 AM – 5:00 PM</p>
                      <p className="text-gray-500 text-xs mt-1">Closed on Sundays & public holidays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
                      title={s.name}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Google Maps ── */}
        <section className="mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Find Us</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/5 h-[400px]"
          >
            <iframe
              title="Nexus University Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5531!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>

        {/* ── Department Contacts ── */}
        <section>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs block mb-2">Direct Lines</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Department Contacts</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departmentContacts.map((dept, i) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                    {dept.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base group-hover:text-primary transition-colors">{dept.name}</h3>
                </div>
                <div className="space-y-2.5 text-sm">
                  <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                    <Mail size={13} /> {dept.email}
                  </a>
                  <a href={`tel:${dept.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                    <Phone size={13} /> {dept.phone}
                  </a>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock size={13} /> {dept.hours}
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

export default Contact;
