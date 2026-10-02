import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder } from 'lucide-react';

const Footer = ({ setActiveView }) => {
  const [isActive, setIsActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Handle the 10-second active window
  useEffect(() => {
    let timeout;
    if (isActive) {
      timeout = setTimeout(() => {
        setIsActive(false);
        setClickCount(0);
      }, 10000);
    } else {
      setClickCount(0);
    }
    return () => clearTimeout(timeout);
  }, [isActive]);

  const toggleLight = (e) => {
    e.stopPropagation();
    setIsActive(prev => !prev);
  };

  const handleTextClick = () => {
    if (!isActive) return; // Do nothing if the light is red

    const newCount = clickCount + 1;
    if (newCount >= 3) {
      if (setActiveView) setActiveView('secret');
      setIsActive(false); // Reset state
      setClickCount(0);
    } else {
      setClickCount(newCount);
    }
  };

  return (
    <footer id="about" className="w-full py-6 mt-auto flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div 
          onClick={handleTextClick}
          className="glass-panel px-6 py-3 rounded-2xl flex flex-col items-center space-y-1 cursor-pointer hover:bg-white/5 transition-colors relative"
        >
          <div className="flex items-center space-x-2">
            <p className="text-xs font-medium tracking-widest font-['Noto_Sans_JP'] select-none text-white">私のデジタルポータル</p>
            {/* Blinking Light Button */}
            <div 
              onClick={toggleLight}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 flex-shrink-0 ${
                !isActive 
                  ? 'bg-red-500 shadow-[0_0_8px_#ef4444] animate-[pulse_1s_ease-in-out_infinite]' 
                  : 'bg-green-500 shadow-[0_0_8px_#22c55e] animate-[pulse_1s_ease-in-out_infinite]'
              }`}
            />
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider select-none">
            Built with <span className="text-japan-red">❤️</span> and 日本の美学
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 select-none">
            © 2026 Siva Palaparthi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
