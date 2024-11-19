import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'software-engineer': resolve(__dirname, 'src/resume/software-engineer/index.html'),
        'tech-lead': resolve(__dirname, 'src/resume/tech-lead/index.html'),
      },
    },
  },
  server: {
    open: true,
  },
});
