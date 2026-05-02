import React from 'react';
import { motion } from 'motion/react';
import { Share2, Zap, MessageSquare, Rocket } from 'lucide-react';

const updates = [
  {
    date: "Oct 2023",
    title: "Started coding with AI",
    desc: "First line of code written with LLM assistance. The efficiency gap became immediately clear.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    date: "Early 2024",
    title: "50k+ Community Milestone",
    desc: "Scaled gaming networks to 50k+ followers. Learned the mechanics of virality and community-led growth.",
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    date: "Mid 2024",
    title: "Founding Rylix.ai",
    desc: "Identifying the GEO gap. Moving from managing communities to building infrastructure.",
    icon: <Rocket className="w-5 h-5" />
  },
  {
    date: "Today",
    title: "Shipping Rylix Admin",
    desc: "Building the engine that handles brand discovery in the LLM-first world.",
    icon: <Share2 className="w-5 h-5" />
  }
];

export function PublicLogZone() {
  return (
    <section className="py-20 px-5 relative bg-theme-bg overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.4em] uppercase text-theme-muted mb-4">Building in Public</p>
          <h2 className="text-5xl font-serif italic text-theme-text">The Public Log.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {updates.map((update, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-theme-text/10 bg-theme-text/5 hover:bg-theme-text/10 transition-colors duration-500 rounded-2xl relative group"
            >
              <div className="text-theme-muted text-xs uppercase tracking-widest mb-6 font-medium">
                {update.date}
              </div>
              <div className="w-12 h-12 rounded-xl bg-theme-text text-theme-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {update.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 text-theme-text">{update.title}</h3>
              <p className="text-sm text-theme-muted leading-relaxed">
                {update.desc}
              </p>
              
              {/* Connector line for desktop */}
              {i < updates.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-theme-text/10 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
