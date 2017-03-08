/*
编写一个程序，执行一个同步的文件系统操作，读取一个文件，并且在终端（标准输
 出 stdout）打印出这个文件中的内容的行(\n)数。类似于执行 cat file | wc -l
 这个命令。

 所要读取的文件的完整路径会在命令行第一个参数提供。
*/
var path = process.argv[2];
var fs = require('fs');

var str = fs.readFile(path,'utf8',function (err,data) {
  if(err) {
    console.log("出错");
  }
   console.log(data.split('\n').length-1);
});
