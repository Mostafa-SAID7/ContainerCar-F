import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouterGenerator } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [tanstackRouterGenerator(), viteReact(), tailwindcss(), tsconfigPaths()],
  ssr: {
    external: ["lucide-react"],
  },
});
