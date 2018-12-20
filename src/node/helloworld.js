const http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('hello world');
}).listen(8888);

console.log('服务启动成功')