/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      openSans : ["var(--font-opensans)"]
    },
    colors: {
      'primary-blue': '#A5D0EF',
      'secondary-blue': '#22577B',
      'ternary-blue': '#4361EE',
      'gray-one': '#999999',
      'gray-two': '#949499',
      'gray-three': '#A6A6A6',
      'gray-four':'#63747C',
      'black-one': '#0F0F0F',
      'bg-gray': '#E7E7E7',
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const plugins = [];
