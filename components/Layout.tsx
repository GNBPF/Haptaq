import React, { useState, createContext, useContext } from 'react';
import CustomCursor from './ui/CustomCursor';
import ContactModal from './ui/ContactModal';
import { motion } from 'framer-motion';

// Context definition
interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

const Navbar: React.FC = () => {
  const { openModal } = useModal();
  
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white"
    >
      <div className="cursor-default">
        <img src="/logo.png" alt="HAPTAQ" className="h-4 md:h-6 w-auto" />
      </div>
      <button 
        onClick={openModal}
        className="text-white text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4"
        data-hover-trigger
      >
        Contact
      </button>
    </motion.nav>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setModalOpen(true), closeModal: () => setModalOpen(false) }}>
      <main className="bg-zinc-950 min-h-screen text-white selection:bg-white selection:text-black">
        <CustomCursor />
        <Navbar />
        {/* Initial Logo Animation overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center pointer-events-none"
        >
          <span className="text-2xl font-bold tracking-tighter animate-pulse">HAPTAQ</span>
        </motion.div>
        
        {children}
        
        <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </main>
    </ModalContext.Provider>
  );
};

export default Layout;