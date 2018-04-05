const express = require('express');
const server = express();

server.get('/api/hello', (req, res) => res.json({data: 'hello fetch!'}));
server.get('/hello', (req, res) => res.send('hello fetch!'));

server.use(express.static('dist'));
server.use('/', express.static('public'));

server.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})