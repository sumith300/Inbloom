import { useState } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  onLoad, 
  loading = 'lazy',
  shape = 'square'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setHasError(true);
    setIsLoading(false);
  };

  const containerClasses = `relative w-full h-full ${
    shape === 'circle' ? 'rounded-full' : ''
  }`;

  const placeholderClasses = `absolute inset-0 ${
    shape === 'circle' ? 'rounded-full' : ''
  } ${isLoading ? 'animate-pulse bg-gray-200/20' : ''}`;

  const errorClasses = `absolute inset-0 flex items-center justify-center ${
    shape === 'circle' ? 'rounded-full' : ''
  } bg-gray-200/20`;

  return (
    <div className={containerClasses}>
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${shape === 'circle' ? 'rounded-full' : ''}`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
      />
      {isLoading && (
        <div className={placeholderClasses} />
      )}
      {hasError && (
        <div className={errorClasses}>
          <span className="text-gray-500 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage; 