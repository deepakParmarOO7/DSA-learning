// To find the sub array with maximum sum

function maxSubarraySum(arr, n) {
    let res = arr[0];

	for(let i = 0; i < n; i++)
	{
		let curr = 0;

		for(let j = i; j < n; j++)
		{
			curr = curr + arr[j];

			res = Math.max(res, curr);
		}
	}
	
	return res;
}