/*
  编写一个程序来打印出指定目录下的文件列表，并且以特定的文件名扩展名来过滤这
  个列表。这次会有两个参数提供给你，第一个是所给的文件目录路径（如：path/to/
  dir），第二个参数则是需要过滤出来的文件的扩展名。
*/
var fs = require('fs');
var path = require('path');
//path.extname() 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。
 // console.log(process.argv[2]);
var extension = '.'+ process.argv[3];//文件扩展名
//异步的 readdir。 读取一个目录的内容
fs.readdir(process.argv[2],function (err,files) {
  if (err) {
    console.log("出错了");
  }
  for(var i = 0; i< files.length;i++) {
    if(path.extname(files[i]) == extension)
    {console.log(files[i]);}
  }
});
