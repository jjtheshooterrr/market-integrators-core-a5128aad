// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(async ({ mode }) => {
  const isDev = mode === "development";

  const plugins = [react(), isDev && componentTagger()].filter(Boolean);

  if (!isDev) {
    // no type defs needed; only loads in prod builds
    const { visualizer } = await import("rollup-plugin-visualizer");
    plugins.push(
      visualizer({
        filename: "stats.html",
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
    );
  }

  return {
    server: { host: "::", port: 8080 },
    plugins,
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },
    build: {
      target: "es2020",
      minify: "esbuild",
      sourcemap: false,
      cssCodeSplit: true,
      assetsInlineLimit: 0,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
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
    },
    optimizeDeps: {
      exclude: ["@dotlottie/player-component", "lottie-web"],
    },
  };
});
