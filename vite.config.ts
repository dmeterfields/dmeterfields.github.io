import { defineConfig } from 'vite';
// import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { sveltePhosphorOptimize } from 'phosphor-svelte/vite';

export default defineConfig({
    plugins: [sveltePhosphorOptimize(), sveltekit()],
    test: { include: ['src/**/*.{test,spec}.{js,ts}'] },
    server: {
        allowedHosts: ["9a8903cdb3f0.ngrok-free.app"]
    }
});
