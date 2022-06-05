import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve as resolvePath } from "path";
import { readFileSync } from "fs";

const Port = 3000;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolvePath(__dirname, "./src"),
    },
  },
  plugins: [react()],
  assetsInclude: ["**/*.md"],
  server: {
    port: Port,
    open: `http://localhost:${Port}`,
  },
});
