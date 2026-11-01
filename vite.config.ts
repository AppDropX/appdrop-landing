import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Expose VITE_* plus API_BASE_URL (the name already set on the landing
  // Vercel project) to client code via import.meta.env.
  envPrefix: ["VITE_", "API_BASE_URL"],
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".ngrok-free.dev"],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
