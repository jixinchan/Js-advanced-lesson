/**
 * Created by JiXinchan on 2018.4.11
 */
 
function f(){
    var getNumFuncs=[];
    for(var i=0;i<10;i++){
        getNumFuncs[i]=function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp=f();
tmp[3]();//10
//等价于
function f(){
    var getNumFuncs=[];
    var i=0;
    for(;i<10;i++){  //没有作用域
        getNumFuncs[i]=function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp=f();
tmp[3]();//10
//用立即执行表达式来
function f(){
    var getNumFuncs=[];
    for(var i=0;i<10;i++){
        (function(m){
            getNumFuncs[m]=function(){
                return m;
            };
        }(i));
    }
    return getNumFuncs;
}
var tmp=f();
tmp[3]();//3

function f(){
    var getNumFuncs=[];
    var j;
    for(var i=0;i<10;i++){
        j=i;
        getNumFuncs[m]=function(){
            return m;
        };
    }
    return getNumFuncs;
}
var tmp=f();
tmp[3]();//9