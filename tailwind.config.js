/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#342074',
          light: '#432991',
          dark: '#281860',
          gradient: '#3D2589',
        },
        secondary: {
          DEFAULT: '#E84CA4',
          light: '#FF60B6',
          dark: '#D43891',
        },
        accent: {
          DEFAULT: '#FF2D37',
          light: '#FF4D55',
          dark: '#E61B24',
        },
        neutral: {
          DEFAULT: '#F5F8FA',
          dark: '#E2E8F0',
        },
        custom: {
          purple: '#342074',
          pink: '#E84CA4',
          lightPurple: '#4A3189',
          darkPink: '#D43891',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #342074, #4A3189, #E84CA4)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(232,76,164,0.1), transparent)',
      }
    },
  },
  plugins: [],
}

