//Given an unsorted array of integers, find a subarray that adds to a given number. If there is more than one subarray with the sum of the given number, print any of them.

const findSubArr = (arr,sum) => {
    let currSum = 0
    let hashMap = new Map()
    let start = -1
    let end = -1
    const n = arr.length
    for(let i=0;i<n;i++){
        currSum+=arr[i]

        if(currSum-sum === 0){
            start = 0
            end = i
            break
        }

        if(hashMap.has(currSum-sum)){
            start = hashMap.get(currSum-sum) + 1
            end = i
            break
        }
        hashMap.set(currSum, i)
    }
    if (end == -1) {
        console.log("No subarray with given sum exists");
    }
    else {
        console.log("Sum found between indexes "
                        + start + " to " + end);
    }
}



arr=[1,4,20,3,10,5]
sum=33
const res = findSubArr(arr,sum)