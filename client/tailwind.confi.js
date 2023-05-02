module.exports = {
    daisyui: {
        themes: [
          {
            mytheme: {
            
   "primary": "#f3f4f6",
            
   "secondary": "#f9a8d4",
            
   "accent": "#1FB2A5",
            
   "neutral": "#191D24",
            
   "base-100": "#2A303C",
            
   "info": "#d946ef",
            
   "success": "#36D399",
            
   "warning": "#FBBD23",
            
   "error": "#e11d48",
            },
          },
        ],
      },
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require('daisyui')],
  };