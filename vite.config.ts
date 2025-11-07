import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    host: "0.0.0.0",
    port: 80,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:30001",
        changeOrigin: true,
        secure: false,
      },
      "/media": {
        target: "http://localhost:30000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  optimizeDeps: {
    exclude: ["svelte"],
  },
  build: {
    outDir: "../docker/frontend/html/dist",
    emptyOutDir: true,
  },
});
