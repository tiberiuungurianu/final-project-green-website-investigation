import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => ({
  publicDir: "public",
  plugins: [
    react(),
    ...(mode === 'production' ? [viteCompression()] : []),
  ],
}));