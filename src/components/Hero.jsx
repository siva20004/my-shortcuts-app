import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center mt-12 mb-16 space-y-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-2 font-['Noto_Sans_JP']">
          私のポータル
        </h1>
        <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-slate-600 dark:text-slate-300 mb-6">
          MY DIGITAL PORTAL
        </h2>
        <div className="w-12 h-1 bg-japan-red mx-auto rounded-full mb-6"></div>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-['Noto_Sans_JP'] tracking-widest">
          毎日使うサイトを、ひとつの場所へ。
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
