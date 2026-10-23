import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Default to "/" for custom domain (college.edu.kg). Use "/ec_webpage/" for GitHub Pages
// BUILD_TARGET=hoster (set by the hoster.kg deploy workflow) forces "/" even in CI
const isGHPages =
  process.env.BUILD_TARGET !== "hoster" &&
  (process.env.GITHUB_ACTIONS === "true" ||
    process.env.CI === "true" ||
    process.env.BUILD_TARGET === "ghpages");

export default defineConfig({
  base: isGHPages ? "/ec_webpage/" : "/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
