const countConsecutiveOnes = () => {
    maxOnes = 0;
    tempOnes = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 1){
            tempOnes++
        }
        else{
            if(tempOnes>maxOnes)
                maxOnes = tempOnes
            tempOnes = 0
        }

       
    }
    if(tempOnes>maxOnes)
        return tempOnes
    return maxOnes
}

arr = [1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0]
const res = countConsecutiveOnes(arr)
console.log(res);


// a little more efficient solution

function maxOnes(array, n) {
    let res = 0, curr = 0;

	for(let i = 0; i < n; i++)
	{
		if(array[i] == 0)
			curr = 0;
		else
		{
			curr++;
			res = Math.max(res, curr);
		}
	}
	
	return res;
}