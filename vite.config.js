import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig({
  root: '.',
  plugins: [cloudflare()],
  build: {
    outDir: 'dist',
    minify: true,
    cssMinify: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
