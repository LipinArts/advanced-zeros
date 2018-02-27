module.exports = function getZerosCount(number, base) {
	let primes = {};
	let zerosCount = [];
	//Разложение основания на простые множители
	for (let i = 2; i <= base; i++) {
		while (base % i === 0) {
			if (primes[i] !== undefined) {
				primes[i] += 1;
			} else {
				primes[i] = 1;
			}

			base = base / i;
		}
	}

	for (let key in primes) {
		let tmpNum = number;
		let counter = 0;
		while (tmpNum >= 1) {
			let currNum = Math.floor(tmpNum / key);
			tmpNum = currNum;
			counter += currNum;
		}
		tmpNum = Math.floor(counter / primes[key]);
		zerosCount.push(tmpNum);
	}

	zerosCount.sort(function(a, b) {
		return a - b;
	});
	return zerosCount[0];
};
