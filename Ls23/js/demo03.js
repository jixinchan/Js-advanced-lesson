/*
	Created by JiXinchan on 2018.5.17
*/
//part1 JSON.stringify的基本用法
//复合对象转换为字符串
var o1={
	a:1,
	b:[1,"2",{x:4}],
	c:true,
	d:"sxd",
	e:function(){},
	f:0x12
}
var j1=JSON.stringify(o1);
console.log(j1);

var obj1={x:{a:1,b:"2",c:[1,2,{t:true}]},y:[2,5,5]};
var json1=JSON.stringify(obj1);

//复合数组
var a1=[1,"a",false,{x:2}];
var ja1=JSON.stringify(a1);
console.log(ja1);

JSON.stringify({});  //'{}'
JSON.stringify(true);//'true'
JSON.stringify("foo");//'"foo"'
JSON.stringify([1,"false",true]);//'[1,"false",true]'
JSON.stringify({ x: 5 }); //'{"x":5}'

JSON.stringify([new Number(1),new String("wer"),new Boolean(true)]);
//"[1,"wer",true]"
JSON.stringify({x: undefined, y: Object, z: Symbol("")}); 
// '{}'
JSON.stringify([undefined, Object, Symbol("")]);          
// '[null,null,null]' 

// 不可枚举的属性默认会被忽略：
JSON.stringify( 
    Object.create(
        null, 
        { 
            x: { value: 'x', enumerable: false }, 
            y: { value: 'y', enumerable: true } 
        }
    )
);
// "{"y":"y"}"

//part2 JSON.parse
var json1='{"x":1,"y":2,"c":[23,12],"d":"23"}';
var p1=JSON.parse(json1);
console.log(p1);

var json2='[1,2,"w",{"a":1},true]';
var p2=JSON.parse(json2);
console.log(p2);


var jsonStr5 = '{"a":[1,2],"b":false,"c":[3,4,"x",{"y":34,"z":56}]}';
var o5 = JSON.parse(jsonStr5,function (key,value) {
    if(typeof value === "boolean"){
        value = "ChangeToString";
    }
    if(key == "c"){//迭代的遍历某个希望寻找的数据属性，可用于数据信息的查找
        console.log("c:",value);
    }
    return value;
});
// c: (4) [3, 4, "x", {…}]
// {a: Array(2), b: "ChangeToString", c: Array(4)}

JSON.parse('null');            // null