import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button 
      onClick={toggleTheme}
      className="relative p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300 ease-out focus:outline-none"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {theme === 'dark' ? (
          <Moon size={18} className="text-slate-200" />
        ) : (
          <Sun size={18} className="text-slate-800" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
