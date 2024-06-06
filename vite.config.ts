import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Mode, plugin as mdPlugin } from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdPlugin({
      mode: [Mode.REACT],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["src/styles"],
      },
    },
  },
});
