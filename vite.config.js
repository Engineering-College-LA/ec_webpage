import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "host" ? "/" : "/ec_webpage/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
}));
