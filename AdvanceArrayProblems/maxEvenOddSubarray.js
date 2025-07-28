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

const maxEvenOddSubArray = (arr) =>{
    let maxCount = 1;
    let count = 1
    const n = arr.length

    for(let i=1; i<n; i++){
        if(i<n-2 && (arr[i]%2 ===0 && arr[i+1]%2 !==0) || (arr[i]%2 !==0 && arr[i+1]%2 ===0)){
            count++
            maxCount = Math.max(count, maxCount)
        }
        else {
            count = 1
        }
    }
    return maxCount
}

arr=[4,4,1,2,3,4,5,6]
const res = maxEvenOddSubArray(arr)
console.log(res);
