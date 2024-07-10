// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'glow': '0 0 10px rgba(0, 183, 255, 0.7)', // Customize the glow color and intensity
      },
      backdropBlur: {
        sm: '4px',
      }
    },
  },
  plugins: [],
}
