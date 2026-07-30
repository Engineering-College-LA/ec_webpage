import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

// https://vitejs.dev/config/
export default defineConfig({
  base: isGitHubActions ? "/ec_webpage/" : "/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
