export const getOptimizedImageUrl = (url, { width, quality = 75 } = {}) => {
  if (!url) return '';
  

  if (width) {
    return `${url}?w=${width}&q=${quality}`;
  }
  
  return url;
}; 