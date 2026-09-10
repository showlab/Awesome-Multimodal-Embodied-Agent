import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(process.cwd(), 'github-pages'),
  base: '/Awesome-Multimodal-Embodied-Agent/',
  publicDir: resolve(process.cwd(), 'public'),
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react()],
  build: {
    outDir: resolve(process.cwd(), 'dist-pages'),
    emptyOutDir: true,
  },
});
