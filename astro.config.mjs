import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://muncompsci.ca",
  // Preserve spacing between inline elements from the existing pages.
  compressHTML: true,
  integrations: [react()],
  vite: { plugins: [tailwind()] },
});
