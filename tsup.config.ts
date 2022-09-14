import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: ['esm', 'cjs'],
    sourcemap: true,
    dts: true,
  },
  {
    entry: ['src/index-browser.ts'],
    outDir: 'dist',
    format: ['esm'],
    sourcemap: true,
    dts: true,
  },
]);
