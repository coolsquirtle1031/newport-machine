import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ✅ Allows external access (including ngrok)
    strictPort: true, // Optional: Ensures the port doesn't change
    allowedHosts: true, // ✅ Allows all hosts (including ngrok)
    proxy: {
      "/api": "http://localhost:5001",
    },
  },
});
