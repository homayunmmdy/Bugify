import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {}, // Just enables SCSS without additional config
    },
  },
  plugins: [react()],
});
