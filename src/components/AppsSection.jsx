import React from 'react';
import { motion } from 'framer-motion';
import SolarSystem from './SolarSystem';
import RacingBackground from './RacingBackground';
import { ExternalLink, Database, Server, Box } from 'lucide-react';

const apps = [
  {
    name: "Capstone Project",
    url: "https://self-diagnosing-ai-pipeline-orchest.vercel.app/",
    description: "AI Pipeline Orchestrator",
    icon: <Box className="w-10 h-10 mb-4" />
  },
  {
    name: "Render",
    url: "https://dashboard.render.com/web/srv-datm8qfavr4c73e4aau0/logs?r=1h&t=app",
    description: "App Logs & Dashboard",
    icon: <Server className="w-10 h-10 mb-4" />
  },
  {
    name: "Neon",
    url: "https://console.neon.tech/app/projects/soft-water-30393974/branches/br-morning-water-b5xm1o91",
    description: "Database Console",
    icon: <Database className="w-10 h-10 mb-4" />
  }
];

const AppsSection = ({ appsTheme }) => {
  const isRacing = appsTheme === 'racing';

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 text-white overflow-hidden mt-20">
      
      {/* Keep both backgrounds mounted and just toggle opacity to prevent video reloading */}
      <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isRacing ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none -z-10'}`}>
        <RacingBackground />
      </div>
      
      <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${!isRacing ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none -z-10'}`}>
        <SolarSystem />
      </div>
      
      <div className="relative z-10 w-full max-w-5xl py-20">
        <motion.h2 
          key={appsTheme}
          initial={{ opacity: 0, scale: isRacing ? 0.8 : 1, y: isRacing ? 0 : -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: isRacing ? "spring" : "tween", stiffness: 200, duration: 0.5 }}
          className={`text-4xl md:text-6xl font-bold text-center mb-16 tracking-widest bg-clip-text text-transparent ${
            isRacing ? 'bg-gradient-to-r from-[#00529b] via-white to-[#00529b] italic' : 'bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300'
          }`}
        >
          {isRacing ? 'HIGH SPEED SERVICES' : 'APPS & SERVICES'}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.a
              key={app.name + appsTheme}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: isRacing ? 100 : 50, skewX: isRacing ? -10 : 0 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{ 
                delay: isRacing ? index * 0.1 : index * 0.2 + 0.5, 
                type: isRacing ? "spring" : "tween",
                stiffness: isRacing ? 300 : 100
              }}
              whileHover={{ 
                scale: isRacing ? 1.1 : 1.05, 
                y: isRacing ? 0 : -10,
                skewX: isRacing ? -5 : 0
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden group p-8 transition-all duration-500 flex flex-col items-center text-center ${
                isRacing 
                  ? 'bg-zinc-900 border-[3px] border-[#0066cc] rounded-xl shadow-[0_0_30px_rgba(0,102,204,0.6)] hover:shadow-[0_0_50px_rgba(0,102,204,0.9)]' 
                  : 'glass-panel border border-white/20 bg-black/40 backdrop-blur-xl hover:bg-black/60 rounded-3xl shadow-2xl'
              }`}
            >
              {isRacing && (
                <div className="absolute inset-0 opacity-100 bg-[repeating-linear-gradient(45deg,#111_0px,#111_15px,#222_15px,#222_30px)] z-0" />
              )}
              
              {!isRacing && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center h-full w-full">
                <motion.div
                  whileHover={isRacing ? { x: [0, -5, 5, -5, 5, 0], transition: { duration: 0.3 } } : { rotate: 360, scale: 1.2, transition: { duration: 0.8, type: "spring" } }}
                  className={isRacing ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : (index === 0 ? 'text-blue-400' : index === 1 ? 'text-purple-400' : 'text-green-400')}
                >
                  {app.icon}
                </motion.div>
                
                <h3 className={`text-2xl font-bold mb-3 ${isRacing ? 'text-[#0066cc] italic tracking-widest uppercase drop-shadow-[0_0_5px_rgba(0,102,204,0.8)]' : 'text-white'}`}>
                  {app.name}
                </h3>
                
                <p className={`text-sm mb-8 ${isRacing ? 'text-gray-400 font-medium' : 'text-slate-300'}`}>
                  {app.description}
                </p>
                
                <div className={`mt-auto px-8 py-2.5 flex items-center justify-center space-x-2 transition-all duration-300 w-full max-w-[180px] shadow-lg ${
                  isRacing 
                    ? 'bg-[#0066cc] text-white rounded-md hover:bg-[#0052a3] font-bold shadow-[0_0_15px_rgba(0,102,204,0.5)]'
                    : 'rounded-full bg-white/10 border border-white/20 group-hover:bg-white/20 text-white'
                }`}>
                  <span className="text-sm font-bold">Open App</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsSection;
