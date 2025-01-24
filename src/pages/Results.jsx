import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Results = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [collegeResults, setCollegeResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const timestamp = new Date().getTime();
        // Using GitHub's API to fetch the raw content
        const response = await fetch(
          'https://api.github.com/repos/shreyjain14/inbloomData/contents/results.json',
          {
            headers: {
              'Accept': 'application/vnd.github.v3.raw'
            }
          }
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched new data:', data); // Debug log
        setCollegeResults(data);
      } catch (error) {
        console.error("Detailed error:", error);
        setError("Unable to fetch results. Please check your internet connection.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // Refresh every 10 seconds
    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary-gradient flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary-gradient flex items-center justify-center">
        <div className="text-white text-xl">Error: {error}</div>
      </div>
    );
  }

  // Calculate college statistics and total prizes
  const collegeStats = collegeResults.map(college => {
    const stats = college.results.reduce(
      (acc, result) => {
        if (result.position === 1) acc.first++;
        if (result.position === 2) acc.second++;
        if (result.position === 3) acc.third++;
        return acc;
      },
      { first: 0, second: 0, third: 0 }
    );
    
    return {
      ...college,
      stats,
      totalPrizes: stats.first + stats.second + stats.third
    };
  }).sort((a, b) => b.totalPrizes - a.totalPrizes); // Sort by total prizes won

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary-gradient pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
      <div className="fixed inset-0 z-0 bg-primary/95">
        {/* Geometric Grid - Optimized for iOS */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
        
        {/* Animated Gradient Circles - Adjusted for iOS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl mix-blend-normal animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full filter blur-3xl mix-blend-normal animate-pulse delay-1000"></div>
        </div>
        
        {/* Diagonal Lines Pattern - iOS Compatible */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 45%, rgba(232,76,164,0.2) 49%, rgba(232,76,164,0.2) 51%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, rgba(232,76,164,0.2) 49%, rgba(232,76,164,0.2) 51%, transparent 55%)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Dotted Overlay - Enhanced for iOS */}
        <div className="absolute inset-0 mix-blend-overlay opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-white mb-4 sm:mb-6 tracking-tight">
              Event Results
            </h1>
            <p className="text-base sm:text-lg text-gray-300/90 max-w-2xl mx-auto font-light">
              Comprehensive performance statistics showcasing collegiate achievements across all events
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid gap-4 sm:gap-6">
            {collegeStats.map((college, index) => (
              <motion.div
                key={college.collegeName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg shadow-black/5"
              >
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <h2 className="text-2xl sm:text-3xl font-display text-white text-center sm:text-left tracking-tight">
                    {college.collegeName}
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                    <div className="flex items-center gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                      <motion.div 
                        className="flex flex-col items-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 text-yellow-300 flex items-center justify-center font-bold text-xl sm:text-2xl shadow-lg shadow-yellow-500/10">
                          {college.stats.first}
                        </span>
                        <span className="text-xs sm:text-sm text-yellow-300 mt-2 font-medium">1st</span>
                      </motion.div>
                      <motion.div 
                        className="flex flex-col items-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gray-300/20 to-gray-400/20 text-gray-200 flex items-center justify-center font-bold text-xl sm:text-2xl shadow-lg shadow-gray-400/10">
                          {college.stats.second}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-200 mt-2 font-medium">2nd</span>
                      </motion.div>
                      <motion.div 
                        className="flex flex-col items-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-700/20 text-amber-500 flex items-center justify-center font-bold text-xl sm:text-2xl shadow-lg shadow-amber-700/10">
                          {college.stats.third}
                        </span>
                        <span className="text-xs sm:text-sm text-amber-500 mt-2 font-medium">3rd</span>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="border-white/10 pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex flex-col items-center bg-gradient-to-br from-purple-500/30 via-secondary/30 to-pink-500/30 p-4 rounded-xl backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-secondary/20 transition-all duration-300">
                        <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-secondary via-secondary-light to-secondary bg-clip-text text-transparent animate-pulse">{college.totalPrizes}</span>
                        <span className="text-sm sm:text-base text-gray-200 font-medium mt-2 tracking-wider uppercase">Total Prizes</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;