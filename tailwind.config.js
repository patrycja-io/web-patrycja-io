module.exports = {
 content: ["./src/**/*.{html,js}"],
 themes: [
  {
    mytheme: {
    
"primary": "#0284c7",
    
"secondary": "#E17AA8",
    
"accent": "#facc15",
    
"neutral": "#3D4451",
    
"base-100": "#FFFFFF",
    
"info": "#3ABFF8",
    
"success": "#36D399",
    
"warning": "#FBBD23",
    
"error": "#F87272",
    },
  },
],
  plugins: [require("daisyui")],
}
