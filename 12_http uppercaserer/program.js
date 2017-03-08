/*
编写一个 HTTP 服务器，它只接受 POST 形式的请求，并且将 POST
 请求主体（body）所带的字符转换成大写形式，然后返回给客户端。

 你的服务器需要监听由第一个命令行参数所指定的端口。
*/
var http = require('http');
/*
  through2-map 允许你创建一个 transform
  stream，它仅需要一个函数就能完成「接收一个数据块，处理完后返回这个数据块」
  的功能
*/
var map = require('through2-map');
http.createServer(function (req,res) {
  if (req.method == 'POST') {
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res)
  }
}).listen(process.argv[2]);
