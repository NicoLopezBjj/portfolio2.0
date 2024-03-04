import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/portfolio2.0/",
  build: {
    outDir: 'build' // Nombre del directorio de construcción para deploy 
  }
})
