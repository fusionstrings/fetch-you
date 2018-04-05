module.exports = {
	launch: {
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	},
	server: {
		command: 'node example/server.js',
		port: 3000
	}
};
