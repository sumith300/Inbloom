export const getOptimizedImageUrl = (url, { width, quality = 75 } = {}) => {
  if (!url) return '';
  
  // If using a CDN or image optimization service, modify the URL here
  if (width) {
    return `${url}?w=${width}&q=${quality}`;
  }
  
  return url;
};

export const optimizeImageUrl = (url, { width = 400, quality = 75 } = {}) => {
  // If using a CDN like Cloudinary, you can modify the URL here
  // For now, we'll just return the original URL
  return url;
  
  // Example with Cloudinary:
  // return url.replace('/upload/', `/upload/w_${width},q_${quality}/`);
}; 