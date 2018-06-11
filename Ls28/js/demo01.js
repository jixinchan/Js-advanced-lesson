/**
 * JXC 2018.6.7
 */
//解构赋值:按照一定模式从数组和对象中提取值
var [a,b,c]=[1,2,3];
console.log(a,b,c);

let[a,b,[c,[d]]]=[1,2,[3,[4]]];
console.log(a,b,c,d);
[a,b]=[b,a];

let[a,,b]=[1,2,3,4];
console.log(a,b);

let[head,...tail] = [1,2,3,4];
console.log(head,tail);//1 [2, 3, 4]

//有默认值的情况
var [f=2]=[];
console.log(f);//2
[x3,y3='b']=['a'];
[x4,y4='b']=['a',undefined];

var [x5 = 1] = [undefined];//x5 为 1
var [x6 = 1] = [null];//x6为null

var [m4=n4,n4=1]=[];
console.log(m4,n4);//m4 undefined n4 1

function foo(){return 2;}
let[y=foo()]=[12];
console.log(y);//12

let [m1 = 1, n1 = m1] = []; // m1=1; n1=1 匹配，undefined
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError
console.log(m1,n1,m2,n2,m3,n3);

let a=[];
let b=[1,2,3,4,5];
a=[b[0],b[2],b[4]];
console.log(a);

let a=[];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);


