// To find the count/length of subarray where odd and even numbers appear consecutively 

//Naive approach
function maxEvenOdd(arr, n) {
    let res = 1;
	for(let i = 0; i < n; i++)
	{
		let curr = 1;
		for(let j = i + 1; j < n; j++)
		{
			if((arr[j] % 2 == 0 && arr[j - 1] % 2 != 0) ||(arr[j] % 2 != 0 && arr[j - 1] % 2 == 0))
				curr++;
			else
				break;
		}
		res = Math.max(res, curr);
	}
	return res;
}

// efficient approact
function maxEvenOdd(arr, n) {
    let res = 1;
	let curr = 1;

	for(let i = 1; i < n; i++)
	{
		if((arr[i] % 2 == 0 && arr[i - 1] % 2 != 0) ||(arr[i] % 2 != 0 && arr[i - 1] % 2 == 0))
		{
			curr++;
			res = Math.max(res, curr);
		}
		else
			curr = 1;
	}
	return res;
}