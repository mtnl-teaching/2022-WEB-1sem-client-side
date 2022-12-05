import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/web-1-2022-frontend-javascript/",
  plugins: [react()],
});
