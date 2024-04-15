import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // especifica el punto de entrada aquí
    rollupOptions: {
      input: './index.html', // Aquí 'src/main.js' es el punto de entrada
    },
  }
})


