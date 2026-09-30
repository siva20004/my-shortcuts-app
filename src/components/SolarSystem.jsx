import React, { useMemo, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const SolarSystem = () => {
  const { scrollY } = useScroll();
  
  // Parallax effect
  const scale = useTransform(scrollY, [0, 1000], [1, 2]);
  const yOffset = useTransform(scrollY, [0, 1000], [0, 300]);

  // Use motion values for performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const stars = useMemo(() => {
    return [...Array(250)].map(() => ({
      width: Math.random() * 2.5 + 'px',
      height: Math.random() * 2.5 + 'px',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
      opacity: [Math.random() * 0.2, Math.random() * 0.8 + 0.2, Math.random() * 0.2],
      scale: [1, Math.random() * 1.2 + 1, 1]
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#000000] flex items-center justify-center">
      <motion.div 
        className="relative w-full h-full flex items-center justify-center"
        style={{ scale, y: yOffset }}
      >
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ x: smoothX, y: smoothY }}
        >
          {/* Realistic Sun */}
          <motion.div 
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #fff7b0 20%, #ff8c00 60%, #cc0000 100%)',
            boxShadow: '0 0 120px 40px rgba(255, 140, 0, 0.6), 0 0 200px 80px rgba(255, 69, 0, 0.3)'
          }}
          animate={{ scale: [1, 1.02, 1], rotate: 360 }}
          transition={{ 
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 120, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Earth Orbit */}
        <motion.div 
          className="absolute w-[28rem] h-[28rem] border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Realistic Earth */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              className="w-12 h-12 rounded-full relative"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #4b9ee5 0%, #1e5799 50%, #001f3f 100%)',
                boxShadow: 'inset -8px -8px 12px rgba(0,0,0,0.8), 0 0 20px rgba(75, 158, 229, 0.4)'
              }}
              whileHover={{ scale: 1.2 }}
            >
              {/* Earth Clouds */}
              <div className="absolute inset-0 rounded-full opacity-40 bg-[radial-gradient(ellipse_at_40%_40%,_#ffffff_0%,_transparent_60%)] blur-[1px]"></div>
              
              {/* Moon Orbit */}
              <motion.div 
                className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10 border border-white/5 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                {/* Realistic Moon */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #d4d4d4 0%, #8a8a8a 60%, #222 100%)',
                    boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.8)'
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mars Orbit */}
        <motion.div 
          className="absolute w-[44rem] h-[44rem] border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {/* Realistic Mars */}
          <motion.div 
            className="absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2 w-9 h-9 rounded-full relative"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #ff8a66 0%, #e5533d 50%, #8c2111 100%)',
              boxShadow: 'inset -6px -6px 10px rgba(0,0,0,0.9), 0 0 15px rgba(229, 83, 61, 0.4)'
            }}
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>

        {/* Jupiter Orbit */}
        <motion.div 
          className="absolute w-[62rem] h-[62rem] border border-white/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          {/* Realistic Jupiter */}
          <motion.div 
            className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full relative overflow-hidden"
            style={{
              background: 'repeating-linear-gradient(0deg, #b08d6a 0%, #b08d6a 10%, #d4bda5 10%, #d4bda5 20%, #8c6849 20%, #8c6849 30%, #e6d3c1 30%, #e6d3c1 40%)',
              boxShadow: 'inset -14px -14px 25px rgba(0,0,0,0.9), 0 0 30px rgba(176, 141, 106, 0.2)'
            }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="absolute inset-0 rounded-full shadow-[inset_-25px_-25px_40px_rgba(0,0,0,0.9)]" />
            {/* Great Red Spot */}
            <div className="absolute bottom-8 right-6 w-10 h-6 rounded-full bg-[#8c4a32] opacity-80 blur-[2px]" />
          </motion.div>
        </motion.div>

        {/* Saturn Orbit */}
        <motion.div 
          className="absolute w-[85rem] h-[85rem] border border-white/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        >
          {/* Realistic Saturn */}
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full relative"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #e6dca3 0%, #bca576 50%, #6d5b3d 100%)',
              boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.9)'
            }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Saturn's Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-10 border-4 border-[#c7b791] rounded-full opacity-80 transform -rotate-12 shadow-[0_0_10px_rgba(199,183,145,0.5)] blur-[1px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-14 border-[6px] border-[#a89570] rounded-full opacity-60 transform -rotate-12 blur-[1px]"></div>
          </motion.div>
        </motion.div>

      {/* Stars */}
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: star.width,
              height: star.height,
              top: star.top,
              left: star.left,
            }}
            animate={{ 
              opacity: star.opacity,
              scale: star.scale
            }}
            transition={{ 
              duration: star.duration, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: star.delay
            }}
          />
        ))}
        </motion.div>
      </motion.div>
      
      {/* Cosmic Deep Space Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.15)_0%,_rgba(0,0,0,0.8)_60%,_#000000_100%)] z-[-1]" />
    </div>
  );
};

export default SolarSystem;
