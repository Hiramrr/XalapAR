// svelte.config.js (apply over your provided file)
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: staticAdapter({
			pages: 'dist',
			assets: 'dist'
		}),
		paths: {
			base: '/xalapAR'
		}
	}
};

export default config;
