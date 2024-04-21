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
      openSans: ["var(--font-opensans)"]
    },
    fontSize: {
      clamp: "clamp(1rem, 5vw, 3rem)",
    },
    colors: {
      'primary-blue': '#A5D0EF',
      'secondary-blue': '#22577B',
      'ternary-blue': '#4361EE',
      'fourth-blue' : '#D4DCFF',
      'section-bg-blue' : '#F2FAFF',
      'gray-one': '#999999',
      'gray-two': '#949499',
      'gray-three': '#A6A6A6',
      'gray-four': '#63747C',
      'gray-five' : '#3C3C44',
      'gray-border':'#F6F6F6',
      'drop-down-gray':'#EAEAEA',
      'dropdown-arrow-gray':'#ADA7A7',
      'black-one': '#0F0F0F',
      'bg-gray': '#E7E7E7',
      'rgba-15-15-15-0': 'rgba(15, 15, 15, 0)',
      'rgba-34-87-123-1': 'rgba(34, 87, 123, 1)',
      'rgba-166-166-166-1': 'rgba(166, 166, 166, 1)'
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const plugins = [];
