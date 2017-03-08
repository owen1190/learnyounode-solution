/*
编写一个 HTTP 文件 服务器，它用于将每次所请求的文件返回给客户端。

 你的服务器需要监听所提供给你的第一个命令行参数所制定的端口。

 同时，第二个会提供给你的程序的参数则是所需要响应的文本文件的位置。在这一题
 中，你必须使用 fs.createReadStream() 方法以 stream 的形式作出请求相应。
*/

var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
  var stream = fs.createReadStream(process.argv[3]);
  stream.pipe(res);//src.pipe(dst)从src流传输到dst流中
}).listen(process.argv[2])
