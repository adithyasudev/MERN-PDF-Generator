import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches the location where you want your build files
    rollupOptions: {
      input: 'index.html', // Ensure this matches the location of your index.html
    },
  },
})
