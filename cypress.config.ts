import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    fileServerFolder: 'cypress/target/dist',
  },
});
