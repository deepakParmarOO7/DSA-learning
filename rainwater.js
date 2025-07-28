const trapRainWater = (arr) => {
    const n = arr.length
    lmaxArr = []
    rmaxArr = []
    lmaxArr[0] = arr[0]
    rmaxArr[n-1] = arr[n-1]
    let sum = 0

    for(let i=1;i<n;i++) {
        lmaxArr[i] = Math.max(arr[i],lmaxArr[i-1])
    }
    for(let i=n-2;i>=0;i--) {
        rmaxArr[i] = Math.max(arr[i],rmaxArr[i+1])
    }

    console.log(lmaxArr);
    console.log(rmaxArr);

    for(let i=0; i<n;i++){
        sum+= Math.min(lmaxArr[i],rmaxArr[i])-arr[i]
    }

    return sum
}



arr = [3,0,2,0,4]
const res = trapRainWater(arr)
console.log(res);
