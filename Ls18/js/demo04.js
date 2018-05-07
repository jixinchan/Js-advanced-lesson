/*
	Created by JiXinchan on 2018.5.3
*/
//多维数组
var table = new Array(5);
for (var i = table.length - 1; i >= 0; i--) {
	table[i]=new Array(5);
}
for (var row = table.length - 1; row >= 0; row--) {
	for(var col=0;col<table[row].length;col++){
		table[row][col]=row*col;
	}
}
var p=table[2][4];
console.log(table);
// (5) [0, 0, 0, 0, 0]
// (5) [0, 1, 2, 3, 4]
// (5) [0, 2, 4, 6, 8]
// (5) [0, 3, 6, 9, 12]
// (5) [0, 4, 8, 12, 16]

//合并之后
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}