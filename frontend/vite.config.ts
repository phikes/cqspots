import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({ babel: { plugins: ["relay"] } })
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  server: {
    proxy: {
      "/graphql": "http://localhost:3000",
      "/users/sign_in": "http://localhost:3000",
      "/users": "http://localhost:3000",
    }
  }
})
