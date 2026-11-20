import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Browsers block <script type="module"> and crossorigin assets on file:// pages, which gave a blank page when
// demo/index.html was double-clicked. For the build, emit a classic (IIFE) script with `defer` and no crossorigin.
const fileFriendly = () => ({
  name: 'file-friendly-html',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler: (html) =>
      html
        .replace(/<script type="module" crossorigin src=/g, '<script defer src=')
        .replace(/ crossorigin/g, ''),
  },
})

// Relative base so the built app works from any folder, GitHub Pages path or straight from disk.
export default defineConfig({
  base: './',
  plugins: [react(), fileFriendly()],
  build: { rollupOptions: { output: { format: 'iife', inlineDynamicImports: true } } },
})
