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
    <div id="contact" className="bg-zinc-950 relative z-20 pb-24">
      {/* Positioning Statement */}
      <section className="py-32 px-6 flex justify-center border-b border-zinc-900 mb-24">
        <div className="max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }
            }}
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-2xl md:text-4xl text-zinc-500 mb-2">Haptaq is not a lead factory.</motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-2xl md:text-4xl text-zinc-500 mb-6">Not an agency.</motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl md:text-5xl text-white font-medium">We operate as a strategic growth partner.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight">Let's Discuss Your<br />Growth Objective.</h2>
        
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
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="group relative">
              <input 
                type="text" 
                required 
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl outline-none focus:border-white transition-colors duration-500 peer placeholder-transparent" 
                placeholder="Full Name"
                id="name"
              />
              <label 
                htmlFor="name"
                className="absolute left-0 top-4 text-zinc-500 text-xl transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-focus:text-zinc-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-zinc-400"
              >
                Full Name
              </label>
            </div>

            <div className="group relative">
              <input 
                type="email" 
                required 
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl outline-none focus:border-white transition-colors duration-500 peer placeholder-transparent" 
                placeholder="Work Email"
                id="email"
              />
               <label 
                htmlFor="email"
                className="absolute left-0 top-4 text-zinc-500 text-xl transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-focus:text-zinc-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-zinc-400"
              >
                Work Email
              </label>
            </div>

            <div className="group relative">
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl outline-none focus:border-white transition-colors duration-500 peer placeholder-transparent" 
                placeholder="Company URL"
                id="company"
              />
              <label 
                htmlFor="company"
                className="absolute left-0 top-4 text-zinc-500 text-xl transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-focus:text-zinc-400 peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-zinc-400"
              >
                Company URL
              </label>
            </div>

            <div className="pt-8">
              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="relative px-12 py-5 bg-white text-black font-medium text-lg overflow-hidden group w-full md:w-auto"
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

        <div className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between text-zinc-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Haptaq. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;