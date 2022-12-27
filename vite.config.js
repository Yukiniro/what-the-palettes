import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    Unocss({
      shortcuts: {
        "flex-center": "flex justify-center items-center"
      },
      theme: {
        breakpoints: {
          sm: "320px",
          md: "768px",
          lg: "1024px",
        },
      },
    }),
  ],
});
