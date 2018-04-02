var foo=function bar(){
	console.log("123");
}
bar();//报错  bar is not defined
foo();//正常执行

//这两种指向全局对象
this;
foo();

//指向test
test.foo();

//指向新创建的对象
new foo();

//此时this是bar。显式设置
function foo(a, b, c) {}
var bar = {};
foo.apply(bar, [1, 2, 3]); 
foo.call(bar, 1, 2, 3); 


Foo.method = function() {
    var that = this;
    function test() {
        this;//指向全局对象
        that;//that指向foo
    }
    test();
}
//that指向foo


//类型
console.log(false==undefined);//false
console.log(false==null);//false

