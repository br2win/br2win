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
  },
});
