// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeGalaxy()],
			title: 'Tyler\'s Homelab',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Tylerwkoontz/homelab' }],
			sidebar: [
				{label: 'Network', slug: 'network'},
			],
		}),
	],
});
