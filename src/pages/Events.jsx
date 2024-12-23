import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventCategories } from '../utils/constants/event/categories';
import { events } from '../utils/constants/event/events';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../components/common/LazyImage';

// Lazy load the modal component
const EventModal = lazy(() => import('../components/events/EventModal'));

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('All Events');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const filteredEvents = activeCategory === 'All Events'
    ? events
    : events.filter(event => event.category === activeCategory);

  useEffect(() => {
    if (selectedEvent) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedEvent]);

  return (
    <div className="min-h-screen bg-primary py-20">
      {/* Page Header */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
          Events
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Participate in our exciting events and showcase your talents.
        </p>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {eventCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-secondary text-white'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-sm opacity-75">{category.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative aspect-video overflow-hidden">
                <LazyImage
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 text-sm text-secondary mb-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date} • {event.time}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{event.venue}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    {event.category}
                  </span>
                  <span className="text-white font-semibold">
                    Prize: {event.prizePool}
                  </span>
                </div>
                <p className="text-gray-300 line-clamp-2">{event.description}</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Team: {event.teamSize}</span>
                    <span className="text-secondary">{event.registrationFee}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <Suspense fallback={<div className="loading-spinner" />}>
            <EventModal
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events; 