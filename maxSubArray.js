
const maximumSubArr = (arr) => {
    let sum = arr[0]
    let maxEnding = arr[0]
    const n = arr.length

    for(let i=1;i<n;i++){
        maxEnding = Math.max(maxEnding+arr[i], arr[i])
        sum = Math.max(maxEnding, sum)
    }

    return sum
}

arr = [1, -2, 3, 4, -1, 2, 1, -5, 4]
const res = maximumSubArr(arr)
console.log(res);
