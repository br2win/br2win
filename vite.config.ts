import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://br2win.com.br',
  server: {
    fs: {
      // Para servir index.html em rotas desconhecidas
      strict: false,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: new URL('index.html', import.meta.url).pathname,
        404: new URL('public/404.html', import.meta.url).pathname,
      },
    },
  },
});
