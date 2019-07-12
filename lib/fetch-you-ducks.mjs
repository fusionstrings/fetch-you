import fetchYou from './fetch-you.mjs';

const START = 'fetch-you/START';
const SUCCESS = 'fetch-you/SUCCESS';
const FAILURE = 'fetch-you/FAILURE';

function getEndPoint(request) {
	if (typeof request === 'string') {
		return encodeURIComponent(request);
	}
	if (typeof request === 'object' && request.url) {
		return encodeURIComponent(request.url);
	}

	/**
	 * @todo throw better message if should be used for user feedback
	 */
	throw TypeError(
		'Invalid request. https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters'
	);
}

function getApi(request, options) {
	const endpoint = getEndPoint(request);
	return async dispatch => {
		try {
			dispatch({
				type: START,
				payload: {
					endpoint
				}
			});

			const response = await fetchYou(request, options);

			return dispatch({
				type: SUCCESS,
				payload: {
					response,
					endpoint
				}
			});
		} catch (error) {
			return dispatch({
				type: FAILURE,
				payload: { endpoint, error }
			});
		}
	};
}

function reducer(state = {}, { type, payload }) {
	switch (type) {
		case START:
			return {
				...state,
				[payload.endpoint]: {
					...state[payload.endpoint],
					pending: true
				}
			};
		case SUCCESS:
			return {
				...state,
				[payload.endpoint]: {
					...state[payload.endpoint],
					response: payload.response,
					error: '',
					pending: false
				}
			};
		case FAILURE:
			return {
				...state,
				[payload.endpoint]: {
					...state[payload.endpoint],
					error: payload.error.message,
					pending: false
				}
			};

		default:
			return state;
	}
}

export default reducer;
export { getApi, START, SUCCESS, FAILURE };
