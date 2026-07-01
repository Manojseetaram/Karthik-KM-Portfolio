import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, GraduationCap, Award, ExternalLink, Code2 } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-32 bg-midnight">
            <div className="max-w-7xl mx-auto px-6">

                {/* ── Header ─────────────────────────────────────────────── */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-24 gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue/10 text-brand-blue font-bold text-sm uppercase tracking-widest mb-8"
                        >
                            <GraduationCap size={16} />
                            About Me
                        </motion.div>

                        <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
                            Building<br />
                            <span className="text-gradient">Smarter.</span>
                        </h2>

                        <p className="text-2xl text-white/60 leading-relaxed font-inter italic max-w-2xl">
                            "I don't just write code — I train models, engineer systems, and turn raw data into decisions."
                        </p>
                    </div>

                    {/* Stat card */}
                    <div className="md:pt-20">
                        <div className="p-8 premium-blur rounded-3xl border border-white/5 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="text-5xl font-black text-brand-blue font-outfit">ISE</div>
                            <div className="text-white/40 font-bold uppercase tracking-widest text-[10px] mt-2">
                                Information Science<br />Engineering
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Three cards ─────────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 — Academic Background */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group premium-blur p-12 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">
                                Academic Base
                            </h3>
                            <p className="text-white/40 leading-relaxed font-inter">
                                Pursuing a B.E. in Information Science Engineering with a strong foundation in data structures,
                                algorithms, databases, and software engineering principles.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-white/20 text-xs font-bold uppercase tracking-widest">
                            <Award size={14} /> Academic Excellence
                        </div>
                    </motion.div>

                    {/* Card 2 — Machine Learning (highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group premium-blur p-12 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between bg-brand-blue/5"
                    >
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center text-white mb-8">
                                <Brain size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">
                                Machine Learning
                            </h3>
                            <p className="text-white/40 leading-relaxed font-inter">
                                Building and training ML models using Python, scikit-learn, TensorFlow, and Pandas.
                                Focused on real-world applications — predictive analytics, NLP, and data-driven decision making.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {['Python', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-brand-blue/20 rounded-md text-[9px] font-bold text-brand-blue uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a
                            href="#projects"
                            className="mt-12 w-full py-4 rounded-xl border border-white/10 font-bold text-white text-xs uppercase tracking-widest hover:bg-white hover:text-midnight transition-all flex items-center justify-center gap-2 !no-underline"
                        >
                            View ML Projects <ExternalLink size={14} />
                        </a>
                    </motion.div>

                    {/* Card 3 — Full-Stack Dev */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group premium-blur p-12 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">
                                <Code2 size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">
                                Full-Stack Dev
                            </h3>
                            <p className="text-white/40 leading-relaxed font-inter">
                                Designing and building end-to-end web applications — from responsive UIs to scalable REST APIs —
                                while integrating ML models into production-ready pipelines.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-row flex-wrap gap-2">
                            {['React', 'Node.js', 'MongoDB', 'REST API', 'Git'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-[8px] font-bold text-white/40 uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* ── Bottom bio strip ────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 premium-blur rounded-[2rem] p-10 border border-white/5 flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0">
                        <GraduationCap size={28} />
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-2">
                            Who I Am
                        </div>
                        <p className="text-white/50 leading-relaxed font-inter text-base">
                            Information Science Engineering student skilled in programming, analytics, and full-stack development.
                            Seeking opportunities to apply technical skills, contribute to real-world solutions, and grow in
                            software and data-driven roles.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="flex-shrink-0 px-8 py-4 bg-brand-blue text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-midnight transition-all shadow-[0_0_30px_rgba(18,62,151,0.4)] hover:shadow-none !no-underline"
                    >
                        Let's Connect
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;