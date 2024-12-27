import { useState } from 'react';
import { events } from '../utils/constants/event/events';
import { IoLocationSharp, IoTime, IoPeople } from 'react-icons/io5';
import { motion } from 'framer-motion';
import EventModal from '../components/events/EventModal';

const Schedule = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Format time to 12-hour format with AM/PM
  const formatTime = (time) => {
    if (!time) return '';
    if (time.includes('AM') || time.includes('PM')) return time;
    
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  const eventsByDate = events.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {});

  // Sort events by time within each date
  Object.keys(eventsByDate).forEach(date => {
    eventsByDate[date].sort((a, b) => {
      const timeA = new Date(`2025-01-01 ${a.time}`).getTime();
      const timeB = new Date(`2025-01-01 ${b.time}`).getTime();
      return timeA - timeB;
    });
  });

  // Get all dates and sort them
  const sortedDates = Object.keys(eventsByDate).sort((a, b) => 
    new Date(a) - new Date(b)
  );

  return (
    <div className="min-h-screen bg-primary py-12 pt-24">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 text-white"
        >
          Event Schedule
        </motion.h1>
        
        {/* Theatre Events Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Theatre Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* January 15th Events */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">15th Jan, 2025</h2>
              <span className="text-sm opacity-75">Theatre Events</span>
            </div>
            <div className="divide-y divide-gray-100/10">
              {eventsByDate['15th Jan, 2025']?.map((event) => (
                <motion.div 
                  key={event.id}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 hover:bg-white/5 transition-colors group cursor-pointer"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-28 flex-shrink-0">
                      <div className="text-secondary font-semibold bg-white/10 rounded-lg p-2 text-center">
                        {formatTime(event.time)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-secondary transition-colors">
                          {event.title}
                        </h3>
                        {event.category && (
                          <span className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/20">
                            {event.category}
                          </span>
                        )}
                      </div>
                      {event.venue && (
                        <div className="flex items-center gap-2 text-gray-300 mt-2">
                          <IoLocationSharp className="text-secondary" />
                          <span>{event.venue}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-300 mt-1">
                        <IoPeople className="text-secondary" />
                        <span>{event.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

            {/* January 16th Events */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">16th Jan, 2025</h2>
              <span className="text-sm opacity-75">Theatre Events</span>
            </div>
            <div className="divide-y divide-gray-100/10">
              {eventsByDate['16th Jan, 2025']?.map((event) => (
                <motion.div 
                  key={event.id}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 hover:bg-white/5 transition-colors group cursor-pointer"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-28 flex-shrink-0">
                      <div className="text-secondary font-semibold bg-white/10 rounded-lg p-2 text-center">
                        {formatTime(event.time)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-secondary transition-colors">
                          {event.title}
                        </h3>
                        {event.category && (
                          <span className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/20">
                            {event.category}
                          </span>
                        )}
                      </div>
                      {event.venue && (
                        <div className="flex items-center gap-2 text-gray-300 mt-2">
                          <IoLocationSharp className="text-secondary" />
                          <span>{event.venue}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-300 mt-1">
                        <IoPeople className="text-secondary" />
                        <span>{event.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

            {/* January 17th Events */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-4">
              <h2 className="text-2xl font-bold">17th Jan, 2025</h2>
              <span className="text-sm opacity-75">Theatre Events</span>
            </div>
            <div className="divide-y divide-gray-100/10">
              {eventsByDate['17th Jan, 2025']?.map((event) => (
                <motion.div 
                  key={event.id}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 hover:bg-white/5 transition-colors group cursor-pointer"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-28 flex-shrink-0">
                      <div className="text-secondary font-semibold bg-white/10 rounded-lg p-2 text-center">
                        {formatTime(event.time)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-secondary transition-colors">
                          {event.title}
                        </h3>
                        {event.category && (
                          <span className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/20">
                            {event.category}
                          </span>
                        )}
                      </div>
                      {event.venue && (
                        <div className="flex items-center gap-2 text-gray-300 mt-2">
                          <IoLocationSharp className="text-secondary" />
                          <span>{event.venue}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-300 mt-1">
                        <IoPeople className="text-secondary" />
                        <span>{event.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        </div>

        {/* Cultural Events Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Cultural Events</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* January 24th Events */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-4">
                <h2 className="text-2xl font-bold">24th Jan, 2025</h2>
                <span className="text-sm opacity-75">Cultural Events</span>
              </div>
              <div className="divide-y divide-gray-100/10">
                {eventsByDate['24th Jan, 2025']?.map((event) => (
                  <motion.div 
                    key={event.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 hover:bg-white/5 transition-colors group cursor-pointer"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-28 flex-shrink-0">
                        <div className="text-secondary font-semibold bg-white/10 rounded-lg p-2 text-center">
                          {formatTime(event.time)}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white group-hover:text-secondary transition-colors">
                            {event.title}
                          </h3>
                          {event.category && (
                            <span className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/20">
                              {event.category}
                            </span>
                          )}
                        </div>
                        {event.venue && (
                          <div className="flex items-center gap-2 text-gray-300 mt-2">
                            <IoLocationSharp className="text-secondary" />
                            <span>{event.venue}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-gray-300 mt-1">
                          <IoPeople className="text-secondary" />
                          <span>{event.teamSize}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* January 25th Events */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-4">
                <h2 className="text-2xl font-bold">25th Jan, 2025</h2>
                <span className="text-sm opacity-75">Cultural Events</span>
              </div>
              <div className="divide-y divide-gray-100/10">
                {eventsByDate['25th Jan, 2025']?.map((event) => (
                  <motion.div 
                    key={event.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 hover:bg-white/5 transition-colors group cursor-pointer"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-28 flex-shrink-0">
                        <div className="text-secondary font-semibold bg-white/10 rounded-lg p-2 text-center">
                          {formatTime(event.time)}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white group-hover:text-secondary transition-colors">
                            {event.title}
                          </h3>
                          {event.category && (
                            <span className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/20">
                              {event.category}
                            </span>
                          )}
                        </div>
                        {event.venue && (
                          <div className="flex items-center gap-2 text-gray-300 mt-2">
                            <IoLocationSharp className="text-secondary" />
                            <span>{event.venue}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-gray-300 mt-1">
                          <IoPeople className="text-secondary" />
                          <span>{event.teamSize}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Event Modal */}
        {selectedEvent && (
          <EventModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            event={selectedEvent}
          />
        )}
      </div>
    </div>
  );
};

export default Schedule; 