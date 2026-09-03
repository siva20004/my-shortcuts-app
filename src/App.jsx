import React, { useState, useEffect } from 'react';
import { shortcuts } from './data/shortcuts';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SakuraAnimation from './components/SakuraAnimation';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Apply theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (loading) {
    return <LoadingScreen theme={theme} />;
  }

  // Filter shortcuts
  const filteredShortcuts = shortcuts.filter(shortcut => 
    shortcut.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shortcut.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shortcut.japaneseLabel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group by category
  const categories = [...new Set(filteredShortcuts.map(s => s.category))];

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-500 overflow-x-hidden">
      {/* Background Image & Overlay */}
      <div className="fixed inset-0 z-[-2]">
        <img 
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop" 
          alt="Japan Background" 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-slate-900/70 backdrop-blur-sm' 
            : 'bg-white/50 backdrop-blur-sm'
        }`}></div>
      </div>

      <SakuraAnimation theme={theme} />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-grow container mx-auto px-4 pt-28 pb-12 flex flex-col items-center">
          <Hero />
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <div className="w-full max-w-5xl mt-12 space-y-12">
            {categories.map(category => (
              <CategorySection 
                key={category} 
                category={category} 
                shortcuts={filteredShortcuts.filter(s => s.category === category)} 
              />
            ))}
            
            {filteredShortcuts.length === 0 && (
              <div className="text-center py-20 text-slate-500 dark:text-slate-400">
                <p>No shortcuts found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
