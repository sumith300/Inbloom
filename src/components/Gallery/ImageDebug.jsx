import React, { useEffect } from 'react';

const ImageDebug = ({ src }) => {
  const checkImage = async () => {
    try {
      const response = await fetch(src);
      console.log(`Image ${src} status:`, response.status);
    } catch (error) {
      console.error(`Error checking image ${src}:`, error);
    }
  };

  useEffect(() => {
    checkImage();
  }, [src]);

  return null;
};

export default ImageDebug; 