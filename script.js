const cycle = (a, b, arr) => {
	let n = '';
	for (let i = a; i <= b; i++) {
		n += arr[i];
	}
	return n;
};

const createPhoneNumber = arrNumbers => {
	let num = '+7 (';
	num += cycle(0, 2, arrNumbers);
	num += ') ';
	num += cycle(3, 5, arrNumbers);
	num += '-';
	num += cycle(6, 9, arrNumbers);
	return num;
};

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])); // +7 (123) 456-7890
