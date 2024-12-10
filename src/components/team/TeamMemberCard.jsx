import { motion } from 'framer-motion';
import LazyImage from '../common/LazyImage';

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative"
    >
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300">
        {/* Profile Image and Info Container */}
        <div className="flex items-center p-4 gap-4">
          {/* Profile Image */}
          <div className="relative w-16 h-16 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-custom-purple animate-spin-slow"></div>
            <LazyImage
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-full border-2 border-transparent group-hover:border-secondary transition-colors duration-300 relative"
            />
          </div>

          {/* Info */}
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-white group-hover:text-secondary transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-sm text-secondary">
              {member.role}
            </p>
            <p className="text-xs text-white/60 mt-0.5">
              {member.category}
            </p>
          </div>

          {/* Hover Icon */}
          <div className="w-8 h-8 flex items-center justify-center text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        </div>

        {/* Quote on Hover */}
        <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
          <div className="px-4 pb-4 pt-2 border-t border-white/10">
            <p className="text-white/70 text-xs italic">
              "{member.quote || 'Dedicated to creating unforgettable experiences'}"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;