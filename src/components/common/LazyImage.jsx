import { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className, placeholder = '/images/common/placeholder.jpg' }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc === placeholder) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !didCancel) {
            setImageSrc(src);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      observer.observe(imageRef);
    }

    return () => {
      didCancel = true;
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef, placeholder]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        imageSrc === placeholder ? 'opacity-50' : 'opacity-100'
      } ${className}`}
      loading="lazy"
    />
  );
};

export default LazyImage; 