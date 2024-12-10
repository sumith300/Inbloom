import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-custom-purple">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-secondary/10 rounded-full blur-3xl" />
        
        {/* Gradient Lines */}
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(45deg, transparent 45%, rgba(232, 76, 164, 0.1) 49%, rgba(232, 76, 164, 0.1) 51%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, rgba(232, 76, 164, 0.1) 49%, rgba(232, 76, 164, 0.1) 51%, transparent 55%)
          `,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                <span className="text-secondary">In</span>Bloom
                <span className="block text-2xl md:text-3xl mt-4 text-white/90 font-normal">
                  Annual Cultural Festival 2025
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary to-secondary-light rounded-full" />
            </div>
            
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              Join us for an extraordinary celebration of art, culture, and talent at Christ University's biggest cultural extravaganza of 2025.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <Link
                to="/events"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-secondary hover:bg-secondary-light text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-secondary/25"
                >
                  Explore Events
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full font-semibold transition-all duration-300 border border-white/20"
                onClick={() => {
                  const aboutSection = document.querySelector('#about-section');
                  aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Countdown Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:justify-self-end w-full max-w-lg"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
              <h2 className="text-2xl font-display text-center text-white mb-8">
                Event Starts In
              </h2>
              <CountdownTimer targetDate="2025-01-23" />
              <div className="mt-8 text-center">
                <p className="text-white/90 font-medium">
                  23rd January, 2025 • 9:00 AM
                </p>
                <p className="text-white/70 text-sm mt-2">
                  Christ University, Bangalore
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Event Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: '15+', label: 'Events' },
            { number: '1000+', label: 'Participants' },
            { number: '50+', label: 'Colleges' },
            { number: '5L+', label: 'Prize Pool' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-secondary/30 transition-colors duration-300">
              <h3 className="text-3xl font-bold text-secondary">{stat.number}</h3>
              <p className="text-white/80 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent" />
    </div>
  );
};

export default Banner; 