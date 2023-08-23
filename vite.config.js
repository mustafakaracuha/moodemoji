import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  optimizeDeps: { include: ['firebase/app', 'firebase/firestore'] },
  plugins: [react()],
})
