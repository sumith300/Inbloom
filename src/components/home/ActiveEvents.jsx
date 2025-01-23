import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { events } from '../../utils/constants/event/events';

const ActiveEvents = () => {
  const [activeEvents, setActiveEvents] = useState([]);

  const getEventStatus = (eventDate, eventTime) => {
    const today = new Date();
    const [startTime] = eventTime.split('-');
    const eventDateTime = new Date(
      eventDate.replace('th', '').replace('st', '').replace('nd', '').replace('rd', '') + ', 2025 ' + startTime
    );
    
    const eventEndTime = new Date(eventDateTime.getTime() + (3 * 60 * 60 * 1000));
    
    if (today > eventEndTime) return 'past';
    if (today >= eventDateTime && today <= eventEndTime) return 'ongoing';
    return 'upcoming';
  };

  useEffect(() => {
    const updateActiveEvents = () => {
      const currentEvents = events
        .filter(event => {
          const status = getEventStatus(event.date, event.time);
          return status === 'ongoing' || status === 'upcoming';
        })
        .sort((a, b) => {
          const dateA = new Date(a.date.replace('th', '').replace('st', '').replace('nd', '').replace('rd', '') + ', 2025 ' + a.time.split('-')[0]);
          const dateB = new Date(b.date.replace('th', '').replace('st', '').replace('nd', '').replace('rd', '') + ', 2025 ' + b.time.split('-')[0]);
          return dateA - dateB;
        })
        .slice(0, 3); // Show only next 3 events

      setActiveEvents(currentEvents);
    };

    updateActiveEvents();
    const interval = setInterval(updateActiveEvents, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
      <h2 className="text-2xl font-display text-center text-white mb-8">
        Active & Upcoming Events
      </h2>
      
      <div className="space-y-4">
        {activeEvents.length > 0 ? (
          activeEvents.map((event) => {
            const status = getEventStatus(event.date, event.time);
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-secondary/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        status === 'ongoing' 
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                      <span className="text-secondary text-sm">{event.category}</span>
                    </div>
                    <h3 className="text-white font-semibold group-hover:text-secondary transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-white/70 mt-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date} • {event.time}
                    </div>
                  </div>
                  <Link 
                    to="/events" 
                    className="px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-full text-sm font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="text-center text-white/70 py-8">
            No active or upcoming events at the moment
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <Link 
          to="/events"
          className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors"
        >
          View All Events
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ActiveEvents;