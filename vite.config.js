import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  root: '.',
  plugins: [],
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
