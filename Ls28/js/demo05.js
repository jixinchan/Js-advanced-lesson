/**
 * JXC 2018.6.11
 */
//交换变量的值
var [a,b]=[1,2];
[a,b]=[b,a];
console.log(a,b);

function rtna(){
    return [1,2,3];
}
var [a,b,c]=rtna();
console.log(a,b,c);//1,2,3

function rtnd(){
    return{
        a:12,
        b:23
    }
}
var {a,b}=rtnd();