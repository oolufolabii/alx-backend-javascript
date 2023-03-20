const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, parm) => {
	const responseText = 'Hello Holberton School!';

	parm.setHeader('Content-Type', 'text/plain');
	parm.setHeader('Content-Length', responseText.length);
	parm.statusCode = 200;
	parm.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
	process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
