import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#221551',
          pink: '#e779c1',
        },
      },
      boxShadow: {
        'card': '0px 0px 26px -1px rgba(255, 255, 255, 1)',
      }
    },
  },
  plugins: [],
};
export default config;
