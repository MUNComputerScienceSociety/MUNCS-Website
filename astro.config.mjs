import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://muncompsci.ca",
  sitemap: true,
  integrations: [react(), tailwind({ config: { applyBaseStyles: false } })],
});
