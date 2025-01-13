/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify where Tailwind should look for class names
  ],
  theme: {
    extend: {
      animation:{
        slide: "slide 5s cubic-bezier(0.87, 0.69, 0.35, 0.38) infinite"
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(-10%)' },  
          '15%': { transform: 'translateY(-5%)' }, 
          '35%': { transform: 'translateY(-3%)' }, 
          '50%': { transform: 'translateY(0)' },   // Centered
          '75%': { transform: 'translateY(5%)' }, 
          '85%': { transform: 'translateY(7%)' }, 
          '100%': { transform: 'translateY(15%)' }, 
        },
      },
      
      
      screens: {
        xs: "345px", // Custom screen size for 345px
      },
      backgroundImage: {
        clouds: "url('/public/assets/img/Home/clouds.jpg')",
          about: "url('/public/assets/img/About/aboutus.jpg')",
          enquiry: "url('/public/assets/img/Enquiry/enquiry.jpg')",
          signin: "url('/public/assets/img/signup/signin.jpg')",
      },
    },
  },
  plugins: [],
};
