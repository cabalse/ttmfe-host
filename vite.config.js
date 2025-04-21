import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "app",
      remotes: {
        remoteButton: "http://localhost:5001/assets/remoteEntry.js",
        remoteSubsribeForm: "http://localhost:5002/assets/remoteEntry.js",
        remoteSubscribers: "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "tailwindcss"],
    }),
  ],
});
