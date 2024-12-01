/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      animation: {
        'loading-spinner' : 'spin 4s linear infinite',
        'sliding' : 'slider 15s linear infinite'
      },
      keyframes: {
        slider : {
          '0%' : {transform: 'translate(0%)'},
          '100%': {transform: 'translate(-100%)'}
        }
      },
      colors: {
        'custom-orange' : '#f2b263',
        'custom-dark' : '#3e1800',
        'custom-accent' : '#f5f5f5',
        'custom-green' : '#29a65f',
      },
      screens: {
        'md' : '35em',
        'lg' : '45em',
        'max-35': { max: '44.9em'}
      },
      container: {
        center: true,
        padding: {
          DEFAULT : '1rem',
          md : '.5rem',
          lg: '4rem'
        }
      },
      fontFamily: {
        'outfit' : ["Outfit", "sans-serif"],
        'poppins' : ["Poppins", 'sans-serif'],
        'cursive' : ["Mrs Saint Delafield", "cursive"]
      },
      gridTemplateRows: {
        'footer': 'repeat(4, minmax(0, min-content)'
      },
      dropShadow:{
        'date-box' : '-3px -3px 0 #fff' 
      },
      gridTemplateColumns: {
        'shop' : '200px 1fr',
        'cart' : '1fr 300px',
        'cart-item' : '1fr repeat(3, minmax(100px, 150px))',
        'product-description' : '200px 1fr'
      },
      gridTemplateRows: {
        'product' : 'repeat(2, min-content'
      }
    },
  },
  plugins: [],
}

