import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    // Use relative base so GitHub Pages works for both user and project sites.
    base: './',
});
