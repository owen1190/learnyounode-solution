/*
编写一个 HTTP 服务器，每当接收到一个路径为 '/api/parsetime' 的 GET
  请求的时候，响应一些 JSON 数据。我们期望请求会包含一个查询参数（query
  string），key 是 "iso"，值是 ISO 格式的时间。

  如:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  所响应的 JSON 应该只包含三个属性：'hour'，'minute' 和 'second'。例如：

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  然后增再加一个接口，路径为'/api/unixtime'，它可以接收相同的查询参数（query
  string），但是它的返回会包含一个属性：'unixtime'，相应值是一个 UNIX
  时间戳。例如:

     { "unixtime": 1376136615474 }

  你的服务器需要监听第一个命令行参数所指定的端口。
*/
var http = require('http');
var url = require('url');
var api = {
  "/api/parsetime": function (parsedUrl) {
    d = new Date(parsedUrl.query.iso);//将字符串处理成日期类型
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },
  "/api/unixtime": function (parsedUrl) {
    d = new Date(parsedUrl.query.iso);
    return {
      unixtime: d.getTime()
    }
  }
}

http.createServer(function (req,res) {
  parsedUrl = url.parse(req.url,true);
  resource = api[parsedUrl.pathname];
  if (resource) {
    res.writeHead(202,{'Content-Type':'application/json'});
    res.end(JSON.stringify(resource(parsedUrl)));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(process.argv[2]);
