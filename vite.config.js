import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Default to "/" for custom domain (college.edu.kg). Use "/ec_webpage/" for GitHub Pages
const isGHPages =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.CI === "true" ||
  process.env.BUILD_TARGET === "ghpages";

export default defineConfig({
  base: "/ec_webpage/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
