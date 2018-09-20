/*
	Created by JiXinchan on 2018.4.26
*/
// Part1 构造函数中函数嵌套 this缺陷
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);

//call apply
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX.call(this,x);
        moveY.apply(this,[y]);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);
//bind
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX.bind(Point,x)();
        moveY.bind(this,y)();
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);

//思考
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;//两层，内层this指向window
obj.fun4 = fun1();//一层
console.log(obj.fun3());
console.log(obj.fun3()());
console.log(obj.fun4());