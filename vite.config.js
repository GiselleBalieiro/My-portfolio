import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'https://ia-rag-api-production.up.railway.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // Login pela mesma origem no dev: sem isso o CORS da ia-rag-api barra
      // sempre que o Vite sobe numa porta fora da allowlist dela.
      '/auth-api': {
        target: 'https://ia-rag-api.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth-api/, ''),
      },
    },
  },
  optimizeDeps: {
    include: ['@emailjs/browser']
  }
})
