// to tap the water using blocks that represents array numbers as blocks


//Logic 
// we will find leftMax array and then rightmax array. Then iterate ar and add min(lmax,rmax)

const findWaterTrapped = (arr) => {
    ltr = 0
    const n = arr.length
    let lmaxArr = []
    lmaxArr[0] = arr[0]
    let rmaxArr = []
    rmaxArr[n-1] = arr[n-1]

    for(let i=1; i<n;i++){
        lmaxArr[i]= Math.max(arr[i], lmaxArr[i-1])
    } 
    for(let i=n-2; i>=0;i--){
        rmaxArr[i]= Math.max(arr[i], rmaxArr[i+1])
    } 

    for(let i=1;i<n-1;i++){
        ltr+= (Math.min(lmaxArr[i],rmaxArr[i])) - arr[i]
    }
    
    return ltr
}

arr = [5,0,6,2,3]
const res = findWaterTrapped(arr)
console.log(res);
