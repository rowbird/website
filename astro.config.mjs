import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://rowbird.dev',
  integrations: [sitemap()],
  // One page: inlining the CSS removes the only render-blocking request.
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
})
