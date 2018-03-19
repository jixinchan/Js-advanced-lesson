/*
	Created by JiXinchan on 2018.2.19.
*/
//操作数非布尔类型，&&短路原则
//前为真返回后者，前为假返回本身
console.log(2&&4);
console.log(0&&4);
console.log({x:2}&&{name:"Jack"});
console.log(null&&"hello");
console.log({}&&"world");

//undefined和NaN转换为bool类型都是false
console.log(undefined&&"12");
console.log(NaN&&true);

//操作数非布尔类型，||短路原则
//前为真返回本身，前为假返回后者
console.log(2||4);
console.log(0||4);
console.log({x:2}||{name:"Jack"});
console.log(null||"hello");
console.log({}||"world");
console.log(undefined||"12");
console.log(NaN||true);

//所有对象转换为布尔类型 都为 true
console.log((new Boolean(false))&&234);//234
console.log((new Boolean(false))||234);//object
