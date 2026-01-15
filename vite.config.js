import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // ✅ REQUIRED

export default defineConfig({
  plugins: [
    react(), // ✅ REQUIRED for JSX
    tailwindcss(), // ✅ Tailwind v4 Vite plugin
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
