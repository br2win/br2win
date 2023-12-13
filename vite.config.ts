import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://br2win.com.br',
  server: {
    fs: {
      // Para servir index.html em rotas desconhecidas
      strict: false,
    },
    // Adicionar reescritas para servir 404.html em rotas desconhecidas
    proxy: {
      '/': {
        target: 'https://br2win.com.br/404.html', // Caminho para 404.html
        changeOrigin: true,
        rewrite: (path) => path !== '/404.html' ? '/404.html' : path,
      },
    },
  },
});
