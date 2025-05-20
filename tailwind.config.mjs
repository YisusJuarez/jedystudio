/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
		"slide-right":{
			from: { transform: "translateX(-100%)" },
			to: { transform: "translateX(0)" },
		}
      },
      animation: {
        "slide-left": "slide-left 50s linear infinite",
		    "slide-right": "slide-right 50s linear infinite",
      },
    },
  },
  plugins: [typography],
};
