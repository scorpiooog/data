//js 笔记

// delete 表达式	
function part1 () {

	//默认情况下 delete可以删除 对象的属性
	var obj1 = {x:1};
	console.log(obj1.x); //1
	delete obj1.x;
	console.log(obj1.x); //undefined

	// 如果configurable的值为false 则delete不能删除对象的该属性
	var obj2={};
	Object.defineProto(obj2,'x',{configurable:false,value:1});
	console.log(obj2.x); //1
	delete obj2.x;
	console.log(obj2.x); //1
}