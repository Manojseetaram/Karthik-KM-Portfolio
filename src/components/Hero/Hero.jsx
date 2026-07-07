import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu } from 'lucide-react';
import ka from '../../assets/ka.png'

const heroData = {
    firstName: 'KARTHIK',
    lastName: 'KM',
    tagline: 'Information Science Engineering student skilled in programming, analytics, and full-stack development. Seeking opportunities to apply technical skills, contribute to real-world solutions, and grow in software and data-driven roles.',
    photo: ka,
    badges: ['Full-Stack Dev', 'ML Engineer', 'Open Source'],
    cta: {
        primary:   { label: 'View Projects', href: '#projects' },
        secondary: { label: 'My Tech Stack', href: '#skills' },
    },
};
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sed aperiam iusto quis quos impedit cumque quod veritatis vel vitae minus neque, repellendus, autem dolor. Voluptas saepe amet voluptatibus delectus.
const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-midnight"
        >
            {/* Ambient glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-blue/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-blue/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

                    {/* ── Photo (visible on all screens, comes first on mobile) ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        className="relative order-1 lg:order-2 mx-auto w-48 h-48 sm:w-64 sm:h-64 lg:w-full lg:h-auto lg:aspect-[4/5]"
                    >
                        <div className="absolute -inset-3 bg-brand-blue/10 blur-[50px] rounded-full" />
                        <div className="relative w-full h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-midnight/40 group">
                            <img
                                src={heroData.photo}
                                alt={`${heroData.firstName} ${heroData.lastName}`}
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    {/* ── Text content ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="order-2 lg:order-1 text-center lg:text-left"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 uppercase tracking-tighter">
                            <span className="block">{heroData.firstName}</span>
                            <span className="text-gradient block mt-1">{heroData.lastName}</span>
                        </h1>

                        <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                            {heroData.badges.map((badge) => (
                                <span key={badge} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/5 text-brand-blue text-[10px] font-black uppercase tracking-[0.2em]">
                                    <Code2 size={10} />
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-inter">
                            {heroData.tagline}
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a href={heroData.cta.primary.href} className="btn-premium flex items-center gap-3 group !no-underline text-white px-8 py-4">
                                {heroData.cta.primary.label}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href={heroData.cta.secondary.href} className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/[0.03] border border-white/10 font-black text-[10px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all group text-white !no-underline">
                                <div className="w-9 h-9 rounded-full bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                                    <Cpu size={16} className="text-white" />
                                </div>
                                {heroData.cta.secondary.label}
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;