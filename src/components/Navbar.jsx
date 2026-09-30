import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme, activeView, setActiveView, appsTheme, setAppsTheme }) => {
  const handleNavClick = (e, targetId, view) => {
    e.preventDefault();
    if (view && setActiveView) {
      setActiveView(view);
    }
    
    // Allow state to update before scrolling if switching views
    setTimeout(() => {
      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);
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
            onClick={(e) => handleNavClick(e, 'top', 'home')}
          >
            <div className="w-6 h-6 rounded-full bg-japan-red flex items-center justify-center">
              <span className="text-[10px] text-white font-bold leading-none select-none">ss</span>
            </div>
            <span className="font-semibold text-sm tracking-widest hidden sm:block">PORTAL</span>
          </div>
          
          {/* Middle: Links - Absolute centered */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center space-x-3 text-sm font-medium hidden sm:flex">
            <a href="#" onClick={(e) => handleNavClick(e, 'top', 'home')} className={`glass-panel rounded-2xl px-5 py-2.5 transition-all duration-300 ${activeView === 'home' ? 'bg-white/40 dark:bg-white/20' : 'hover:bg-white/40 dark:hover:bg-white/20'}`}>Home</a>
            <a href="#apps" onClick={(e) => handleNavClick(e, 'top', 'apps')} className={`glass-panel rounded-2xl px-5 py-2.5 transition-all duration-300 ${activeView === 'apps' ? 'bg-white/40 dark:bg-white/20' : 'hover:bg-white/40 dark:hover:bg-white/20'}`}>Apps</a>
            <a href="#shortcuts" onClick={(e) => handleNavClick(e, 'shortcuts', 'home')} className="glass-panel rounded-2xl px-5 py-2.5 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300">Shortcuts</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about', 'home')} className="glass-panel rounded-2xl px-5 py-2.5 hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300">About</a>
            
            {activeView === 'apps' && (
              <motion.button 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={() => setAppsTheme(appsTheme === 'solar' ? 'racing' : 'solar')}
                className="relative overflow-hidden flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl transition-all duration-300 cursor-pointer shadow-lg group ml-2"
                style={{ 
                  background: 'linear-gradient(145deg, #2a2a2a, #111111)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.1)'
                }}
              >
                {/* Tyre treads */}
                <div className="absolute inset-0 opacity-20" 
                  style={{ 
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #000 4px, #000 8px)'
                  }} 
                />
                
                {/* Alloy Wheel Rim */}
                <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-gray-300 to-gray-600 border border-gray-400 flex items-center justify-center shadow-inner group-hover:rotate-180 transition-transform duration-700">
                  {/* Caliper / Center cap */}
                  <div className="w-2 h-2 rounded-full bg-red-600 shadow-sm" />
                </div>
                
                <span className="relative z-10 text-white font-bold tracking-wider text-xs">
                  {appsTheme === 'solar' ? 'RACING' : 'SOLAR'}
                </span>
                
                {/* Bugatti Blue Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00529b]" />
              </motion.button>
            )}
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
