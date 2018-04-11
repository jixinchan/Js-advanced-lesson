/**
 * Created by JiXinchan on 2018.4.9
 */
//变量污染
//(function () {  // IIFE开始
var x = 10;
document.onclick = function () {
    // console.log("x = ",x);
    alert("x = "+x);
};
//})();  