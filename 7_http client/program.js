/*编写一个程序来发起一个 HTTP GET 请求，所请求的 URL
 为命令行参数的第一个。然后将每一个 "data"
 事件所得的数据，以字符串形式在终端（标准输出 stdout）的新的一行打印出来。*/
 var http = require('http');
 var url = process.argv[2];

 http.get(url,function (response) {
   response.setEncoding('utf8');//response中传递数据会改为字符串形式
   response.on("data",function (data) {
    console.log(data);
  });
  response.on("err",function (err) {
    console.error();
  })
 });
