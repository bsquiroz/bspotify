import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), svelte(), react()],
	output: "server",
	adapter: vercel(),
});
