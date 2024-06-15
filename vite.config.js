import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jyotirmay', // Replace 'jyotirmay' with your repository name
  plugins: [react()],
});
