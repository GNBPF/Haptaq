import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div id="contact" className="bg-zinc-950 relative z-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Positioning Statement */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 flex justify-center border-b border-zinc-900 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div className="max-w-5xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }
            }}
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-500 mb-2 sm:mb-3 leading-relaxed">Haptaq is not a lead factory.</motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-500 mb-4 sm:mb-5 md:mb-6 leading-relaxed">Not an agency.</motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-medium leading-tight">We operate as a strategic growth partner.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-8 sm:mb-12 md:mb-16 lg:mb-20 tracking-tight leading-tight">Let's Discuss Your<br className="hidden sm:block" />Growth Objective.</h2>
        
        {formState === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-64 flex flex-col items-center justify-center border border-zinc-800 bg-zinc-900/20"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black mb-4">
              <Check className="w-6 h-6" />
            </div>
            <p className="text-xl font-medium">Request Received.</p>
            <p className="text-zinc-500 mt-2">We will be in touch shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 md:space-y-12">
            <div className="group relative">
              <input 
                type="text" 
                required 
                className="w-full bg-transparent border-b border-zinc-800 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl outline-none focus:border-white transition-colors duration-500 peer placeholder-transparent touch-manipulation" 
                placeholder="Full Name"
                id="name"
              />
              <label 
                htmlFor="name"
                className="absolute left-0 top-3 sm:top-4 md:top-5 text-zinc-500 text-base sm:text-lg md:text-xl transition-all duration-300 pointer-events-none peer-focus:-top-5 sm:peer-focus:-top-6 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-zinc-400 peer-not-placeholder-shown:-top-5 sm:peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs sm:peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-zinc-400"
              >
                Full Name
              </label>
            </div>

            <div className="group relative">
              <input 
                type="email" 
                required 
                className="w-full bg-transparent border-b border-zinc-800 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl outline-none focus:border-white transition-colors duration-500 peer placeholder-transparent touch-manipulation" 
                placeholder="Work Email"
                id="email"
              />
               <label 
                htmlFor="email"
                className="absolute left-0 top-3 sm:top-4 md:top-5 text-zinc-500 text-base sm:text-lg md:text-xl transition-all duration-300 pointer-events-none peer-focus:-top-5 sm:peer-focus:-top-6 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-zinc-400 peer-not-placeholder-shown:-top-5 sm:peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs sm:peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-zinc-400"
              >
                Work Email
              </label>
            </div>

            <div className="group relative">
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-zinc-800 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl outline-none focus:border-white transition-colors duration-500 peer placeholder-transparent touch-manipulation" 
                placeholder="Company URL"
                id="company"
              />
              <label 
                htmlFor="company"
                className="absolute left-0 top-3 sm:top-4 md:top-5 text-zinc-500 text-base sm:text-lg md:text-xl transition-all duration-300 pointer-events-none peer-focus:-top-5 sm:peer-focus:-top-6 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-zinc-400 peer-not-placeholder-shown:-top-5 sm:peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs sm:peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-zinc-400"
              >
                Company URL
              </label>
            </div>

            <div className="pt-6 sm:pt-8 md:pt-10">
              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white text-black font-medium text-base sm:text-lg md:text-xl overflow-hidden group w-full sm:w-auto touch-manipulation"
                data-hover-trigger
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {formState === 'submitting' ? 'Processing...' : 'Request Access'}
                  {formState !== 'submitting' && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
                </span>
                <div className="absolute inset-0 bg-zinc-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>
          </form>
        )}

        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-8 sm:pt-10 md:pt-12 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 text-zinc-600 text-xs sm:text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Haptaq. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors touch-manipulation">Privacy</a>
            <a href="#" className="hover:text-white transition-colors touch-manipulation">Terms</a>
            <a href="#" className="hover:text-white transition-colors touch-manipulation">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;