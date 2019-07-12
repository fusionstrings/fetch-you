function getFetch() {
	if (typeof self === 'object') {
		if (self.fetch) {
			return self.fetch;
		}
		return import('whatwg-fetch/fetch.js').then(module => {
			return module.fetch;
		});
	}

	return import('node-fetch/lib/index.mjs').then(module => module.default);
}

const fetch = getFetch();

export default fetch;
