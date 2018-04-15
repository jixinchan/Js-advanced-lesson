/**
 * Created by JiXinchan on 2018.4.12.
 */

 var db=(function(){
 	//创建一个隐藏的object
 	var data={};
 	return function(key,val){
 		if(val==undefined){
 			return data[key];
 		}//get
 		else{
 			return data[key]=val;
 		}//set
 	}
 })
 db('name');
 db('name','Daenerys');
 db('name');
