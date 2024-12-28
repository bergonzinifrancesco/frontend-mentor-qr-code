import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit"]
      },
      screens: {
        "desktop": "1440px",
        "mobile": "375px"
      },
      colors: {
        "slate-300": "#D5E1EF",
        "slate-500": "#68778D",
        "slate-900": "#1F314F"
      },
      fontSize: {
        xl: ["22px", "1.2"],
        base: ["15px", "1.4"]
      }
    },
  },
} satisfies Config;
