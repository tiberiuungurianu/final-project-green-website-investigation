import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "public", // Asigură că fișierele din `public/` sunt servite corect
  server: {
    fs: {
      strict: false // Permite acces la fișiere externe
    }
  }
});
