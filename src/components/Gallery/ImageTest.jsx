import React, { useEffect, useState } from 'react';

const ImageTest = () => {
  const [status, setStatus] = useState({});
  const BASE_PATH = '/assets/images/gallery';
  
  const testPaths = [
    `${BASE_PATH}/cultural/AGAM1.webp`,
    `${BASE_PATH}/cultural/ART1.webp`,
    `${BASE_PATH}/cultural/MUSIC1.webp`
  ];

  useEffect(() => {
    testPaths.forEach(async (path) => {
      try {
        const response = await fetch(path);
        console.log(`Testing path ${path}:`, response.status);
        setStatus(prev => ({
          ...prev,
          [path]: `${response.status} ${response.ok ? '✅' : '❌'}`
        }));
      } catch (error) {
        console.error(`Error testing path ${path}:`, error);
        setStatus(prev => ({
          ...prev,
          [path]: `Error: ${error.message}`
        }));
      }
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 bg-white p-4 z-50 text-black">
      <h3 className="font-bold mb-2">Image Path Test</h3>
      {testPaths.map(path => (
        <div key={path} className="mb-1">
          <code className="bg-gray-100 px-1">{path}</code>: {status[path] || 'Testing...'}
        </div>
      ))}
    </div>
  );
};

export default ImageTest; 