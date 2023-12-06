const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
	let q = url.parse(req.url, true);
	let filename = '';
	if (q.pathname === '/') {
		filename = './index.html';
	} else {
		filename = '.'+q.pathname;
	}

	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'content-type': 'text/html'});
			res.write(filename + q.pathname);
			return res.end();
		}
		res.writeHead(200, {'content-type': 'text/html'});
		res.write(data);
		return res.end();
	});
	
}).listen(8080);