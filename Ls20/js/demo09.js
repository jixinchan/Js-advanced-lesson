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