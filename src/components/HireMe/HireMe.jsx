import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

const HireMe = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'karthik.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socials = [
    {
      name: 'Email',
      icon: Mail,
      href: 'karthikkm241005@gmail.com',
      label: 'karthikkm241005@gmail.com',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Karthik-km24',
      label: 'Karthik-km24',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/karthik-km',
      label: 'Karthik KM',
    },
  ];

  return (
    <section id="hire-me" className="py-32 bg-white/[0.02] overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-blue/5 blur-[150px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 rounded-lg bg-brand-blue/20 text-brand-blue font-bold text-sm uppercase tracking-widest mb-6 font-inter">
            Let's Collaborate
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
            Hire <span className="text-gradient">Me.</span>
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-16 font-inter leading-relaxed">
            Open for full-time roles, freelance projects, and consultancy work.
            Download my resume or reach out directly — I usually respond within 24 hours.
          </p>

          <button
            onClick={handleResumeDownload}
            className="btn-premium text-white px-14 py-6 text-lg tracking-[0.2em] shadow-[0_0_50px_rgba(18,62,151,0.3)] rounded-full font-bold uppercase inline-flex items-center gap-3 mb-20 hover:scale-105 transition-transform"
          >
            <Download size={20} />
            Download Resume
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group flex flex-col items-center gap-4 p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue/30 transition-colors">
                    <Icon className="text-brand-blue" size={28} />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-widest text-sm font-inter mb-1">
                      {social.name}
                    </p>
                    <p className="text-white/40 text-xs font-inter">{social.label}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;