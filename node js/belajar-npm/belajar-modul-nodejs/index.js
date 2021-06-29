var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Hello <b>World</b>!');
    response.end();
}).listen(8000);

console.log("server running on http://localhost:8000");