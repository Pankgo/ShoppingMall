/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '8px': '8px', // 14px 폰트 사이즈
        '10px': '10px',
    },
    colors: { //로그인, 회원가입코드
      'custom-start': '#bdc3c7',
      'custom-end': '#2c3e50',
      'hover-start' : '#000000',
      'hover-end' : '#434343'
    },
    },
  },
  plugins: [],
}

