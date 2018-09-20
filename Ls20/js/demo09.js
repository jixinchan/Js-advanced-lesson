/*
	Created by JiXinchan on 2018.5.13
*/
//String.prototype.search
//search忽略g,只返回第一次找到的一个下标index
console.log("a1b2c3d4e5".search(/1/));//1
console.log("a1b2c3d4e5".search(/f/));//-1 没找到
console.log("a1b2c3d4e5".search(/\d/g));//1 忽略全局
console.log("a1b2c3d4e5".search(/\d\w/g));//1 忽略全局

//String.prototype.match 
//匹配不到返回null 匹配到了返回数组
//不是Array，还包含其他信息。index
console.log("a1b2c3d4e5".match(/1/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4e5".match(/f/));//null
console.log("a1b2c3d4e5".match(/\d/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4e5".match(/\d/g));//[ '1', '2', '3', '4' ]

// String.prototype.replace
console.log("a,b,c,d,j".replace(",","X"));
console.log("a2b3c4de5".replace(/[2-3]/,"X"));
console.log("a2b3c4df6".replace(/[2-3]/g,"X"));

//String.prototype.split
console.log("a,b,c,d".split(","));
console.log("a2b3c4d".split(/\d/));



//1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
//2、联通号段有130，131，132，145，155，156，176，185，186
//3、电信号段有133，153，177，180，181，189
//将电话号码进行分类
var numbers = [
    13335361211, 13897516385, 15022457757, 15191936306, 18693949497,
    13933314962, 13138569753, 13125634288, 18168751105, 13240288945,
    13098645914, 15603692153, 13455257780, 15916685067, 14701124042,
    13089741902, 15560351609, 1211131444, 13017332800, 18937330815,
    15699699730, 13895038245, 18653855868, 15324150371, 13202536075,
    15873730173, 18828673819, 17658565118, 13069428953, 13814537603
];
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码
//写一段代码，将对应的号码段存储到对应的数组中
for(var i=0;i<numbers.length;i++){
    if(/1(3[4-9]|47|5[0127-9]|78|8[2-47-8])\d{8}/.test(numbers[i])){
        CMCC.push(numbers[i]);//console.log("移动");
    }else if(/1(3[0-2]|45|5[5-6]|76|8[5-6])\d{8}/.test(numbers[i])){ // 补全代码
        CUCC.push(numbers[i]);//console.log("联通");
    }else if(/3/.test(numbers[i])){ // 补全代码
        CTCC.push(numbers[i]);//console.log("电信");
    }else{
        Others.push(numbers[i]);//console.log("其他");
    }
}
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);
console.log("其他号码：",Others);