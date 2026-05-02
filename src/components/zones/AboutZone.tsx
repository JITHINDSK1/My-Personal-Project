import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function AboutZone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleWords = "Building for the age".split(" ");
  const subtitleWords = "of LLM Reasoning.".split(" ");

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 md:px-20 pt-[15vh]">
      {/* Line Art Decor with Parallax */}
      <motion.svg 
        animate={{ 
          rotate: [-3, 3],
          x: mousePos.x * -1.5,
          y: mousePos.y * -1.5
        }}
        transition={{ 
          rotate: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 }
        }}
        className="absolute bottom-10 left-10 w-48 h-64 opacity-30 pointer-events-none origin-bottom" 
        viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="1.5"
      >
        <path d="M50,150 Q45,100 20,80 Q40,90 50,110 Q60,70 80,50 Q65,80 50,90 Q40,40 10,20 Q35,45 50,60" />
      </motion.svg>
      
      <motion.svg 
        animate={{ 
          y: [-10, 10],
          x: mousePos.x * 2,
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 20 }
        }}
        className="absolute top-32 right-20 w-32 h-32 opacity-20 pointer-events-none" 
        viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1"
      >
        <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
        <circle cx="50" cy="50" r="20" />
        <path d="M50,10 L50,90 M10,50 L90,50" strokeWidth="0.5" />
      </motion.svg>

      <motion.div style={{ opacity, y }} className="max-w-4xl text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-theme-text/10 shadow-2xl">
            <img 
              src="/profile.png" 
              alt="Jithin Reddy" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Animated Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 border border-dashed border-theme-text/20 rounded-full pointer-events-none"
          />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-sm uppercase text-theme-muted mb-8"
        >
          Jithin Reddy
        </motion.p>
        
        <h1 className="text-5xl md:text-7xl font-serif leading-tight text-theme-text mb-6 flex flex-col items-center">
          <div className="flex overflow-hidden">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="mr-4 last:mr-0 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex overflow-hidden italic text-theme-muted">
            {subtitleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="mr-4 last:mr-0 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-theme-text max-w-2xl mx-auto mt-8 font-light"
        >
          18yo Founder at <span className="font-medium">Rylix.ai</span>. I build agents, optimize for generative engines, and ship in public. Currently a Freshman at KLH University and a daily Claude power user.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 text-left border-l border-theme-text/20 pl-8 max-w-2xl mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-theme-muted mb-4">The Hook</p>
          <p className="text-xl md:text-2xl font-serif italic text-theme-text leading-relaxed">
            "I started coding with AI in 2023 and haven’t looked back. By 17, I was managing a 50k+ gaming community; at 18, I’m building the infrastructure that helps brands survive the shift from Search to Conversation. I value leverage, insight, and proof over 'vision talk.' If it doesn't solve a clear problem, I'm not building it."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
