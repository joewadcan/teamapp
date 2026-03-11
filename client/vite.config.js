import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ─── Vite Config ──────────────────────────────────────────────────────────────
// The proxy is the most important part of this file.
//
// It means that when your React code calls fetch('/api/health'), Vite
// automatically forwards that request to your Express server on port 3001.
//
// WITHOUT this proxy, you'd get CORS errors because the browser sees the
// frontend (port 5173) and the backend (port 3001) as different origins.
//
// You should never need to change this file.
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
