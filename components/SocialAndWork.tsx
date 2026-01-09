import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const industries = [
  { id: 1, name: "SaaS & Tech", bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, name: "Real Estate", bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "Manufacturing", bg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, name: "FinTech", bg: "https://images.unsplash.com/photo-1556741533-974f8e62a92d?q=80&w=2940&auto=format&fit=crop" },
];

const IndustriesSection: React.FC = () => {
  const [activeInd, setActiveInd] = useState(0);

  return (
    <section className="relative min-h-screen w-full bg-zinc-950 overflow-hidden flex flex-col md:flex-row">
      {/* Image Background Layer */}
      <div className="absolute inset-0 z-0">
         <AnimatePresence>
            <motion.div
              key={activeInd}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center grayscale"
              style={{ backgroundImage: `url(${industries[activeInd].bg})` }}
            />
         </AnimatePresence>
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-950/80 md:via-zinc-950/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-4xl">
          <p className="text-zinc-500 mb-6 sm:mb-8 md:mb-10 uppercase tracking-widest text-xs sm:text-sm md:text-base">Industries</p>
          <ul>
            {industries.map((ind, idx) => (
              <li 
                key={ind.id}
                onMouseEnter={() => setActiveInd(idx)}
                onClick={() => setActiveInd(idx)}
                className="py-4 sm:py-5 md:py-6 lg:py-7 border-b border-zinc-800 cursor-pointer group flex items-center justify-between touch-manipulation"
                data-hover-trigger
              >
                <span className={`text-[clamp(1.5rem,4vw,5rem)] font-medium transition-colors duration-500 ${activeInd === idx ? 'text-white' : 'text-zinc-700'}`}>
                  {ind.name}
                </span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: activeInd === idx ? 60 : 0 }}
                  className="h-[1px] bg-white block hidden sm:block"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface CaseStudyProps {
  client: string;
  campaign: string;
  audience: string;
  outcome: string;
  delay: number;
  link: string;
  image?: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ client, campaign, audience, outcome, delay, link, image }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    className="group"
  >
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block cursor-pointer"
      data-hover-trigger
    >
      <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden mb-4 sm:mb-5 md:mb-6 rounded-sm">
        <motion.img 
          src={image || `https://picsum.photos/seed/${client}/800/600`}
          alt={client}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Overlay Icon */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/10 backdrop-blur-md p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
      </div>
      
      <div className="flex justify-between items-start mb-2 sm:mb-3">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-medium group-hover:text-white transition-colors">{client}</h4>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-zinc-500 mb-3 sm:mb-4 md:mb-5">{campaign}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-4 md:gap-x-6 text-xs sm:text-sm md:text-base border-t border-zinc-900 pt-3 sm:pt-4 md:pt-5">
        <div>
          <span className="text-zinc-600 block text-xs uppercase tracking-wider mb-1">Audience</span>
          <span className="text-zinc-300">{audience}</span>
        </div>
        <div>
          <span className="text-zinc-600 block text-xs uppercase tracking-wider mb-1">Outcome</span>
          <span className="text-white font-medium">{outcome}</span>
        </div>
      </div>
    </a>
  </motion.div>
);

const TrustSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-zinc-900 bg-zinc-950 overflow-hidden">
      <p className="text-center text-zinc-600 text-xs sm:text-sm md:text-base tracking-widest uppercase mb-8 sm:mb-10 md:mb-12">Trusted By</p>
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-[scroll_40s_linear_infinite] flex whitespace-nowrap hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 sm:gap-16 md:gap-20 lg:gap-24 px-6 sm:px-8 md:px-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['Acme Corp', 'GlobalTech', 'Nebula Inc', 'Stark Ind', 'Wayne Ent', 'Cyberdyne', 'Massive Dynamic'].map((logo) => (
                <span key={logo} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-400 cursor-default">{logo}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

const SocialAndWork: React.FC = () => {
  const cases = [
    {
      client: "VCraft",
      campaign: "Meeting Generation",
      audience: "Head Channel Sales",
      outcome: "50 Meetings",
      link: "https://www.haptaq.com/files/Vcraft.pdf",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop"
    },
    {
      client: "Indeed",
      campaign: "Nomination Generation",
      audience: "Talent Acquisition Head",
      outcome: "250 Nominations",
      link: "https://www.haptaq.com/files/indeed.pdf",
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=2946&auto=format&fit=crop"
    },
    {
      client: "Google",
      campaign: "One On One Meetings",
      audience: "MSME Owners",
      outcome: "100 Meetings",
      link: "https://www.haptaq.com/files/google.pdf",
      image: "https://images.unsplash.com/photo-1591970669426-0143eb662b78?q=80&w=2942&auto=format&fit=crop"
    },
    {
      client: "Times Group",
      campaign: "Audience Generation",
      audience: "Legal Heads",
      outcome: "250 Attendees",
      link: "https://www.haptaq.com/files/toi.pdf",
      image: "https://images.unsplash.com/photo-1752159684779-0639174cdfac?q=80&w=2942&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-zinc-950 z-20 relative">
      <IndustriesSection />
      
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 md:gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 sm:mb-4 md:mb-5">Selected Cases</h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-500 max-w-2xl font-light leading-relaxed">
              Real results from our strategic meeting generation campaigns. Click to view full case studies.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-x-16 lg:gap-y-16 xl:gap-y-20">
          {cases.map((study, index) => (
            <CaseStudyCard 
              key={index}
              {...study}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      <TrustSection />
    </div>
  );
};

export default SocialAndWork;