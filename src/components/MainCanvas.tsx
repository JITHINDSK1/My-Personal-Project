import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { AboutZone } from './zones/AboutZone';
import { SkillsZone } from './zones/SkillsZone';
import { ProjectsZone } from './zones/ProjectsZone';
import { PublicLogZone } from './zones/PublicLogZone';
import { ExperienceZone } from './zones/ExperienceZone';
import { ContactZone } from './zones/ContactZone';

export function MainCanvas() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.main 
      className="w-full relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      {/* Premium Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-theme-text origin-left z-[10000]"
        style={{ scaleX }}
      />

      <div className="flex flex-col">
        {/* Narrative Flow: Identity -> Current Mission -> Track Record -> Momentum -> Toolkit -> Contact */}
        <AboutZone />
        <ProjectsZone />
        <ExperienceZone />
        <PublicLogZone />
        <SkillsZone />
        <ContactZone />
      </div>
    </motion.main>
  );
}
