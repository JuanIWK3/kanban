/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        done: '#4caf50',
        ongoing: '#ff9800',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  variants: {

  }
}
