import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        background: "var(--background)",
        primary: "var(--primary)",
      },
      backgroundImage: {
        "chat-bg": "url('/chat-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
