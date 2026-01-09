import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) setFormState('idle');
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 text-zinc-500 hover:text-white transition-colors p-2 z-10 touch-manipulation"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 sm:mb-3">Let's Talk Growth.</h3>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light">Direct access to our strategy team.</p>
                </div>

                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-64 flex flex-col items-center justify-center bg-white/5 rounded-xl border border-white/5"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
                      <Check className="w-6 h-6" />
                    </div>
                    <p className="text-xl font-medium">Request Received</p>
                    <p className="text-zinc-500 mt-2 text-sm">We'll be in touch shortly.</p>
                    <button 
                      onClick={onClose}
                      className="mt-6 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="group">
                        <input 
                          type="text" 
                          required 
                          placeholder="Full Name"
                          className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-950/80 transition-all touch-manipulation"
                        />
                      </div>
                      <div className="group">
                        <input 
                          type="email" 
                          required 
                          placeholder="Work Email"
                          className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-950/80 transition-all touch-manipulation"
                        />
                      </div>
                      <div className="group">
                        <input 
                          type="text" 
                          placeholder="Company URL"
                          className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-950/80 transition-all touch-manipulation"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full relative group overflow-hidden bg-white text-black font-medium py-3 sm:py-3.5 md:py-4 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base transition-transform active:scale-[0.98] touch-manipulation"
                      data-hover-trigger
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {formState === 'submitting' ? 'Processing...' : 'Start Conversation'}
                        {formState !== 'submitting' && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />}
                      </span>
                      <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </button>
                  </form>
                )}
              </div>
              
              {/* Glass Reflection Effect */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;