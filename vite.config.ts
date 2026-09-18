import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Support both Vercel/local root '/' and GitHub Pages '/Portfolio/'
  base: process.env.VERCEL ? '/' : (process.env.VITE_BASE || (process.env.GITHUB_ACTIONS ? '/Portfolio/' : '/')),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/motion')) {
            return 'vendor-animation';
          }
        },
      },
    },
  },
})

