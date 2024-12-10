const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
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
  );
};

export default CategoryFilter; 