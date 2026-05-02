import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, BookOpen, Globe } from 'lucide-react';

export function ExperienceZone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative bg-[#EAE6DD] py-20 px-5 overflow-hidden">
      
      {/* Experience */}
      <div className="max-w-4xl w-full mx-auto relative z-10 mb-32">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm tracking-[0.3em] uppercase text-theme-muted mb-16"
        >
          Experience
        </motion.p>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-theme-muted/30" />
          <motion.div 
            className="absolute left-[19px] top-0 w-[2px] bg-theme-text origin-top" 
            style={{ scaleY, height: '100%' }} 
          />
          
          <div className="space-y-16">
            <TimelineItem 
              time="Apr 2026 – Present"
              title="Founder & CEO"
              subtitle="Rylix.ai · Full-time · Hybrid"
              desc="Coming soon. Making waves. Building the infrastructure that helps brands survive the shift from Search to Conversation. We ensure your brand is the one the AI recommends."
              isActive={true}
              link="https://rylixai.vercel.app"
            />
            <TimelineItem 
              time="Oct 2020 – Present"
              title="Social Media Content Creator"
              subtitle="X · Self-employed · Remote"
              desc="I run an X account with over 50k+ followers. We post news about game updates."
            />
            <TimelineItem 
              time="May 2022 – Present"
              title="Discord Server Owner | Community & Brand Lead"
              subtitle="Discord · Self-employed · Remote"
              desc="I founded and currently manage a large-scale Discord server focused on a Roblox game, with over 9k members and a staff team of 40+. The server includes 16 custom bots and serves as a hub for community updates, engagement, and exclusive game-related content. Leading moderators and bot developers, handling server automation, coordinating content strategy, and ensuring community safety."
            />
            <TimelineItem 
              time="Sep 2025 – Dec 2025"
              title="Validating Idea"
              subtitle="Stealth Startup · Full-time · Remote"
              desc="Validated the problem with over 100 people and SMB Directors."
            />
            <TimelineItem 
              time="May 2020 – Jul 2022"
              title="3D Artist"
              subtitle="Roblox · Freelance · Remote"
              desc="Working as a map designer for an upcoming Roblox roleplay game."
            />
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="max-w-4xl w-full mx-auto relative z-10 mb-32">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm tracking-[0.3em] uppercase text-theme-muted mb-16"
        >
          Education
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EducationCard
            school="KL University"
            degree="Bachelor of Technology – BTech"
            field="Computer Science"
            period="2025 – 2029"
            note="1st year (Freshman)"
          />
          <EducationCard
            school="Sri Chaitanya College of Education"
            degree="Secondary Education"
            field="MPC"
            period="Apr 2023 – Apr 2025"
            note="Grade: A"
          />
          <EducationCard
            school="Dr. K.K.R Goutham School"
            degree="SSC"
            field="Telangana SSC Board"
            period="Mar 2022 – Mar 2023"
            note="Grade: A"
          />
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm tracking-[0.3em] uppercase text-theme-muted mb-16"
        >
          Licenses & Certifications
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CertCard 
            icon={<BookOpen className="w-5 h-5" />}
            title="Model Context Protocol (MCP) Advanced Topics"
            issuer="Anthropic"
            issued="Apr 2026"
            credentialId="xys59fj8zdj4"
            skills="Model Context Protocol (MCP)"
          />
          <CertCard 
            icon={<Globe className="w-5 h-5" />}
            title="HTML Essentials"
            issuer="Cisco"
            issued="Jan 2026"
            skills="HTML"
          />
          <CertCard 
            icon={<Award className="w-5 h-5" />}
            title="EF SET English Certificate (C2 Proficient)"
            issuer="EF SET"
            issued="Oct 2025"
            credentialId="tFQmJ2"
            skills="English (C2)"
          />
        </div>
      </div>

      {/* Line Art Plant Background */}
      <motion.svg 
        animate={{ rotate: [-2, 2] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 -left-10 w-64 h-96 opacity-10 pointer-events-none origin-bottom" 
        viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="2"
      >
        <path d="M50,200 Q60,100 20,50 Q60,80 50,20 Q80,80 90,40" strokeLinecap="round" />
      </motion.svg>
    </section>
  );
}

function TimelineItem({ time, title, subtitle, desc, isActive, link }: any) {
  const Wrapper = link ? motion.a : motion.div;
  const wrapperProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper 
      {...wrapperProps}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative pl-16 group interactive block"
    >
      {/* Dot */}
      <div className={`absolute left-[15px] top-[6px] w-[10px] h-[10px] rounded-full border-2 border-theme-text transition-all duration-300 group-hover:scale-150 group-hover:bg-theme-text z-10 ${isActive ? 'bg-theme-text' : 'bg-[#EAE6DD]'}`} />
      
      {/* Pulse Effect for Active Item */}
      {isActive && (
        <motion.div 
          className="absolute left-[15px] top-[6px] w-[10px] h-[10px] rounded-full bg-theme-text z-0"
          animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      <h4 className="text-sm text-theme-muted tracking-widest uppercase mb-1">{time}</h4>
      <h5 className="font-serif text-3xl mb-1 text-theme-text">{title}</h5>
      {subtitle && <p className="text-sm italic mb-2 text-theme-text/70">{subtitle}</p>}
      <p className="text-theme-muted leading-relaxed max-w-xl">{desc}</p>
    </Wrapper>
  );
}

function EducationCard({ school, degree, field, period, note }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="p-6 border border-theme-text/10 bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-colors duration-300 interactive rounded-xl flex flex-col gap-2 shadow-sm hover:shadow-md"
    >
      <h4 className="font-serif text-xl text-theme-text">{school}</h4>
      <p className="text-xs uppercase tracking-widest text-theme-muted">{degree}</p>
      <p className="text-sm text-theme-text/80">{field}</p>
      <p className="text-xs text-theme-muted mt-1">{period}</p>
      {note && <p className="text-xs italic text-theme-muted">{note}</p>}
    </motion.div>
  );
}

function CertCard({ icon, title, issuer, issued, credentialId, skills }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="p-6 border border-theme-text/10 bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-colors duration-300 interactive rounded-xl flex flex-col gap-3 shadow-sm hover:shadow-md"
    >
      <div className="w-10 h-10 rounded-full bg-theme-text/5 flex items-center justify-center text-theme-text">
        {icon}
      </div>
      <div>
        <h4 className="font-serif text-lg text-theme-text mb-1 leading-snug">{title}</h4>
        <p className="text-xs uppercase tracking-widest text-theme-muted mb-1">{issuer}</p>
        <p className="text-xs text-theme-muted">Issued {issued}</p>
        {credentialId && <p className="text-xs text-theme-muted/60 mt-1">ID: {credentialId}</p>}
        {skills && <p className="text-xs text-theme-text/60 mt-2 italic">{skills}</p>}
      </div>
    </motion.div>
  );
}
