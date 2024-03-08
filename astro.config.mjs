import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
/* import svelte from '@astrojs/svelte'; */

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [tailwind(), mdx(), react(), vue(), /* svelte() */]
});