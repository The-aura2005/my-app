import { transform } from "next/dist/build/swc";
import { blob } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob :{
          "0%" :{ transform : "scale(1)",},
          "33%" : { transform : "scale(1.2)",},
          "66%" : { transform : "scale(0.8)",},
          "100%" : { transform : "scale(1)",},
        },
        
        
        
      },
      animation: {
        blob : "blob  7s infinite",
        
      },      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
