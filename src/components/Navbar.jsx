import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-2xl"
    >
      <div className="glass-panel rounded-2xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-japan-red flex items-center justify-center">
            <span className="text-[10px] text-white font-bold leading-none select-none">ポ</span>
          </div>
          <span className="font-semibold text-sm tracking-widest hidden sm:block">PORTAL</span>
        </div>
        
        <div className="flex items-center space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-japan-red transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-japan-red transition-colors duration-200 hidden sm:block">Shortcuts</a>
          <a href="#" className="hover:text-japan-red transition-colors duration-200 hidden sm:block">About</a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
