import React from 'react';
import { motion } from 'framer-motion';
import ShortcutCard from './ShortcutCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const CategorySection = ({ category, shortcuts }) => {
  if (shortcuts.length === 0) return null;

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="w-full"
    >
      <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-6">
        <h2 className="text-xl font-semibold tracking-wide">{category}</h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-black/10 to-transparent dark:from-white/10"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {shortcuts.map(shortcut => (
          <motion.div key={shortcut.name} variants={itemVariants}>
            <ShortcutCard shortcut={shortcut} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CategorySection;
