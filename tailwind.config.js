/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify where Tailwind should look for class names
  ],
  theme: {
    extend: {
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
