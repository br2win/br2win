// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Configurar para o domínio raiz
  server: {
    fs: {
      // Para servir index.html em rotas desconhecidas
      strict: false,
    },
  },
});
