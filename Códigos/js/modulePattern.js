var counter = (function(){
	var value = 0;
	var add = function (){
		return ++value;
	};
	var reset = function () {
		value = 0;
	};
	return {
		add: add,
		reset: reset
	};
})();
console.log(counter.value);//undefined
console.log(counter.add());//1
console.log(counter.add());//2
console.log(counter.add());//3
counter.reset();
console.log(counter.add());//1
console.log(counter.add());//2
console.log(counter.add());//3
