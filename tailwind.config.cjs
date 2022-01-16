const { getKuixProperties } = require('./src/lib/utils/kuixUtils.cjs')
const kuixConfig = require('./kuix.config.cjs');
console.log({kuixConfig})
const kuix = getKuixProperties(kuixConfig);

module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				primary: kuix.colors.primary
			}
		}
	},
	plugins: []
	// purge: ['./src/**/*.svelte']
};
