import { defineConfig } from "vite";

export default defineConfig({
  // Some legacy CommonJS dependencies (radium) expect the Node `global` object
  define: {
    global: "globalThis",
  },
  // Use classic React.createElement JSX, which works with every React 15 release
  oxc: {
    jsx: {
      runtime: "classic",
    },
  },
  server: {
    port: 3000,
  },
  build: {
    // Slides strip the leading "/" from image URLs, which breaks inlined data: URLs
    assetsInlineLimit: 0,
  },
});
