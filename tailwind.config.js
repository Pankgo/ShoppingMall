/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '8px': '8px', // 14px 폰트 사이즈
        '10px': '10px',
    }
    },
  },
  plugins: [],
}

