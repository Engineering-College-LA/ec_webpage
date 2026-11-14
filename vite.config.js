import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Default to "/" for custom domain (college.edu.kg). Use "/ec_webpage/" for GitHub Pages
// BUILD_TARGET=hoster (set by the hoster.kg deploy workflow) forces "/" even in CI
const isGHPages =
  process.env.BUILD_TARGET !== "hoster" &&
  (process.env.GITHUB_ACTIONS === "true" ||
    process.env.CI === "true" ||
    process.env.BUILD_TARGET === "ghpages");

// public/invitation/index.html is a standalone static page, not an SPA route.
// Production serves it via public/.htaccess; this mirrors that rule in dev and preview
// so /invitation does not fall through to the SPA's index.html.
const serveInvitation = (server) => {
  server.middlewares.use((req, _res, next) => {
    if (/^\/invitation\/?(\?.*)?$/.test(req.url)) req.url = "/invitation/index.html";
    next();
  });
};
const invitationPage = {
  name: "invitation-static-page",
  configureServer: serveInvitation,
  configurePreviewServer: serveInvitation,
};

// https://vitejs.dev/config/
export default defineConfig({
  base: isGHPages ? "/ec_webpage/" : "/",
  plugins: [react(), invitationPage],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
