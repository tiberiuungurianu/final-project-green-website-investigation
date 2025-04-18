import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(({ mode }) => ({
  publicDir: "public",
  plugins: [
    react(),
    ...(mode === 'production'
      ? [viteCompression(), viteSingleFile()]
      : []
    )
  ],
  build: {
    cssCodeSplit: false,
  }
}));
