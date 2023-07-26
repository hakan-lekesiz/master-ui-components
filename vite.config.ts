import { defineConfig } from "vite";
import { resolve } from "path";
const { peerDependencies, dependencies } = require("./package.json");
import plugin from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        plugin({
            jsxRuntime: "classic",
        }),
        svgr(),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src", "index.ts"),
            formats: ["es", "cjs"],
            fileName: (ext) => `index.${ext}.js`,
            // for UMD name: 'GlobalName'
        },
        rollupOptions: {
            external: [
                ...Object.keys(peerDependencies),
                ...Object.keys(dependencies),
            ],
        },
        target: "esnext",
        sourcemap: true,
    },
});
