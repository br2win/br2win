import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://br2win.com.br',
  server: {
    proxy: {
      '/': {
        target: 'https://br2win.com.br/index.html',
        changeOrigin: true,
        rewrite: (path) => (path === '/' || path.endsWith('.html')) ? path : '/index.html',
      },
    },
  },
});
