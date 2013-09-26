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

function euler6() {
	var min = 1,
		max = 100,
		sum = 0;

	for(var i=min; i<=max; i++) {
		sum += Math.pow(i, 2);
	}
	sum = Math.pow((min + max)*(max/2), 2) - sum;

	return sum;
}

function euler7() {
	var end = 10001,
		index = 0,
		num = 0,
		prime = 0;

	function isPrime(n) {
		if(n<2) {
			return false;
		}

		for (var i=2; i<num; i++) {
			if(n%i == 0) {
				return false;
			}
		}
		return true;
	}

	while(index != end) {
		if(isPrime(num)) {
			index++;
			prime = num;
		}
		num++;
	}
	return prime;
}

function euler8() {
	var num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450",
		nums = num.toString().split(""),
		cons = 5,
		length = num.length,
		highest = 0;

	for(var i=cons; i<=length; i++) {
		var sum = 1;
		for(var j=1; j<=cons; j++) {
			sum *= parseInt(nums[i-j]);
		}
		if(sum > highest) {
			highest = sum;
		}
	}

	return highest;
}
console.log(euler8());



















