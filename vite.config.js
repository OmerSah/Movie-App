import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the app under /Movie-App/, Firebase Hosting serves it from the root
  base: process.env.GITHUB_ACTIONS ? '/Movie-App/' : '/',
})
