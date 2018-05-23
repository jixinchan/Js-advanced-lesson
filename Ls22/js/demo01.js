/*
	Created by JiXinchan on 2018.5.19
*/
//Math 对象属性
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

//角度转弧度方法
function toRadians(degrees) {
    return degrees/180 *Math.PI;
}
console.log(toRadians(180));

//弧度转角度方法
function toDegrees(radians) {
    return radians/Math.PI*180;
}