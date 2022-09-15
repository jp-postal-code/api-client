import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    outDir: 'dist/node',
    format: ['esm', 'cjs'],
    sourcemap: true,
    dts: true,
  },
  {
    entry: {
      index: 'src/index-browser.ts',
    },
    outDir: 'dist/browser',
    format: ['esm', 'cjs'],
    sourcemap: true,
    dts: true,
  },
]);
