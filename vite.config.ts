import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { sveltePhosphorOptimize } from 'phosphor-svelte/vite';

export default defineConfig({
    plugins: [tailwindcss(), sveltePhosphorOptimize(), sveltekit()],
    test: { include: ['src/**/*.{test,spec}.{js,ts}'] }
});
