/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'jsx',
  },
  resolve: {
    alias: [{ find: '@/', replacement: '/src/' }],
  },
  test: {
    globals: true,
    setupFiles: './src/_tests/__setup__.ts',
  },
});
