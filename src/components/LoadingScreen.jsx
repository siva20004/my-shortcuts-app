import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ theme }) => {
  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-japan-red mb-6"
        />
        <motion.h1 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-medium tracking-wider"
        >
          ようこそ
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
