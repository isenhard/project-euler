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
console.log(euler3());