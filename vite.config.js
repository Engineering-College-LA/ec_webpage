import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Default to "/" for custom domain (college.edu.kg). Use "/ec_webpage/" for GitHub Pages
const isGHPages =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.CI === "true" ||
  process.env.BUILD_TARGET === "ghpages";

// Dev-only: when running in v2-dev mode, point index.html's entry script at
// src-v2 instead of src, so the new design serves from "/" (keeping
// react-router's path matching correct) without touching the on-disk
// index.html that `vite build` reads for production.
function v2DevEntry() {
  return {
    name: "v2-dev-entry",
    apply: "serve",
    transformIndexHtml(html, { server }) {
      if (server?.config.mode !== "v2-dev") return html;
      // Regex (not a plain string) because Vite sometimes appends its own
      // "?t=<timestamp>" cache-bust query to the entry script after a file
      // change, which a literal match would silently stop matching.
      return html.replace(
        /src="\/src\/main\.jsx(\?[^"]*)?"/,
        'src="/src-v2/main.jsx$1"',
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: isGHPages ? "/ec_webpage/" : "/",
  plugins: [react(), v2DevEntry()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
