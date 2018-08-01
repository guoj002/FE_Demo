var http = require('http');
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!aaa \n');
}).listen(9527);

console.log('Server running at http:127.0.0.1:9527/');