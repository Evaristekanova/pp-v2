import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#00aeb5",
        lightGray: "#E5E7E9",
        darkBlue: "#191d2b",
        secondDarkBlue: "#011221",
        grayColor: "#2a2e35",
        darkGreen: "#367e54",
      },
    },
  },
  plugins: [],
};
export default config;
