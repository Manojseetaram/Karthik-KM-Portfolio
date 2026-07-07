import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import {
    SiPython, SiJavascript, SiTypescript, SiOpenjdk, SiCplusplus, SiMysql,
    SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiOpencv, SiHuggingface,
    SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiNextdotjs, SiPostgresql,
    SiGit, SiGithub, SiFigma, SiJupyter, SiDocker, SiPostman, SiFirebase, SiLinux
} from 'react-icons/si';
import { Terminal } from 'lucide-react';

// ── Skill data grouped by category ──────────────────────────────────────────
const categories = [
    {
        id: 'languages',
        label: 'Languages',
        skills: [
            { name: 'Python', icon: SiPython, color: '#3776AB' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: 'Java', icon: SiOpenjdk, color: '#EA2D2E' },
            { name: 'C / C++', icon: SiCplusplus, color: '#00599C' },
            { name: 'SQL', icon: SiMysql, color: '#4479A1' },
        ],
    },
    {
        id: 'ml',
        label: 'Machine Learning',
        skills: [
            { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
            { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
            { name: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
            { name: 'Pandas', icon: SiPandas, color: '#150458' },
            { name: 'NumPy', icon: SiNumpy, color: '#013243' },
            { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
            { name: 'Hugging Face', icon: SiHuggingface, color: '#FFD21E' },
        ],
    },
    {
        id: 'fullstack',
        label: 'Full-Stack',
        skills: [
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        ],
    },
    {
        id: 'tools',
        label: 'Tools',
        skills: [
            { name: 'Git', icon: SiGit, color: '#F05032' },
            { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
            { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
            { name: 'VS Code', icon: Terminal, color: '#007ACC' },
            { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
            { name: 'Docker', icon: SiDocker, color: '#2496ED' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
            { name: 'Linux / Bash', icon: SiLinux, color: '#FCC624' },
        ],
    },
];
// ────────────────────────────────────────────────────────────────────────────

const SkillCard = ({ name, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.4 }}
        whileHover={{ y: -6, scale: 1.03 }}
        className="group relative flex flex-col items-center justify-center gap-4 aspect-square rounded-3xl border border-white/10 bg-white/[0.03] hover:border-brand-blue/40 hover:bg-brand-blue/[0.06] transition-all duration-300 p-6 overflow-hidden"
    >
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
            style={{ background: `radial-gradient(circle at 50% 30%, ${color}22, transparent 70%)` }}
        />
        <Icon
            size={44}
            style={{ color }}
            className="relative z-10 group-hover:scale-110 transition-transform duration-300"
        />
        <span className="relative z-10 text-white/70 group-hover:text-white text-sm font-bold uppercase tracking-widest font-inter text-center transition-colors">
            {name}
        </span>
    </motion.div>
);

const CategoryBlock = ({ label, skills, index }) => (
    <div className="mb-20">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
        >
            <div className="w-1 h-8 bg-brand-blue rounded-full" />
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
                {label}
            </h3>
            <span className="text-white/30 text-sm font-bold font-inter">
                ({skills.length})
            </span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, i) => (
                <SkillCard key={skill.name} {...skill} delay={(index * 0.1) + i * 0.05} />
            ))}
        </div>
    </div>
);

const Skills = () => {
    const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0);

    return (
        <section id="skills" className="py-32 bg-midnight relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-blue/5 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">

                {/* ── Header ────────────────────────────────────────────── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
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
                            <div className="text-5xl font-black text-white tracking-tighter">{totalSkills}+</div>
                            <div className="text-brand-blue font-bold uppercase tracking-widest text-sm mt-1">Tools & Technologies</div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Category blocks ──────────────────────────────────── */}
                {categories.map((cat, index) => (
                    <CategoryBlock key={cat.id} label={cat.label} skills={cat.skills} index={index} />
                ))}

            </div>
        </section>
    );
};

export default Skills;