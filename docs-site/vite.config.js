import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Dex_RoboKnix/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
})
