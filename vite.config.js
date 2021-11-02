import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({ babelrc: true })],
    root: "./resources", // chemin d'exécution de vite
    base: "/assets/", // sortie des fichiers compilé
    build: {
        outDir: "../public/assets",
        assetsDir: "",
        manifest: true,
        rollupOptions: {
            input: "./resources/js/app.js",
            output: { manualChunks: undefined },
        },
    },
});
