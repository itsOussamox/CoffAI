import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      fontSize: {
        "tsize-sm" : "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);",
        "tsize-base" : "clamp(1rem, 0.34vw + 0.91rem, 1.19rem);",
        "tsize-lg" : "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);",
        "tsize-xl" : "clamp(1.56rem, 1vw + 1.31rem, 2.11rem);",
        "tsize-2xl" : "clamp(1rem, 1.56vw + 1.56rem, 2.81rem);",
        "tsize-3xl" : "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);",
        "tsize-4xl" : "clamp(3.05rem,3.54vw + 2.17rem,5rem);",
        "tsize-5xl" : "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem);",
      },
      colors: {
        "dprimary-bg": "#2A2A2A",
        "dsecondary-bg": "#353535",
        "primary-bg": "#ffffff",
        "secondary-bg": "#f8f8f8",
        "cof1": "#e06f2b",
        "cof2": "#914d14",
        "cof3": "#602c05",
      }
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
