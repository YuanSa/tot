import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve as resolvePath } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolvePath(__dirname, "./src"),
    },
  },
  plugins: [react()],
  assetsInclude: ["**/*.md"],
});
