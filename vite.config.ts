import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/forsa-plus-website/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
