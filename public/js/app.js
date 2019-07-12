import fetchYou from '/esm/fetch-you.js';

function reportError(error) {
	const container = document.getElementById('main');
	document.getElementById('main').innerHTML = error.statusText || error.message;
	container.style.color = 'red';
	throw error;
}

function updatePage(content) {
	document.getElementById('main').innerHTML = content.data || JSON.stringify(content);
}

function fetchHelloJson() {
	fetchYou('/api/hello').then(updatePage, reportError);
}

function fetchHelloHTML() {
	fetchYou('/hello').then(updatePage, reportError);
}

function init() {
	document.getElementById('say-hello-json').onclick = fetchHelloJson;
	document.getElementById('say-hello-html').onclick = fetchHelloHTML;
}
init();
