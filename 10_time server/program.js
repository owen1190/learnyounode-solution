/*编写一个 TCP 时间服务器

  你的服务器应当监听一个端口，以获取一些 TCP
  连接，这个端口会经由第一个命令行参数传递给你的程序。针对每一个 TCP
  连接，你都必须写入当前的日期和24小时制的时间，如下格式：

     "YYYY-MM-DD hh:mm"

  然后紧接着是一个换行符。

  月份、日、小时和分钟必须用零填充成为固定的两位数：

     "2013-07-06 17:42"
*/
var net = require('net');
var date = new Date();

function add0(number) {
  return number<10 ? '0'+number :number.toString();
}

net.createServer(function (socket) {
  var str = date.getFullYear()+"-"+add0(date.getMonth()+1)+"-"+add0(date.getDate())+" "
            +add0(date.getHours())+":"+add0(date.getMinutes());
  socket.write( str+"\n");
  socket.end();
}).listen(process.argv[2]);
