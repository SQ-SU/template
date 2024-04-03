/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#DEA67A",
        "secondary-dark": "#0F1720",
        "secondary-light": "#E4D1C3",
      },
      fontFamily: {
        "poster": ["Jomolhari", "serif"],
      },
      borderWidth: {
        0.5: "0.5px"
      },
      scale: {
        "125": "1.25"
      },
      spacing: {
        "header": "56px",
        "md-header": "64px",
      },
      typography: (theme) => ({
        'vertical-rl': {
          writingMode: 'vertical-rl',
        },
        'horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        'text-upright': {
          textOrientation: 'upright',
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['responsive'],
    },
  },
  plugins: [],
}

