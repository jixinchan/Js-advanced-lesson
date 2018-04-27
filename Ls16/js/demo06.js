/*
	Created by JiXinchan on 2018.4.26
*/
var Person = {
	n:'Jack',
	s:'男',
	set:function(n,s){
		//内部嵌套函数
		function setn(){
			this.n=n;
		}
		//内部嵌套函数
		function sets(){
			this.s=s;
		}
		setn();
		sets();
	}
};
Person.set('Jerry','男');
console.log(Person);//{n: "Jack", s: "男", set: ƒ}
//此时是把n,s定义在了window上。this不传递

//解决办法1：软绑定
var Person = {
	n:'Jack',
	s:'男',
	set:function(n,s){
		var that=this;
		//内部嵌套函数
		function setn(){
			that.n=n;
		}
		//内部嵌套函数
		function sets(){
			that.s=s;
		}
		setn();
		sets();
	}
};
Person.set('Tina','女');
console.log(Person);//{n: "Tina", s: "女", set: ƒ}

//解决办法2：call apply
var Person = {
	n:'Jack',
	s:'男',
	set:function(n,s){
		//内部嵌套函数
		function setn(){
			this.n=n;
		}
		//内部嵌套函数
		function sets(){
			this.s=s;
		}
		setn.call(this);
		sets();
	}
};
Person.set('Tina','女');
console.log(Person);//{n: "Tina", s: "男", set: ƒ}

//解决办法3：bind
var Person = {
	n:'Jack',
	s:'男',
	set:function(n,s){
		function setn(){
			this.n=n;
		}
		function sets(){
			this.s=s;
		}
		setn.bind(Person)();
		sets.bind(Person)();
	}
};
Person.set('Tina','女');
console.log(Person);//{n: "Tina", s: "女", set: ƒ}
