import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const GalleryItem = ({ item, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-secondary/80 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold">{item.title}</h3>
            <p className="text-gray-200 text-sm">{item.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem; 