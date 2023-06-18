/** @type {import('tailwindcss').Config} */ 
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  plugins: [
    require('flowbite/plugin')
],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
    
  theme: {
    extend: {
      fontFamily: {
        libre :  "'Libre Baskerville', serif",
        archi : "'Architects Daughter', cursive",
        'juneauBold': ['JuneauBold', 'sans-serif'],
        'juneauRegular': ['juneauRegular', 'sans-serif'],
        inter : "'Inter', sans-serif",
      },

      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "20px",
        ls: "640px",
        md: "1220px",
        lg: "1224px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary : "", 
        secondary : "#111727" , 
        dark :  "#111727",
        white : "#ffffff",
        green : "#BAFE66",
        lightgreen : "#ECFFD3"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

