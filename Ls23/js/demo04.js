/*
	Created by JiXinchan on 2018.5.17
*/
//JSON.stringify(value [,replacer [,space] ] )
var obj = {
	name:"Jxc",
	age:20,
	hobby:{x:"sing",y:"read"},
	birthday:[1,2,3],
	isGirl:true
}
var jsonS = JSON.stringify(obj,function(key,value){
	if(typeof value==="string"){
		console.log(key+":"+value);
	}
	if(value instanceof Array){
		console.log(value);
	}
	return value;
},5);
console.log(jsonS);

//
function replacer(key, value) {
    if (typeof value === "string") {
        return undefined;
    }
    return value;
}
var foo = { foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7 };
var jsonString1 = JSON.stringify(foo, replacer);
console.log(jsonString1);