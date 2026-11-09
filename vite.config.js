import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relatif supaya hasil build jalan di subpath GitHub Pages mana pun
export default defineConfig({
  plugins: [react()],
  base: './',
})
