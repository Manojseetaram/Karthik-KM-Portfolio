import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Leaf, MessageSquareText, Globe, Droplets } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce web Application',
    category: 'Web Application',
    description: 'A sustainability-focused platform built to track and manage eco-friendly initiatives, promoting greener practices through an intuitive interface.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Karthik-km24',
    icon: Leaf,
  },
  {
    id: 2,
    title: 'RAG Chatbot',
    category: 'AI / Machine Learning',
    description: 'A Retrieval-Augmented Generation chatbot that combines vector search with LLMs to deliver accurate, context-aware answers from custom knowledge bases.',
    tech: ['Python', 'LangChain', 'Vector DB'],
    github: 'https://github.com/Karthik-km24',
    icon: MessageSquareText,
  },
  {
    id: 3,
    title: 'Static Portfolio Website',
    category: 'Frontend Development',
    description: 'A fully responsive static website built from the ground up, focused on clean design, fast load times, and pixel-perfect layout across devices.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Karthik-km24',
    icon: Globe,
  },
  {
    id: 4,
    title: 'Blood Bank Management System',
    category: 'Full Stack Application',
    description: 'A complete management system for blood banks handling donor records, inventory tracking, and request management with a secure backend.',
    tech: ['React', 'Express', 'SQL'],
    github: 'https://github.com/Karthik-km24',
    icon: Droplets,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block px-4 py-2 rounded-lg bg-brand-blue/20 text-brand-blue font-bold text-sm uppercase tracking-widest mb-6 font-inter underline-offset-4 decoration-brand-blue decoration-2">
              My Work
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-tighter leading-none">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-white/60 max-w-xl font-inter">
              A collection of applications and systems I've built, spanning AI, full-stack development, and frontend engineering.
            </p>
          </div>

          <a href="https://github.com/Karthik-km24"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/20 font-bold hover:bg-white hover:text-midnight transition-all text-white uppercase tracking-widest text-xs font-inter flex items-center gap-2"
          >
            <Github size={16} />
            View GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className="relative overflow-hidden group rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-6 group-hover:bg-brand-blue/30 transition-colors">
                    <Icon className="text-brand-blue" size={28} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2 block font-inter">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm font-inter leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-white/10 text-white/50 text-xs font-inter uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest font-inter hover:text-brand-blue transition-colors"
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>

                <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;