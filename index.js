const browserFetch = typeof self === 'object' && self.fetch;
const nodeFetch = typeof global === 'object' && global.fetch

function fetchYou(fetch = browserFetch || nodeFetch) {
	return (request, options) => (
		onSuccess = response => response,
		onFailure = error => {
			throw error;
		}
	) =>
		fetch(request, options)
			.then(response => response.json())
			.then(json => onSuccess(json))
			.catch(error => {
				onFailure(error);
			});
}

export default doot;