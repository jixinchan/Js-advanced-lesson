/**
 * JXC 2016.6.14
 */
//ES6对函数的扩展
//箭头函数
//ES5
var min=function(a,b){
    return a<b?a:b;
}
min(2,3);

//ES6
var min=(a,b)=> a<b?a:b;
min(2,3);
var f= v =>v+1;//一个参数可以不加括号
f(4);//5
//如果函数体有大括号，必须加return
var sum = (a,b)=>{return a+b;}
sum(1,2);


const full =({first,last})=>last+" "+first;
full({first:Linda,last:Ji});

//ES6中 箭头函数中this是与函数定义时所在的对象绑定，而不是使用时所在的对象（避免this缺陷）
//箭头函数导致this总是指向函数定义生效时所在的对象
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        var moveToX = ()=>this.x=x;
        //内部嵌套函数
        var moveToY = ()=>this.y=y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);


//箭头函数返回对象
var getObj = obj=>({obj:name,obj:age});
getObj();

//默认值设置
function fee(a,b){
    a=a||3;
    b=b||5;
}
function foo(a=3,b=5){
    return a+b;
}
function fee(a,b=3){//如果只有一个默认值，放在参数的最后
    return a-b;
}
function f(x = 1,y) {
    return [x,y];
}
f();//[1,undefined]
f(2);//[2,undefined]
f(,3);//报错


//...   Array.from   slice变成数组


//Rest运算符  
function fqq(x,...y){
}
fqq(1,2,3,4);//[2,3,4]
//Spread运算符
function f(x,y){
    console.log(x,y);
}
f("a",...["b","c"]);//a,b

