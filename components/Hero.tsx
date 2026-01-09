import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useModal } from './Layout';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { openModal } = useModal();
  
  // Scroll transition effects
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, scale, y }}
      className="relative h-screen w-full flex items-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/heroBg.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-950/40 to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
        >
          <div className="overflow-hidden mb-4 pb-[0.35em]">
            <motion.h1 
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.4]"
            >
              Access the Right
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6 pb-[0.35em]">
            <motion.h1 
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.4] text-zinc-400"
            >
              Decision-Makers.
            </motion.h1>
          </div>

          <motion.div 
            variants={{
              hidden: { width: 0 },
              visible: { width: "100%", transition: { duration: 1.5, ease: "easeInOut", delay: 1 } }
            }}
            className="h-[1px] bg-zinc-800 mb-8 max-w-md"
          />

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="text-lg md:text-xl text-zinc-400 max-w-lg mb-12 font-light"
          >
            Strategic meeting generation for high-ticket B2B businesses.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, delay: 1.5 } }
            }}
          >
            <button 
              data-hover-trigger
              className="group relative px-8 py-4 bg-transparent overflow-hidden"
              onClick={openModal}
            >
              <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-widest">
                Start Conversation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Border animation */}
              <div className="absolute inset-0 border border-zinc-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="absolute inset-0 border border-zinc-800 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top delay-75" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 animate-[growWidth_0.8s_ease-out_1.8s_forwards]" />
            </button>
            <style>{`
              @keyframes growWidth {
                from { transform: scaleX(0); }
                to { transform: scaleX(1); }
              }
            `}</style>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;