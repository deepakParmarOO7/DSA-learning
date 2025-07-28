const  maxDiff = (arr) => {
    const n = arr.length
    let lMinArr = []
    let rMaxArr = []

    lMinArr[0] = arr[0]

    rMaxArr[n-1] = arr[n-1]

    for(let i=1;i<n;i++){
        lMinArr[i] = Math.min(arr[i],lMinArr[i-1])
        
    }

    for(let i=n-2;i>=0;i--){
        rMaxArr[i] = Math.max(arr[i],rMaxArr[i+1])
    }

    console.log(lMinArr);
    console.log(rMaxArr);


}

arr=[2,3,10,6,4,8,1]
const res = maxDiff(arr)
console.log(res);

// JavaScript program to find Maximum difference
// between two elements such that larger
// element appears after the smaller number

function maxDiff(arr, arr_size) {
    // Maximum difference found so far
    let max_diff = arr[1] - arr[0];
    
    // Minimum number visited so far
    let min_element = arr[0];
    for(let i = 1; i < arr_size; i++) {
      if (arr[i] - min_element > max_diff) {
        max_diff = arr[i] - min_element;
      }
      if (arr[i] < min_element) {
        min_element = arr[i];
      }
    }
    
    return max_diff;
  }
  
  // Example usage
  let arr = [1, 2, 90, 10, 110];
  let n = arr.length;
  
  console.log("Maximum difference is " + maxDiff(arr, n));