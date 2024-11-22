import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: './', 
  publicDir: false, 
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'public/**/*', 
          dest: 'public', 
        },
      ],
    }),
  ],
  base: './', 
  server: {
    host: true, 
  },
  build: {
    outDir: './dist', 
    emptyOutDir: true, 
    sourcemap: true, 
  },
});