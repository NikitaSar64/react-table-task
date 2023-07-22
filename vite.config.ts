import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@app": "/src/app",
      "@store": "/src/store",
      "@hooks": "/src/hooks",
      "@interfaces": "/src/interfaces",
      "@constants": "/src/constants",
      "@pages": "/src/app/pages",
      "@helpers": "/src/helpers",
    },
  },
});
