/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        // lora:['Lora','serif'],
        darius:["BwDariusDEMO-Light","serif"],
        graphik:["Graphik-Medium-Trial","serif"],
        graphikExralight:["Graphik-Extralight-Trial","serif"]
      },
      screens: {
        // 'min-2000': {'min': '2000px'},
        'max-1527': {'max': '1527px'},
        'max-1440': {'max': '1440px'},
        'max-1280': {'max': '1280px'},        
        // 'max-1024': {'max': '1024px'},
        'max-850':  {'max': '850px'},
        'max-500':  {'max': '500px'},
        // 'max-647':  {'max': '647px'},
        // 'max-524':  {'max': '524px'},
        // 'max-411':  {'max': '411px'},
        // 'max-380':  {'max': '380px'},
        // 'max-1180': {'max': '1180px'},
        // 'max-929': {'max': '929px'},
        // 'max-800': {'max': '800px'},
        // 'max-593': {'max': '593px'},
        // 'max-470': {'max': '470px'},
        // 'max-367': {'max': '367px'},
        // 'min-2000': {'min': '2000px'},
        'h-800': { 'raw': '(max-height: 800px)'},
        'h-700': { 'raw': '(max-height: 700px)'},
        'h-650': { 'raw': '(max-height: 650px)'},
        'h-600': { 'raw': '(max-height: 600px)'},

      },
    },
  },
  plugins: [],
}