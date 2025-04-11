import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Permite el uso de `expect` y otros globales
    environment: "jsdom"
  }
});
