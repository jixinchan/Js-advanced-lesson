/**
 * JXC 2018.6.8
 */
//函数参数的解构
function foo([a,b]){
    return a+b;
}
foo([1,4]);

[[1,2],[3,4]].map(function([a,b]){return a+b;});

//函数参数
function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]使用默认参数{}

//区分
function move2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move2({x: 3, y: 8})); // [3, 8]
console.log(move2({x: 3})); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]使用默认参数

//undefined就会触发函数参数的默认值
[1, undefined, 3].map(function(x = 'yes') {return x;});