import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const ShortcutCard = ({ shortcut }) => {
  const [isClicked, setIsClicked] = useState(false);
  const Icon = LucideIcons[shortcut.iconName] || LucideIcons.Globe;

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    
    // Simulate Apple/macOS style app open transition
    setTimeout(() => {
      window.open(shortcut.url, '_blank', 'noopener,noreferrer');
      setIsClicked(false);
    }, 450);
  };

  return (
    <div className="relative h-full w-full">
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 rounded-2xl bg-white/30 dark:bg-white/10 blur-xl"
          />
        )}
      </AnimatePresence>
      
      <motion.a
        href={shortcut.url}
        onClick={handleClick}
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className={`relative z-10 block h-full p-5 rounded-2xl glass-panel group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:border-white/40 ${
          isClicked ? 'bg-white/60 dark:bg-slate-800/80 shadow-[0_0_40px_rgba(255,255,255,0.3)] border-white/60' : ''
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-white/40 to-white/10 dark:from-white/20 dark:to-transparent border border-white/20 shadow-sm group-hover:shadow-md transition-shadow">
            <Icon size={24} className="text-slate-800 dark:text-slate-100 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <ArrowUpRight size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-japan-red" />
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg tracking-tight mb-1">{shortcut.name}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 line-clamp-1">{shortcut.description}</p>
          <div className="inline-block px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 text-[10px] font-medium tracking-widest text-slate-500 dark:text-slate-400 font-['Noto_Sans_JP']">
            {shortcut.japaneseLabel}
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default ShortcutCard;
