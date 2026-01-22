import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // need to add src/pages/ and src/components/
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      // spacing values as described in the Design System
      spacing: {
        'none': '0px',
        'xs': '1px',
        'sm': '2px',
        'md': '4px',
        'lg': '8px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
    },
  },
  plugins: [],
};
export default config;