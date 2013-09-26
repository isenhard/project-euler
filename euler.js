function euler1() {
	var sum = 0;
	for(var i=0; i<1000; i++) {
		if((i%3 == 0) || (i%5 == 0)) {
			sum += i;	
		}
	}
	return sum;
}

function euler2() {
	var sum = 0,
		i = 2,
		prev = 1;

	while(i<4e6) {
		var current = i;
		if(i%2 == 0) {
			sum += i;
		}
		i = i+prev;
		prev = current;
	}
	return sum;
}

function euler3(n) {
	if(!n) {
		var n = 600851475143;
	}
	var max = Math.round(Math.sqrt(n));

	for(var i=max; i>1; i--) {
		if(n%i == 0 && !euler3(i)) {
			return i;
		}
	}
	return false;
}

function euler4() {
	var min = 100,
		max = 999,
		largest = 0;

	for(var i=max; i>=min; i--) {
		for(var j=max; j>=min; j--) {
			var x = i * j,
				y = Number(x.toString().split("").reverse().join(""));
			if(x > largest && x == y) {
				largest = x;
			}
		}
	}
	return largest;
}

function euler5() {
	var min = 1,
		max = 20,
		sum = 1;

	function divisible(n) {
		for(var i=max; i>=min; i--) {
			if(n%i != 0) {
				return false;
			}
		}
		return true;
	}

	while(!divisible(sum)) {
		sum++;
	}
	return sum;
}
console.log(euler5());