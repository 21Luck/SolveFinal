/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      n:{
        1: "#FFFFFF",
        2: "#CAC6DD",
        3: "#ADA8C3",
        4: "#757185",
        5: "#3F3A52",
        6: "#252134",
        7: "#15131D",
        8: "#0E0C15",
      },
    },
    },
    screens: {
     smst:'370px',
     xs:'480px',
     ss:'620px',
     sm:'768px',
     md:'1060px',
     lg:'1200px',
     xl:'1700px',
    },
  },
  plugins: [
    plugin(function({  addComponents }) {
       addComponents({
        '.h1': {
          '@apply text-3xl sm:text-5xl md:text-6xl': {},
        },
        '.h2':{
          '@apply text-3xl sm:text-4xl md:text-5xl text-n-3 text-center':{},
        },
        '.dcenter':{
          '@apply flex justify-center items-center':{}, 
        },
        '.divbtn':{
          '@apply flex justify-between items-center':{},
        },
        '.gradientback':{
          '@apply bg-gradient-to-r from-blue-800 to-yellow-700':{},
        },
        '.textg':{
          '@apply bg-gradient-to-r from-blue-800 to-yellow-700 bg-clip-text text-transparent':{},
        },
        '.text':{
          '@apply text-lg text-center sm:max-w-[470px]  text-n-3 max-w-4xl mt-5':{},
        },
        '.btn1':{
          '@apply px-4 py-2 rounded-md border border-n-4':{},
        },
        '.btn2':{
          '@apply px-4 py-2 rounded-md gradientback':{},
        }
      })
    }),

  ],
}