import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, User, Code } from 'lucide-react';

const SecretSpace = ({ variant = 'linkedin' }) => {
  const isLinkedIn = variant === 'linkedin';

  const linkUrl = isLinkedIn 
    ? "https://www.linkedin.com/in/siva-palaparthi-5927b8302/" 
    : "https://vpe-frontend.vercel.app/";

  const title = isLinkedIn ? "Siva Palaparthi" : "VPE App";
  const subtitle = isLinkedIn ? "LinkedIn Profile" : "VPE Frontend App";
  const btnText = isLinkedIn ? "Connect" : "Launch App";

  // Dynamic Theme Colors
  const theme = {
    bgGradient: isLinkedIn 
      ? "bg-[radial-gradient(circle_at_center,_#330000_0%,_#000000_100%)]"
      : "bg-[radial-gradient(circle_at_center,_#3b0764_0%,_#000000_100%)]",
    lineGradient: isLinkedIn
      ? "bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,0,0,0.1)_2px,rgba(255,0,0,0.1)_4px)]"
      : "bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(168,85,247,0.1)_2px,rgba(168,85,247,0.1)_4px)]",
    titleText: isLinkedIn ? "text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" : "text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]",
    cardBorder: isLinkedIn ? "border-red-500/20 hover:border-red-500/50" : "border-purple-500/20 hover:border-purple-500/50",
    cardShadow: isLinkedIn ? "shadow-[0_0_50px_rgba(220,38,38,0.15)] hover:shadow-[0_0_80px_rgba(220,38,38,0.3)]" : "shadow-[0_0_50px_rgba(168,85,247,0.15)] hover:shadow-[0_0_80px_rgba(168,85,247,0.3)]",
    cardHoverBg: isLinkedIn ? "from-red-500/5" : "from-purple-500/5",
    iconBg: isLinkedIn ? "bg-red-950/40 border-red-500/30 group-hover:border-red-500/60" : "bg-purple-950/40 border-purple-500/30 group-hover:border-purple-500/60",
    iconColor: isLinkedIn ? "text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" : "text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]",
    subtitleText: isLinkedIn ? "text-red-400" : "text-purple-400",
    btnTheme: isLinkedIn 
      ? "bg-red-500/10 border-red-500/30 group-hover:bg-red-500/20 group-hover:border-red-500/50 text-red-400"
      : "bg-purple-500/10 border-purple-500/30 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 text-purple-400"
  };

  return (
    <div className="absolute inset-0 z-[100] w-full min-h-screen flex flex-col items-center justify-center p-6 bg-zinc-950 overflow-hidden">
      <div className={`absolute inset-0 ${theme.bgGradient} opacity-80 transition-colors duration-1000`} />
      
      {/* Glitchy background effect */}
      <div className={`absolute inset-0 ${theme.lineGradient} opacity-20 pointer-events-none mix-blend-screen transition-colors duration-1000`} />
      
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
          className={`text-3xl md:text-5xl font-black mb-12 tracking-[0.3em] uppercase ${theme.titleText}`}
        >
          Classified Space
        </motion.h1>
        
        <a 
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`glass-panel p-8 rounded-3xl w-full max-w-md bg-black/60 backdrop-blur-2xl hover:bg-black/80 transition-all duration-500 border group flex flex-col items-center text-center relative overflow-hidden ${theme.cardBorder} ${theme.cardShadow}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${theme.cardHoverBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          <div className="relative z-10 flex flex-col items-center w-full">
            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 border group-hover:scale-110 transition-all duration-500 shadow-inner ${theme.iconBg}`}>
              {isLinkedIn ? (
                <User className={`w-12 h-12 ${theme.iconColor}`} />
              ) : (
                <Code className={`w-12 h-12 ${theme.iconColor}`} />
              )}
            </div>
            
            <h3 className="text-white font-black text-2xl md:text-3xl mb-2 tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] uppercase">
              {title}
            </h3>
            
            <p className={`text-sm mb-8 font-medium tracking-wide uppercase ${theme.subtitleText}`}>
              {subtitle}
            </p>
            
            <div className={`w-full py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors border shadow-lg ${theme.btnTheme}`}>
              <span className="text-sm font-bold tracking-widest uppercase">{btnText}</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default SecretSpace;
