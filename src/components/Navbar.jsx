import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-3xl">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="w-full"
      >
        <div className="relative flex justify-between items-center w-full">
          {/* Left: Logo */}
          <div 
            className="glass-panel rounded-2xl px-5 py-3 flex items-center space-x-2 cursor-pointer transition-transform duration-300 ease-out hover:scale-105" 
            onClick={(e) => handleScroll(e, 'top')}
          >
            <div className="w-6 h-6 rounded-full bg-japan-red flex items-center justify-center">
              <span className="text-[10px] text-white font-bold leading-none select-none">ポ</span>
            </div>
            <span className="font-semibold text-sm tracking-widest hidden sm:block">PORTAL</span>
          </div>
          
          {/* Middle: Links - Absolute centered */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center space-x-3 text-sm font-medium hidden sm:flex">
            <a href="#" onClick={(e) => handleScroll(e, 'top')} className="glass-panel rounded-2xl px-5 py-2.5 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300">Home</a>
            <a href="#shortcuts" onClick={(e) => handleScroll(e, 'shortcuts')} className="glass-panel rounded-2xl px-5 py-2.5 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300">Shortcuts</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="glass-panel rounded-2xl px-5 py-2.5 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300">About</a>
          </div>

          {/* Right: Theme Toggle */}
          <div className="glass-panel rounded-2xl p-2 flex items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
