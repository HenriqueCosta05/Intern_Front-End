/** @type {import('tailwindcss').Config} */
import { colorPallete } from './src/theme/color-pallete.ts';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: colorPallete.darkBrown,
        midDarkBrown: colorPallete.midDarkBrown,
        lowDarkBrown: colorPallete.lowDarkBrown,
        brown: colorPallete.brown,
        darkOrange: colorPallete.darkOrange,
        midOrange: colorPallete.midOrange,
        lowOrange: colorPallete.lowOrange,
      },
    },
  },
  plugins: [],
};