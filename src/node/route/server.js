const http = require('http');
const url = require('url');
const util = require('util');

start = (route) => {
	onRequest = (request, response) => {
		response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})

		// 解析 url 参数
		
		const pathname = url.parse(request.url).pathname;
    	route(pathname);

	    const params = url.parse(request.url, true).query;
	    response.write("网站名：" + params.name + "\n");
	    response.write("网站 URL：" + params.url + "\n");

		response.end(util.inspect(url.parse(request.url, true)));
	}

	http.createServer(onRequest).listen(3000)

	console.log('server start')
}

exports.start = start;
