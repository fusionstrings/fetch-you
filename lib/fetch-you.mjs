function fetchYou(request, options) {
	return import('./fetch.mjs').then(async module => {
		const fetch = await module.default;

		return fetch(request, options).then(response => {
			if (!response.ok) {
				throw new Error(response);
			}

			const contentType = response.headers.get('content-type');
			if (contentType && contentType.includes('application/json')) {
				return response.json();
			}

			throw new TypeError('response is invalid JSON.');
		});
	});
}

export default fetchYou;
