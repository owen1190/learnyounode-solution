/*这次的问题和之前的问题（HTTP 收集器）很像，也是需要使用到 http.get()
  方法。然而，这一次，将有三个 URL 作为前三个命令行参数提供给你。

  你需要收集每一个 URL 所返回的完整内容，然后将它们在终端（标准输出
  stdout）打印出来。这次你不需要打印出这些内容的长度，仅仅是内容本身即可（字
  符串形式）；每个 URL 对应的内容为一行。重点是你必须按照这些 URL
  在参数列表中的顺序将相应的内容排列打印出来才算完成。*/
var http = require('http');
var url = [process.argv[2],process.argv[3],process.argv[4]];
var bl = require('bl');
var results = [];
var count = 0;

function httpGet(index) {
  http.get(url[index],function (response) {
    response.pipe(bl(function (err,data) {
      if(err) console.log(err);

      results.push(data.toString());
      count++;
      if(count == url.length)
      results.forEach(function (result) {
        console.log(result);
      });
    }))
  })
}

for (var i = 0; i < url.length; i++) {
  httpGet(i);
}
