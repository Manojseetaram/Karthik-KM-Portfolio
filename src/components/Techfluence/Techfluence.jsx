import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Layers, Wrench } from 'lucide-react';

// ── Skill data ──────────────────────────────────────────────────────────────
const categories = [
    {
        id: 'languages',
        label: 'Languages',
        icon: <Code2 size={16} />,
        skills: [
            { name: 'Python',      emoji: '🐍', level: 90 },
            { name: 'JavaScript',  emoji: '⚡', level: 82 },
            { name: 'TypeScript',  emoji: '🔷', level: 72 },
            { name: 'Java',        emoji: '☕', level: 68 },
            { name: 'C / C++',     emoji: '⚙️', level: 65 },
            { name: 'SQL',         emoji: '🗄️', level: 78 },
        ],
    },
    {
        id: 'ml',
        label: 'Machine Learning',
        icon: <Brain size={16} />,
        skills: [
            { name: 'TensorFlow',      emoji: '🔥', level: 80 },
            { name: 'PyTorch',         emoji: '🕯️', level: 72 },
            { name: 'scikit-learn',    emoji: '📊', level: 85 },
            { name: 'Pandas',          emoji: '🐼', level: 88 },
            { name: 'NumPy',           emoji: '🔢', level: 86 },
            { name: 'Matplotlib',      emoji: '📈', level: 80 },
            { name: 'OpenCV',          emoji: '👁️', level: 65 },
            { name: 'Hugging Face',    emoji: '🤗', level: 60 },
        ],
    },
    {
        id: 'fullstack',
        label: 'Full-Stack',
        icon: <Layers size={16} />,
        skills: [
            { name: 'React',       emoji: '⚛️', level: 82 },
            { name: 'Node.js',     emoji: '🟢', level: 76 },
            { name: 'Express.js',  emoji: '🚂', level: 74 },
            { name: 'MongoDB',     emoji: '🍃', level: 72 },
            { name: 'REST API',    emoji: '🔗', level: 80 },
            { name: 'Tailwind CSS',emoji: '🎨', level: 85 },
            { name: 'Next.js',     emoji: '▲',  level: 65 },
            { name: 'PostgreSQL',  emoji: '🐘', level: 66 },
        ],
    },
    {
        id: 'tools',
        label: 'Tools',
        icon: <Wrench size={16} />,
        skills: [
            { name: 'Git / GitHub',    emoji: '🐙', level: 88 },
            { name: 'Figma',           emoji: '🖌️', level: 74 },
            { name: 'VS Code',         emoji: '💻', level: 95 },
            { name: 'Jupyter',         emoji: '📓', level: 90 },
            { name: 'Docker',          emoji: '🐳', level: 60 },
            { name: 'Postman',         emoji: '📬', level: 80 },
            { name: 'Firebase',        emoji: '🔥', level: 70 },
            { name: 'Linux / Bash',    emoji: '🐧', level: 68 },
        ],
    },
];
// ────────────────────────────────────────────────────────────────────────────

const SkillBar = ({ name, emoji, level, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group"
    >
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
                <span className="text-base">{emoji}</span>
                <span className="text-sm font-bold text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">
                    {name}
                </span>
            </div>
            <span className="text-[10px] font-black text-brand-blue tracking-widest">{level}%</span>
        </div>
        <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-brand-blue to-blue-400 rounded-full"
            />
        </div>
    </motion.div>
);

const Skills = () => {
    const [active, setActive] = useState('languages');
    const current = categories.find(c => c.id === active);

    return (
        <section id="skills" className="py-32 bg-midnight relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">

                {/* ── Header ────────────────────────────────────────────── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue/10 text-brand-blue font-bold text-sm uppercase tracking-widest mb-6"
                        >
                            <Code2 size={16} />
                            Tech Stack
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
                            My<br /><span className="text-gradient">Skills.</span>
                        </h2>
                        <p className="text-xl text-white/50 leading-relaxed font-inter italic">
                            "From training neural networks to shipping full-stack apps — here's everything I work with."
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <div className="text-right">
                            <div className="text-5xl font-black text-white tracking-tighter">20+</div>
                            <div className="text-brand-blue font-bold uppercase tracking-widest text-sm mt-1">Tools & Technologies</div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Category tabs ─────────────────────────────────────── */}
                <div className="flex flex-wrap gap-3 mb-14">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActive(cat.id)}
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.25em] transition-all ${
                                active === cat.id
                                    ? 'bg-brand-blue text-white shadow-[0_0_24px_rgba(18,62,151,0.5)]'
                                    : 'bg-white/5 text-white/40 border border-white/10 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* ── Skill grid ────────────────────────────────────────── */}
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 premium-blur p-12 rounded-[2.5rem] border border-white/5"
                >
                    {current.skills.map((skill, i) => (
                        <SkillBar key={skill.name} {...skill} delay={i * 0.07} />
                    ))}
                </motion.div>

                {/* ── Bottom chip cloud (all skills at a glance) ────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 flex flex-wrap gap-3 justify-center"
                >
                    {categories.flatMap(c => c.skills).map(skill => (
                        <span
                            key={skill.name}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest hover:text-white hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all cursor-default"
                        >
                            <span>{skill.emoji}</span> {skill.name}
                        </span>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;