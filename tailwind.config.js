/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // customize font style
    fontFamily: {
      'roboto' : " 'Roboto', 'sans-serif'"
    },
    // customizations for css color and etc...
    extend: {
      colors : {
        'primary': '#5E3BEE',
        'headingColor': '#282938',
        'bgShade' : '#F5FCFF',
        'driblle' : 'E62872',
        'body' : '#1C1E53'
      }
    },
  },
  plugins: [],
}

