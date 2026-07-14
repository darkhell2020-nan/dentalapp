import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const repositoryName = 'dentalapp';
const base = process.env.VITE_BASE_PATH ?? `/${repositoryName}/`;

export default defineConfig({
  base,
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.svg'],
      manifest: {
        name: 'DentVisual',
        short_name: 'DentVisual',
        description: 'Clear dental explanations in seconds',
        theme_color: '#0f766e',
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'any',
        scope: base,
        start_url: base,
        icons: [{ src: `${base}icons/icon.svg`, sizes: 'any', type: 'image/svg+xml' }],
      },
      workbox: { globPatterns: ['**/*.{js,css,html,svg,png,ico}'] },
    }),
  ],
  test: { environment: 'node', globals: true, setupFiles: './src/tests/setup.ts' },
});
