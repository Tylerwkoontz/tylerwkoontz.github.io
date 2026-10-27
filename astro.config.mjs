// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// https://astro.build/config
export default defineConfig({
	site: 'https://tylerkoontz.net',
	integrations: [
		starlight({
			plugins: [starlightThemeGalaxy()],
			title: 'Tyler Koontz',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/tylerwkoontz' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/tylerwkoontz' },
			],
			sidebar: [
				{ label: 'About', slug: 'about' },
				{
					label: 'Homelab',
					items: [{ autogenerate: { directory: 'homelab' } }],
				},
			],
		}),
	],
});
