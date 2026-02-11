/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF3ED',
          100: '#FFE4D4',
          200: '#FFC5A8',
          300: '#FF9E71',
          400: '#FF6B35',
          500: '#F04E1A',
          600: '#D13A0F',
          700: '#AD2B0E',
          800: '#8A2414',
          900: '#702114',
        },
        secondary: {
          50: '#EFFEFB',
          100: '#C8FFF4',
          200: '#91FFEA',
          300: '#52F5DB',
          400: '#2EC4B6',
          500: '#0FA89E',
          600: '#088781',
          700: '#0B6B68',
          800: '#0E5554',
          900: '#104746',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FFF3C6',
          200: '#FFE588',
          300: '#FFD166',
          400: '#FFBB24',
          500: '#F99B07',
          600: '#DD7302',
          700: '#B75006',
          800: '#943D0C',
          900: '#7A330D',
        },
        cream: '#FFF8F0',
        warmGray: {
          50: '#FAF8F5',
          100: '#F0EDE8',
        },
      },
      fontFamily: {
        heading: ['Fredoka', 'Comic Sans MS', 'cursive'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}