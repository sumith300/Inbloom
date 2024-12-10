export const getOptimizedImageUrl = (url, { width, quality = 75 } = {}) => {
  if (!url) return '';
  
  // If using a CDN or image optimization service, modify the URL here
  if (width) {
    return `${url}?w=${width}&q=${quality}`;
  }
  
  return url;
}; 