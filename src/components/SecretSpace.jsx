import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, User } from 'lucide-react';

const SecretSpace = () => {
  return (
    <div className="absolute inset-0 z-[100] w-full min-h-screen flex flex-col items-center justify-center p-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#330000_0%,_#000000_100%)] opacity-80" />
      
      {/* Glitchy background effect */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,0,0,0.1)_2px,rgba(255,0,0,0.1)_4px)] opacity-20 pointer-events-none mix-blend-screen" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl text-red-600 font-black mb-12 tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]"
        >
          Classified Space
        </motion.h1>
        
        <a 
          href="https://www.linkedin.com/in/siva-palaparthi-5927b8302/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel p-8 rounded-3xl w-full max-w-md bg-black/60 backdrop-blur-2xl hover:bg-black/80 transition-all duration-500 shadow-[0_0_50px_rgba(220,38,38,0.15)] hover:shadow-[0_0_80px_rgba(220,38,38,0.3)] border border-red-500/20 hover:border-red-500/50 group flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="w-24 h-24 rounded-3xl bg-red-950/40 flex items-center justify-center mb-6 border border-red-500/30 group-hover:border-red-500/60 group-hover:scale-110 transition-all duration-500 shadow-inner">
              <User className="w-12 h-12 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
            </div>
            
            <h3 className="text-white font-black text-2xl md:text-3xl mb-2 tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] uppercase">
              Siva Palaparthi
            </h3>
            
            <p className="text-red-400 text-sm mb-8 font-medium tracking-wide uppercase">
              LinkedIn Profile
            </p>
            
            <div className="w-full py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors border shadow-lg bg-red-500/10 border-red-500/30 group-hover:bg-red-500/20 group-hover:border-red-500/50">
              <span className="text-sm font-bold text-red-400 tracking-widest uppercase">Connect</span>
              <ExternalLink className="w-4 h-4 text-red-400" />
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default SecretSpace;
