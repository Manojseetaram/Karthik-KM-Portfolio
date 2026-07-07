import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Gallery/Gallery'
import Techfluence from './components/Techfluence/Techfluence'
import Education from './components/Education/Education'
import HireMe from './components/HireMe/HireMe'

function App() {
  return (
    <div className="bg-midnight min-h-screen text-white font-inter selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Education Persona */}
        <Education />
        {/* Content Creation Pillars */}
        <Techfluence />
        {/* Featured Projects */}
        <Projects />
        {/* Hire Me */}
        <HireMe />
        {/* Product Consultancy & Ideology
        <ProductIdeology /> */}
      </main>
      <footer className="py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5 text-white/20">
            <div className="text-2xl font-black font-outfit uppercase tracking-tighter">
              Karthik <span className="text-brand-blue">Km.</span>
            </div>
            <p className="tracking-widest uppercase text-[10px] font-black font-inter">
              © 2026 KARTHIK KM • HEAD OF GUEST RELATIONS • ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App