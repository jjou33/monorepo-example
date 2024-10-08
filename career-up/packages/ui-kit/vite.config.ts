import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    outDir: "./dist",
    lib: {
      entry: "./src/index.ts",
      name: "ui-kit",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.includes("style.css")) {
            return "index.css";
          }
          return assetInfo.names ? assetInfo.names[0] : assetInfo.name;
        },
      },
    },
  },
});
