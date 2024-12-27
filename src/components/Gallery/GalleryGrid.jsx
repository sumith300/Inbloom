import { useState, useEffect, useCallback } from 'react';
import LazyImage from '@components/common/LazyImage';
import LoadingSpinner from '@components/common/LoadingSpinner';

const ITEMS_PER_PAGE = 12;

const GalleryGrid = ({ items }) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setPage(1);
      setDisplayedItems(items.slice(0, ITEMS_PER_PAGE));
    } catch (err) {
      console.error('Gallery loading error:', err);
    }
  }, [items]);

  const loadMore = useCallback(() => {
    if (loading || displayedItems.length >= items.length) return;
    
    setLoading(true);
    try {
      const nextItems = items.slice(0, (page + 1) * ITEMS_PER_PAGE);
      setDisplayedItems(nextItems);
      setPage(page + 1);
    } finally {
      setLoading(false);
    }
  }, [loading, items, page, displayedItems.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= 
        document.documentElement.scrollHeight - 1000
      ) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedItems.map((item) => (
          <div 
            key={item.id}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group"
          >
            <LazyImage
              src={item.src}
              alt={item.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-gray-200">{item.description}</p>
              )}
              <span className="text-sm text-gray-300">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="flex justify-center my-8">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default GalleryGrid; 