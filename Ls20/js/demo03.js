/*
	Created by JiXinchan on 2018.5.10
*/
//\d任意数字 \D非数字
//\w任意字符（包括数字） \W任意非字符
//\b边界 \B非边界
console.log(/oo/.test("moon"));
console.log(/oo\b/.test("moon"));
console.log(/oon\b/.test("moon"));
console.log(/\boo/.test("moon"));
//search 找到时返回下标，找不到返回-1
console.log("moon".search(/oo/));//1
console.log("moon".search(/oo\b/));//-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1

console.log(/oo\B/.test("moon"));//true
console.log(/oon\B/.test("moon"));//false
console.log(/oo\B/.test("moon"));//true
console.log(/\Boo\B/.test("moon"));//true

" a2r4 ".replace(/\B/gi,"X");
//"X aX2XrX4 X"
" a2r4 ".replace(/\b/gi,"X");
//" Xa2r4X "
//\s 空格  \S非空格
"a2 r4".replace(/\S/gi,"X");
//"XX XX"
"a2 r4".replace(/\s/gi,"X");
//"a2Xr4"
"a2r4".replace(/\W/gi,"X");
//"a2r4"  非单字字符包括空格。
"a2r4".replace(/\w/gi,"X");
//"XXXX"
"a2r4".replace(/\D/gi,"X");
//"X2X4"
"a2r4".replace(/\d/gi,"X");
//"aXrX"

console.log("aaa".replace(/\Ba/,"x"));

"sdafsa sdfea2s".replace(/a\ds/g,"*");//a2s
"sdafsa sdfea2s".replace(/a\Ds/g,"*");//afs
"sdafsa sdfea2s".replace(/a\ws/g,"*");//afs ads
"sdafsa sdfea2s".replace(/a\Ws/g,"*");//a s
