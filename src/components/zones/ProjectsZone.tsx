import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Rylix.ai",
    purpose: "Generative Engine Optimization",
    desc: "Building the infrastructure that helps brands survive the shift from Search to Conversation. We ensure your brand is the one the AI recommends.",
    tech: ["AI Agents", "GEO", "Enterprise AI"],
    href: "https://rylixai.vercel.app"
  },
  {
    id: "02",
    title: "The Problem",
    purpose: "Market Insight",
    desc: "Search is dead. Conversation is the new starting point. Users no longer want a list of links; they want answers from LLMs.",
    tech: ["Analysis", "Market Shift"],
    mt: "md:mt-12",
    href: "https://rylixai.vercel.app"
  },
  {
    id: "03",
    title: "The Solution",
    purpose: "GEO Framework",
    desc: "Our Generative Engine Optimization ensures brands are indexed and cited by modern reasoning models like Claude, GPT-4, and Gemini.",
    tech: ["Citerank AI", "Indexing"],
    href: "https://rylixai.vercel.app"
  },
  {
    id: "04",
    title: "The Ethos",
    purpose: "Guiding Principles",
    desc: "Less hype, more signal. Focusing on clear metrics, earned conviction, and zero-click outcomes.",
    tech: ["Pragmatic Ambition"],
    mt: "md:mt-12",
    href: "https://rylixai.vercel.app"
  }
];

export function ProjectsZone() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-20 px-5 relative flex items-center">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-theme-muted mb-4">Current Focus</p>
          <h2 className="text-5xl font-serif italic text-theme-text">Rylix.ai & GEO.</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.id}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`border border-theme-text/20 p-10 relative overflow-hidden group interactive transition-colors duration-500 hover:bg-theme-text hover:text-theme-bg ${proj.mt || ''} block`}
            >
              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-theme-text translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1] z-0" />

              <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="mb-6 flex justify-between items-start">
                  <h3 className="font-serif text-3xl flex items-center gap-3">
                    {proj.title}
                    <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" />
                  </h3>
                  <span className="text-xs uppercase tracking-widest opacity-50">{proj.id}</span>
                </div>
                <p className="text-theme-muted mb-6 transition-colors duration-500 group-hover:text-theme-bg/80">
                  {proj.desc}
                </p>
                <div className="mb-8">
                  <p className="text-[9px] uppercase tracking-[0.2em] opacity-60 mb-1">Purpose</p>
                  <p className="text-sm">{proj.purpose}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map(t => (
                    <span key={t} className="text-xs border border-current px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
