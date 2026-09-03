import React, { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        inputRef.current?.blur();
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchQuery]);

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="w-full max-w-md relative group"
    >
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search size={18} className="text-slate-400 group-focus-within:text-japan-red transition-colors" />
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search shortcuts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full glass-panel bg-white/20 dark:bg-slate-900/40 rounded-2xl py-3 pl-12 pr-16 text-sm placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-japan-red/50 transition-all duration-300 shadow-lg"
      />
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <div className="hidden sm:flex items-center space-x-1 text-[10px] text-slate-400 bg-black/5 dark:bg-white/10 px-2 py-1 rounded-md border border-black/5 dark:border-white/10">
          <span>Ctrl</span>
          <span>+</span>
          <span>K</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;
