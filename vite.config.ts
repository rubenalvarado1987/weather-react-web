import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcsspost from "@tailwindcss/postcss";
import tailwindcss from "@tailwindcss/vite";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { test } from "vitest";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [tailwindcsspost()],
    },
  },
  resolve: {
    alias: {
      "@services": path.resolve(__dirname, "./src/services"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      // ...otros alias
    },
  },
  test: {
    // ...
    environment: "jsdom",
    globals: true,
  },
  base: "./",
  // e2e: {
  //   supportFile: false,
  //   specPattern: "src/e2e/**/*.cy.{js,jsx,ts,tsx}",
  //   baseUrl: "http://localhost:5173",
  // },
});
