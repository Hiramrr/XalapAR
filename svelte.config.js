import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: staticAdapter(),
		paths: {
			base: '/xalapAR'
		}
	}
};

export default config;
