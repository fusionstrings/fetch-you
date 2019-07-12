import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

describe('fetch-you', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:3000');
	});

	it('should fetch an URL and show "hello fetch" on body', async () => {
		await expect(page).toClick('#say-hello-json', { text: 'Say Hello JSON' });
		await expect(page).toMatch('hello fetch!');
		// await expect(page).toClick('#say-hello-html', { id: 'say-hello-html' });
		// await expect(page).toThrow('response is invalid JSON.');
	});
});
