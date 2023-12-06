const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
	let q = url.parse(req.url, true);
	let filename = '.'+q.pathname;
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'content-type': 'text/html'});
			res.write('not found');
			return res.end();
		}
		res.writeHead(200, {'content-type': 'text/html'});
		res.write(data);
		return res.end();
	});
	
}).listen(8080);