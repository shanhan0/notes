// var http = require('http');

// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');

//阻塞的
// var fs=require('fs')
// var data=fs.readFileSync('input.txt')
// console.log(data.toString())

//非阻塞的
// var fs = require("fs");
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("程序执行结束!");

//事件循环
// 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();
// // 创建事件处理程序
// var connectHandler = function connected() {
//    console.log('连接成功。');
//    // 触发 data_received 事件 
//    eventEmitter.emit('data_received');
// }
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功。');
// });
// // 触发 connection 事件 
// eventEmitter.emit('connection');
// console.log("程序执行完毕。");var


//EventEmitter 支持 若干个事件监听器。
////event.js 文件
// var events = require('events'); 
// var emitter = new events.EventEmitter(); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener1', arg1, arg2); 
// }); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener2', arg1, arg2); 
// }); 
// emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 
//结果
// listener1 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数


//error事件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error'); 

