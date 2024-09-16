/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import { configDefaults } from "vitest/config"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/app/setupTests.ts",
    exclude: [...configDefaults.exclude],
    coverage: {
      reporter: ["text", "html"],
    },
  },
})
