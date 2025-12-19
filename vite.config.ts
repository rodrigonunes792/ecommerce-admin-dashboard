import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
          alias: {
                  '@': path.resolve(__dirname, './src'),
                  '@components': path.resolve(__dirname, './src/components'),
                  '@pages': path.resolve(__dirname, './src/pages'),
                  '@assets': path.resolve(__dirname, './src/assets'),
          },
    },
    build: {
          chunkSizeWarningLimit: 1000,
          rollupOptions: {
                  output: {
                            manualChunks: {
                                        react: ['react', 'react-dom'],
                            },
                  },
          },
    },
})
