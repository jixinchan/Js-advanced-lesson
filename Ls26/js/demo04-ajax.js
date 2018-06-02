/**
 * Created by jxc on 2018.6.2
 */
//XMLHTTPRequest
//open(method,url,async)
//method指定请求的方式get post
//async指定同步还是异步，true(异步) false(同步)

//http状态码status
//1XX 消息
//2XX 成功
//3XX 重定向
//4XX 客户端错误
//5XX 服务器错误
var xhr = new XMLHttpRequest();
// if(!xhr){
// console.log("xhr创建失败");
// }
xhr.onreadystatechange = function(){
    // console.log(xhr.onreadyState,xhr.status);
    if(xhr.readyState==4){
        if(xhr.status==200){
            var message = xhr.responseText;//响应文本
            console.log(message);
        }
    }
}
xhr.open("get","http://127.0.0.1:8080?getInfo=MyGetInformation",true);
xhr.send();