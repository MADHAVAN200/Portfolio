import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // Group Recharts and its D3 helpers together
              if (id.includes('recharts') || id.includes('d3') || id.includes('internmap')) {
                return 'vendor-recharts';
              }
              // Group animations library
              if (id.includes('motion') || id.includes('framer-motion')) {
                return 'vendor-motion';
              }
              // Group icons
              if (id.includes('lucide-react')) {
                return 'vendor-lucide';
              }
              // General vendor libraries (react, react-dom, etc)
              return 'vendor-core';
            }
          }
        }
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      // Bind to all interfaces so Vite prints the network IP in the terminal.
      host: true,
      // Start on this port; if already in use, automatically try the next one.
      port: Number(process.env.VITE_PORT) || 5173,
      strictPort: false,
    },
  };
});
