import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouterGenerator } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [tanstackRouterGenerator(), viteReact(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  ssr: {
    external: ["lucide-react"],
  },
});
