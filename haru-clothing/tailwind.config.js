/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      animation: {
        'loading-spinner' : 'spin 4s linear infinite'
      },
      colors: {
        'custom-orange' : '#f2b263',
        'custom-dark' : '#3e1800',
        'custom-accent' : '#f5f5f5',
        'custom-green' : '#29a65f',
      },
      screens: {
        'sm' : '25em',
        'md' : '35em',
        'lg' : '45em'
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        'outfit' : ["Outfit", "sans-serif"],
        'poppins' : ["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [],
}

