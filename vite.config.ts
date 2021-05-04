import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `
    import { jsx } from '@emotion/react';
    import React from 'react';
    `,
  },
  resolve: {
    alias: [{ find: '@/', replacement: '/src/' }],
  },
});
