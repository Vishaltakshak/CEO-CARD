/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Specify where Tailwind should look for class names
    ],
    theme: {
      extend: {
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