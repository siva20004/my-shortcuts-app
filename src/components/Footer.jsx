import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="glass-panel px-6 py-3 rounded-2xl flex flex-col items-center space-y-1">
          <p className="text-xs font-medium tracking-widest font-['Noto_Sans_JP']">私のデジタルポータル</p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider">
            Built with <span className="text-japan-red">❤️</span> and 日本の美学
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">
            © 2026 Siva Palaparthi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
