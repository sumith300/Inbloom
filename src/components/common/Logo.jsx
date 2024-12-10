const Logo = ({ className = "" }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        {/* Blooming Flower */}
        <g filter="url(#glow)">
          {/* Petals */}
          {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
            <path
              key={i}
              d="M20 20L23 8C21 10 17 10 15 8L18 20"
              fill="url(#petal-gradient)"
              transform={`rotate(${rotation} 20 20)`}
              opacity="0.9"
            />
          ))}
          
          {/* Center */}
          <circle cx="20" cy="20" r="5" fill="#E84CA4" />
        </g>
        
        {/* Definitions */}
        <defs>
          <linearGradient id="petal-gradient" x1="15" y1="8" x2="23" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E84CA4" />
            <stop offset="100%" stopColor="#342074" />
          </linearGradient>
          <filter id="glow" x="-8" y="-8" width="56" height="56" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>
      
      <span className="font-display text-3xl tracking-wider">
        <span className="text-secondary">In</span>
        <span className="text-white">Bloom</span>
      </span>
    </div>
  );
};

export default Logo; 