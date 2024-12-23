import { useState } from 'react';
import GalleryGrid from '@components/Gallery/GalleryGrid.jsx';
import CategoryFilter from '@components/Gallery/CategoryFilter.jsx';
import { categories } from '../utils/constants/gallery/categories';
import { galleryItems } from '../utils/constants/gallery/items';

const Gallery = () => {
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
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Gallery Grid */}
      <GalleryGrid items={filteredItems} />
    </div>
  );
};

export default Gallery; 
