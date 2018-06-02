
var http = require("http");
var url = require("url");

http.createServer(function(req,res){
    var getDatestr=url.parse(req.url).query;
     res.writeHead(200,{
        "Content-Type": "text/plain",
        // res.writeHead(200, {"Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
        "Access-Control-Allow-Methods": "GET, POST"         
     });
     setTimeout(function(){
         res.end("你好，我已收到信息："+getDatestr);
     },200*Math.random());
}).listen(8080,"127.0.0.1");
console.log("start server!");