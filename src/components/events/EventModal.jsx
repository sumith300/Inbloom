import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../common/LazyImage';
import { REGISTRATION_FORMS } from '../../utils/constants/event/registerationForm';

const ConfirmationDialog = ({ onConfirm, onCancel, event }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    onClick={onCancel}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-primary rounded-xl p-6 max-w-md w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-xl font-semibold text-white mb-4">Confirm Registration</h3>
      <p className="text-white/80 mb-6">
        You will be redirected to register for <span className="text-secondary">{event.title}</span>. 
        Would you like to continue?
      </p>
      <div className="flex justify-end gap-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-white/70 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-6 py-2 bg-secondary hover:bg-secondary-light text-white rounded-full transition-colors"
        >
          Continue
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const EventModal = ({ event, onClose }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRegistration = async () => {
    setIsLoading(true);
    try {
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      const formUrl = REGISTRATION_FORMS[event.formType.toLowerCase()];
      if (formUrl) {
        window.open(formUrl, '_blank');
      } else {
        console.error('Form URL not found for category:', event.category);
      }
    } finally {
      setIsLoading(false);
      setShowConfirmation(false);
      onClose();
    }
  };

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop-blur-sm overflow-y-auto"
      style={{ 
        position: 'fixed',
        overflowY: 'auto',
      }}
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="flex items-start justify-center w-full">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-primary rounded-xl overflow-hidden mx-4 my-20"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Section */}
          <div className="relative w-full aspect-video sm:aspect-[21/9]">
            <LazyImage
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent">
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-2">
                  {event.title}
                </h2>
                <p className="text-secondary text-sm sm:text-base">{event.category}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Prize and Registration Fee */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{event.date} • {event.time}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl sm:text-2xl font-bold text-secondary">{event.prizePool}</p>
                <p className="text-gray-400 text-sm">{event.registrationFee}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Event Details */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white">Event Details</h3>
                <div className="space-y-3 text-gray-300">
                  <p>{event.description}</p>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Team Size: {event.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Rules Section */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white">Rules</h3>
                <ul className="space-y-2 text-gray-300">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coordinators Section */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Event Coordinators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.coordinators.map((coordinator, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <p className="text-white font-medium">{coordinator.name}</p>
                    <div className="mt-2 space-y-1 text-sm">
                      <a 
                        href={`mailto:${coordinator.email}`}
                        className="flex items-center gap-2 text-gray-400 hover:text-secondary"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {coordinator.email}
                      </a>
                      <a 
                        href={`tel:${coordinator.phone}`}
                        className="flex items-center gap-2 text-gray-400 hover:text-secondary"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {coordinator.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Register Button */}
            <div className="mt-8 flex justify-end">
              <button 
                  onClick={() => setShowConfirmation(true)}
                  disabled={isLoading}
                  className="w-full sm:w-auto px-8 py-3 bg-secondary hover:bg-secondary-light text-white rounded-full font-semibold transition-all duration-300 relative overflow-hidden disabled:opacity-70"
                >
                  <span className={`flex items-center justify-center gap-2 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                Register Now
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </span>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4"
                        />
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </div>
                  )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>

      {/* Confirmation Dialog */}
      <AnimatePresence>
        {showConfirmation && (
          <ConfirmationDialog
            event={event}
            onConfirm={handleRegistration}
            onCancel={() => setShowConfirmation(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default EventModal;