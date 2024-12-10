import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryModal from './GalleryModal';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    {
      type: 'image',
      src: '/gallery/event1.jpg',
      thumbnail: '/gallery/event1-thumb.jpg',
      title: 'Dance Performance',
      description: 'Annual dance competition finals 2023',
      category: 'Cultural'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
      thumbnail: '/gallery/event2-thumb.jpg',
      title: 'Music Concert',
      description: 'Live band performance at InBloom 2023',
      category: 'Cultural'
    },
    // Add more items as needed
  ];

  const categories = ['All', 'Cultural', 'Technical', 'Sports', 'Workshops'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-primary py-20">
      {/* Page Header */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
          Gallery
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Relive the moments from our previous events through our collection of photos and videos.
        </p>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedItem(item)}
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
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <GalleryModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 