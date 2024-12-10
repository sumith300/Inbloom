import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days || 0 },
    { label: 'Hours', value: timeLeft.hours || 0 },
    { label: 'Minutes', value: timeLeft.minutes || 0 },
    { label: 'Seconds', value: timeLeft.seconds || 0 }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="relative group">
            <div className="bg-primary/40 backdrop-blur-sm rounded-lg p-4 border border-secondary/20 transform transition-transform group-hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-secondary">
                {String(block.value).padStart(2, '0')}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent rounded-lg pointer-events-none"></div>
            </div>
            <p className="text-sm text-gray-300 mt-2 font-medium">{block.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer; 