/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}", ".node_modules/@nextui-org/theme/dist/index.js"],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}

