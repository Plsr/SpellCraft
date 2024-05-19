import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      wobble: {
        from: {
          transform: "translate3d(0, 0, 0)",
        },

        "15%": {
          transform: "translate3d(-10%, 0, 0) rotate3d(0, 0, 1, -5deg)",
        },

        "30%": {
          transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 3deg)",
        },

        "45%": {
          transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -3deg)",
        },

        "60%": {
          transform: "translate3d(5%, 0, 0) rotate3d(0, 0, 1, 2deg)",
        },

        "75%": {
          transform: "translate3d(-2%, 0, 0) rotate3d(0, 0, 1, -1deg)",
        },

        to: {
          transform: "translate3d(0, 0, 0)",
        },
      },
    },
    animation: {
      wobble: "wobble 1s infinite",
    },
  },
  plugins: [],
};
export default config;
