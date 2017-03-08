/*
  编写一个简单的程序，使其能接收一个或者多个命令行参数，并且在终端（标准输出
  stdout）中打印出这些参数的总和。
*/
var total = 0;
for (var i = 2; i < process.argv.length; i++) {
  total +=Number(process.argv[i])
}
console.log(total);
