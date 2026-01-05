import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost/DPS-navimumbai-hrms-backend',
        changeOrigin: true,
        secure: false,
        // Optional: rewrite path if needed
        // rewrite: (path) => path.replace(/^\/api/, '/api')
      },
    },
  },
});
