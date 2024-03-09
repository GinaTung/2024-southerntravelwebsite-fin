import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import inject from "@rollup/plugin-inject";
// import { styleImport } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2024-southerntravelwebsite-fin/',
  plugins: [
    vue(),
    inject({   // => that should be first under plugins array
      $: 'jquery',
      jQuery: 'jquery',
     }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
