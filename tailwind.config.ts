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
      // foundation colousr as described in the Design System
      colors: {
        pink: {
            100: '#F7F0FB',
            200: '#EFD8FF',
            300: '#E0BEF6',
            400: '#BE89E2',
            500: '#AE8BDB',
            600: '#8749AF',
            700: '#5B2C79',
            800: '#38194D',
            900: '#220B31',
        },
        purple: {
            100: '#ECE8F8',
            200: '#c4b8e9',
            300: '#A895DE',
            400: '#8065CF',
            500: '#5836BC',
            600: '#4119B8',
            700: '#250E6B',
            800: '#16064A',
            900: '#0E042B',
        },
        cyan: {
            100: '#FBFEFF',
            200: '#EEFAFF',
            300: '#D9F5FF',
            400: '#B0DDED',
            500: '#82C1D8',
            600: '#5092A9',
            700: '#25718B',
            800: '#104759',
            900: '#06212B',
        },
        neutral: {
            100: '#F4F4F4',
            200: '#CAC9D8',
            300: '#9F9DB9',
            400: '#7D7B93',
            500: '#57556C',
            600: '#343247',
            700: '#212030',
            800: '#171621',
            900: '#0F0E18',
        },
        'system-green': {
            100: '#EDFBF3',
            200: '#C7F3DB',
            300: '#85e6b1',
            400: '#49D98A',
            500: '#32B870',
            600: '#148949',
            700: '#10502C',
            800: '#0B3725',
            900: '#022215',
        },
        'system-yellow': {
            100: '#fffeed',
            200: '#FFFAC6',
            300: '#FDF499',
            400: '#FFED66',
            500: '#FDDF39',
            600: '#D9B215',
            700: '#715C06',
            800: '#463802',
            900: '#312700',
        },
        'system-red': {
            100: '#FCEDED',
            200: '#F6C7C7',
            300: '#F2ACAC',
            400: '#EC8686',
            500: '#EB5C5C',
            600: '#BE3434',
            700: '#8D2828',
            800: '#5E1616',
            900: '#3A0707',
        },
      }
    },
  },
  plugins: [],
};
export default config;