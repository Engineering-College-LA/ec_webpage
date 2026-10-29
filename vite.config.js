import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Default to "/" for custom domain (college.edu.kg). Use "/ec_webpage/" for GitHub Pages
// The hoster.kg deploy also runs in GitHub Actions, so it opts out explicitly.
const isGHPages =
  process.env.BUILD_TARGET === "ghpages" ||
  (process.env.BUILD_TARGET !== "hoster" &&
    (process.env.GITHUB_ACTIONS === "true" || process.env.CI === "true"));

// https://vitejs.dev/config/
export default defineConfig({
  base: isGHPages ? "/ec_webpage/" : "/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
