// vite.config.ts (or .js)
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";

// Optional: critical CSS inlining (only if you want it)
// import critical from "rollup-plugin-critical"; // see notes below

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "::",
      port: 8080,
    },

    plugins: [
      react(),
      isDev && componentTagger(),
      // Bundle report at /stats.html after build – helps kill that 500KB unused JS
      !isDev &&
        visualizer({
          filename: "stats.html",
          open: false,
          gzipSize: true,
          brotliSize: true,
        }),
      // If you decide to inline critical CSS for the home page:
      // !isDev &&
      //   critical({
      //     criticalUrl: "http://localhost:4173", // run preview before using
      //     criticalBase: "dist/",
      //     criticalPages: [{ uri: "/", template: "index.html" }],
      //     inline: true,
      //   }),
    ].filter(Boolean),

    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },

    // Tighter build for faster parse/eval + better tree-shaking
    build: {
      target: "es2020",
      minify: "esbuild",
      sourcemap: false, // enable "hidden" if you want prod debugging: 'hidden'
      cssCodeSplit: true,
      // Keep chunks lean and cacheable
      rollupOptions: {
        output: {
          // Stable, cache-bustable filenames
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
          // Manual chunking to cut initial JS down and defer heavy libs
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("react") || id.includes("scheduler")) return "react-vendor";
              if (id.includes("framer-motion")) return "motion";
              if (id.includes("@dotlottie") || id.includes("lottie")) return "lottie";
              if (id.includes("three")) return "three";
              if (id.includes("chart.js") || id.includes("recharts")) return "charts";
              return "vendor";
            }
          },
        },
      },
      // Smaller base64 inlining → better caching of images/fonts
      assetsInlineLimit: 0,
      // Warn if something explodes in size
      chunkSizeWarningLimit: 600,
    },

    // Pre-bundle fast dev & aid tree-shaking; exclude heavy libs from eager dev optimize
    optimizeDeps: {
      exclude: ["@dotlottie/player-component", "lottie-web"],
    },

    // Inject build-time env flags you can use in code for deferring GTM, etc.
    define: {
      __IS_PROD__: JSON.stringify(!isDev),
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION ?? "0"),
    },
  };
});
