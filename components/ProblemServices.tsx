import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';

const ProblemStatement: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-30% 0px -30% 0px", 
    once: false,
    amount: 0.3
  });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0.2, filter: "blur(4px)" }}
      animate={{ 
        opacity: isInView ? 1 : 0.2, 
        filter: isInView ? "blur(0px)" : "blur(2px)"
      }}
      transition={{ 
        duration: 0.8, 
        delay: isInView ? delay : 0,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="text-4xl md:text-6xl font-medium tracking-tight mb-4 md:mb-6 text-center"
    >
      {text}
    </motion.p>
  );
};

const PillarCard: React.FC<{ title: string; desc: string; icon: React.ReactNode; index: number }> = ({ title, desc, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className="group relative p-6 md:p-8 border-l border-zinc-900 hover:bg-zinc-900/30 transition-colors duration-500 flex flex-col justify-center"
      data-hover-trigger
    >
      <div className="absolute top-0 left-0 w-[1px] h-0 bg-white group-hover:h-full transition-all duration-700 ease-out" />
      <div className="mb-4 text-zinc-500 group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-zinc-500 leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
};

const ProcessStep: React.FC<{ step: any; isActive: boolean }> = ({ step, isActive }) => {
  return (
    <motion.div 
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-12 border-b border-zinc-900 last:border-0"
    >
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-xs font-mono text-zinc-500">0{step.number}</span>
        <h3 className="text-2xl md:text-3xl font-medium">{step.title}</h3>
      </div>
      <motion.p 
        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
        className="text-zinc-400 font-light max-w-md overflow-hidden"
      >
        {step.description}
      </motion.p>
    </motion.div>
  );
};

const ProblemServices: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start start", "end end"]
  });

  // Calculate active step based on scroll progress
  const activeStep = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, 1, 2, 3, 4]);
  const [currentStep, setCurrentStep] = React.useState(0);

  // Subscribe to transform to update state for rendering
  React.useEffect(() => {
    return activeStep.on("change", (latest) => {
      setCurrentStep(Math.round(latest));
    });
  }, [activeStep]);

  const steps = [
    { title: "Business Understanding", description: "We deep dive into your ICP, value proposition, and market positioning.", number: "1" },
    { title: "Market Mapping", description: "Identifying high-probability targets using proprietary data enrichment.", number: "2" },
    { title: "Outreach & Qualification", description: "Multi-channel orchestration to start conversations, not just send emails.", number: "3" },
    { title: "Meetings", description: "Booking qualified meetings directly into your sales team's calendar.", number: "4" },
    { title: "Scale & Refine", description: "Continuous feedback loops to optimize conversion rates and deal quality.", number: "5" },
  ];

  return (
    <div className="bg-zinc-950 relative z-20">
      {/* Combined Section - Single Screen Height */}
      <section className="h-screen flex flex-col px-6 md:px-12 lg:px-24">
        {/* Problem Section */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-4xl w-full">
            <ProblemStatement text="Your product is strong." delay={0} />
            <ProblemStatement text="Your market exists." delay={0.1} />
            <ProblemStatement text="Access is the bottleneck." delay={0.2} />
          </div>
        </div>

        {/* Pillars Section */}
        <div className="flex-1 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-3 gap-0">
            <PillarCard 
              index={0}
              title="Strategic Access" 
              desc="We bypass gatekeepers to place your value proposition directly in front of decision-makers."
              icon={<Target className="w-8 h-8" strokeWidth={1} />}
            />
            <PillarCard 
              index={1}
              title="Meeting Generation" 
              desc="Consistent flow of qualified opportunities. We focus on intent, not just volume."
              icon={<Users className="w-8 h-8" strokeWidth={1} />}
            />
            <PillarCard 
              index={2}
              title="Growth Enablement" 
              desc="Providing the insights and data infrastructure needed to scale your outbound revenue engine."
              icon={<TrendingUp className="w-8 h-8" strokeWidth={1} />}
            />
          </div>
        </div>
      </section>

      {/* Scroll-Driven Process */}
      <section ref={processRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden">
          
          {/* Left: Title & Progress */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-zinc-950 z-10 border-r border-zinc-900/50">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-medium mb-8"
            >
              The Protocol
            </motion.h2>
            <div className="relative h-1 w-full bg-zinc-900 rounded-full overflow-hidden max-w-xs">
               <motion.div 
                 className="absolute top-0 left-0 h-full bg-white"
                 style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
               />
            </div>
            <p className="mt-4 text-sm text-zinc-500 font-mono">STEP 0{currentStep + 1} / 05</p>
          </div>

          {/* Right: Scrolling Steps */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 lg:pr-24">
             {steps.map((step, idx) => (
               <ProcessStep key={idx} step={step} isActive={currentStep === idx} />
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProblemServices;