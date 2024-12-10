import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../common/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      // Update background when scrolled
      setIsScrolled(currentScrollY > 20);
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-primary/98 shadow-lg py-2' 
          : 'bg-gradient-to-r from-primary via-custom-lightPurple to-custom-purple py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link 
            to="/" 
            className="group"
          >
            <Logo className="transform transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['/', '/events', '/gallery', '/team'].map((path) => {
              const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link ${location.pathname === path ? 'active-nav-link' : ''}`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-custom-lightPurple focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="h-6 w-6 text-secondary" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-gradient-to-br from-primary to-custom-lightPurple rounded-lg shadow-xl border border-secondary/10">
            {['/', '/events', '/gallery', '/team'].map((path) => {
              const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <Link
                  key={path}
                  to={path}
                  className={`block px-4 py-3 text-white hover:bg-secondary/10 transition-colors ${
                    location.pathname === path ? 'text-secondary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 