import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'halmasha',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets' // Ensure this is correctly set if you use a different directory
  }
})
